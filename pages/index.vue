<template>
<!-- Hero Section -->
<section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
<picture class="absolute inset-0">
<source :srcset="mobileHero" media="(max-width: 767px)" type="image/webp"/>
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
<span data-i18n="hero_badge">{{ pageMessages.hero_badge }}</span>
</div>
<h1 class="text-5xl lg:text-7xl font-bold leading-tight mb-8 fade-in-up">
<span data-i18n="hero_tagline">{{ pageMessages.hero_tagline }}</span>
</h1>
<p class="text-xl text-gray-400 mb-10 leading-relaxed fade-in-up" data-i18n="hero_desc">{{ pageMessages.hero_desc }}</p>
<div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in-up">
<a class="px-8 py-4 bg-gradient-tech rounded-xl font-bold text-center hover:scale-105 transition-transform" :href="localizePath('/pricing')"><span data-i18n="get_started">{{ pageMessages.get_started }}</span></a>
<a class="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-center hover:bg-white/10 transition-all" :href="localizePath('/services')"><span data-i18n="explore_service">{{ pageMessages.explore_service }}</span></a>
</div>
</div>
</div>
</section>
<!-- Trust Bar -->
<section class="py-20 border-y border-white/5 bg-[#0a0e1a]/50">
<div class="max-w-7xl mx-auto px-6">
<p class="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10" data-i18n="home_brand_trust">{{ pageMessages.home_brand_trust }}</p>
<div class="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-75">
<div class="flex flex-col items-center gap-3">
<img class="h-14 w-14 object-contain grayscale hover:grayscale-0 transition-all" :src="tencentLogo" alt="Tencent Cloud logo">
<span class="font-bold text-xl" data-i18n="brand_tencent">{{ pageMessages.brand_tencent }}</span>
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
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_value_title">{{ pageMessages.home_value_title }}</h2>
<p class="text-gray-400" data-i18n="home_value_desc">{{ pageMessages.home_value_desc }}</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div class="glass-card p-8 rounded-2xl fade-in-up">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="integrationAdvantageIcon" alt="技術整合優勢 icon">
<h3 class="text-xl font-bold mb-4" data-i18n="home_value_1_title">{{ pageMessages.home_value_1_title }}</h3>
<p class="text-gray-400 leading-relaxed" data-i18n="home_value_1_desc">{{ pageMessages.home_value_1_desc }}</p>
</div>
<div class="glass-card p-8 rounded-2xl fade-in-up" style="transition-delay: 0.1s;">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="globalNodesIcon" alt="全球節點覆蓋 icon">
<h3 class="text-xl font-bold mb-4" data-i18n="home_value_2_title">{{ pageMessages.home_value_2_title }}</h3>
<p class="text-gray-400 leading-relaxed" data-i18n="home_value_2_desc">{{ pageMessages.home_value_2_desc }}</p>
</div>
<div class="glass-card p-8 rounded-2xl fade-in-up" style="transition-delay: 0.2s;">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="support247Icon" alt="7×24 技術支援 icon">
<h3 class="text-xl font-bold mb-4" data-i18n="home_value_3_title">{{ pageMessages.home_value_3_title }}</h3>
<p class="text-gray-400 leading-relaxed" data-i18n="home_value_3_desc">{{ pageMessages.home_value_3_desc }}</p>
</div>
</div>
</div>
</section>
<!-- Product Matrix -->
<section class="py-24 bg-white/5">
<div class="max-w-7xl mx-auto px-6">
<div class="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
<div class="max-w-2xl">
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_products_title">{{ pageMessages.home_products_title }}</h2>
<p class="text-gray-400 text-lg" data-i18n="home_products_subtitle">{{ pageMessages.home_products_subtitle }}</p>
</div>
<a class="text-blue-500 font-semibold flex items-center space-x-1 group" :href="localizePath('/services')">
<span data-i18n="home_products_all">{{ pageMessages.home_products_all }}</span>
<iconify-icon class="group-hover:translate-x-1 transition-transform" icon="heroicons:arrow-right"></iconify-icon>
</a>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Tencent Cloud -->
<div class="glass-card rounded-2xl overflow-hidden flex flex-col">
<div class="p-8 border-b border-white/5">
<iconify-icon class="text-4xl mb-6" icon="logos:tencent-cloud"></iconify-icon>
<h3 class="text-2xl font-bold mb-2" data-i18n="home_products_css">{{ pageMessages.home_products_css }}</h3>
<p class="text-blue-400 text-sm font-medium mb-4" data-i18n="home_products_css_sub">{{ pageMessages.home_products_css_sub }}</p>
<ul class="space-y-3 text-gray-400 text-sm">
<li class="flex items-center space-x-2">
<iconify-icon class="text-blue-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_css_1">{{ pageMessages.home_products_css_1 }}</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-blue-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_css_2">{{ pageMessages.home_products_css_2 }}</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-blue-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_css_3">{{ pageMessages.home_products_css_3 }}</span>
</li>
</ul>
</div>
<div class="p-6 mt-auto">
<a class="block w-full py-3 text-center bg-white/5 rounded-xl font-semibold hover:bg-white/10 transition-all" :href="localizePath('/service-css')"><span data-i18n="learn_more">{{ pageMessages.learn_more }}</span></a>
</div>
</div>
<!-- BytePlus -->
<div class="glass-card rounded-2xl overflow-hidden flex flex-col">
<div class="p-8 border-b border-white/5">
<iconify-icon class="text-4xl mb-6" icon="logos:byteplus"></iconify-icon>
<h3 class="text-2xl font-bold mb-2">BytePlus Media Live</h3>
<p class="text-purple-400 text-sm font-medium mb-4" data-i18n="home_products_byteplus_sub">{{ pageMessages.home_products_byteplus_sub }}</p>
<ul class="space-y-3 text-gray-400 text-sm">
<li class="flex items-center space-x-2">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_byteplus_1">{{ pageMessages.home_products_byteplus_1 }}</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_byteplus_2">{{ pageMessages.home_products_byteplus_2 }}</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-purple-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_byteplus_3">{{ pageMessages.home_products_byteplus_3 }}</span>
</li>
</ul>
</div>
<div class="p-6 mt-auto">
<a class="block w-full py-3 text-center bg-white/5 rounded-xl font-semibold hover:bg-white/10 transition-all" :href="localizePath('/service-byteplus')"><span data-i18n="learn_more">{{ pageMessages.learn_more }}</span></a>
</div>
</div>
<!-- Agora -->
<div class="glass-card rounded-2xl overflow-hidden flex flex-col">
<div class="p-8 border-b border-white/5">
<iconify-icon class="text-4xl mb-6" icon="logos:agora-icon"></iconify-icon>
<h3 class="text-2xl font-bold mb-2">Agora RTC</h3>
<p class="text-cyan-400 text-sm font-medium mb-4" data-i18n="home_products_agora_sub">{{ pageMessages.home_products_agora_sub }}</p>
<ul class="space-y-3 text-gray-400 text-sm">
<li class="flex items-center space-x-2">
<iconify-icon class="text-cyan-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_agora_1">{{ pageMessages.home_products_agora_1 }}</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-cyan-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_agora_2">{{ pageMessages.home_products_agora_2 }}</span>
</li>
<li class="flex items-center space-x-2">
<iconify-icon class="text-cyan-500" icon="heroicons:check-circle"></iconify-icon>
<span data-i18n="home_products_agora_3">{{ pageMessages.home_products_agora_3 }}</span>
</li>
</ul>
</div>
<div class="p-6 mt-auto">
<a class="block w-full py-3 text-center bg-white/5 rounded-xl font-semibold hover:bg-white/10 transition-all" :href="localizePath('/service-agora')"><span data-i18n="learn_more">{{ pageMessages.learn_more }}</span></a>
</div>
</div>
</div>
</div>
</section>
<!-- Solutions Grid -->
<section class="py-24">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center max-w-2xl mx-auto mb-16">
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_solutions_title">{{ pageMessages.home_solutions_title }}</h2>
<p class="text-gray-400" data-i18n="home_solutions_desc">{{ pageMessages.home_solutions_desc }}</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<a class="glass-card p-8 rounded-2xl group" :href="localizePath('/solutions')">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="commerceIcon" alt="電商直播 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors" data-i18n="home_solution_1_title">{{ pageMessages.home_solution_1_title }}</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_1_desc">{{ pageMessages.home_solution_1_desc }}</p>
</a>
<a class="glass-card p-8 rounded-2xl group" :href="localizePath('/solutions')">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="educationIcon" alt="線上教育 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors" data-i18n="home_solution_2_title">{{ pageMessages.home_solution_2_title }}</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_2_desc">{{ pageMessages.home_solution_2_desc }}</p>
</a>
<a class="glass-card p-8 rounded-2xl group" :href="localizePath('/solutions')">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="crossBorderIcon" alt="跨境出海 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors" data-i18n="home_solution_3_title">{{ pageMessages.home_solution_3_title }}</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_3_desc">{{ pageMessages.home_solution_3_desc }}</p>
</a>
<a class="glass-card p-8 rounded-2xl group" :href="localizePath('/solutions')">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="socialIcon" alt="社交娛樂 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors" data-i18n="home_solution_4_title">{{ pageMessages.home_solution_4_title }}</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_4_desc">{{ pageMessages.home_solution_4_desc }}</p>
</a>
<a class="glass-card p-8 rounded-2xl group" :href="localizePath('/solutions')">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="remoteMeetingIcon" alt="遠程會議 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors" data-i18n="home_solution_5_title">{{ pageMessages.home_solution_5_title }}</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_5_desc">{{ pageMessages.home_solution_5_desc }}</p>
</a>
<a class="glass-card p-8 rounded-2xl group" :href="localizePath('/solutions')">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="gamingIcon" alt="遊戲雲端 icon">
<h4 class="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors" data-i18n="home_solution_6_title">{{ pageMessages.home_solution_6_title }}</h4>
<p class="text-sm text-gray-400" data-i18n="home_solution_6_desc">{{ pageMessages.home_solution_6_desc }}</p>
</a>
</div>
</div>
</section>
<!-- Process -->
<section class="py-24 bg-white/5 relative">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_process_title">{{ pageMessages.home_process_title }}</h2>
<p class="text-gray-400" data-i18n="home_process_desc">{{ pageMessages.home_process_desc }}</p>
</div>
<div class="relative flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-8">
<div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0"></div>
<div class="relative z-10 flex flex-col items-center text-center md:w-1/4">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="communicationIcon" alt="需求溝通 icon">
<h5 class="text-xl font-bold mb-2" data-i18n="home_process_1">{{ pageMessages.home_process_1 }}</h5>
<p class="text-sm text-gray-400" data-i18n="home_process_1_desc">{{ pageMessages.home_process_1_desc }}</p>
</div>
<div class="relative z-10 flex flex-col items-center text-center md:w-1/4">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="designIcon" alt="方案設計 icon">
<h5 class="text-xl font-bold mb-2" data-i18n="home_process_2">{{ pageMessages.home_process_2 }}</h5>
<p class="text-sm text-gray-400" data-i18n="home_process_2_desc">{{ pageMessages.home_process_2_desc }}</p>
</div>
<div class="relative z-10 flex flex-col items-center text-center md:w-1/4">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="testingIcon" alt="部署測試 icon">
<h5 class="text-xl font-bold mb-2" data-i18n="home_process_3">{{ pageMessages.home_process_3 }}</h5>
<p class="text-sm text-gray-400" data-i18n="home_process_3_desc">{{ pageMessages.home_process_3_desc }}</p>
</div>
<div class="relative z-10 flex flex-col items-center text-center md:w-1/4">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="operationsIcon" alt="上線維運 icon">
<h5 class="text-xl font-bold mb-2" data-i18n="home_process_4">{{ pageMessages.home_process_4 }}</h5>
<p class="text-sm text-gray-400" data-i18n="home_process_4_desc">{{ pageMessages.home_process_4_desc }}</p>
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
<div class="text-blue-100 font-medium" data-i18n="home_stats_clients">{{ pageMessages.home_stats_clients }}</div>
</div>
<div>
<div class="text-4xl lg:text-6xl font-bold mb-2">99.99%</div>
<div class="text-blue-100 font-medium" data-i18n="home_stats_sla">{{ pageMessages.home_stats_sla }}</div>
</div>
<div>
<div class="text-4xl lg:text-6xl font-bold mb-2">50+</div>
<div class="text-blue-100 font-medium" data-i18n="home_stats_countries">{{ pageMessages.home_stats_countries }}</div>
</div>
<div>
<div class="text-4xl lg:text-6xl font-bold mb-2">7×24</div>
<div class="text-blue-100 font-medium" data-i18n="home_stats_support">{{ pageMessages.home_stats_support }}</div>
</div>
</div>
</div>
</section>
<!-- Testimonials -->
<section class="py-24 overflow-hidden">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl lg:text-4xl font-bold mb-4" data-i18n="home_testimonials_title">{{ pageMessages.home_testimonials_title }}</h2>
<p class="text-gray-400" data-i18n="home_testimonials_desc">{{ pageMessages.home_testimonials_desc }}</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="glass-card p-10 rounded-3xl relative">
<iconify-icon class="text-6xl text-blue-500/20 absolute top-6 right-6" icon="heroicons:chat-bubble-bottom-center-text"></iconify-icon>
<div class="flex items-center space-x-4 mb-6">
<div aria-hidden="true" class="w-16 h-16 rounded-full border-2 border-blue-500 bg-blue-500/10 flex items-center justify-center text-blue-200 font-bold text-lg">LM</div>
<div>
<h6 class="font-bold text-lg" data-i18n="home_testimonial_1_name">{{ pageMessages.home_testimonial_1_name }}</h6>
<p class="text-gray-400 text-sm" data-i18n="home_testimonial_1_role">{{ pageMessages.home_testimonial_1_role }}</p>
</div>
</div>
<p class="text-gray-300 italic leading-relaxed" data-i18n="home_testimonial_1_quote">{{ pageMessages.home_testimonial_1_quote }}</p>
</div>
<div class="glass-card p-10 rounded-3xl relative">
<iconify-icon class="text-6xl text-blue-500/20 absolute top-6 right-6" icon="heroicons:chat-bubble-bottom-center-text"></iconify-icon>
<div class="flex items-center space-x-4 mb-6">
<div aria-hidden="true" class="w-16 h-16 rounded-full border-2 border-cyan-500 bg-cyan-500/10 flex items-center justify-center text-cyan-200 font-bold text-lg">SZ</div>
<div>
<h6 class="font-bold text-lg">Sarah Zhang</h6>
<p class="text-gray-400 text-sm" data-i18n="home_testimonial_2_role">{{ pageMessages.home_testimonial_2_role }}</p>
</div>
</div>
<p class="text-gray-300 italic leading-relaxed" data-i18n="home_testimonial_2_quote">{{ pageMessages.home_testimonial_2_quote }}</p>
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
<h2 class="text-4xl lg:text-5xl font-bold mb-8 relative z-10" data-i18n="home_cta_title">{{ pageMessages.home_cta_title }}</h2>
<p class="text-xl text-gray-400 mb-12 relative z-10" data-i18n="home_cta_desc">{{ pageMessages.home_cta_desc }}</p>
<div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
<a class="px-10 py-5 bg-gradient-tech rounded-2xl font-bold text-lg hover:scale-105 transition-transform" :href="localizePath('/pricing')"><span data-i18n="get_started">{{ pageMessages.get_started }}</span></a>
<a class="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all" :href="localizePath('/contact')"><span data-i18n="contact_now">{{ pageMessages.contact_now }}</span></a>
</div>
</div>
</div>
</section>
<!-- Footer -->
</template>

<script setup lang="ts">
import { messages } from '~/data/i18n'
import webHero from '~/assets/images/webheroclear.webp'
import mobileHero from '~/assets/images/mobilehero.webp'
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
  alias: ['/zh', '/zh-cn']
})

const { currentLang, localizePath } = useDomI18n()
const copy = computed(() => messages[currentLang.value])

usePageSeo('home')
const pageMessages = computed(() => messages[currentLang.value])
</script>
