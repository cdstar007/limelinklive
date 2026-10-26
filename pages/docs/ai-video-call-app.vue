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
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6"><span class="text-gradient">{{ copy.title }}</span></h1>
        <p class="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl">{{ copy.description }}</p>
      </div>

      <div class="glass-card rounded-[32px] p-6 md:p-10 lg:p-12">
        <TechArticleRenderer :markdown="markdown" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import articleEn from '~/assets/articles/article_26520.md?raw'
import articleCn from '~/assets/articles/article_26520_zh-cn.md?raw'
import articleZh from '~/assets/articles/article_26520_zh.md?raw'

definePageMeta({
  alias: ['/zh/docs/ai-video-call-app', '/zh-cn/docs/ai-video-call-app']
})

usePageSeo('articleAi')

const { currentLang, localizePath } = useDomI18n()

const content = {
  'zh-cn': {
    back: '返回文档中心',
    eyebrow: 'LimeLink Tech Articles',
    title: '如何构建 AI 视频通话应用程序',
    description: '从 WebRTC 媒体管线、AI 后端协调、虚拟人物生成到延迟最佳化，整理一套可落地的 AI 视频通话应用架构。'
  },
  zh: {
    back: '返回文件中心',
    eyebrow: 'LimeLink Tech Articles',
    title: '如何建構 AI 視訊通話應用程式',
    description: '從 WebRTC 媒體管線、AI 後端協調、虛擬人物生成到延遲最佳化，整理一套可落地的 AI 視訊通話應用架構。'
  },
  en: {
    back: 'Back to docs',
    eyebrow: 'LimeLink Tech Articles',
    title: 'How to Build an AI Video Call App',
    description: 'A practical architecture guide covering WebRTC media transport, AI orchestration, avatar generation and latency optimization for production AI video calls.'
  }
}

const copy = computed(() => content[currentLang.value])
const markdown = computed(() => currentLang.value === 'zh-cn' ? articleCn : currentLang.value === 'zh' ? articleZh : articleEn)
</script>
