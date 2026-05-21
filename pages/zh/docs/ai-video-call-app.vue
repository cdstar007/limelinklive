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
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6"><span class="text-gradient">如何建構 AI 視訊通話應用程式</span></h1>
        <p class="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl">從 WebRTC 媒體管線、AI 後端協調、虛擬人物生成到延遲最佳化，整理一套可落地的 AI 視訊通話應用架構。</p>
      </div>

      <div class="glass-card rounded-[32px] p-6 md:p-10 lg:p-12">
        <TechArticleRenderer :markdown="articleZh" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import articleZh from '~/assets/articles/article_26520_zh.md?raw'

usePageSeo('docs')
</script>
