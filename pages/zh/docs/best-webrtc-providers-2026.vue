<template>
  <section class="pt-36 pb-20 relative overflow-hidden">
    <div class="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
    <div class="max-w-5xl mx-auto px-6 relative">
      <NuxtLink class="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 mb-10" to="/zh/docs">
        <iconify-icon icon="heroicons:arrow-left" />
        返回文檔中心
      </NuxtLink>

      <div class="mb-12">
        <p class="text-sm font-bold text-blue-400 mb-4">LimeLink Tech Articles</p>
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6"><span class="text-gradient">2026 年最佳 WebRTC 供應商比較</span></h1>
        <p class="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl">比較全球與亞洲 WebRTC 供應商在延遲、弱網能力、SDK、價格、合規與適用場景上的差異。</p>
      </div>

      <div class="glass-card rounded-[32px] p-6 md:p-10 lg:p-12">
        <TechArticleRenderer :markdown="articleZh" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import articleZh from '~/assets/articles/article_2652002_zh.md?raw'

usePageSeo('docs')
</script>
