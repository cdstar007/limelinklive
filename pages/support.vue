<template>
<section class="pt-40 pb-20 relative overflow-hidden">
<div class="max-w-7xl mx-auto px-6 text-center">
<h1 class="text-4xl lg:text-6xl font-bold mb-6"><span class="text-gradient" data-i18n="support_title">{{ pageMessages.support_title }}</span></h1>
<p class="text-xl text-gray-400 max-w-3xl mx-auto" data-i18n="support_hero_desc">{{ pageMessages.support_hero_desc }}</p>
</div>
</section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-6">
<!-- SLA Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
<div class="glass-card p-10 rounded-3xl text-center">
<div class="text-4xl font-bold text-blue-500 mb-2">99.99%</div>
<div class="text-sm font-bold mb-4" data-i18n="support_sla_1_label">{{ pageMessages.support_sla_1_label }}</div>
<p class="text-xs text-gray-500 leading-relaxed" data-i18n="support_sla_1_desc">{{ pageMessages.support_sla_1_desc }}</p>
</div>
<div class="glass-card p-10 rounded-3xl text-center">
<div class="text-4xl font-bold text-blue-500 mb-2">&lt; 15min</div>
<div class="text-sm font-bold mb-4" data-i18n="support_sla_2_label">{{ pageMessages.support_sla_2_label }}</div>
<p class="text-xs text-gray-500 leading-relaxed" data-i18n="support_sla_2_desc">{{ pageMessages.support_sla_2_desc }}</p>
</div>
<div class="glass-card p-10 rounded-3xl text-center">
<div class="text-4xl font-bold text-blue-500 mb-2">7 × 24</div>
<div class="text-sm font-bold mb-4" data-i18n="support_sla_3_label">{{ pageMessages.support_sla_3_label }}</div>
<p class="text-xs text-gray-500 leading-relaxed" data-i18n="support_sla_3_desc">{{ pageMessages.support_sla_3_desc }}</p>
</div>
</div>
<!-- Support Tiers -->
<div class="mb-24">
<h2 class="text-3xl font-bold mb-12 text-center" data-i18n="support_tiers_title">{{ pageMessages.support_tiers_title }}</h2>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 rounded-[40px] overflow-hidden">
<div class="p-10 border-r border-white/10 hover:bg-white/5 transition-all">
<h4 class="text-xl font-bold mb-6" data-i18n="support_tier_basic">{{ pageMessages.support_tier_basic }}</h4>
<ul class="space-y-4 text-sm text-gray-400">
<li class="flex items-center space-x-2"><iconify-icon class="text-green-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_basic_1">{{ pageMessages.support_tier_basic_1 }}</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-green-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_basic_2">{{ pageMessages.support_tier_basic_2 }}</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-green-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_basic_3">{{ pageMessages.support_tier_basic_3 }}</span></li>
<li class="flex items-center space-x-2 opacity-30"><iconify-icon icon="heroicons:x-mark"></iconify-icon><span data-i18n="support_tier_basic_4">{{ pageMessages.support_tier_basic_4 }}</span></li>
</ul>
<div class="mt-8 text-xs text-gray-500" data-i18n="support_tier_basic_note">{{ pageMessages.support_tier_basic_note }}</div>
</div>
<div class="p-10 border-r border-white/10 bg-blue-500/5 hover:bg-blue-500/10 transition-all relative">
<div class="absolute top-4 right-4 px-3 py-1 bg-blue-500 rounded-full text-[10px] font-bold" data-i18n="support_tier_popular">{{ pageMessages.support_tier_popular }}</div>
<h4 class="text-xl font-bold mb-6" data-i18n="support_tier_advanced">{{ pageMessages.support_tier_advanced }}</h4>
<ul class="space-y-4 text-sm text-gray-400">
<li class="flex items-center space-x-2"><iconify-icon class="text-blue-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_adv_1">{{ pageMessages.support_tier_adv_1 }}</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-blue-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_adv_2">{{ pageMessages.support_tier_adv_2 }}</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-blue-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_adv_3">{{ pageMessages.support_tier_adv_3 }}</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-blue-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_adv_4">{{ pageMessages.support_tier_adv_4 }}</span></li>
</ul>
<div class="mt-8 text-xs text-blue-400" data-i18n="support_tier_adv_note">{{ pageMessages.support_tier_adv_note }}</div>
</div>
<div class="p-10 hover:bg-white/5 transition-all">
<h4 class="text-xl font-bold mb-6" data-i18n="support_tier_premium">{{ pageMessages.support_tier_premium }}</h4>
<ul class="space-y-4 text-sm text-gray-400">
<li class="flex items-center space-x-2"><iconify-icon class="text-purple-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_prem_1">{{ pageMessages.support_tier_prem_1 }}</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-purple-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_prem_2">{{ pageMessages.support_tier_prem_2 }}</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-purple-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_prem_3">{{ pageMessages.support_tier_prem_3 }}</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-purple-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_prem_4">{{ pageMessages.support_tier_prem_4 }}</span></li>
</ul>
<div class="mt-8 text-xs text-gray-500" data-i18n="support_tier_prem_note">{{ pageMessages.support_tier_prem_note }}</div>
</div>
</div>
</div>
<!-- FAQ Section -->
<div class="mb-24">
<h2 class="text-3xl font-bold mb-12 text-center" data-i18n="support_faq_title">{{ pageMessages.support_faq_title }}</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_1_q">{{ pageMessages.support_faq_1_q }}</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_1_a">{{ pageMessages.support_faq_1_a }}</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_2_q">{{ pageMessages.support_faq_2_q }}</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_2_a">{{ pageMessages.support_faq_2_a }}</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_3_q">{{ pageMessages.support_faq_3_q }}</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_3_a">{{ pageMessages.support_faq_3_a }}</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_4_q">{{ pageMessages.support_faq_4_q }}</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_4_a">{{ pageMessages.support_faq_4_a }}</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_5_q">{{ pageMessages.support_faq_5_q }}</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_5_a">{{ pageMessages.support_faq_5_a }}</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_6_q">{{ pageMessages.support_faq_6_q }}</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_6_a">{{ pageMessages.support_faq_6_a }}</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_7_q">{{ pageMessages.support_faq_7_q }}</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_7_a">{{ pageMessages.support_faq_7_a }}</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_8_q">{{ pageMessages.support_faq_8_q }}</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_8_a">{{ pageMessages.support_faq_8_a }}</p>
</div>
</div>
</div>
<!-- Emergency Contact -->
<div class="glass-card p-12 rounded-[40px] text-center bg-red-500/5 border-red-500/20">
<h3 class="text-2xl font-bold mb-4" data-i18n="support_emergency_title">{{ pageMessages.support_emergency_title }}</h3>
<p class="text-gray-400 mb-8" data-i18n="support_emergency_desc">{{ pageMessages.support_emergency_desc }}</p>
<div class="flex justify-center space-x-4">
<a class="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all" :href="localizePath('/contact')"><span data-i18n="support_emergency_ticket">{{ pageMessages.support_emergency_ticket }}</span></a>
<a class="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all" href="https://t.me/cdstar" target="_blank" rel="noopener noreferrer"><iconify-icon class="text-xl" icon="logos:telegram"></iconify-icon><span data-i18n="support_emergency_chat">{{ pageMessages.support_emergency_chat }}</span></a>
</div>
</div>
</div>
</section>
</template>

<script setup lang="ts">
import { messages } from '~/data/i18n'
definePageMeta({
  alias: ['/zh/support', '/zh-cn/support']
})

usePageSeo('support')
const { localizePath, currentLang } = useDomI18n()
const pageMessages = computed(() => messages[currentLang.value])
</script>
