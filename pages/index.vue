<template>
<!-- Hero Section -->
<section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
<picture class="absolute inset-0">
<source :srcset="mobileHero" media="(max-width: 767px)"/>
<img class="h-full w-full object-cover object-center" :src="webHero" alt="LIMELINK cloud video streaming platform banner" fetchpriority="high"/>
</picture>
<div class="absolute inset-0 bg-[#050810]/65 pointer-events-none md:hidden"></div>
<div class="max-w-7xl mx-auto px-6 relative z-10 lg:-translate-x-8 xl:-translate-x-12">
<div class="max-w-3xl">
<div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 fade-in-up">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span data-i18n="hero_badge">騰訊雲 / BytePlus / Agora 官方核心代理</span>
</div>
<h1 class="text-5xl lg:text-7xl font-bold leading-tight mb-8 fade-in-up">
<span data-i18n="hero_tagline">專業雲端視頻服務代理與技術整合商</span>
</h1>
<p class="text-xl text-gray-400 mb-10 leading-relaxed fade-in-up" data-i18n="hero_desc">
                    LIMELINK 為企業提供全球領先的實時音視頻與媒體處理方案。我們整合騰訊雲 CSS、BytePlus 與 Agora 的頂尖技術，助您快速構建高品質的視頻應用。
                </p>
