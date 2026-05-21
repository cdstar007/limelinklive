<template>
<section class="pt-40 pb-20 relative overflow-hidden">
<div class="max-w-7xl mx-auto px-6 text-center">
<h1 class="text-4xl lg:text-6xl font-bold mb-6"><span class="text-gradient" data-i18n="pricing_title">成本優化 · 彈性定價</span></h1>
<p class="text-xl text-gray-400 max-w-3xl mx-auto" data-i18n="pricing_hero_desc">
                作為核心代理商，我們為您提供靈活的計費模式與極具競爭力的折扣方案，助您精確掌控運營成本。
            </p>
</div>
</section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
<div class="glass-card p-8 rounded-3xl border-l-4 border-l-blue-500">
<h3 class="text-xl font-bold mb-4" data-i18n="pricing_model_1_title">按量計費 (Pay-as-you-go)</h3>
<p class="text-sm text-gray-400 mb-6 leading-relaxed" data-i18n="pricing_model_1_desc">適合初創項目與業務波動較大的場景。無預付壓力，按實際流量或時長結算。</p>
<div class="text-sm font-bold text-blue-400" data-i18n="pricing_model_1_discount">代理折扣：官網 95 折起</div>
</div>
<div class="glass-card p-8 rounded-3xl border-l-4 border-l-purple-500">
<h3 class="text-xl font-bold mb-4" data-i18n="pricing_model_2_title">預付套餐 (Resource Pack)</h3>
<p class="text-sm text-gray-400 mb-6 leading-relaxed" data-i18n="pricing_model_2_desc">適合業務穩定的企業。一次性購買資源包，單價更低，有效期長達一年。</p>
<div class="text-sm font-bold text-purple-400" data-i18n="pricing_model_2_discount">代理折扣：官網 85 折起</div>
</div>
<div class="glass-card p-8 rounded-3xl border-l-4 border-l-cyan-500">
<h3 class="text-xl font-bold mb-4" data-i18n="pricing_model_3_title">企業合同 (Enterprise)</h3>
<p class="text-sm text-gray-400 mb-6 leading-relaxed" data-i18n="pricing_model_3_desc">適合大規模、長期的戰略合作。提供階梯式定價與定制化增值服務。</p>
<div class="text-sm font-bold text-cyan-400" data-i18n="pricing_model_3_discount">代理折扣：專案申請，低至 7 折</div>
</div>
</div>
<PricingCalculator v-model:summary="calculatorSummary" @request-quote="scrollToQuoteForm" />
<div class="flex flex-col lg:flex-row gap-16">
<!-- Inquiry Form -->
<div ref="quoteForm" class="lg:w-2/3">
<div class="glass-card p-10 rounded-[40px]">
<h2 class="text-3xl font-bold mb-8" data-i18n="pricing_form_title">獲取專屬報價單</h2>
<form class="space-y-6" @submit.prevent="submitPricingInquiry">
<input name="calculatorEstimate" type="hidden" :value="calculatorSummary"/>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_company">公司名稱</label>
<input class="input-field" data-i18n-placeholder="pricing_placeholder_company" name="company" placeholder="請輸入公司全稱" required type="text"/>
</div>
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_name">聯繫人姓名</label>
<input class="input-field" data-i18n-placeholder="pricing_placeholder_name" name="name" placeholder="請輸入姓名" required type="text"/>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_phone">聯繫電話</label>
<input class="input-field" data-i18n-placeholder="pricing_placeholder_phone" name="phone" placeholder="請輸入電話號碼" type="tel"/>
</div>
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_email">電子郵箱</label>
<input class="input-field" data-i18n-placeholder="pricing_placeholder_email" name="email" placeholder="請輸入公司郵箱" required type="email"/>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_services">感興趣的服務 (可多選)</label>
<div class="flex flex-wrap gap-4">
<label class="flex items-center space-x-2 cursor-pointer">
<input class="w-5 h-5 rounded border-white/10 bg-white/5" name="services" type="checkbox" value="騰訊雲 CSS"/>
<span data-i18n="pricing_service_css">騰訊雲 CSS</span>
</label>
<label class="flex items-center space-x-2 cursor-pointer">
<input class="w-5 h-5 rounded border-white/10 bg-white/5" name="services" type="checkbox" value="BytePlus Media"/>
<span>BytePlus Media</span>
</label>
<label class="flex items-center space-x-2 cursor-pointer">
<input class="w-5 h-5 rounded border-white/10 bg-white/5" name="services" type="checkbox" value="Agora RTC"/>
<span>Agora RTC</span>
</label>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_usage">預計月用量 (流量/時長)</label>
<select class="input-field" name="usage">
<option data-i18n="pricing_option_1">低於 1TB / 10萬分鐘</option>
<option data-i18n="pricing_option_2">1TB - 10TB / 10萬-100萬分鐘</option>
<option data-i18n="pricing_option_3">10TB - 100TB / 100萬-1000萬分鐘</option>
<option data-i18n="pricing_option_4">超過 100TB / 1000萬分鐘</option>
</select>
</div>
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_notes">備註需求</label>
<textarea class="input-field h-32" data-i18n-placeholder="pricing_placeholder_notes" name="notes" placeholder="請描述您的業務場景或特殊需求..."></textarea>
</div>
<RecaptchaChallenge />
<button class="w-full py-4 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all disabled:cursor-not-allowed disabled:opacity-60" :disabled="inquiryStatus === 'submitting'" type="submit">
<span>{{ pricingSubmitLabel }}</span>
</button>
<p v-if="inquiryMessage" class="text-sm" :class="inquiryStatus === 'success' ? 'text-green-400' : 'text-red-400'">{{ inquiryMessage }}</p>
</form>
</div>
</div>
<!-- FAQ & Value-added -->
<div class="lg:w-1/3">
<div class="space-y-8">
<div>
<h3 class="text-xl font-bold mb-6" data-i18n="pricing_why_title">為什麼通過我們採購更便宜？</h3>
<p class="text-sm text-gray-400 leading-relaxed mb-4" data-i18n="pricing_why_desc">
                                我們作為官方一級代理，每年承載巨大的流量採購額度，因此能從雲廠商獲得底層的批發價格，並將這部分利潤回饋給客戶。
                            </p>
