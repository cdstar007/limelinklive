<template>
<section class="pt-40 pb-24 bg-gradient-agora relative overflow-hidden text-[#0a0e1a]">
<div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(black 1px, transparent 1px); background-size: 40px 40px;"></div>
<div class="max-w-7xl mx-auto px-6 relative z-10">
<div class="flex flex-col lg:flex-row items-center gap-12">
<div class="lg:w-2/3">
<div class="inline-block px-4 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-bold mb-6 uppercase">Agora RTC SDK</div>
<h1 class="text-5xl lg:text-7xl font-bold mb-8"><span class="text-gradient" data-i18n="agora_hero_title">Agora RTC 即時互動領航者</span></h1>
<p class="text-xl font-medium mb-10 leading-relaxed max-w-2xl text-black/70" data-i18n="agora_hero_desc">
                        為全球開發者提供穩定、高質量的實時音視頻互動能力。低於 400ms 的延遲，讓互動如同面對面。
                    </p>
<div class="flex space-x-4">
<a class="px-8 py-4 bg-black text-white rounded-xl font-bold hover:scale-105 transition-all" href="/pricing"><span data-i18n="nav_cta">立即諮詢</span></a>
<a class="px-8 py-4 bg-transparent border border-black/20 rounded-xl font-bold hover:bg-black/5 transition-all" href="#sdk"><span data-i18n="agora_sdk_list">全平台 SDK 列表</span></a>
</div>
</div>
<div class="lg:w-1/3">
<div class="relative">
<div class="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
<iconify-icon class="text-[240px] relative z-10" icon="logos:agora-icon"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
<section class="py-24">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
<div>
<h2 class="text-3xl font-bold mb-6" data-i18n="agora_network_title">SD-RTN™ 網絡架構</h2>
<p class="text-gray-400 mb-6 leading-relaxed" data-i18n="agora_network_desc">
                        Agora 獨有的軟件定義實時網 (SD-RTN™) 覆蓋全球 200 多個國家和地區，通過智能路由算法，避開網絡擁塞，確保全球範圍內的通話穩定性。
                    </p>
<div class="grid grid-cols-2 gap-6">
<div class="p-6 glass-card rounded-2xl">
<div class="text-3xl font-bold text-cyan-500 mb-2">400ms</div>
<div class="text-xs text-gray-500" data-i18n="agora_latency_label">平均端到端時延</div>
</div>
<div class="p-6 glass-card rounded-2xl">
<div class="text-3xl font-bold text-cyan-500 mb-2">99.9%</div>
<div class="text-xs text-gray-500" data-i18n="agora_quality_label">優質傳輸率</div>
</div>
</div>
</div>
<div class="glass-card p-10 rounded-3xl">
<h3 class="text-xl font-bold mb-6" data-i18n="agora_features_title">核心互動功能</h3>
<ul class="space-y-4">
<li class="flex items-center space-x-3">
<iconify-icon class="text-cyan-500 text-xl" icon="heroicons:sparkles"></iconify-icon>
<span data-i18n="agora_feat_1">AI 降噪與回聲消除 (3A 算法)</span>
</li>
<li class="flex items-center space-x-3">
<iconify-icon class="text-cyan-500 text-xl" icon="heroicons:users"></iconify-icon>
<span data-i18n="agora_feat_2">百萬級超大頻道併發支持</span>
</li>
<li class="flex items-center space-x-3">
<iconify-icon class="text-cyan-500 text-xl" icon="heroicons:computer-desktop"></iconify-icon>
<span data-i18n="agora_feat_3">高清屏幕共享與協作</span>
</li>
<li class="flex items-center space-x-3">
<iconify-icon class="text-cyan-500 text-xl" icon="heroicons:musical-note"></iconify-icon>
<span data-i18n="agora_feat_4">3D 空間音效與背景音樂混音</span>
</li>
<li class="flex items-center space-x-3">
<iconify-icon class="text-cyan-500 text-xl" icon="heroicons:video-camera"></iconify-icon>
<span data-i18n="agora_feat_5">1080P/4K 高清視頻通話</span>
</li>
</ul>
</div>
</div>
<div class="text-center mb-16" id="sdk">
<h2 class="text-3xl font-bold mb-4" data-i18n="agora_sdk_title">全平台 SDK 支持</h2>
<p class="text-gray-400" data-i18n="agora_sdk_desc">一套代碼，多端同步，快速集成到您的應用中。</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
<div class="glass-card p-6 rounded-2xl flex flex-col items-center group hover:border-cyan-500 transition-all">
<iconify-icon class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all" icon="logos:android-icon"></iconify-icon>
<span class="text-sm font-semibold">Android</span>
</div>
<div class="glass-card p-6 rounded-2xl flex flex-col items-center group hover:border-cyan-500 transition-all">
<iconify-icon class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all" icon="logos:apple"></iconify-icon>
<span class="text-sm font-semibold">iOS / macOS</span>
</div>
<div class="glass-card p-6 rounded-2xl flex flex-col items-center group hover:border-cyan-500 transition-all">
<iconify-icon class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all" icon="logos:javascript"></iconify-icon>
<span class="text-sm font-semibold">Web / JS</span>
</div>
<div class="glass-card p-6 rounded-2xl flex flex-col items-center group hover:border-cyan-500 transition-all">
<iconify-icon class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all" icon="logos:flutter"></iconify-icon>
<span class="text-sm font-semibold">Flutter</span>
</div>
<div class="glass-card p-6 rounded-2xl flex flex-col items-center group hover:border-cyan-500 transition-all">
<iconify-icon class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all" icon="logos:react"></iconify-icon>
<span class="text-sm font-semibold">React Native</span>
</div>
<div class="glass-card p-6 rounded-2xl flex flex-col items-center group hover:border-cyan-500 transition-all">
<iconify-icon class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all" icon="logos:unity"></iconify-icon>
<span class="text-sm font-semibold">Unity</span>
</div>
</div>
</div>
</section>
</template>

<script setup lang="ts">
definePageMeta({
  alias: ['/zh/service-agora']
})

usePageSeo('serviceAgora')
</script>
