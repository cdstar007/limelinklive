<template>
<!-- Header Section -->
<section class="pt-40 pb-20 relative grid-pattern">
<div class="max-w-7xl mx-auto px-6 text-center">
<h1 class="text-4xl lg:text-6xl font-bold mb-6"><span class="text-gradient" data-i18n="services_title">雲端視頻服務產品</span></h1>
<p class="text-xl text-gray-400 max-w-3xl mx-auto" data-i18n="services_hero_desc">
                我們代理全球最頂尖的音視頻基礎設施，結合 LIMELINK 的技術集成能力，為您提供最優質的雲端體驗。
            </p>
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
<h2 class="text-3xl font-bold mb-6" data-i18n="services_css_title">騰訊雲 CSS 直播串流</h2>
<p class="text-gray-400 mb-8 leading-relaxed" data-i18n="services_css_desc">
                            憑藉騰訊多年在音視頻領域的技術積累，CSS 提供極致穩定的直播體驗，覆蓋全球節點，支持千萬級併發。
                        </p>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-blue-500" icon="heroicons:bolt"></iconify-icon>
<span data-i18n="services_css_feat_1">&lt; 800ms 快直播延遲</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-blue-500" icon="heroicons:shield-check"></iconify-icon>
<span data-i18n="services_css_feat_2">企業級 DRM 版權保護</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-blue-500" icon="heroicons:video-camera"></iconify-icon>
<span data-i18n="services_css_feat_3">AI 智能極速轉碼</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-blue-500" icon="heroicons:globe-alt"></iconify-icon>
<span data-i18n="services_css_feat_4">2800+ 全球加速節點</span>
</div>
</div>
<div class="flex flex-wrap gap-2 mb-10">
<span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full" data-i18n="services_css_tag_1">高穩定性</span>
<span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full" data-i18n="services_css_tag_2">超大規模併發</span>
<span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full" data-i18n="services_css_tag_3">成熟生態</span>
</div>
<a class="inline-flex items-center space-x-2 text-blue-500 font-bold hover:underline" href="/service-css">
<span data-i18n="learn_more">了解更多</span>
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
<p class="text-gray-400 mb-8 leading-relaxed" data-i18n="services_byteplus_desc">
                            將 TikTok 與抖音同源的視頻技術開放給全球企業。提供業界領先的短視頻處理、智能推薦與全球直播能力。
                        </p>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-purple-500" icon="heroicons:sparkles"></iconify-icon>
<span data-i18n="services_byteplus_feat_1">智能內容推薦算法</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-purple-500" icon="heroicons:scissors"></iconify-icon>
<span data-i18n="services_byteplus_feat_2">極致短視頻剪輯引擎</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-purple-500" icon="heroicons:presentation-chart-line"></iconify-icon>
<span data-i18n="services_byteplus_feat_3">實時大數據分析看板</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-purple-500" icon="heroicons:language"></iconify-icon>
<span data-i18n="services_byteplus_feat_4">全球化合規運營支持</span>
</div>
</div>
<div class="flex flex-wrap gap-2 mb-10">
<span class="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs rounded-full" data-i18n="services_byteplus_tag_1">TikTok 同源</span>
<span class="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs rounded-full" data-i18n="services_byteplus_tag_2">短視頻首選</span>
<span class="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs rounded-full" data-i18n="services_byteplus_tag_3">智能算法</span>
</div>
<a class="inline-flex items-center space-x-2 text-purple-500 font-bold hover:underline" href="/service-byteplus">
<span data-i18n="learn_more">了解更多</span>
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
<h2 class="text-3xl font-bold mb-6" data-i18n="services_agora_title">Agora RTC 即時音視頻</h2>
<p class="text-gray-400 mb-8 leading-relaxed" data-i18n="services_agora_desc">
                            專注於實時互動。無論是 1 對 1 通話還是百萬人併發的互動直播，Agora 都能提供低於 400ms 的極致體驗。
                        </p>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-cyan-500" icon="heroicons:microphone"></iconify-icon>
