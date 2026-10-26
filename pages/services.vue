<template>
<!-- Header Section -->
<section class="pt-40 pb-20 relative grid-pattern">
<div class="max-w-7xl mx-auto px-6 text-center">
<h1 class="text-4xl lg:text-6xl font-bold mb-6"><span class="text-gradient" data-i18n="services_title">{{ pageMessages.services_title }}</span></h1>
<p class="text-xl text-gray-400 max-w-3xl mx-auto" data-i18n="services_hero_desc">{{ pageMessages.services_hero_desc }}</p>
</div>
</section>
<!-- Product Overview -->
<section class="py-20">
<div class="max-w-7xl mx-auto px-6 space-y-24">
<!-- Tencent Cloud CSS -->
<div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div class="w-full lg:w-1/2">
<div class="glass-card p-12 rounded-[40px] relative overflow-hidden group">
<div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon class="text-[200px]" icon="logos:tencent-cloud-icon"></iconify-icon>
</div>
<iconify-icon class="text-5xl mb-8" icon="logos:tencent-cloud"></iconify-icon>
<h2 class="text-3xl font-bold mb-6" data-i18n="services_css_title">{{ pageMessages.services_css_title }}</h2>
<p class="text-gray-400 mb-8 leading-relaxed" data-i18n="services_css_desc">{{ pageMessages.services_css_desc }}</p>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-blue-500" icon="heroicons:bolt"></iconify-icon>
<span data-i18n="services_css_feat_1">{{ pageMessages.services_css_feat_1 }}</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-blue-500" icon="heroicons:shield-check"></iconify-icon>
<span data-i18n="services_css_feat_2">{{ pageMessages.services_css_feat_2 }}</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-blue-500" icon="heroicons:video-camera"></iconify-icon>
<span data-i18n="services_css_feat_3">{{ pageMessages.services_css_feat_3 }}</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-blue-500" icon="heroicons:globe-alt"></iconify-icon>
<span data-i18n="services_css_feat_4">{{ pageMessages.services_css_feat_4 }}</span>
</div>
</div>
<div class="flex flex-wrap gap-2 mb-10">
<span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full" data-i18n="services_css_tag_1">{{ pageMessages.services_css_tag_1 }}</span>
<span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full" data-i18n="services_css_tag_2">{{ pageMessages.services_css_tag_2 }}</span>
<span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full" data-i18n="services_css_tag_3">{{ pageMessages.services_css_tag_3 }}</span>
</div>
<a class="inline-flex items-center space-x-2 text-blue-500 font-bold hover:underline" :href="localizePath('/service-css')">
<span data-i18n="learn_more">{{ pageMessages.learn_more }}</span>
<iconify-icon icon="heroicons:arrow-right"></iconify-icon>
</a>
</div>
</div>
<div class="w-full lg:w-1/2">
<img alt="Tencent Cloud CSS Dashboard" class="w-full rounded-2xl shadow-2xl border border-white/10" :src="tencentCardImage"/>
</div>
</div>
<!-- BytePlus -->
<div class="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
<div class="w-full lg:w-1/2">
<div class="glass-card p-12 rounded-[40px] relative overflow-hidden group">
<div class="absolute top-0 left-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon class="text-[200px]" icon="logos:byteplus"></iconify-icon>
</div>
<iconify-icon class="text-5xl mb-8" icon="logos:byteplus"></iconify-icon>
<h2 class="text-3xl font-bold mb-6">BytePlus Media Live</h2>
<p class="text-gray-400 mb-8 leading-relaxed" data-i18n="services_byteplus_desc">{{ pageMessages.services_byteplus_desc }}</p>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-purple-500" icon="heroicons:sparkles"></iconify-icon>
<span data-i18n="services_byteplus_feat_1">{{ pageMessages.services_byteplus_feat_1 }}</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-purple-500" icon="heroicons:scissors"></iconify-icon>
<span data-i18n="services_byteplus_feat_2">{{ pageMessages.services_byteplus_feat_2 }}</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-purple-500" icon="heroicons:presentation-chart-line"></iconify-icon>
<span data-i18n="services_byteplus_feat_3">{{ pageMessages.services_byteplus_feat_3 }}</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-purple-500" icon="heroicons:language"></iconify-icon>
<span data-i18n="services_byteplus_feat_4">{{ pageMessages.services_byteplus_feat_4 }}</span>
</div>
</div>
<div class="flex flex-wrap gap-2 mb-10">
<span class="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs rounded-full" data-i18n="services_byteplus_tag_1">{{ pageMessages.services_byteplus_tag_1 }}</span>
<span class="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs rounded-full" data-i18n="services_byteplus_tag_2">{{ pageMessages.services_byteplus_tag_2 }}</span>
<span class="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs rounded-full" data-i18n="services_byteplus_tag_3">{{ pageMessages.services_byteplus_tag_3 }}</span>
</div>
<a class="inline-flex items-center space-x-2 text-purple-500 font-bold hover:underline" :href="localizePath('/service-byteplus')">
<span data-i18n="learn_more">{{ pageMessages.learn_more }}</span>
<iconify-icon icon="heroicons:arrow-right"></iconify-icon>
</a>
</div>
</div>
<div class="w-full lg:w-1/2">
<img alt="BytePlus Media Live Dashboard" class="w-full rounded-2xl shadow-2xl border border-white/10" :src="bytePlusCardImage"/>
</div>
</div>
<!-- Agora -->
<div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div class="w-full lg:w-1/2">
<div class="glass-card p-12 rounded-[40px] relative overflow-hidden group">
<div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon class="text-[200px]" icon="logos:agora-icon"></iconify-icon>
</div>
<iconify-icon class="text-5xl mb-8" icon="logos:agora"></iconify-icon>
<h2 class="text-3xl font-bold mb-6" data-i18n="services_agora_title">{{ pageMessages.services_agora_title }}</h2>
<p class="text-gray-400 mb-8 leading-relaxed" data-i18n="services_agora_desc">{{ pageMessages.services_agora_desc }}</p>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-cyan-500" icon="heroicons:microphone"></iconify-icon>
<span data-i18n="services_agora_feat_1">{{ pageMessages.services_agora_feat_1 }}</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-cyan-500" icon="heroicons:users"></iconify-icon>
<span data-i18n="services_agora_feat_2">{{ pageMessages.services_agora_feat_2 }}</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-cyan-500" icon="heroicons:device-phone-mobile"></iconify-icon>
<span data-i18n="services_agora_feat_3">{{ pageMessages.services_agora_feat_3 }}</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-cyan-500" icon="heroicons:code-bracket"></iconify-icon>
<span data-i18n="services_agora_feat_4">{{ pageMessages.services_agora_feat_4 }}</span>
</div>
</div>
<div class="flex flex-wrap gap-2 mb-10">
<span class="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full" data-i18n="services_agora_tag_1">{{ pageMessages.services_agora_tag_1 }}</span>
<span class="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full" data-i18n="services_agora_tag_2">{{ pageMessages.services_agora_tag_2 }}</span>
<span class="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full" data-i18n="services_agora_tag_3">{{ pageMessages.services_agora_tag_3 }}</span>
</div>
<a class="inline-flex items-center space-x-2 text-cyan-500 font-bold hover:underline" :href="localizePath('/service-agora')">
<span data-i18n="learn_more">{{ pageMessages.learn_more }}</span>
<iconify-icon icon="heroicons:arrow-right"></iconify-icon>
</a>
</div>
</div>
<div class="w-full lg:w-1/2">
<img alt="Agora RTC Dashboard" class="w-full rounded-2xl shadow-2xl border border-white/10" :src="agoraCardImage"/>
</div>
</div>
</div>
</section>
<!-- Comparison Table -->
<section class="py-24 bg-white/5">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl font-bold mb-4" data-i18n="services_compare_title">{{ pageMessages.services_compare_title }}</h2>
<p class="text-gray-400" data-i18n="services_compare_desc">{{ pageMessages.services_compare_desc }}</p>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-white/10">
<th class="py-6 px-4 font-bold text-gray-500" data-i18n="services_compare_metric">{{ pageMessages.services_compare_metric }}</th>
<th class="py-6 px-4 font-bold text-blue-500" data-i18n="services_vendor_css">{{ pageMessages.services_vendor_css }}</th>
<th class="py-6 px-4 font-bold text-purple-500">BytePlus Media</th>
<th class="py-6 px-4 font-bold text-cyan-500">Agora RTC</th>
</tr>
</thead>
<tbody class="text-sm">
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_scenario">{{ pageMessages.services_compare_scenario }}</td>
<td class="py-6 px-4" data-i18n="services_compare_css_scenario">{{ pageMessages.services_compare_css_scenario }}</td>
<td class="py-6 px-4" data-i18n="services_compare_byteplus_scenario">{{ pageMessages.services_compare_byteplus_scenario }}</td>
<td class="py-6 px-4" data-i18n="services_compare_agora_scenario">{{ pageMessages.services_compare_agora_scenario }}</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_latency">{{ pageMessages.services_compare_latency }}</td>
<td class="py-6 px-4" data-i18n="services_latency_css">{{ pageMessages.services_latency_css }}</td>
<td class="py-6 px-4">1s - 5s</td>
<td class="py-6 px-4">&lt; 400ms</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_nodes">{{ pageMessages.services_compare_nodes }}</td>
<td class="py-6 px-4" data-i18n="services_nodes_css">{{ pageMessages.services_nodes_css }}</td>
<td class="py-6 px-4" data-i18n="services_compare_global">{{ pageMessages.services_compare_global }}</td>
<td class="py-6 px-4" data-i18n="services_nodes_agora">{{ pageMessages.services_nodes_agora }}</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_media">{{ pageMessages.services_compare_media }}</td>
<td class="py-6 px-4" data-i18n="services_compare_css_media">{{ pageMessages.services_compare_css_media }}</td>
<td class="py-6 px-4" data-i18n="services_compare_byteplus_media">{{ pageMessages.services_compare_byteplus_media }}</td>
<td class="py-6 px-4" data-i18n="services_compare_agora_media">{{ pageMessages.services_compare_agora_media }}</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_concurrent">{{ pageMessages.services_compare_concurrent }}</td>
<td class="py-6 px-4" data-i18n="services_concurrent_css">{{ pageMessages.services_concurrent_css }}</td>
<td class="py-6 px-4" data-i18n="services_concurrent_byteplus">{{ pageMessages.services_concurrent_byteplus }}</td>
<td class="py-6 px-4" data-i18n="services_concurrent_agora">{{ pageMessages.services_concurrent_agora }}</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<!-- Why Us -->
<section class="py-24">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl font-bold mb-4" data-i18n="services_why_title">{{ pageMessages.services_why_title }}</h2>
<p class="text-gray-400" data-i18n="services_why_desc">{{ pageMessages.services_why_desc }}</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div class="glass-card p-8 rounded-2xl">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="priceIcon" alt="更具競爭力的價格 icon">
<h5 class="text-lg font-bold mb-3" data-i18n="services_why_1_title">{{ pageMessages.services_why_1_title }}</h5>
<p class="text-sm text-gray-400" data-i18n="services_why_1_desc">{{ pageMessages.services_why_1_desc }}</p>
</div>
<div class="glass-card p-8 rounded-2xl">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="integrationIcon" alt="專業技術整合 icon">
<h5 class="text-lg font-bold mb-3" data-i18n="services_why_2_title">{{ pageMessages.services_why_2_title }}</h5>
<p class="text-sm text-gray-400" data-i18n="services_why_2_desc">{{ pageMessages.services_why_2_desc }}</p>
</div>
<div class="glass-card p-8 rounded-2xl">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="supportIcon" alt="本地化技術支援 icon">
<h5 class="text-lg font-bold mb-3" data-i18n="services_why_3_title">{{ pageMessages.services_why_3_title }}</h5>
<p class="text-sm text-gray-400" data-i18n="services_why_3_desc">{{ pageMessages.services_why_3_desc }}</p>
</div>
<div class="glass-card p-8 rounded-2xl">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="managementIcon" alt="統一賬單與管理 icon">
<h5 class="text-lg font-bold mb-3" data-i18n="services_why_4_title">{{ pageMessages.services_why_4_title }}</h5>
<p class="text-sm text-gray-400" data-i18n="services_why_4_desc">{{ pageMessages.services_why_4_desc }}</p>
</div>
</div>
</div>
</section>
<!-- Footer -->
</template>

<script setup lang="ts">
import { messages } from '~/data/i18n'
import agoraCardImage from '~/assets/images/Agoracard.png'
import bytePlusCardImage from '~/assets/images/BytePluscard.png'
import managementIcon from '~/assets/images/guanli.png'
import integrationIcon from '~/assets/images/jicheng.png'
import priceIcon from '~/assets/images/jiage.png'
import supportIcon from '~/assets/images/zhiyuan.png'
import tencentCardImage from '~/assets/images/tencentcard.png'

definePageMeta({
  alias: ['/zh/services', '/zh-cn/services']
})

usePageSeo('services')
const { localizePath, currentLang } = useDomI18n()
const pageMessages = computed(() => messages[currentLang.value])
</script>
