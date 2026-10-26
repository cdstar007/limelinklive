<template>
  <section class="pt-40 pb-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold text-blue-400 mb-4">{{ copy.eyebrow }}</p>
        <h1 class="text-4xl lg:text-6xl font-bold mb-6"><span class="text-gradient">{{ copy.title }}</span></h1>
        <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">{{ copy.intro }}</p>
        <div class="flex flex-wrap gap-4 mt-8">
          <NuxtLink class="px-6 py-3 bg-gradient-tech rounded-xl font-semibold" :to="localizePath('/contact')">{{ copy.contactCta }}</NuxtLink>
          <NuxtLink class="px-6 py-3 border border-white/15 rounded-xl font-semibold hover:bg-white/5 transition-colors" :to="localizePath('/pricing')">{{ copy.reviewCta }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="glass-card rounded-3xl p-8">
          <h2 class="text-2xl font-bold mb-4">{{ copy.companyTitle }}</h2>
          <p class="text-gray-400 leading-relaxed">{{ copy.companyDescription }}</p>
        </div>
        <div class="glass-card rounded-3xl p-8">
          <h2 class="text-2xl font-bold mb-4">{{ copy.approachTitle }}</h2>
          <p class="text-gray-400 leading-relaxed">{{ copy.approachDescription }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 border-y border-white/5">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-4">{{ copy.procurementTitle }}</h2>
      <p class="text-gray-400 leading-relaxed max-w-3xl mb-8">{{ copy.procurementDescription }}</p>
      <div class="grid md:grid-cols-3 gap-6">
        <article v-for="provider in providers" :key="provider.name" class="glass-card rounded-3xl p-7">
          <img class="h-14 w-14 object-contain mb-5" :src="provider.logo" :alt="provider.name" />
          <h3 class="text-xl font-bold mb-3">{{ provider.name }}</h3>
          <p class="text-sm text-gray-400 leading-relaxed mb-5">{{ copy.providers[provider.key] }}</p>
          <NuxtLink class="text-blue-300 text-sm font-semibold underline underline-offset-4" :to="localizePath(provider.path)">{{ copy.serviceCta }}</NuxtLink>
        </article>
      </div>
      <p class="text-sm text-gray-400 leading-relaxed mt-8 max-w-4xl">{{ copy.qualificationNote }}</p>
    </div>
  </section>

  <section class="py-16">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-4">{{ copy.teamTitle }}</h2>
      <p class="text-gray-400 leading-relaxed max-w-3xl mb-8">{{ copy.teamDescription }}</p>
      <div class="grid md:grid-cols-3 gap-6">
        <article v-for="(role, index) in copy.roles" :key="role.title" class="glass-card rounded-3xl p-7">
          <p class="text-blue-400 font-mono text-sm mb-4">0{{ index + 1 }}</p>
          <h3 class="text-xl font-bold mb-3">{{ role.title }}</h3>
          <p class="text-sm text-gray-400 leading-relaxed">{{ role.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="glass-card rounded-3xl p-8 md:p-12">
        <h2 class="text-3xl font-bold mb-4">{{ copy.contactTitle }}</h2>
        <p class="text-gray-400 leading-relaxed max-w-3xl mb-6">{{ copy.contactDescription }}</p>
        <a class="inline-block text-blue-300 font-semibold underline underline-offset-4 break-all" href="mailto:support@limelink.live">support@limelink.live</a>
        <div class="mt-6">
          <NuxtLink class="inline-flex px-6 py-3 bg-gradient-tech rounded-xl font-semibold" :to="localizePath('/contact')">{{ copy.contactCta }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import tencentLogo from '~/assets/images/tencent.png'
import byteplusLogo from '~/assets/images/BytePlus.png'
import agoraLogo from '~/assets/images/Agora.png'

definePageMeta({ alias: ['/zh/about', '/zh-cn/about'] })
usePageSeo('about')

const { currentLang, localizePath } = useDomI18n()
const providers = [
  { key: 'tencent' as const, name: 'Tencent Cloud CSS', logo: tencentLogo, path: '/service-css' },
  { key: 'byteplus' as const, name: 'BytePlus MediaLive', logo: byteplusLogo, path: '/service-byteplus' },
  { key: 'agora' as const, name: 'Agora RTC', logo: agoraLogo, path: '/service-agora' }
]

const content = {
  'zh-cn': {
    eyebrow: 'LIMELINK · 企业音视频采购与技术集成',
    title: '关于 LIMELINK',
    intro: '协助已有直播与实时音视频业务的企业，厘清采购条件、评估成本，并规划合适的技术集成与交付方式。',
    contactCta: '联系我们',
    reviewCta: '评估我的音视频成本',
    companyTitle: '我们提供什么',
    companyDescription: 'LIMELINK 提供云端音视频服务代理采购、成本评估与技术集成服务，涵盖直播、RTC 与媒体分发需求。从现有供应商、使用地区及用量结构出发，协助企业比较方案与完整成本。',
    approachTitle: '我们如何评估方案',
    approachDescription: '先核对现有账单与需求，再比较同厂商采购调整或其他供应商方案。若涉及帐号、SDK 或架构变更，会将政策确认、测试、迁移与支持范围一并纳入评估，不只比较折扣。',
    procurementTitle: '代理采购与合作范围',
    procurementDescription: '我们协助评估以下供应商的音视频采购与集成需求。实际可适用的产品、地区、帐号与合约条件，会在询价时逐项确认。',
    providers: {
      tencent: '直播服务与媒体分发的采购、计费项目及集成需求评估。',
      byteplus: '媒体直播、跨区分发与相关服务的采购及技术需求评估。',
      agora: '实时音视频、互动直播与相关服务的用量及采购需求评估。'
    },
    serviceCta: '查看服务范围',
    qualificationNote: '如需代理资格、合作关系或供应商审查数据，请联系我们确认适用范围与可提供的文件。报价主体、采购条件及交付责任以书面报价与合约为准。',
    teamTitle: '我们如何与您的团队协作',
    teamDescription: '采购、技术与交付需要共同确认。以下是合作时的工作分工，实际窗口及支持范围会依项目约定。',
    roles: [
      { title: '商务与采购', description: '确认目前费用、用量预估、付款与续约时点，整理可比较的采购条件。' },
      { title: '技术评估', description: '检视服务地区、延迟、SDK 与既有架构，确认必要的测试与集成工作。' },
      { title: '交付与支持', description: '依约定范围安排导入、问题跟进与用量检视，厘清服务窗口及责任。' }
    ],
    contactTitle: '让我们先了解您的业务',
    contactDescription: '可提供目前使用的供应商、费用区间与希望改善的问题。若有采购审查或资格确认需求，也可在首次联系时一并提出。'
  },
  zh: {
    eyebrow: 'LIMELINK · 企業影音採購與技術整合',
    title: '關於 LIMELINK',
    intro: '協助已有直播與即時音視訊業務的企業，釐清採購條件、評估成本，並規劃合適的技術整合與交付方式。',
    contactCta: '聯絡我們',
    reviewCta: '評估我的影音成本',
    companyTitle: '我們提供什麼',
    companyDescription: 'LIMELINK 提供雲端影音服務代理採購、成本評估與技術整合服務，涵蓋直播、RTC 與媒體分發需求。從現有供應商、使用地區及用量結構出發，協助企業比較方案與完整成本。',
    approachTitle: '我們如何評估方案',
    approachDescription: '先核對現有帳單與需求，再比較同廠商採購調整或其他供應商方案。若涉及帳號、SDK 或架構變更，會將政策確認、測試、遷移與支援範圍一併納入評估，不只比較折扣。',
    procurementTitle: '代理採購與合作範圍',
    procurementDescription: '我們協助評估以下供應商的影音採購與整合需求。實際可適用的產品、地區、帳號與合約條件，會在詢價時逐項確認。',
    providers: {
      tencent: '直播服務與媒體分發的採購、計費項目及整合需求評估。',
      byteplus: '媒體直播、跨區分發與相關服務的採購及技術需求評估。',
      agora: '即時音視訊、互動直播與相關服務的用量及採購需求評估。'
    },
    serviceCta: '查看服務範圍',
    qualificationNote: '如需代理資格、合作關係或供應商審查資料，請聯絡我們確認適用範圍與可提供的文件。報價主體、採購條件及交付責任以書面報價與合約為準。',
    teamTitle: '我們如何與您的團隊協作',
    teamDescription: '採購、技術與交付需要共同確認。以下是合作時的工作分工，實際窗口及支援範圍會依專案約定。',
    roles: [
      { title: '商務與採購', description: '確認目前費用、用量預估、付款與續約時點，整理可比較的採購條件。' },
      { title: '技術評估', description: '檢視服務地區、延遲、SDK 與既有架構，確認必要的測試與整合工作。' },
      { title: '交付與支援', description: '依約定範圍安排導入、問題跟進與用量檢視，釐清服務窗口及責任。' }
    ],
    contactTitle: '讓我們先了解您的業務',
    contactDescription: '可提供目前使用的供應商、費用區間與希望改善的問題。若有採購審查或資格確認需求，也可在首次聯絡時一併提出。'
  },
  en: {
    eyebrow: 'LIMELINK · Enterprise Video Procurement & Integration',
    title: 'About LIMELINK',
    intro: 'We help businesses with existing streaming and real-time video usage review procurement terms, understand costs and plan suitable integration and delivery.',
    contactCta: 'Contact Us',
    reviewCta: 'Review My Video Costs',
    companyTitle: 'What We Do',
    companyDescription: 'LIMELINK provides cloud video procurement, cost reviews and technical integration services for live streaming, RTC and media delivery. We compare options and total costs using your existing providers, service regions and usage mix.',
    approachTitle: 'How We Evaluate Options',
    approachDescription: 'We review your current bill and requirements before comparing same-vendor procurement changes or alternatives. Account, SDK or architecture changes are assessed alongside vendor policies, testing, migration and support scope.',
    procurementTitle: 'Partner Procurement & Service Scope',
    procurementDescription: 'We help evaluate procurement and integration needs across these video providers. Eligible products, regions, accounts and contract terms are confirmed during the quotation process.',
    providers: {
      tencent: 'Procurement, billing-item and integration reviews for streaming and media delivery.',
      byteplus: 'Procurement and technical reviews for live media, cross-region delivery and related services.',
      agora: 'Usage and procurement reviews for real-time audio and video, interactive streaming and related services.'
    },
    serviceCta: 'Explore Service Scope',
    qualificationNote: 'For partner credentials, relationship verification or vendor due diligence, contact us to confirm the applicable scope and available documentation. The contracting entity, procurement terms and delivery responsibilities are defined in written quotes and agreements.',
    teamTitle: 'How We Work With Your Team',
    teamDescription: 'Procurement, technical evaluation and delivery are coordinated together. These are the workstreams involved; project contacts and support scope are agreed for each engagement.',
    roles: [
      { title: 'Commercial & Procurement', description: 'Review current spend, expected usage, payment and renewal timing to establish comparable procurement terms.' },
      { title: 'Technical Evaluation', description: 'Review service regions, latency, SDKs and existing architecture to identify testing and integration needs.' },
      { title: 'Delivery & Support', description: 'Arrange onboarding, issue follow-up and usage reviews within the agreed scope, with clear contacts and responsibilities.' }
    ],
    contactTitle: 'Tell Us About Your Business',
    contactDescription: 'Share your current providers, spend range and the issues you want to address. Procurement due diligence and qualification requirements can be raised in the first conversation.'
  }
}

const copy = computed(() => content[currentLang.value])
</script>