<span data-i18n="services_agora_feat_1">AI 智能降噪與回聲消除</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-cyan-500" icon="heroicons:users"></iconify-icon>
<span data-i18n="services_agora_feat_2">百萬級超大頻道併發</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-cyan-500" icon="heroicons:device-phone-mobile"></iconify-icon>
<span data-i18n="services_agora_feat_3">10,000+ 終端設備適配</span>
</div>
<div class="flex items-center space-x-2 text-sm text-gray-300">
<iconify-icon class="text-cyan-500" icon="heroicons:code-bracket"></iconify-icon>
<span data-i18n="services_agora_feat_4">全平台 SDK 支持</span>
</div>
</div>
<div class="flex flex-wrap gap-2 mb-10">
<span class="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full" data-i18n="services_agora_tag_1">超低延遲</span>
<span class="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full" data-i18n="services_agora_tag_2">實時互動</span>
<span class="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full" data-i18n="services_agora_tag_3">開發者友好</span>
</div>
<a class="inline-flex items-center space-x-2 text-cyan-500 font-bold hover:underline" href="/service-agora">
<span data-i18n="learn_more">了解更多</span>
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
<h2 class="text-3xl font-bold mb-4" data-i18n="services_compare_title">核心能力對比</h2>
<p class="text-gray-400" data-i18n="services_compare_desc">幫助您根據業務需求選擇最合適的服務平臺</p>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-white/10">
<th class="py-6 px-4 font-bold text-gray-500" data-i18n="services_compare_metric">功能指標</th>
<th class="py-6 px-4 font-bold text-blue-500" data-i18n="services_vendor_css">騰訊雲 CSS</th>
<th class="py-6 px-4 font-bold text-purple-500">BytePlus Media</th>
<th class="py-6 px-4 font-bold text-cyan-500">Agora RTC</th>
</tr>
</thead>
<tbody class="text-sm">
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_scenario">主攻場景</td>
<td class="py-6 px-4" data-i18n="services_compare_css_scenario">大規模直播、媒體處理</td>
<td class="py-6 px-4" data-i18n="services_compare_byteplus_scenario">短視頻、全球直播、推薦</td>
<td class="py-6 px-4" data-i18n="services_compare_agora_scenario">實時通話、互動直播</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_latency">平均延遲</td>
<td class="py-6 px-4" data-i18n="services_latency_css">800ms - 3s (快直播)</td>
<td class="py-6 px-4">1s - 5s</td>
<td class="py-6 px-4">&lt; 400ms</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_nodes">全球節點</td>
<td class="py-6 px-4" data-i18n="services_nodes_css">2800+ (中國最強)</td>
<td class="py-6 px-4" data-i18n="services_compare_global">全球均衡覆蓋</td>
<td class="py-6 px-4" data-i18n="services_nodes_agora">SD-RTN 軟件定義網</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_media">媒體處理能力</td>
<td class="py-6 px-4" data-i18n="services_compare_css_media">極強 (轉碼、截圖、錄製)</td>
<td class="py-6 px-4" data-i18n="services_compare_byteplus_media">強 (智能剪輯、特效)</td>
<td class="py-6 px-4" data-i18n="services_compare_agora_media">中 (專注實時處理)</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-6 px-4 font-semibold" data-i18n="services_compare_concurrent">併發支持</td>
<td class="py-6 px-4" data-i18n="services_concurrent_css">千萬級</td>
<td class="py-6 px-4" data-i18n="services_concurrent_byteplus">億級 (TikTok 驗證)</td>
<td class="py-6 px-4" data-i18n="services_concurrent_agora">百萬級 (單頻道)</td>
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
<h2 class="text-3xl font-bold mb-4" data-i18n="services_why_title">為什麼通過 LIMELINK 採購？</h2>
<p class="text-gray-400" data-i18n="services_why_desc">我們不僅提供更優的價格，更提供全生命週期的技術保障。</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div class="glass-card p-8 rounded-2xl">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="priceIcon" alt="更具競爭力的價格 icon">
<h5 class="text-lg font-bold mb-3" data-i18n="services_why_1_title">更具競爭力的價格</h5>
<p class="text-sm text-gray-400" data-i18n="services_why_1_desc">作為核心代理商，我們擁有比官網更優的折扣權限，助您節省 15%-30% 的預算。</p>
</div>
<div class="glass-card p-8 rounded-2xl">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="integrationIcon" alt="專業技術集成 icon">
<h5 class="text-lg font-bold mb-3" data-i18n="services_why_2_title">專業技術集成</h5>
<p class="text-sm text-gray-400" data-i18n="services_why_2_desc">提供多平台 SDK 整合方案，解決不同服務商之間的兼容性問題。</p>
</div>
<div class="glass-card p-8 rounded-2xl">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="supportIcon" alt="本地化技術支援 icon">
<h5 class="text-lg font-bold mb-3" data-i18n="services_why_3_title">本地化技術支援</h5>
<p class="text-sm text-gray-400" data-i18n="services_why_3_desc">跨越時區與語言障礙，提供 7×24 小時的本地化專家支援與應急響應。</p>
</div>
<div class="glass-card p-8 rounded-2xl">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="managementIcon" alt="統一賬單與管理 icon">
<h5 class="text-lg font-bold mb-3" data-i18n="services_why_4_title">統一賬單與管理</h5>
<p class="text-sm text-gray-400" data-i18n="services_why_4_desc">多個雲服務商統一結算，簡化財務流程與資源管理成本。</p>
</div>
</div>
</div>
</section>
<!-- Footer -->
</template>

<script setup lang="ts">
import agoraCardImage from '~/assets/images/Agoracard.png'
import bytePlusCardImage from '~/assets/images/BytePluscard.png'
import managementIcon from '~/assets/images/guanli.png'
import integrationIcon from '~/assets/images/jicheng.png'
import priceIcon from '~/assets/images/jiage.png'
import supportIcon from '~/assets/images/zhiyuan.png'
import tencentCardImage from '~/assets/images/tencentcard.png'

definePageMeta({
  alias: ['/zh/services']
})

usePageSeo('services')
</script>
