<template>
<section class="pt-40 pb-24 bg-gradient-byteplus relative overflow-hidden">
<div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(white 1px, transparent 1px); background-size: 30px 30px;"></div>
<div class="max-w-7xl mx-auto px-6 relative z-10">
<div class="flex flex-col lg:flex-row items-center gap-12">
<div class="lg:w-2/3">
<div class="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-6 uppercase">BytePlus Media Live</div>
<h1 class="text-5xl lg:text-7xl font-bold mb-8"><span class="text-gradient" data-i18n="byteplus_hero_title">BytePlus 媒體直播服務</span></h1>
<p class="text-xl text-purple-100 mb-10 leading-relaxed max-w-2xl" data-i18n="byteplus_hero_desc">
                        將 TikTok 同源的視頻處理與推薦技術帶給您的業務。專為全球化佈局與極致用戶體驗而設計。
                    </p>
<div class="flex space-x-4">
<a class="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all" href="/pricing"><span data-i18n="nav_cta">立即諮詢</span></a>
<a class="px-8 py-4 bg-transparent border border-white/30 rounded-xl font-bold hover:bg-white/10 transition-all" href="#features"><span data-i18n="explore_service">探索服務</span></a>
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
<h2 class="text-3xl font-bold mb-4" data-i18n="byteplus_why_title">為什麼選擇 BytePlus？</h2>
<p class="text-gray-400" data-i18n="byteplus_why_desc">繼承字節跳動強大的視頻基因，為企業提供最具活力的媒體方案。</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
<div class="glass-card p-8 rounded-3xl">
<div class="crystal-icon crystal-purple mb-6"><iconify-icon icon="heroicons:sparkles"></iconify-icon></div>
<h4 class="text-xl font-bold mb-3" data-i18n="byteplus_feat_1_title">智能特效 SDK</h4>
<p class="text-sm text-gray-400" data-i18n="byteplus_feat_1_desc">集成抖音同款濾鏡、AR 貼紙與美顏算法，提升互動趣味性。</p>
</div>
<div class="glass-card p-8 rounded-3xl">
<div class="crystal-icon crystal-cyan mb-6"><iconify-icon icon="heroicons:chart-bar"></iconify-icon></div>
<h4 class="text-xl font-bold mb-3" data-i18n="byteplus_feat_2_title">精準推薦算法</h4>
<p class="text-sm text-gray-400" data-i18n="byteplus_feat_2_desc">利用大數據與機器學習，為用戶提供個性化內容分發，提高停留時長。</p>
</div>
<div class="glass-card p-8 rounded-3xl">
<div class="crystal-icon crystal-amber mb-6"><iconify-icon icon="heroicons:rocket-launch"></iconify-icon></div>
<h4 class="text-xl font-bold mb-3" data-i18n="byteplus_feat_3_title">全球加速分發</h4>
<p class="text-sm text-gray-400" data-i18n="byteplus_feat_3_desc">基於字節全球邊緣網絡，確保跨國直播與短視頻加載秒開。</p>
</div>
<div class="glass-card p-8 rounded-3xl">
<div class="crystal-icon crystal-rose mb-6"><iconify-icon icon="heroicons:chart-pie"></iconify-icon></div>
<h4 class="text-xl font-bold mb-3" data-i18n="byteplus_feat_4_title">實時數據分析</h4>
<p class="text-sm text-gray-400" data-i18n="byteplus_feat_4_desc">全鏈路數據監控，實時分析觀眾行為與流質量指標。</p>
</div>
</div>
<div class="glass-card p-12 rounded-[40px] flex flex-col lg:flex-row items-center gap-12">
<div class="lg:w-1/2">
<img alt="BytePlus Dashboard" class="rounded-2xl border border-white/10" src="https://modao.cc/agent-py/media/generated_images/2026-05-14/c97afffcacfa47088411c915b549bce0.jpg"/>
</div>
<div class="lg:w-1/2">
<h2 class="text-3xl font-bold mb-6" data-i18n="byteplus_short_video_title">更懂短視頻的媒體雲</h2>
<p class="text-gray-400 mb-8" data-i18n="byteplus_short_video_desc">
                        BytePlus Media Live 不僅僅是一個直播工具，它整合了字節跳動在短視頻領域的所有核心技術，包括高效的視頻編碼 (BVC)、智能分片加載與全球內容合規審核。
                    </p>
<div class="space-y-4">
<div class="flex items-center space-x-3">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="byteplus_check_1">支持 H.266 下一代編碼格式</span>
</div>
<div class="flex items-center space-x-3">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="byteplus_check_2">多語言自動字幕生成</span>
</div>
<div class="flex items-center space-x-3">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="byteplus_check_3">自動精彩片段剪輯 (Highlights)</span>
</div>
</div>
</div>
</div>
</div>
</section>
</template>

<script setup lang="ts">
definePageMeta({
  alias: ['/zh/service-byteplus']
})

usePageSeo('serviceByteplus')
</script>
