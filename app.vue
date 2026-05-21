<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { applyTranslations, initLanguage, syncLanguageFromRoute } = useDomI18n()
let revealObserver: IntersectionObserver | undefined

useGlobalSeo()

useHead({
  script: [
    {
      tagPosition: 'head',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTX92DF3');`
    }
  ],
  noscript: [
    {
      tagPosition: 'bodyOpen',
      innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MTX92DF3" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
    }
  ]
})

function initRevealAnimations() {
  if (!import.meta.client) return

  revealObserver?.disconnect()
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    revealObserver?.observe(el)
  })
}

onMounted(() => {
  initLanguage()
  initRevealAnimations()
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    syncLanguageFromRoute(route.path)
    applyTranslations()
    initRevealAnimations()
  }
)

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})
</script>
