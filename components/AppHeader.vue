<template>
  <header class="fixed top-0 w-full z-50 glass-nav">
    <div class="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white">
      <NuxtLink class="mx-auto flex min-h-10 max-w-7xl items-center justify-center gap-2 px-6 py-2 text-center text-xs font-bold sm:text-sm" :to="localizePath('/pricing')">
        <iconify-icon class="text-base" icon="heroicons:sparkles" />
        <span>{{ t('promo_summer_discount', '暑期特惠額外 5% 折扣') }}</span>
        <span class="hidden text-blue-100 sm:inline">|</span>
        <span class="underline decoration-white/60 underline-offset-4">{{ t('promo_summer_cta', '立即申請折扣') }}</span>
      </NuxtLink>
    </div>

    <nav>
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <NuxtLink class="flex items-center" :to="localizePath('/')" aria-label="LIMELINK home">
        <img class="h-9 w-auto md:h-10" :src="logoWide" alt="LIMELINK" />
      </NuxtLink>

      <div class="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-300">
        <NuxtLink v-for="item in localizedNavItems" :key="item.to" :to="item.to" class="hover:text-white transition-colors" active-class="text-blue-500">
          <span>{{ item.label }}</span>
        </NuxtLink>
      </div>

      <div class="relative hidden lg:block ml-4">
        <button type="button" class="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/10" aria-label="Select language" :aria-expanded="languageOpen" @click="languageOpen = !languageOpen">
          <iconify-icon class="text-lg" icon="heroicons:globe-alt" />
          <span>{{ currentLanguage.short }}</span>
        </button>
        <div v-if="languageOpen" class="absolute right-0 mt-3 w-40 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1a]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <button
            v-for="option in languageOptions"
            :key="option.lang"
            type="button"
            class="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-colors hover:bg-white/10"
            :class="currentLang === option.lang ? 'text-white' : 'text-gray-400'"
            @click="chooseLanguage(option.lang)"
          >
            <span>{{ option.label }}</span>
            <iconify-icon v-if="currentLang === option.lang" class="text-blue-400" icon="heroicons:check" />
          </button>
        </div>
      </div>

      <NuxtLink class="hidden lg:block px-6 py-2.5 bg-gradient-tech rounded-full font-semibold text-sm hover:opacity-90 transition-all transform hover:-translate-y-0.5" :to="localizePath('/pricing')">
        <span>{{ t('nav_cta', '立即諮詢') }}</span>
      </NuxtLink>

      <button class="lg:hidden text-3xl" :aria-expanded="mobileOpen" aria-label="Toggle menu" @click="mobileOpen = !mobileOpen">
        <iconify-icon :icon="mobileOpen ? 'heroicons:x-mark' : 'heroicons:bars-3-bottom-right'" />
      </button>
    </div>
  </nav>
  </header>

  <div class="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-[#0a0e1a] transform transition-transform duration-300 lg:hidden" :class="mobileOpen ? 'translate-x-0' : 'translate-x-full'">
    <div class="flex min-h-full flex-col items-center justify-start space-y-5 px-6 pb-16 pt-40 text-xl font-semibold">
      <NuxtLink v-for="item in localizedNavItems" :key="item.to" :to="item.to" active-class="text-blue-500" @click="mobileOpen = false">
        <span>{{ item.label }}</span>
      </NuxtLink>
      <NuxtLink class="px-8 py-3 bg-gradient-tech rounded-full text-base" :to="localizePath('/pricing')" @click="mobileOpen = false">
        <span>{{ t('nav_cta', '立即諮詢') }}</span>
      </NuxtLink>
      <div class="relative flex flex-col items-center text-base">
        <button type="button" class="inline-flex h-12 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 font-semibold text-gray-200" aria-label="Select language" :aria-expanded="languageOpen" @click="languageOpen = !languageOpen">
          <iconify-icon class="text-xl" icon="heroicons:globe-alt" />
          <span>{{ currentLanguage.label }}</span>
          <iconify-icon class="text-base text-gray-400" :class="languageOpen ? 'rotate-180' : ''" icon="heroicons:chevron-down" />
        </button>
        <div v-if="languageOpen" class="mt-4 w-48 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-2">
          <button
            v-for="option in languageOptions"
            :key="option.lang"
            type="button"
            class="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors hover:bg-white/10"
            :class="currentLang === option.lang ? 'text-white' : 'text-gray-400'"
            @click="chooseLanguage(option.lang)"
          >
            <span>{{ option.label }}</span>
            <iconify-icon v-if="currentLang === option.lang" class="text-blue-400" icon="heroicons:check" />
          </button>
        </div>
      </div>
    </div>
    <button class="absolute top-8 right-8 text-4xl" @click="mobileOpen = false">
      <iconify-icon icon="heroicons:x-mark" />
    </button>
  </div>
</template>

<script setup lang="ts">
import logoWide from '~/assets/images/logowide.png'
import { messages, type Lang } from '~/data/i18n'

const mobileOpen = ref(false)
const languageOpen = ref(false)
const route = useRoute()
const { currentLang, localizePath, setLanguage } = useDomI18n()

const languageOptions: Array<{ lang: Lang, label: string, short: string }> = [
  { lang: 'zh', label: '繁體中文', short: '中' },
  { lang: 'en', label: 'English', short: 'EN' }
]

const currentLanguage = computed(() => languageOptions.find((option) => option.lang === currentLang.value) ?? languageOptions[0])

function t(key: keyof typeof messages.zh, fallback: string) {
  return messages[currentLang.value][key] ?? fallback
}

const navItems = [
  { to: '/', key: 'nav_home', zh: '首頁' },
  { to: '/services', key: 'nav_services', zh: '服務產品' },
  { to: '/solutions', key: 'nav_solutions', zh: '解決方案' },
  { to: '/pricing', key: 'nav_pricing', zh: '價格諮詢' },
  { to: '/support', key: 'nav_support', zh: '技術支援' },
  { to: '/docs', key: 'nav_docs', zh: '文檔' },
  { to: '/contact', key: 'nav_contact', zh: '聯絡我們' }
]

const localizedNavItems = computed(() => navItems.map((item) => ({
  ...item,
  to: localizePath(item.to),
  label: t(item.key as keyof typeof messages.zh, item.zh)
})))

async function chooseLanguage(lang: Lang) {
  languageOpen.value = false
  mobileOpen.value = false
  await setLanguage(lang)
}

watch(
  () => route.path,
  () => {
    mobileOpen.value = false
    languageOpen.value = false
  }
)
</script>
