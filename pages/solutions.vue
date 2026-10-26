<template>
<section class="pt-40 pb-20 relative overflow-hidden">
<div class="max-w-7xl mx-auto px-6 text-center">
<h1 class="text-4xl lg:text-6xl font-bold mb-6"><span class="text-gradient" data-i18n="solutions_title">{{ pageMessages.solutions_title }}</span></h1>
<p class="text-xl text-gray-400 max-w-3xl mx-auto" data-i18n="solutions_desc">{{ pageMessages.solutions_desc }}</p>
</div>
</section>
<section class="py-20">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
<!-- Solution 1 -->
<div class="glass-card p-10 rounded-[40px] flex flex-col h-full">
<img class="w-[90px] h-[90px] object-contain mb-8" :src="commerceIcon" alt="電商直播 icon">
<h3 class="text-2xl font-bold mb-4" data-i18n="solutions_ec_title">{{ pageMessages.solutions_ec_title }}</h3>
<p class="text-gray-400 text-sm mb-6 leading-relaxed" data-i18n="solutions_ec_desc">{{ pageMessages.solutions_ec_desc }}</p>
<div class="mt-auto">
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4" data-i18n="solutions_core_tech">{{ pageMessages.solutions_core_tech }}</div>
<div class="flex flex-wrap gap-2 mb-8">
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_1_1">{{ pageMessages.solutions_chip_1_1 }}</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_1_2">{{ pageMessages.solutions_chip_1_2 }}</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_1_3">{{ pageMessages.solutions_chip_1_3 }}</span>
</div>
<a class="text-blue-500 font-bold text-sm flex items-center space-x-1" :href="localizePath('/pricing')">
<span data-i18n="solutions_get_quote">{{ pageMessages.solutions_get_quote }}</span>
<iconify-icon icon="heroicons:arrow-small-right"></iconify-icon>
</a>
</div>
</div>
<!-- Solution 2 -->
<div class="glass-card p-10 rounded-[40px] flex flex-col h-full">
<img class="w-[90px] h-[90px] object-contain mb-8" :src="educationIcon" alt="線上教育 icon">
<h3 class="text-2xl font-bold mb-4" data-i18n="solutions_edu_title">{{ pageMessages.solutions_edu_title }}</h3>
<p class="text-gray-400 text-sm mb-6 leading-relaxed" data-i18n="solutions_edu_desc">{{ pageMessages.solutions_edu_desc }}</p>
<div class="mt-auto">
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4" data-i18n="solutions_core_tech">{{ pageMessages.solutions_core_tech }}</div>
<div class="flex flex-wrap gap-2 mb-8">
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]">Agora RTC</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_2_2">{{ pageMessages.solutions_chip_2_2 }}</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_2_3">{{ pageMessages.solutions_chip_2_3 }}</span>
</div>
<a class="text-cyan-500 font-bold text-sm flex items-center space-x-1" :href="localizePath('/pricing')">
<span data-i18n="solutions_get_quote">{{ pageMessages.solutions_get_quote }}</span>
<iconify-icon icon="heroicons:arrow-small-right"></iconify-icon>
</a>
</div>
</div>
<!-- Solution 3 -->
<div class="glass-card p-10 rounded-[40px] flex flex-col h-full">
<img class="w-[90px] h-[90px] object-contain mb-8" :src="crossBorderIcon" alt="跨境出海 icon">
<h3 class="text-2xl font-bold mb-4" data-i18n="solutions_global_title">{{ pageMessages.solutions_global_title }}</h3>
<p class="text-gray-400 text-sm mb-6 leading-relaxed" data-i18n="solutions_global_desc">{{ pageMessages.solutions_global_desc }}</p>
<div class="mt-auto">
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4" data-i18n="solutions_core_tech">{{ pageMessages.solutions_core_tech }}</div>
<div class="flex flex-wrap gap-2 mb-8">
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]">BytePlus Global</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_3_2">{{ pageMessages.solutions_chip_3_2 }}</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_3_3">{{ pageMessages.solutions_chip_3_3 }}</span>
</div>
<a class="text-purple-500 font-bold text-sm flex items-center space-x-1" :href="localizePath('/pricing')">
<span data-i18n="solutions_get_quote">{{ pageMessages.solutions_get_quote }}</span>
<iconify-icon icon="heroicons:arrow-small-right"></iconify-icon>
</a>
</div>
</div>
<!-- Solution 4 -->
<div class="glass-card p-10 rounded-[40px] flex flex-col h-full">
<img class="w-[90px] h-[90px] object-contain mb-8" :src="socialIcon" alt="社交娛樂 icon">
<h3 class="text-2xl font-bold mb-4" data-i18n="solutions_social_title">{{ pageMessages.solutions_social_title }}</h3>
<p class="text-gray-400 text-sm mb-6 leading-relaxed" data-i18n="solutions_social_desc">{{ pageMessages.solutions_social_desc }}</p>
<div class="mt-auto">
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4" data-i18n="solutions_core_tech">{{ pageMessages.solutions_core_tech }}</div>
<div class="flex flex-wrap gap-2 mb-8">
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_4_1">{{ pageMessages.solutions_chip_4_1 }}</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_4_2">{{ pageMessages.solutions_chip_4_2 }}</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_4_3">{{ pageMessages.solutions_chip_4_3 }}</span>
</div>
<a class="text-yellow-500 font-bold text-sm flex items-center space-x-1" :href="localizePath('/pricing')">
<span data-i18n="solutions_get_quote">{{ pageMessages.solutions_get_quote }}</span>
<iconify-icon icon="heroicons:arrow-small-right"></iconify-icon>
</a>
</div>
</div>
<!-- Solution 5 -->
<div class="glass-card p-10 rounded-[40px] flex flex-col h-full">
<img class="w-[90px] h-[90px] object-contain mb-8" :src="remoteMeetingIcon" alt="遠程會議 icon">
<h3 class="text-2xl font-bold mb-4" data-i18n="solutions_meeting_title">{{ pageMessages.solutions_meeting_title }}</h3>
<p class="text-gray-400 text-sm mb-6 leading-relaxed" data-i18n="solutions_meeting_desc">{{ pageMessages.solutions_meeting_desc }}</p>
<div class="mt-auto">
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4" data-i18n="solutions_core_tech">{{ pageMessages.solutions_core_tech }}</div>
<div class="flex flex-wrap gap-2 mb-8">
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]">1080P HD RTC</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_5_2">{{ pageMessages.solutions_chip_5_2 }}</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_5_3">{{ pageMessages.solutions_chip_5_3 }}</span>
</div>
<a class="text-green-500 font-bold text-sm flex items-center space-x-1" :href="localizePath('/pricing')">
<span data-i18n="solutions_get_quote">{{ pageMessages.solutions_get_quote }}</span>
<iconify-icon icon="heroicons:arrow-small-right"></iconify-icon>
</a>
</div>
</div>
<!-- Solution 6 -->
<div class="glass-card p-10 rounded-[40px] flex flex-col h-full">
<img class="w-[90px] h-[90px] object-contain mb-8" :src="gamingIcon" alt="遊戲雲端 icon">
<h3 class="text-2xl font-bold mb-4" data-i18n="solutions_game_title">{{ pageMessages.solutions_game_title }}</h3>
<p class="text-gray-400 text-sm mb-6 leading-relaxed" data-i18n="solutions_game_desc">{{ pageMessages.solutions_game_desc }}</p>
<div class="mt-auto">
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4" data-i18n="solutions_core_tech">{{ pageMessages.solutions_core_tech }}</div>
<div class="flex flex-wrap gap-2 mb-8">
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_6_1">{{ pageMessages.solutions_chip_6_1 }}</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_6_2">{{ pageMessages.solutions_chip_6_2 }}</span>
<span class="px-3 py-1 bg-white/5 rounded-full text-[10px]" data-i18n="solutions_chip_6_3">{{ pageMessages.solutions_chip_6_3 }}</span>
</div>
<a class="text-red-500 font-bold text-sm flex items-center space-x-1" :href="localizePath('/pricing')">
<span data-i18n="solutions_get_quote">{{ pageMessages.solutions_get_quote }}</span>
<iconify-icon icon="heroicons:arrow-small-right"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
<section class="py-24 bg-white/5">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl font-bold mb-4" data-i18n="solutions_guide_title">{{ pageMessages.solutions_guide_title }}</h2>
<p class="text-gray-400" data-i18n="solutions_guide_desc">{{ pageMessages.solutions_guide_desc }}</p>
</div>
<div class="glass-card rounded-3xl overflow-hidden">
<table class="w-full text-left">
<thead>
<tr class="bg-white/5 border-b border-white/10">
<th class="py-6 px-8 font-bold" data-i18n="solutions_guide_need">{{ pageMessages.solutions_guide_need }}</th>
<th class="py-6 px-8 font-bold" data-i18n="solutions_guide_recommend">{{ pageMessages.solutions_guide_recommend }}</th>
<th class="py-6 px-8 font-bold" data-i18n="solutions_guide_reason">{{ pageMessages.solutions_guide_reason }}</th>
</tr>
</thead>
<tbody class="text-sm">
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-8" data-i18n="solutions_guide_need_1">{{ pageMessages.solutions_guide_need_1 }}</td>
<td class="py-6 px-8 font-bold text-blue-500" data-i18n="solutions_vendor_css">{{ pageMessages.solutions_vendor_css }}</td>
<td class="py-6 px-8" data-i18n="solutions_guide_reason_1">{{ pageMessages.solutions_guide_reason_1 }}</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-8" data-i18n="solutions_guide_need_2">{{ pageMessages.solutions_guide_need_2 }}</td>
<td class="py-6 px-8 font-bold text-purple-500">BytePlus Media</td>
<td class="py-6 px-8" data-i18n="solutions_guide_reason_2">{{ pageMessages.solutions_guide_reason_2 }}</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-8" data-i18n="solutions_guide_need_3">{{ pageMessages.solutions_guide_need_3 }}</td>
<td class="py-6 px-8 font-bold text-cyan-500">Agora RTC</td>
<td class="py-6 px-8" data-i18n="solutions_guide_reason_3">{{ pageMessages.solutions_guide_reason_3 }}</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</template>

<script setup lang="ts">
import { messages } from '~/data/i18n'
import commerceIcon from '~/assets/images/dianshang.png'
import educationIcon from '~/assets/images/jiaoyu.png'
import crossBorderIcon from '~/assets/images/kuajing.png'
import socialIcon from '~/assets/images/shejiao.png'
import gamingIcon from '~/assets/images/youxi.png'
import remoteMeetingIcon from '~/assets/images/yuancheng.png'

definePageMeta({
  alias: ['/zh/solutions', '/zh-cn/solutions']
})

usePageSeo('solutions')
const { localizePath, currentLang } = useDomI18n()
const pageMessages = computed(() => messages[currentLang.value])
</script>