<div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in-up">
<a class="px-8 py-4 bg-gradient-tech rounded-xl font-bold text-center hover:scale-105 transition-transform" href="/pricing"><span data-i18n="get_started">開始使用</span></a>
<a class="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-center hover:bg-white/10 transition-all" href="/services"><span data-i18n="explore_service">探索服務</span></a>
</div>
</div>
</div>
</section>
<!-- Trust Bar -->
<section class="py-20 border-y border-white/5 bg-[#0a0e1a]/50">
<div class="max-w-7xl mx-auto px-6">
<p class="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10" data-i18n="home_brand_trust">官方授權合作夥伴</p>
<div class="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-75">
<div class="flex flex-col items-center gap-3">
<img class="h-14 w-14 object-contain grayscale hover:grayscale-0 transition-all" :src="tencentLogo" alt="Tencent Cloud logo">
<span class="font-bold text-xl" data-i18n="brand_tencent">騰訊雲</span>
</div>
<div class="flex flex-col items-center gap-3">
<img class="h-14 w-14 object-contain grayscale hover:grayscale-0 transition-all" :src="bytePlusLogo" alt="BytePlus logo">
<span class="font-bold text-xl">BytePlus</span>
</div>
<div class="flex flex-col items-center gap-3">
<img class="h-14 w-14 object-contain grayscale hover:grayscale-0 transition-all" :src="agoraLogo" alt="Agora logo">
<span class="font-bold text-xl">Agora</span>
</div>
<div class="flex flex-col items-center gap-3">
<img class="h-14 w-14 object-contain grayscale hover:grayscale-0 transition-all" :src="awsLogo" alt="AWS logo">
<span class="font-bold text-xl">AWS</span>
</div>
</div>
</div>
</section>
<!-- Core Values -->
<section class="py-24 relative overflow-hidden">
<div class="max-w-7xl mx-auto px-6 relative z-10">
<div class="text-center max-w-2xl mx-auto mb-16">
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_value_title">為什麼選擇 LIMELINK</h2>
<p class="text-gray-400" data-i18n="home_value_desc">我們不僅僅是代理商，更是您的雲端技術架構專家，為您解決從選型到上線的所有技術挑戰。</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div class="glass-card p-8 rounded-2xl fade-in-up">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="integrationAdvantageIcon" alt="技術整合優勢 icon">
<h3 class="text-xl font-bold mb-4" data-i18n="home_value_1_title">技術整合優勢</h3>
<p class="text-gray-400 leading-relaxed" data-i18n="home_value_1_desc">一站式整合多平台 SDK，提供統一的 API 管理與架構諮詢，降低 40% 的開發複雜度。</p>
</div>
<div class="glass-card p-8 rounded-2xl fade-in-up" style="transition-delay: 0.1s;">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="globalNodesIcon" alt="全球節點覆蓋 icon">
<h3 class="text-xl font-bold mb-4" data-i18n="home_value_2_title">全球節點覆蓋</h3>
<p class="text-gray-400 leading-relaxed" data-i18n="home_value_2_desc">覆蓋全球 200+ 國家與地區，2800+ 節點支撐，確保極致的低延遲與高可用性。</p>
</div>
<div class="glass-card p-8 rounded-2xl fade-in-up" style="transition-delay: 0.2s;">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="support247Icon" alt="7×24 技術支援 icon">
<h3 class="text-xl font-bold mb-4" data-i18n="home_value_3_title">7×24 技術支援</h3>
<p class="text-gray-400 leading-relaxed" data-i18n="home_value_3_desc">專業架構師團隊 24 小時在線，提供故障排查與性能優化，響應時間低於 15 分鐘。</p>
</div>
</div>
</div>
</section>
<!-- Product Matrix -->
<section class="py-24 bg-white/5">
<div class="max-w-7xl mx-auto px-6">
<div class="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
<div class="max-w-2xl">
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_products_title">代理產品矩陣</h2>
<p class="text-gray-400 text-lg" data-i18n="home_products_subtitle">精選全球頂尖雲服務，提供最具競爭力的折扣與專業的技術交付。</p>
</div>
<a class="text-blue-500 font-semibold flex items-center space-x-1 group" href="/services">
<span data-i18n="home_products_all">查看所有產品</span>
<iconify-icon class="group-hover:translate-x-1 transition-transform" icon="heroicons:arrow-right"></iconify-icon>
</a>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Tencent Cloud -->
<div class="glass-card rounded-2xl overflow-hidden flex flex-col">
<div class="p-8 border-b border-white/5">
<iconify-icon class="text-4xl mb-6" icon="logos:tencent-cloud"></iconify-icon>
<h3 class="text-2xl font-bold mb-2" data-i18n="home_products_css">騰訊雲 CSS</h3>
<p class="text-blue-400 text-sm font-medium mb-4" data-i18n="home_products_css_sub">專業串流與媒體處理</p>
<ul class="space-y-3 text-gray-400 text-sm">
<li class="flex items-center space-x-2">
<iconify-icon class="text-blue-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_css_1">超低延遲直播 (快直播)</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-blue-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_css_2">極速轉碼與智能剪輯</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-blue-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_css_3">全球加速分發網絡</span>
</li>
</ul>
</div>
<div class="p-6 mt-auto">
<a class="block w-full py-3 text-center bg-white/5 rounded-xl font-semibold hover:bg-white/10 transition-all" href="/service-css"><span data-i18n="learn_more">了解更多</span></a>
</div>
</div>
<!-- BytePlus -->
<div class="glass-card rounded-2xl overflow-hidden flex flex-col">
<div class="p-8 border-b border-white/5">
<iconify-icon class="text-4xl mb-6" icon="logos:byteplus"></iconify-icon>
<h3 class="text-2xl font-bold mb-2">BytePlus Media Live</h3>
<p class="text-purple-400 text-sm font-medium mb-4" data-i18n="home_products_byteplus_sub">賦能企業全球化發展</p>
<ul class="space-y-3 text-gray-400 text-sm">
<li class="flex items-center space-x-2">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_byteplus_1">TikTok 同源技術棧</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_byteplus_2">智能推薦與互動算法</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_byteplus_3">極致的短視頻處理能力</span>
</li>
</ul>
</div>
<div class="p-6 mt-auto">
<a class="block w-full py-3 text-center bg-white/5 rounded-xl font-semibold hover:bg-white/10 transition-all" href="/service-byteplus"><span data-i18n="learn_more">了解更多</span></a>
</div>
</div>
<!-- Agora -->
<div class="glass-card rounded-2xl overflow-hidden flex flex-col">
<div class="p-8 border-b border-white/5">
<iconify-icon class="text-4xl mb-6" icon="logos:agora-icon"></iconify-icon>
<h3 class="text-2xl font-bold mb-2">Agora RTC</h3>
<p class="text-cyan-400 text-sm font-medium mb-4" data-i18n="home_products_agora_sub">實時互動音視頻領航者</p>
<ul class="space-y-3 text-gray-400 text-sm">
<li class="flex items-center space-x-2">
<iconify-icon class="text-cyan-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_agora_1">低於 400ms 全球時延</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-cyan-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_agora_2">百萬級超大頻道併發</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-cyan-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_agora_3">AI 降噪與空間音效</span>
</li>
</ul>
</div>
<div class="p-6 mt-auto">
<a class="block w-full py-3 text-center bg-white/5 rounded-xl font-semibold hover:bg-white/10 transition-all" href="/service-agora"><span data-i18n="learn_more">了解更多</span></a>
</div>
</div>
</div>
</div>
</section>
<!-- Solutions Grid -->
<section class="py-24">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center max-w-2xl mx-auto mb-16">
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_solutions_title">行業解決方案</h2>
<p class="text-gray-400" data-i18n="home_solutions_desc">深耕行業應用場景，為您提供成熟、可落地的技術架構方案。</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<a class="glass-card p-8 rounded-2xl group" href="/solutions">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="commerceIcon" alt="電商直播 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors" data-i18n="home_solution_1_title">電商直播</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_1_desc">低延遲秒殺、互動抽獎、多主播連麥，提升轉化率。</p>
</a>
<a class="glass-card p-8 rounded-2xl group" href="/solutions">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="educationIcon" alt="在線教育 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors" data-i18n="home_solution_2_title">在線教育</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_2_desc">互動白板、分組課堂、錄製回放，還原真實教學場景。</p>
</a>
<a class="glass-card p-8 rounded-2xl group" href="/solutions">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="crossBorderIcon" alt="跨境出海 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors" data-i18n="home_solution_3_title">跨境出海</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_3_desc">全球加速網絡，跨國穩定串流，助企業拓展全球版圖。</p>
</a>
<a class="glass-card p-8 rounded-2xl group" href="/solutions">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="socialIcon" alt="社交娛樂 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors" data-i18n="home_solution_4_title">社交娛樂</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_4_desc">語音電台、派對直播、AR 濾鏡，打造極致社交體驗。</p>
</a>
<a class="glass-card p-8 rounded-2xl group" href="/solutions">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="remoteMeetingIcon" alt="遠程會議 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors" data-i18n="home_solution_5_title">遠程會議</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_5_desc">高清流暢、屏幕共享、智能降噪，提升協作效率。</p>
</a>
<a class="glass-card p-8 rounded-2xl group" href="/solutions">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="gamingIcon" alt="遊戲雲端 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors" data-i18n="home_solution_6_title">遊戲雲端</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_6_desc">遊戲語音、雲端渲染、實時觀戰，強化玩家互動。</p>
</a>
</div>
</div>
</section>
<!-- Process -->
<section class="py-24 bg-white/5 relative">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_process_title">導入流程</h2>
<p class="text-gray-400" data-i18n="home_process_desc">快速啟動，專業護航，助您在幾天內完成從構思到上線。</p>
</div>
<div class="relative flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-8">
<div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0"></div>
<div class="relative z-10 flex flex-col items-center text-center md:w-1/4">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="communicationIcon" alt="需求溝通 icon">
<h5 class="text-xl font-bold mb-2" data-i18n="home_process_1">需求溝通</h5>
<p class="text-sm text-gray-400" data-i18n="home_process_1_desc">分析業務場景，明確技術指標與預算規模。</p>
</div>
<div class="relative z-10 flex flex-col items-center text-center md:w-1/4">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="designIcon" alt="方案設計 icon">
<h5 class="text-xl font-bold mb-2" data-i18n="home_process_2">方案設計</h5>
<p class="text-sm text-gray-400" data-i18n="home_process_2_desc">架構師設計專屬方案，提供最佳產品選型建議。</p>
</div>
<div class="relative z-10 flex flex-col items-center text-center md:w-1/4">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="testingIcon" alt="部署測試 icon">
<h5 class="text-xl font-bold mb-2" data-i18n="home_process_3">部署測試</h5>
<p class="text-sm text-gray-400" data-i18n="home_process_3_desc">協助 SDK 接入手冊與聯調測試，確保穩定性。</p>
</div>
<div class="relative z-10 flex flex-col items-center text-center md:w-1/4">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="operationsIcon" alt="上線運維 icon">
<h5 class="text-xl font-bold mb-2" data-i18n="home_process_4">上線運維</h5>
<p class="text-sm text-gray-400" data-i18n="home_process_4_desc">7×24 小時監控保障，持續優化使用成本。</p>
</div>
</div>
</div>
</section>
<!-- Stats -->
<section class="py-24 bg-gradient-tech overflow-hidden relative">
<div class="absolute inset-0 opacity-10 grid-pattern"></div>
<div class="max-w-7xl mx-auto px-6 relative z-10">
<div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div>
<div class="text-4xl lg:text-6xl font-bold mb-2">500+</div>
<div class="text-blue-100 font-medium" data-i18n="home_stats_clients">企業客戶</div>
</div>
<div>
<div class="text-4xl lg:text-6xl font-bold mb-2">99.99%</div>
<div class="text-blue-100 font-medium" data-i18n="home_stats_sla">服務可用性 (SLA)</div>
</div>
<div>
<div class="text-4xl lg:text-6xl font-bold mb-2">50+</div>
<div class="text-blue-100 font-medium" data-i18n="home_stats_countries">覆蓋國家</div>
</div>
<div>
<div class="text-4xl lg:text-6xl font-bold mb-2">7×24</div>
<div class="text-blue-100 font-medium" data-i18n="home_stats_support">專家支援</div>
</div>
</div>
</div>
</section>
<!-- Testimonials -->
<section class="py-24 overflow-hidden">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_testimonials_title">客戶評價</h2>
<p class="text-gray-400" data-i18n="home_testimonials_desc">聽聽那些已經成功轉型的企業對我們的評價。</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="glass-card p-10 rounded-3xl relative">
<iconify-icon class="text-6xl text-blue-500/20 absolute top-6 right-6" icon="heroicons:chat-bubble-bottom-center-text"></iconify-icon>
<div class="flex items-center space-x-4 mb-6">
<div aria-hidden="true" class="w-16 h-16 rounded-full border-2 border-blue-500 bg-blue-500/10 flex items-center justify-center text-blue-200 font-bold text-lg">LM</div>
<div>
<h6 class="font-bold text-lg" data-i18n="home_testimonial_1_name">李明輝</h6>
<p class="text-gray-400 text-sm" data-i18n="home_testimonial_1_role">某知名在線教育平台 CTO</p>
</div>
</div>
<p class="text-gray-300 italic leading-relaxed" data-i18n="home_testimonial_1_quote">
                        "LIMELINK 幫助我們在不到兩週的時間內完成了從傳統直播到低延遲互動課堂的切換。他們的技術支援非常專業，特別是在解決跨國網絡波動問題上給予了極大幫助。"
                    </p>
