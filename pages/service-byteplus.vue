<template>
<section class="pt-40 pb-24 bg-gradient-byteplus relative overflow-hidden">
<div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(white 1px, transparent 1px); background-size: 30px 30px;"></div>
<div class="max-w-7xl mx-auto px-6 relative z-10">
<div class="flex flex-col lg:flex-row items-center gap-12">
<div class="lg:w-2/3">
<div class="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-6 uppercase">BytePlus Media Live</div>
<h1 class="text-5xl lg:text-7xl font-bold mb-8"><span class="text-gradient" data-i18n="byteplus_hero_title">{{ translate('byteplus_hero_title') }}</span></h1>
<p class="text-xl text-purple-100 mb-10 leading-relaxed max-w-2xl" data-i18n="byteplus_hero_desc">{{ translate('byteplus_hero_desc') }}</p>
<div class="flex space-x-4">
<a class="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all" :href="localizePath('/pricing')"><span data-i18n="nav_cta">{{ translate('nav_cta') }}</span></a>
<a class="px-8 py-4 bg-transparent border border-white/30 rounded-xl font-bold hover:bg-white/10 transition-all" href="#features"><span data-i18n="explore_service">{{ translate('explore_service') }}</span></a>
</div>
</div>
<div class="lg:w-1/3">
<img alt="BytePlus Logo Illustration" class="w-full animate-pulse" src="https://modao.cc/agent-py/media/generated_images/2026-05-14/21f9259af1c949bfac250e7a1cdcb599.jpg"/>
</div>
</div>
</div>
</section>
<section class="py-24" id="features">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl font-bold mb-4" data-i18n="byteplus_why_title">{{ translate('byteplus_why_title') }}</h2>
<p class="text-gray-400" data-i18n="byteplus_why_desc">{{ translate('byteplus_why_desc') }}</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
<div class="glass-card p-8 rounded-3xl">
<div class="crystal-icon crystal-purple mb-6"><iconify-icon icon="heroicons:sparkles"></iconify-icon></div>
<h4 class="text-xl font-bold mb-3" data-i18n="byteplus_feat_1_title">{{ translate('byteplus_feat_1_title') }}</h4>
<p class="text-sm text-gray-400" data-i18n="byteplus_feat_1_desc">{{ translate('byteplus_feat_1_desc') }}</p>
</div>
<div class="glass-card p-8 rounded-3xl">
<div class="crystal-icon crystal-cyan mb-6"><iconify-icon icon="heroicons:chart-bar"></iconify-icon></div>
<h4 class="text-xl font-bold mb-3" data-i18n="byteplus_feat_2_title">{{ translate('byteplus_feat_2_title') }}</h4>
<p class="text-sm text-gray-400" data-i18n="byteplus_feat_2_desc">{{ translate('byteplus_feat_2_desc') }}</p>
</div>
<div class="glass-card p-8 rounded-3xl">
<div class="crystal-icon crystal-amber mb-6"><iconify-icon icon="heroicons:rocket-launch"></iconify-icon></div>
<h4 class="text-xl font-bold mb-3" data-i18n="byteplus_feat_3_title">{{ translate('byteplus_feat_3_title') }}</h4>
<p class="text-sm text-gray-400" data-i18n="byteplus_feat_3_desc">{{ translate('byteplus_feat_3_desc') }}</p>
</div>
<div class="glass-card p-8 rounded-3xl">
<div class="crystal-icon crystal-rose mb-6"><iconify-icon icon="heroicons:chart-pie"></iconify-icon></div>
<h4 class="text-xl font-bold mb-3" data-i18n="byteplus_feat_4_title">{{ translate('byteplus_feat_4_title') }}</h4>
<p class="text-sm text-gray-400" data-i18n="byteplus_feat_4_desc">{{ translate('byteplus_feat_4_desc') }}</p>
</div>
</div>
<div class="glass-card p-12 rounded-[40px] flex flex-col lg:flex-row items-center gap-12">
<div class="lg:w-1/2">
<img alt="BytePlus Dashboard" class="rounded-2xl border border-white/10" src="https://modao.cc/agent-py/media/generated_images/2026-05-14/c97afffcacfa47088411c915b549bce0.jpg"/>
</div>
<div class="lg:w-1/2">
<h2 class="text-3xl font-bold mb-6" data-i18n="byteplus_short_video_title">{{ translate('byteplus_short_video_title') }}</h2>
<p class="text-gray-400 mb-8" data-i18n="byteplus_short_video_desc">{{ translate('byteplus_short_video_desc') }}</p>
<div class="space-y-4">
<div class="flex items-center space-x-3">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="byteplus_check_1">{{ translate('byteplus_check_1') }}</span>
</div>
<div class="flex items-center space-x-3">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="byteplus_check_2">{{ translate('byteplus_check_2') }}</span>
</div>
<div class="flex items-center space-x-3">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="byteplus_check_3">{{ translate('byteplus_check_3') }}</span>
</div>
</div>
</div>
</div>
</div>
</section>
</template>

<script setup lang="ts">
const { translate, localizePath } = useDomI18n()
definePageMeta({
  alias: ['/zh/service-byteplus']
})

usePageSeo('serviceByteplus')
</script>
