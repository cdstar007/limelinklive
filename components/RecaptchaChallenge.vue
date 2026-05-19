<template>
  <div v-if="siteKey" class="space-y-2">
    <div ref="container"></div>
    <input name="recaptchaToken" type="hidden" :value="token" />
  </div>
</template>

<script setup lang="ts">
const siteKey = ref('')
const container = ref<HTMLElement | null>(null)
const token = ref('')
let widgetId: number | null = null

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => number
      reset: (widgetId?: number) => void
    }
    __limelinkRecaptchaReady?: () => void
  }
}

function renderRecaptcha() {
  if (!siteKey.value || !container.value || !window.grecaptcha || widgetId !== null) return

  widgetId = window.grecaptcha.render(container.value, {
    sitekey: siteKey.value,
    theme: 'dark',
    callback: (value: string) => {
      token.value = value
    },
    'expired-callback': () => {
      token.value = ''
    },
    'error-callback': () => {
      token.value = ''
    }
  })
}

async function loadRecaptcha() {
  const config = await $fetch<{ enabled: boolean, siteKey: string }>('/api/recaptcha-config')
  if (!config.enabled || !config.siteKey) return

  siteKey.value = config.siteKey
  await nextTick()

  if (window.grecaptcha) {
    renderRecaptcha()
    return
  }

  window.__limelinkRecaptchaReady = renderRecaptcha

  const existingScript = document.querySelector<HTMLScriptElement>('script[data-limelink-recaptcha]')
  if (existingScript) return

  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js?onload=__limelinkRecaptchaReady&render=explicit'
  script.async = true
  script.defer = true
  script.dataset.limelinkRecaptcha = 'true'
  document.head.appendChild(script)
}

onMounted(() => {
  loadRecaptcha().catch((error) => {
    console.error('Failed to load reCAPTCHA config', error)
  })
})
</script>
