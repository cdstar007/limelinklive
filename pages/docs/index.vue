<template>
<section class="pt-40 pb-16 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6">
    <div class="max-w-3xl">
      <p class="text-blue-400 text-sm font-bold mb-4">{{ copy.eyebrow }}</p>
      <h1 class="text-4xl lg:text-6xl font-bold mb-6"><span class="text-gradient">{{ copy.title }}</span></h1>
      <p class="text-xl text-gray-400 leading-relaxed">{{ copy.description }}</p>
    </div>
  </div>
</section>

<section class="py-10">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
      <div>
        <h2 class="text-3xl font-bold mb-3">{{ copy.vendorTitle }}</h2>
        <p class="text-gray-400 max-w-2xl">{{ copy.vendorDesc }}</p>
      </div>
      <NuxtLink class="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300" :to="localizePath('/contact')">
        {{ copy.requestDocs }}
        <iconify-icon icon="heroicons:arrow-right" />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <article v-for="vendor in vendors" :key="vendor.name" class="glass-card p-7 rounded-3xl flex flex-col min-h-[420px]">
        <div class="flex items-center justify-between gap-4 mb-6">
          <div class="w-16 h-16 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-blue-500/10 shrink-0">
            <img class="max-h-full max-w-full object-contain" :src="vendor.logo" :alt="`${vendor.name} logo`" />
          </div>
          <span class="text-xs text-gray-500">{{ vendor.scope }}</span>
        </div>
        <h3 class="text-2xl font-bold mb-3">{{ vendor.name }}</h3>
        <p class="text-sm text-gray-400 leading-relaxed mb-6">{{ vendor.summary }}</p>
        <div class="space-y-3 mb-8">
          <a v-for="link in vendor.links" :key="link.href" class="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-blue-400/60 transition-colors" :href="link.href" target="_blank" rel="noopener noreferrer">
            <span>
              <span class="block text-sm font-semibold group-hover:text-blue-300">{{ link.title }}</span>
              <span class="block text-xs text-gray-500 mt-1">{{ link.desc }}</span>
            </span>
            <iconify-icon class="text-gray-500 group-hover:text-blue-300 shrink-0" icon="heroicons:arrow-top-right-on-square" />
          </a>
        </div>
        <div class="mt-auto pt-5 border-t border-white/10">
          <p class="text-xs font-bold text-gray-300 mb-3">{{ copy.quickUse }}</p>
          <ul class="space-y-2 text-xs text-gray-500">
            <li v-for="item in vendor.useCases" :key="item" class="flex gap-2">
              <iconify-icon class="text-blue-400 mt-0.5" icon="heroicons:check-circle" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
      <div>
        <p class="text-sm font-semibold text-blue-400 mb-3">{{ copy.articlesEyebrow }}</p>
        <h2 class="text-3xl font-bold mb-3">{{ copy.articlesTitle }}</h2>
        <p class="text-gray-400 max-w-2xl">{{ copy.articlesDesc }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <NuxtLink
        v-for="article in articles"
        :key="article.href"
        class="group block cursor-pointer glass-card p-7 rounded-3xl border border-white/5 hover:border-blue-400/50 transition-colors"
        :to="localizePath(article.href)"
        @click="openArticle(article.href)"
      >
        <div class="flex flex-col md:flex-row gap-6">
          <div class="h-16 w-16 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
            <iconify-icon class="text-3xl text-blue-300" :icon="article.icon" />
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <span class="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">{{ article.category }}</span>
              <span class="text-xs text-gray-500">{{ article.readTime }}</span>
            </div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors">{{ article.title }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed mb-5">{{ article.desc }}</p>
            <span class="inline-flex items-center gap-2 text-sm font-bold text-blue-400">
              {{ copy.readArticle }}
              <iconify-icon class="transition-transform group-hover:translate-x-1" icon="heroicons:arrow-right" />
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</section>

<section class="py-20 bg-white/5">
  <div class="max-w-7xl mx-auto px-6">
    <div class="max-w-3xl mb-10">
      <h2 class="text-3xl font-bold mb-3">{{ copy.internalTitle }}</h2>
      <p class="text-gray-400">{{ copy.internalDesc }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article v-for="doc in internalDocs" :key="doc.title" class="glass-card p-7 rounded-3xl">
        <div class="flex items-start gap-4">
          <img class="w-[90px] h-[90px] object-contain shrink-0" :src="doc.image" :alt="`${doc.title} icon`" />
          <div>
            <h3 class="text-xl font-bold mb-2">{{ doc.title }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed mb-4">{{ doc.desc }}</p>
            <ul class="flex flex-wrap gap-2">
              <li v-for="tag in doc.tags" :key="tag" class="text-[11px] px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">{{ tag }}</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="glass-card p-8 lg:p-10 rounded-3xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      <div>
        <h2 class="text-2xl font-bold mb-3">{{ copy.ctaTitle }}</h2>
        <p class="text-gray-400 max-w-2xl">{{ copy.ctaDesc }}</p>
      </div>
      <NuxtLink class="px-6 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-colors text-center" :to="localizePath('/contact')">
        {{ copy.ctaButton }}
      </NuxtLink>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import agoraLogo from '~/assets/images/Agora.png'
import bytePlusLogo from '~/assets/images/BytePlus.png'
import checklistIcon from '~/assets/images/qingdan.png'
import handbookIcon from '~/assets/images/shouce.png'
import practiceIcon from '~/assets/images/shijian.png'
import sopIcon from '~/assets/images/sop.png'
import tencentLogo from '~/assets/images/tencent.png'

definePageMeta({
  alias: ['/zh/docs', '/zh-cn/docs']
})

usePageSeo('docs')

const { currentLang, localizePath } = useDomI18n()
const router = useRouter()

const content = {
  'zh-cn': {
    eyebrow: '文档中心',
    title: '直播与实时音视频技术文档',
    description: '集中整理三家主流流媒体平台的直播文档入口，并沉淀 LIMELINK 自有的接入、排障、成本优化与安全实践笔记。',
    vendorTitle: '官方直播文档',
    vendorDesc: '从产品概览、推流播放、转码录制到 API 参考，快速定位各平台最常用的官方数据。',
    requestDocs: '需要接入协助',
    quickUse: '适合查找',
    articlesEyebrow: 'LimeLink Tech Articles',
    articlesTitle: 'LimeLink Tech Articles',
    articlesDesc: '把实际音视频、AI 互动与上线架构经验整理成可阅读、可转交团队的技术文章。',
    readArticle: '阅读文章',
    internalTitle: 'LIMELINK 技术文档整理',
    internalDesc: '这里预留给你自己的技术沉淀，可逐步补充内部 SOP、排障手册、架构模板与客户交付清单。',
    ctaTitle: '需要把文档落到具体架构吗？',
    ctaDesc: '把你的业务场景、目标地区、并发规模和预算发给我们，我们可以协助整理供应商选型与接入路线。',
    ctaButton: '联系技术顾问'
  },
  zh: {
    eyebrow: '文件中心',
    title: '直播與即時音視訊技術文件',
    description: '集中整理三家主流流媒體平台的直播文件入口，並沉澱 LIMELINK 自有的接入、排障、成本優化與安全實踐筆記。',
    vendorTitle: '官方直播文件',
    vendorDesc: '從產品概覽、推流播放、轉碼錄製到 API 參考，快速定位各平台最常用的官方資料。',
    requestDocs: '需要接入協助',
    quickUse: '適合查找',
    articlesEyebrow: 'LimeLink Tech Articles',
    articlesTitle: 'LimeLink Tech Articles',
    articlesDesc: '把實際音視訊、AI 互動與上線架構經驗整理成可閱讀、可轉交團隊的技術文章。',
    readArticle: '閱讀文章',
    internalTitle: 'LIMELINK 技術文件整理',
    internalDesc: '這裡預留給你自己的技術沉澱，可逐步補充內部 SOP、排障手冊、架構模板與客戶交付清單。',
    ctaTitle: '需要把文件落到具體架構嗎？',
    ctaDesc: '把你的業務場景、目標地區、併發規模和預算發給我們，我們可以協助整理供應商選型與接入路線。',
    ctaButton: '聯絡技術顧問'
  },
  en: {
    eyebrow: 'Documentation Center',
    title: 'Live Streaming and Real-Time Video Docs',
    description: 'A curated hub for live streaming documentation across three major media platforms, plus LIMELINK technical notes for integration, troubleshooting, cost control and security.',
    vendorTitle: 'Official Live Streaming Docs',
    vendorDesc: 'Jump quickly into product overviews, ingest, playback, transcoding, recording and API references from each platform.',
    requestDocs: 'Need integration help',
    quickUse: 'Best for',
    articlesEyebrow: 'LimeLink Tech Articles',
    articlesTitle: 'LimeLink Tech Articles',
    articlesDesc: 'Practical technical articles covering real-time video, AI interaction patterns and production launch architecture.',
    readArticle: 'Read article',
    internalTitle: 'LIMELINK Technical Notes',
    internalDesc: 'A structured space for your own SOPs, troubleshooting guides, architecture templates and delivery checklists.',
    ctaTitle: 'Need to turn docs into an architecture?',
    ctaDesc: 'Send us your scenario, target regions, concurrency plan and budget, and we can help map platform selection and integration steps.',
    ctaButton: 'Contact a Consultant'
  }
}

const copy = computed(() => content[currentLang.value])

const articles = computed(() => currentLang.value === 'zh-cn' ? [
      {
        category: 'AI Video',
        title: '如何构建 AI 视频通话应用程序',
        desc: '完整解析 AI 视频通话的四层架构、WebRTC / LiveKit 媒体管线、STT / LLM / TTS / 虚拟人物管线，以及延迟与成本最佳化。',
        readTime: '8 分钟阅读',
        href: '/docs/ai-video-call-app',
        icon: 'heroicons:video-camera'
      },
      {
        category: 'WebRTC',
        title: '2026 年最佳 WebRTC 供应商比较',
        desc: '比较 Agora、Vonage、AWS Chime 与亚洲云端 RTC 供应商在全球延迟、弱网能力、SDK、价格与合规上的差异。',
        readTime: '10 分钟阅读',
        href: '/docs/best-webrtc-providers-2026',
        icon: 'heroicons:signal'
      }
    ] : currentLang.value === 'zh'
  ? [
      {
        category: 'AI Video',
        title: '如何建構 AI 視訊通話應用程式',
        desc: '完整解析 AI 視訊通話的四層架構、WebRTC / LiveKit 媒體管線、STT / LLM / TTS / 虛擬人物管線，以及延遲與成本最佳化。',
        readTime: '8 分鐘閱讀',
        href: '/docs/ai-video-call-app',
        icon: 'heroicons:video-camera'
      },
      {
        category: 'WebRTC',
        title: '2026 年最佳 WebRTC 供應商比較',
        desc: '比較 Agora、Vonage、AWS Chime 與亞洲雲端 RTC 供應商在全球延遲、弱網能力、SDK、價格與合規上的差異。',
        readTime: '10 分鐘閱讀',
        href: '/docs/best-webrtc-providers-2026',
        icon: 'heroicons:signal'
      }
    ]
  : [
      {
        category: 'AI Video',
        title: 'How to Build an AI Video Call App',
        desc: 'A production-oriented guide to AI video call architecture, WebRTC / LiveKit transport, STT / LLM / TTS / avatar pipelines, and latency optimization.',
        readTime: '8 min read',
        href: '/docs/ai-video-call-app',
        icon: 'heroicons:video-camera'
      },
      {
        category: 'WebRTC',
        title: 'Best WebRTC Providers in 2026',
        desc: 'Compare Agora, Vonage, AWS Chime and Asian RTC providers across latency, weak-network performance, SDK coverage, pricing and compliance.',
        readTime: '10 min read',
        href: '/docs/best-webrtc-providers-2026',
        icon: 'heroicons:signal'
      }
    ])

function openArticle(path: string) {
  router.push(localizePath(path))
}

const vendors = computed(() => currentLang.value === 'zh-cn' ? [
      {
        name: '腾讯云 CSS',
        scope: 'Live Streaming',
        logo: tencentLogo,
        summary: '云直播文档覆盖直播接入、域名配置、推流播放、转码、录制、鉴权与控制台运维。',
        links: [
          { title: '云直播文档中心', desc: '产品文档总入口', href: 'https://cloud.tencent.com/document/product/267' },
          { title: '国际站 CSS 文档', desc: '英文文档与海外接入参考', href: 'https://www.tencentcloud.com/document/product/267' },
          { title: 'CSS 产品介绍', desc: '能力、节点与场景概览', href: 'https://www.tencentcloud.com/products/css' }
        ],
        useCases: ['直播域名与推流播放配置', '转码、录制、截图与水印', 'URL 鉴权与防盗链']
      },
      {
        name: 'BytePlus MediaLive',
        scope: 'Media Live',
        logo: bytePlusLogo,
        summary: 'BytePlus MediaLive 文档涵盖端到端直播架构、Broadcast SDK、Player SDK、OpenAPI 与媒体处理能力。',
        links: [
          { title: 'MediaLive 产品概览', desc: '架构与核心能力', href: 'https://docs.byteplus.com/api/docs/byteplus-media-live/docs-product-overview' },
          { title: 'MediaLive API 参考', desc: '服务端集成与自动化管理', href: 'https://docs.byteplus.com/en/docs/byteplus-media-live/reference-api-reference' },
          { title: 'BytePlus MediaLive', desc: '产品页与方案入口', href: 'https://www.byteplus.com/zh-CN/product/medialive' }
        ],
        useCases: ['跨境直播分发与媒体处理', 'Broadcast SDK / Player SDK 接入', 'OpenAPI 自动化管理']
      },
      {
        name: 'Agora RTC / 互动直播',
        scope: 'RTC + Live',
        logo: agoraLogo,
        summary: 'Agora 文档适合查找互动直播、实时音视频、云端录制、媒体网关与低延迟互动能力。',
        links: [
          { title: 'Agora Broadcast Streaming', desc: '直播能力与文档入口', href: 'https://www.agora.io/en/products/broadcast-streaming/' },
          { title: 'Agora Docs', desc: 'SDK、API 与平台文档', href: 'https://docs.agora.io/en/' },
          { title: 'Cloud Recording Docs', desc: '云端录制与回放归档', href: 'https://docs.agora.io/en/cloud-recording/overview/product-overview' }
        ],
        useCases: ['低延迟连麦与互动直播', 'RTC SDK 多端接入', '云端录制与媒体网关']
      }
    ] : currentLang.value === 'zh'
  ? [
      {
        name: '騰訊雲 CSS',
        scope: 'Live Streaming',
        logo: tencentLogo,
        summary: '雲直播文件覆蓋直播接入、域名設定、推流播放、轉碼、錄製、鑒權與控制台維運。',
        links: [
          { title: '雲直播文件中心', desc: '產品文件總入口', href: 'https://cloud.tencent.com/document/product/267' },
          { title: '國際站 CSS 文件', desc: '英文文件與海外接入參考', href: 'https://www.tencentcloud.com/document/product/267' },
          { title: 'CSS 產品介紹', desc: '能力、節點與場景概覽', href: 'https://www.tencentcloud.com/products/css' }
        ],
        useCases: ['直播域名與推流播放設定', '轉碼、錄製、截圖與水印', 'URL 鑒權與防盜鏈']
      },
      {
        name: 'BytePlus MediaLive',
        scope: 'Media Live',
        logo: bytePlusLogo,
        summary: 'BytePlus MediaLive 文件涵蓋端到端直播架構、Broadcast SDK、Player SDK、OpenAPI 與媒體處理能力。',
        links: [
          { title: 'MediaLive 產品概覽', desc: '架構與核心能力', href: 'https://docs.byteplus.com/api/docs/byteplus-media-live/docs-product-overview' },
          { title: 'MediaLive API 參考', desc: '伺服器端整合與自動化管理', href: 'https://docs.byteplus.com/en/docs/byteplus-media-live/reference-api-reference' },
          { title: 'BytePlus MediaLive', desc: '產品頁與方案入口', href: 'https://www.byteplus.com/zh-CN/product/medialive' }
        ],
        useCases: ['跨境直播分發與媒體處理', 'Broadcast SDK / Player SDK 接入', 'OpenAPI 自動化管理']
      },
      {
        name: 'Agora RTC / 互動直播',
        scope: 'RTC + Live',
        logo: agoraLogo,
        summary: 'Agora 文件適合查找互動直播、即時音視訊、雲端錄製、媒體網關與低延遲互動能力。',
        links: [
          { title: 'Agora Broadcast Streaming', desc: '直播能力與文件入口', href: 'https://www.agora.io/en/products/broadcast-streaming/' },
          { title: 'Agora Docs', desc: 'SDK、API 與平台文件', href: 'https://docs.agora.io/en/' },
          { title: 'Cloud Recording Docs', desc: '雲端錄製與回放歸檔', href: 'https://docs.agora.io/en/cloud-recording/overview/product-overview' }
        ],
        useCases: ['低延遲連麥與互動直播', 'RTC SDK 多端接入', '雲端錄製與媒體網關']
      }
    ]
  : [
      {
        name: 'Tencent Cloud CSS',
        scope: 'Live Streaming',
        logo: tencentLogo,
        summary: 'CSS docs cover live streaming setup, domain configuration, ingest, playback, transcoding, recording, authentication and console operations.',
        links: [
          { title: 'CSS Documentation', desc: 'Primary documentation hub', href: 'https://www.tencentcloud.com/document/product/267' },
          { title: 'Tencent Cloud CSS', desc: 'Product capabilities and scenarios', href: 'https://www.tencentcloud.com/products/css' },
          { title: 'Chinese CSS Docs', desc: 'Mainland China documentation', href: 'https://cloud.tencent.com/document/product/267' }
        ],
        useCases: ['Live domain and stream setup', 'Transcoding, recording and watermarking', 'URL authentication and anti-leeching']
      },
      {
        name: 'BytePlus MediaLive',
        scope: 'Media Live',
        logo: bytePlusLogo,
        summary: 'MediaLive docs cover end-to-end live architecture, Broadcast SDK, Player SDK, OpenAPI and media processing features.',
        links: [
          { title: 'MediaLive Overview', desc: 'Architecture and core capabilities', href: 'https://docs.byteplus.com/api/docs/byteplus-media-live/docs-product-overview' },
          { title: 'MediaLive API Reference', desc: 'Server integration and automation', href: 'https://docs.byteplus.com/en/docs/byteplus-media-live/reference-api-reference' },
          { title: 'BytePlus MediaLive', desc: 'Product and solution page', href: 'https://www.byteplus.com/en/product/medialive' }
        ],
        useCases: ['Cross-border live distribution', 'Broadcast SDK / Player SDK integration', 'OpenAPI automation']
      },
      {
        name: 'Agora RTC / Live',
        scope: 'RTC + Live',
        logo: agoraLogo,
        summary: 'Agora docs are useful for interactive live streaming, real-time video, cloud recording, media gateway and low-latency engagement.',
        links: [
          { title: 'Agora Broadcast Streaming', desc: 'Live capabilities and docs entry', href: 'https://www.agora.io/en/products/broadcast-streaming/' },
          { title: 'Agora Docs', desc: 'SDK, API and platform docs', href: 'https://docs.agora.io/en/' },
          { title: 'Cloud Recording Docs', desc: 'Cloud recording and archive', href: 'https://docs.agora.io/en/cloud-recording/overview/product-overview' }
        ],
        useCases: ['Low-latency co-hosting and live interaction', 'RTC SDK integration', 'Cloud recording and media gateway']
      }
    ])

const internalDocs = computed(() => currentLang.value === 'zh-cn' ? [
      { title: '直播架构选型清单', desc: '根据直播型态、地区、延迟、并发与预算，快速选择 CSS、BytePlus 或 Agora 的接入路线。', image: checklistIcon, tags: ['选型', '架构', '成本'] },
      { title: '推流与播放排障手册', desc: '整理 RTMP / WebRTC / HLS 常见问题，包括首帧慢、卡顿、断流、音画不同步与跨境弱网。', image: handbookIcon, tags: ['推流', '播放', '排障'] },
      { title: '安全与鉴权实践', desc: '沉淀播放鉴权、防盗链、回调验签、管理后台权限与 webhook 安全配置。', image: practiceIcon, tags: ['安全', '鉴权', 'Webhook'] },
      { title: '上线交付 SOP', desc: '从域名、证书、CNAME、测试流、监控告警到重大活动护航的交付检查表。', image: sopIcon, tags: ['交付', '监控', 'SLA'] }
    ] : currentLang.value === 'zh'
  ? [
      { title: '直播架構選型清單', desc: '根據直播型態、地區、延遲、併發與預算，快速選擇 CSS、BytePlus 或 Agora 的接入路線。', image: checklistIcon, tags: ['選型', '架構', '成本'] },
      { title: '推流與播放排障手冊', desc: '整理 RTMP / WebRTC / HLS 常見問題，包括首幀慢、卡頓、斷流、音畫不同步與跨境弱網。', image: handbookIcon, tags: ['推流', '播放', '排障'] },
      { title: '安全與鑒權實踐', desc: '沉澱播放鑒權、防盜鏈、回調驗簽、管理後台權限與 webhook 安全設定。', image: practiceIcon, tags: ['安全', '鑒權', 'Webhook'] },
      { title: '上線交付 SOP', desc: '從域名、證書、CNAME、測試流、監控告警到重大活動護航的交付檢查表。', image: sopIcon, tags: ['交付', '監控', 'SLA'] }
    ]
  : [
      { title: 'Architecture Selection Checklist', desc: 'Choose CSS, BytePlus or Agora based on streaming type, target regions, latency, concurrency and budget.', image: checklistIcon, tags: ['Selection', 'Architecture', 'Cost'] },
      { title: 'Ingest and Playback Troubleshooting', desc: 'Common RTMP, WebRTC and HLS issues including slow first frame, buffering, stream drops, AV sync and cross-border networks.', image: handbookIcon, tags: ['Ingest', 'Playback', 'Troubleshooting'] },
      { title: 'Security and Authentication Practices', desc: 'Playback authentication, anti-leeching, callback signing, admin permissions and webhook security configuration.', image: practiceIcon, tags: ['Security', 'Auth', 'Webhook'] },
      { title: 'Launch Delivery SOP', desc: 'Delivery checklist for domains, certificates, CNAME, test streams, monitoring alerts and major event support.', image: sopIcon, tags: ['Delivery', 'Monitoring', 'SLA'] }
    ])
</script>
