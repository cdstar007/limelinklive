<template>
<section class="pt-40 pb-20 relative overflow-hidden">
<div class="max-w-7xl mx-auto px-6 text-center">
<h1 class="text-4xl lg:text-6xl font-bold mb-6"><span class="text-gradient" data-i18n="pricing_title">{{ pageMessages.pricing_title }}</span></h1>
<p class="text-xl text-gray-400 max-w-3xl mx-auto" data-i18n="pricing_hero_desc">{{ pageMessages.pricing_hero_desc }}</p>
</div>
</section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
<div class="glass-card p-8 rounded-3xl border-l-4 border-l-blue-500">
<h3 class="text-xl font-bold mb-4" data-i18n="pricing_model_1_title">{{ pageMessages.pricing_model_1_title }}</h3>
<p class="text-sm text-gray-400 mb-6 leading-relaxed" data-i18n="pricing_model_1_desc">{{ pageMessages.pricing_model_1_desc }}</p>
<div class="text-sm font-bold text-blue-400" data-i18n="pricing_model_1_discount">{{ pageMessages.pricing_model_1_discount }}</div>
<a class="inline-flex mt-6 text-sm font-semibold text-blue-300 underline underline-offset-4" href="#cost-review">{{ copy.pricing_calc_send }}</a>
</div>
<div class="glass-card p-8 rounded-3xl border-l-4 border-l-purple-500">
<h3 class="text-xl font-bold mb-4" data-i18n="pricing_model_2_title">{{ pageMessages.pricing_model_2_title }}</h3>
<p class="text-sm text-gray-400 mb-6 leading-relaxed" data-i18n="pricing_model_2_desc">{{ pageMessages.pricing_model_2_desc }}</p>
<div class="text-sm font-bold text-purple-400" data-i18n="pricing_model_2_discount">{{ pageMessages.pricing_model_2_discount }}</div>
<a class="inline-flex mt-6 text-sm font-semibold text-purple-300 underline underline-offset-4" href="#cost-review">{{ copy.pricing_calc_send }}</a>
</div>
<div class="glass-card p-8 rounded-3xl border-l-4 border-l-cyan-500">
<h3 class="text-xl font-bold mb-4" data-i18n="pricing_model_3_title">{{ pageMessages.pricing_model_3_title }}</h3>
<p class="text-sm text-gray-400 mb-6 leading-relaxed" data-i18n="pricing_model_3_desc">{{ pageMessages.pricing_model_3_desc }}</p>
<div class="text-sm font-bold text-cyan-400" data-i18n="pricing_model_3_discount">{{ pageMessages.pricing_model_3_discount }}</div>
<a class="inline-flex mt-6 text-sm font-semibold text-cyan-300 underline underline-offset-4" href="#cost-review">{{ copy.pricing_calc_send }}</a>
</div>
</div>
<p class="text-sm text-gray-400 leading-relaxed mb-16">{{ copy.pricing_terms }}</p>
<PricingCalculator @request-quote="scrollToQuoteForm" />
<div class="flex flex-col lg:flex-row gap-16">
<!-- Inquiry Form -->
<div id="cost-review" ref="quoteForm" class="lg:w-2/3 scroll-mt-40">
<div class="glass-card p-10 rounded-[40px]">
<h2 class="text-3xl font-bold mb-8" data-i18n="pricing_form_title">{{ pageMessages.pricing_form_title }}</h2>
<p class="text-sm text-gray-400 leading-relaxed mb-8">{{ copy.pricing_review_intro }}</p>
<form class="space-y-6" @submit.prevent="submitPricingInquiry">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_company">{{ pageMessages.pricing_form_company }}</label>
<input class="input-field" data-i18n-placeholder="pricing_placeholder_company" name="company" :placeholder="pageMessages.pricing_placeholder_company" required type="text"/>
</div>
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_name">{{ pageMessages.pricing_form_name }}</label>
<input class="input-field" data-i18n-placeholder="pricing_placeholder_name" name="name" :placeholder="pageMessages.pricing_placeholder_name" required type="text"/>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_phone">{{ pageMessages.pricing_form_phone }}</label>
<input class="input-field" data-i18n-placeholder="pricing_placeholder_phone" name="phone" :placeholder="pageMessages.pricing_placeholder_phone" type="tel"/>
</div>
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_email">{{ pageMessages.pricing_form_email }}</label>
<input class="input-field" data-i18n-placeholder="pricing_placeholder_email" name="email" :placeholder="pageMessages.pricing_placeholder_email" required type="email"/>
</div>
</div>
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_services">{{ pageMessages.pricing_form_services }}</label>
<div class="flex flex-wrap gap-4">
<label class="flex items-center space-x-2 cursor-pointer">
<input class="w-5 h-5 rounded border-white/10 bg-white/5" name="services" type="checkbox" value="騰訊雲 CSS"/>
<span data-i18n="pricing_service_css">{{ pageMessages.pricing_service_css }}</span>
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
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_usage">{{ pageMessages.pricing_form_usage }}</label>
<select class="input-field" name="usage">
<option value="">{{ copy.pricing_option_unknown }}</option>
<option data-i18n="pricing_option_1">{{ pageMessages.pricing_option_1 }}</option>
<option data-i18n="pricing_option_2">{{ pageMessages.pricing_option_2 }}</option>
<option data-i18n="pricing_option_3">{{ pageMessages.pricing_option_3 }}</option>
<option data-i18n="pricing_option_4">{{ pageMessages.pricing_option_4 }}</option>
</select>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label for="current-spend" class="block text-sm font-medium text-gray-400 mb-2">{{ copy.pricing_current_spend }}</label>
<input id="current-spend" class="input-field" name="current_spend" type="text" :placeholder="copy.pricing_current_spend_hint" />
</div>
<div>
<label for="procurement-status" class="block text-sm font-medium text-gray-400 mb-2">{{ copy.pricing_contract_status }}</label>
<select id="procurement-status" class="input-field" name="procurement_status">
<option value="">{{ copy.pricing_option_unknown }}</option>
<option>{{ copy.pricing_status_direct }}</option>
<option>{{ copy.pricing_status_partner }}</option>
<option>{{ copy.pricing_status_mixed }}</option>
</select>
</div>
</div>
<div>
<label for="renewal-month" class="block text-sm font-medium text-gray-400 mb-2">{{ copy.pricing_renewal }}</label>
<input id="renewal-month" class="input-field" name="renewal_month" type="month" />
</div>
<div>
<label class="block text-sm font-medium text-gray-400 mb-2" data-i18n="pricing_form_notes">{{ pageMessages.pricing_form_notes }}</label>
<textarea class="input-field h-32" data-i18n-placeholder="pricing_placeholder_notes" name="notes" :placeholder="pageMessages.pricing_placeholder_notes"></textarea>
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
<h3 class="text-xl font-bold mb-6" data-i18n="pricing_why_title">{{ pageMessages.pricing_why_title }}</h3>
<p class="text-sm text-gray-400 leading-relaxed mb-4" data-i18n="pricing_why_desc">{{ pageMessages.pricing_why_desc }}</p>
<ul class="space-y-3">
<li class="flex items-center space-x-2 text-sm text-blue-400 font-semibold">
<iconify-icon icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="pricing_why_1">{{ pageMessages.pricing_why_1 }}</span>
</li>
<li class="flex items-center space-x-2 text-sm text-blue-400 font-semibold">
<iconify-icon icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="pricing_why_2">{{ pageMessages.pricing_why_2 }}</span>
</li>
</ul>
</div>
<div class="glass-card p-8 rounded-3xl">
<h4 class="font-bold mb-4" data-i18n="pricing_vasp_title">{{ pageMessages.pricing_vasp_title }}</h4>
<ul class="space-y-4 text-sm text-gray-300">
<li class="flex justify-between">
<span data-i18n="pricing_vasp_1">{{ pageMessages.pricing_vasp_1 }}</span>
<span class="text-green-400" data-i18n="pricing_free">{{ pageMessages.pricing_free }}</span>
</li>
<li class="flex justify-between">
<span data-i18n="pricing_vasp_2">{{ pageMessages.pricing_vasp_2 }}</span>
<span class="text-green-400" data-i18n="pricing_free">{{ pageMessages.pricing_free }}</span>
</li>
<li class="flex justify-between">
<span data-i18n="pricing_vasp_3">{{ pageMessages.pricing_vasp_3 }}</span>
<span class="text-gray-500" data-i18n="pricing_paid">{{ pageMessages.pricing_paid }}</span>
</li>
<li class="flex justify-between">
<span data-i18n="pricing_vasp_4">{{ pageMessages.pricing_vasp_4 }}</span>
<span class="text-gray-500" data-i18n="pricing_enterprise">{{ pageMessages.pricing_enterprise }}</span>
</li>
</ul>
</div>
<div class="glass-card p-8 rounded-3xl">
<h4 class="font-bold mb-4" data-i18n="pricing_faq_title">{{ pageMessages.pricing_faq_title }}</h4>
<div class="space-y-4">
<div>
<p class="text-sm font-bold mb-1" data-i18n="pricing_faq_1_q">{{ pageMessages.pricing_faq_1_q }}</p>
<p class="text-xs text-gray-400" data-i18n="pricing_faq_1_a">{{ pageMessages.pricing_faq_1_a }}</p>
</div>
<div>
<p class="text-sm font-bold mb-1" data-i18n="pricing_faq_2_q">{{ pageMessages.pricing_faq_2_q }}</p>
<p class="text-xs text-gray-400" data-i18n="pricing_faq_2_a">{{ pageMessages.pricing_faq_2_a }}</p>
</div>
<div>
<p class="text-sm font-bold mb-1">{{ copy.pricing_faq_3_q }}</p>
<p class="text-xs text-gray-400">{{ copy.pricing_faq_3_a }}</p>
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
  alias: ['/zh/pricing', '/zh-cn/pricing']
})

usePageSeo('pricing')

const { currentLang } = useDomI18n()
const copy = computed(() => messages[currentLang.value])
const { inquiryMessage, inquiryStatus, submitInquiry } = useInquiryEmail()
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
  submitInquiry(event, 'Pricing inquiry', {
    successEvent: {
      event: 'request_quote_submit_success',
      form_type: 'pricing'
    }
  })
}
const pageMessages = computed(() => messages[currentLang.value])
</script>