</div>
<div class="glass-card p-10 rounded-3xl relative">
<iconify-icon class="text-6xl text-blue-500/20 absolute top-6 right-6" icon="heroicons:chat-bubble-bottom-center-text"></iconify-icon>
<div class="flex items-center space-x-4 mb-6">
<div aria-hidden="true" class="w-16 h-16 rounded-full border-2 border-cyan-500 bg-cyan-500/10 flex items-center justify-center text-cyan-200 font-bold text-lg">SZ</div>
<div>
<h6 class="font-bold text-lg">Sarah Zhang</h6>
<p class="text-gray-400 text-sm" data-i18n="home_testimonial_2_role">跨境電商 App 運營總監</p>
</div>
</div>
<p class="text-gray-300 italic leading-relaxed" data-i18n="home_testimonial_2_quote">
                        "選擇代理商最看重的是成本優化與快速響應。LIMELINK 不僅為我們爭取到了極具競爭力的價格，更在我們大促期間提供了全程駐場式的在線技術保障。"
                    </p>
</div>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="py-24">
<div class="max-w-5xl mx-auto px-6">
<div class="glass-card rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden">
<div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
<div class="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
<h2 class="text-4xl lg:text-5xl font-bold mb-8 relative z-10" data-i18n="home_cta_title">準備好升級您的視頻服務了嗎？</h2>
<p class="text-xl text-gray-400 mb-12 relative z-10" data-i18n="home_cta_desc">立即聯繫我們的技術專家，獲取專屬方案與限時折扣。</p>
<div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
<a class="px-10 py-5 bg-gradient-tech rounded-2xl font-bold text-lg hover:scale-105 transition-transform" href="/pricing"><span data-i18n="get_started">開始使用</span></a>
<a class="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all" href="/contact"><span data-i18n="contact_now">聯絡我們</span></a>
</div>
</div>
</div>
</section>
<!-- Footer -->
</template>

