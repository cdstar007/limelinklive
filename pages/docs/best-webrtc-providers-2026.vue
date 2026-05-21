<template>
  <section class="pt-36 pb-20 relative overflow-hidden">
    <div class="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
    <div class="max-w-5xl mx-auto px-6 relative">
      <NuxtLink class="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 mb-10" :to="localizePath('/docs')">
        <iconify-icon icon="heroicons:arrow-left" />
        {{ copy.back }}
      </NuxtLink>

      <div class="mb-12">
        <p class="text-sm font-bold text-blue-400 mb-4">{{ copy.eyebrow }}</p>
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6">{{ copy.title }}</h1>
        <p class="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl">{{ copy.description }}</p>
      </div>

      <div class="glass-card rounded-[32px] p-6 md:p-10 lg:p-12">
        <TechArticleRenderer :markdown="markdown" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import articleEn from '~/assets/articles/article_2652002.md?raw'
import articleZh from '~/assets/articles/article_2652002_zh.md?raw'

definePageMeta({
  alias: ['/zh/docs/best-webrtc-providers-2026']
})

usePageSeo('docs')

const { currentLang, localizePath } = useDomI18n()

const content = {
  zh: {
    back: '返回文檔中心',
    eyebrow: 'LimeLink Tech Articles',
    title: '2026 年最佳 WebRTC 供應商比較',
    description: '比較全球與亞洲 WebRTC 供應商在延遲、弱網能力、SDK、價格、合規與適用場景上的差異。'
  },
  en: {
    back: 'Back to docs',
    eyebrow: 'LimeLink Tech Articles',
    title: 'Best WebRTC Providers in 2026',
    description: 'A practical comparison of global and Asian WebRTC providers across latency, reliability, SDKs, pricing, compliance and best-fit use cases.'
  }
}

const copy = computed(() => content[currentLang.value])
const markdown = computed(() => currentLang.value === 'zh' ? articleZh : articleEn)
</script>