<ul class="space-y-3">
<li class="flex items-center space-x-2 text-sm text-blue-400 font-semibold">
<iconify-icon icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="pricing_why_1">無額外服務費</span>
</li>
<li class="flex items-center space-x-2 text-sm text-blue-400 font-semibold">
<iconify-icon icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="pricing_why_2">透明報價，拒絕隱形消費</span>
</li>
</ul>
</div>
<div class="glass-card p-8 rounded-3xl">
<h4 class="font-bold mb-4" data-i18n="pricing_vasp_title">增值服務列表</h4>
<ul class="space-y-4 text-sm text-gray-300">
<li class="flex justify-between">
<span data-i18n="pricing_vasp_1">架構諮詢</span>
<span class="text-green-400" data-i18n="pricing_free">免費</span>
</li>
<li class="flex justify-between">
<span data-i18n="pricing_vasp_2">壓測支持</span>
<span class="text-green-400" data-i18n="pricing_free">免費</span>
</li>
<li class="flex justify-between">
<span data-i18n="pricing_vasp_3">定制化開發</span>
<span class="text-gray-500" data-i18n="pricing_paid">按需付費</span>
</li>
<li class="flex justify-between">
<span data-i18n="pricing_vasp_4">24小時運維</span>
<span class="text-gray-500" data-i18n="pricing_enterprise">企業版包含</span>
</li>
</ul>
</div>
<div class="glass-card p-8 rounded-3xl">
<h4 class="font-bold mb-4" data-i18n="pricing_faq_title">常見問題 FAQ</h4>
<div class="space-y-4">
<div>
<p class="text-sm font-bold mb-1" data-i18n="pricing_faq_1_q">Q: 結算方式是怎樣的？</p>
<p class="text-xs text-gray-400" data-i18n="pricing_faq_1_a">A: 支持美金/港幣/人民幣多幣種結算，提供正式發票。</p>
</div>
<div>
<p class="text-sm font-bold mb-1" data-i18n="pricing_faq_2_q">Q: 代理折扣是終身的嗎？</p>
<p class="text-xs text-gray-400" data-i18n="pricing_faq_2_a">A: 只要通過我們續費，折扣長期有效，且隨用量增加可申請更低折扣。</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</template>

<script setup lang="ts">
import { messages } from '~/data/i18n'

definePageMeta({
  alias: ['/zh/pricing']
})

usePageSeo('pricing')

const { currentLang } = useDomI18n()
const { inquiryMessage, inquiryStatus, submitInquiry } = useInquiryEmail()
const calculatorSummary = ref('')
const quoteForm = ref<HTMLElement | null>(null)
const pricingSubmitLabel = computed(() => {
  return inquiryStatus.value === 'submitting'
    ? messages[currentLang.value].pricing_form_submitting
    : messages[currentLang.value].pricing_form_submit
})

function scrollToQuoteForm() {
  quoteForm.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function submitPricingInquiry(event: Event) {
  submitInquiry(event, 'Pricing inquiry')
}
</script>