<script setup lang="ts">
import webHero from '~/assets/images/webheroclear.png'
import mobileHero from '~/assets/images/mobilehero.png'
import support247Icon from '~/assets/images/724.png'
import agoraLogo from '~/assets/images/Agora.png'
import awsLogo from '~/assets/images/aws-color.png'
import bytePlusLogo from '~/assets/images/BytePlus.png'
import commerceIcon from '~/assets/images/dianshang.png'
import testingIcon from '~/assets/images/ceshi.png'
import communicationIcon from '~/assets/images/goutong.png'
import educationIcon from '~/assets/images/jiaoyu.png'
import integrationAdvantageIcon from '~/assets/images/jishuzhenghe.png'
import crossBorderIcon from '~/assets/images/kuajing.png'
import globalNodesIcon from '~/assets/images/quanqiujiedian.png'
import designIcon from '~/assets/images/sheji.png'
import socialIcon from '~/assets/images/shejiao.png'
import tencentLogo from '~/assets/images/tencent.png'
import operationsIcon from '~/assets/images/yunwei.png'
import gamingIcon from '~/assets/images/youxi.png'
import remoteMeetingIcon from '~/assets/images/yuancheng.png'

definePageMeta({
  alias: ['/zh']
})

usePageSeo('home')
</script>
