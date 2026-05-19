<template>
  <nav class="fixed top-0 w-full z-50 glass-nav">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <NuxtLink class="flex items-center" :to="localizePath('/')" aria-label="LIMELINK home">
        <img class="h-9 w-auto md:h-10" :src="logoWide" alt="LIMELINK" />
      </NuxtLink>

      <div class="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-300">
        <NuxtLink v-for="item in localizedNavItems" :key="item.to" :to="item.to" class="hover:text-white transition-colors" active-class="text-blue-500">
          <span :data-i18n="item.key">{{ item.zh }}</span>
        </NuxtLink>
      </div>

      <div class="hidden lg:flex items-center gap-1 ml-4">
        <button type="button" class="lang-btn text-sm px-2 py-1 rounded-lg transition-all duration-300 text-gray-400 hover:text-white data-[active=true]:bg-white/10 data-[active=true]:text-white" data-lang="zh" @click="setLanguage('zh')">繁中</button>
        <span class="text-gray-600">|</span>
        <button type="button" class="lang-btn text-sm px-2 py-1 rounded-lg transition-all duration-300 text-gray-400 hover:text-white data-[active=true]:bg-white/10 data-[active=true]:text-white" data-lang="en" @click="setLanguage('en')">EN</button>
      </div>

      <NuxtLink class="hidden lg:block px-6 py-2.5 bg-gradient-tech rounded-full font-semibold text-sm hover:opacity-90 transition-all transform hover:-translate-y-0.5" :to="localizePath('/pricing')">
        <span data-i18n="nav_cta">立即諮詢</span>
      </NuxtLink>

      <button class="lg:hidden text-3xl" @click="mobileOpen = true">
        <iconify-icon icon="heroicons:bars-3-bottom-right" />
      </button>
    </div>
  </nav>

  <div class="fixed inset-0 z-40 bg-[#0a0e1a] transform transition-transform duration-300 lg:hidden" :class="mobileOpen ? 'translate-x-0' : 'translate-x-full'">
    <div class="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-semibold">
      <NuxtLink v-for="item in localizedNavItems" :key="item.to" :to="item.to" active-class="text-blue-500" @click="mobileOpen = false">
        <span :data-i18n="item.key">{{ item.zh }}</span>
      </NuxtLink>
      <NuxtLink class="px-8 py-3 bg-gradient-tech rounded-full text-lg" :to="localizePath('/pricing')" @click="mobileOpen = false">
        <span data-i18n="nav_cta">立即諮詢</span>
      </NuxtLink>
      <div class="flex items-center gap-2 text-base">
        <button type="button" class="lang-btn px-3 py-1 rounded-lg text-gray-400 data-[active=true]:bg-white/10 data-[active=true]:text-white" data-lang="zh" @click="setLanguage('zh')">繁中</button>
        <button type="button" class="lang-btn px-3 py-1 rounded-lg text-gray-400 data-[active=true]:bg-white/10 data-[active=true]:text-white" data-lang="en" @click="setLanguage('en')">EN</button>
      </div>
    </div>
    <button class="absolute top-8 right-8 text-4xl" @click="mobileOpen = false">
      <iconify-icon icon="heroicons:x-mark" />
    </button>
  </div>
</template>

<script setup lang="ts">
import logoWide from '~/assets/images/logowide.png'

const mobileOpen = ref(false)
const route = useRoute()
const { localizePath, setLanguage } = useDomI18n()

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
  to: localizePath(item.to)
})))

watch(
  () => route.path,
  () => {
    mobileOpen.value = false
  }
)
</script>
