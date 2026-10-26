<template>
<section class="pt-40 pb-24 bg-gradient-tencent relative overflow-hidden">
<div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(white 1px, transparent 1px); background-size: 30px 30px;"></div>
<div class="max-w-7xl mx-auto px-6 relative z-10">
<div class="flex flex-col lg:flex-row items-center gap-12">
<div class="lg:w-2/3">
<div class="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-6">TENCENT CLOUD CSS</div>
<h1 class="text-5xl lg:text-7xl font-bold mb-8"><span class="text-gradient" data-i18n="css_hero_title">{{ translate('css_hero_title') }}</span></h1>
<p class="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl" data-i18n="css_hero_desc">{{ translate('css_hero_desc') }}</p>
<div class="flex space-x-4">
<a class="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all" :href="localizePath('/pricing')"><span data-i18n="nav_cta">{{ translate('nav_cta') }}</span></a>
<a class="px-8 py-4 bg-transparent border border-white/30 rounded-xl font-bold hover:bg-white/10 transition-all" href="#features"><span data-i18n="explore_service">{{ translate('explore_service') }}</span></a>
</div>
</div>
<div class="lg:w-1/3">
<div class="glass-card p-8 rounded-3xl border-white/20">
<div class="text-center mb-6">
<span class="text-blue-200 text-sm" data-i18n="agent_advantage">{{ translate('agent_advantage') }}</span>
</div>
<ul class="space-y-4">
<li class="flex items-center space-x-3">
<iconify-icon class="text-2xl text-green-400" icon="heroicons:check-badge-solid"></iconify-icon>
<span data-i18n="advantage_1">{{ translate('advantage_1') }}</span>
</li>
<li class="flex items-center space-x-3">
<iconify-icon class="text-2xl text-green-400" icon="heroicons:check-badge-solid"></iconify-icon>
<span data-i18n="advantage_2">{{ translate('advantage_2') }}</span>
</li>
<li class="flex items-center space-x-3">
<iconify-icon class="text-2xl text-green-400" icon="heroicons:check-badge-solid"></iconify-icon>
<span data-i18n="advantage_3">{{ translate('advantage_3') }}</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section class="py-24" id="features">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
<div class="glass-card p-10 rounded-3xl">
<div class="crystal-icon crystal-blue mb-6"><iconify-icon icon="heroicons:bolt"></iconify-icon></div>
<h3 class="text-2xl font-bold mb-4" data-i18n="css_feature_1_title">{{ translate('css_feature_1_title') }}</h3>
<p class="text-gray-400" data-i18n="css_feature_1_desc">{{ translate('css_feature_1_desc') }}</p>
</div>
<div class="glass-card p-10 rounded-3xl">
<div class="crystal-icon crystal-cyan mb-6"><iconify-icon icon="heroicons:globe-americas"></iconify-icon></div>
<h3 class="text-2xl font-bold mb-4" data-i18n="css_feature_2_title">{{ translate('css_feature_2_title') }}</h3>
<p class="text-gray-400" data-i18n="css_feature_2_desc">{{ translate('css_feature_2_desc') }}</p>
</div>
<div class="glass-card p-10 rounded-3xl">
<div class="crystal-icon crystal-emerald mb-6"><iconify-icon icon="heroicons:shield-check"></iconify-icon></div>
<h3 class="text-2xl font-bold mb-4" data-i18n="css_feature_3_title">{{ translate('css_feature_3_title') }}</h3>
<p class="text-gray-400" data-i18n="css_feature_3_desc">{{ translate('css_feature_3_desc') }}</p>
</div>
</div>
<div class="flex flex-col lg:flex-row items-center gap-16">
<div class="lg:w-1/2">
<h2 class="text-3xl lg:text-4xl font-bold mb-8" data-i18n="css_media_title">{{ translate('css_media_title') }}</h2>
<ul class="space-y-6">
<li class="flex items-start space-x-4">
<div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
<iconify-icon class="text-blue-500" icon="heroicons:video-camera"></iconify-icon>
</div>
<div>
<h4 class="font-bold mb-1" data-i18n="css_media_1_title">{{ translate('css_media_1_title') }}</h4>
<p class="text-sm text-gray-400" data-i18n="css_media_1_desc">{{ translate('css_media_1_desc') }}</p>
</div>
</li>
<li class="flex items-start space-x-4">
<div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
<iconify-icon class="text-blue-500" icon="heroicons:clock"></iconify-icon>
</div>
<div>
<h4 class="font-bold mb-1" data-i18n="css_media_2_title">{{ translate('css_media_2_title') }}</h4>
<p class="text-sm text-gray-400" data-i18n="css_media_2_desc">{{ translate('css_media_2_desc') }}</p>
</div>
</li>
<li class="flex items-start space-x-4">
<div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
<iconify-icon class="text-blue-500" icon="heroicons:photo"></iconify-icon>
</div>
<div>
<h4 class="font-bold mb-1" data-i18n="css_media_3_title">{{ translate('css_media_3_title') }}</h4>
<p class="text-sm text-gray-400" data-i18n="css_media_3_desc">{{ translate('css_media_3_desc') }}</p>
</div>
</li>
</ul>
</div>
<div class="lg:w-1/2">
<div class="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 p-8 overflow-hidden relative">
<div class="absolute -top-16 -right-16 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl"></div>
<div class="flex items-center justify-between mb-8 relative z-10">
<iconify-icon class="text-5xl" icon="logos:tencent-cloud"></iconify-icon>
<span class="text-xs font-bold text-blue-200 bg-blue-500/15 px-3 py-1 rounded-full">CSS MEDIA PIPELINE</span>
</div>
<div class="grid grid-cols-3 gap-4 relative z-10">
<div class="glass-card rounded-2xl p-5 text-center">
<iconify-icon class="text-4xl text-blue-300 mb-4" icon="heroicons:video-camera"></iconify-icon>
<div class="text-xs text-blue-100">Transcode</div>
</div>
<div class="glass-card rounded-2xl p-5 text-center">
<iconify-icon class="text-4xl text-cyan-300 mb-4" icon="heroicons:clock"></iconify-icon>
<div class="text-xs text-blue-100">Record</div>
</div>
<div class="glass-card rounded-2xl p-5 text-center">
<iconify-icon class="text-4xl text-emerald-300 mb-4" icon="heroicons:shield-check"></iconify-icon>
<div class="text-xs text-blue-100">Protect</div>
</div>
</div>
<div class="mt-8 grid grid-cols-4 gap-3 relative z-10">
<div class="h-3 bg-blue-400 rounded-full"></div>
<div class="h-3 bg-cyan-400 rounded-full"></div>
<div class="h-3 bg-emerald-400 rounded-full"></div>
<div class="h-3 bg-white/30 rounded-full"></div>
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
  alias: ['/zh/service-css']
})

usePageSeo('serviceCss')
</script>
