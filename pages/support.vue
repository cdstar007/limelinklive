<template>
<section class="pt-40 pb-20 relative overflow-hidden">
<div class="max-w-7xl mx-auto px-6 text-center">
<h1 class="text-4xl lg:text-6xl font-bold mb-6" data-i18n="support_title">技術支援與服務保障</h1>
<p class="text-xl text-gray-400 max-w-3xl mx-auto" data-i18n="support_hero_desc">
                我們提供全方位的技術支援體系，確保您的業務在任何情況下都能穩定運行。
            </p>
</div>
</section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-6">
<!-- SLA Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
<div class="glass-card p-10 rounded-3xl text-center">
<div class="text-4xl font-bold text-blue-500 mb-2">99.99%</div>
<div class="text-sm font-bold mb-4" data-i18n="support_sla_1_label">服務可用性承諾</div>
<p class="text-xs text-gray-500 leading-relaxed" data-i18n="support_sla_1_desc">基於雲廠商底層 SLA，結合 LIMELINK 容災架構，保障業務不中斷。</p>
</div>
<div class="glass-card p-10 rounded-3xl text-center">
<div class="text-4xl font-bold text-blue-500 mb-2">&lt; 15min</div>
<div class="text-sm font-bold mb-4" data-i18n="support_sla_2_label">故障響應時間</div>
<p class="text-xs text-gray-500 leading-relaxed" data-i18n="support_sla_2_desc">針對 P0 級故障，專家團隊 15 分鐘內介入處理，提供全天候應急保障。</p>
</div>
<div class="glass-card p-10 rounded-3xl text-center">
<div class="text-4xl font-bold text-blue-500 mb-2">7 × 24</div>
<div class="text-sm font-bold mb-4" data-i18n="support_sla_3_label">專家在線支援</div>
<p class="text-xs text-gray-500 leading-relaxed" data-i18n="support_sla_3_desc">通過電話、IM 工具提供實時技術諮詢，跨越國界與時區。</p>
</div>
</div>
<!-- Support Tiers -->
<div class="mb-24">
<h2 class="text-3xl font-bold mb-12 text-center" data-i18n="support_tiers_title">支援服務等級</h2>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 rounded-[40px] overflow-hidden">
<div class="p-10 border-r border-white/10 hover:bg-white/5 transition-all">
<h4 class="text-xl font-bold mb-6" data-i18n="support_tier_basic">基礎支援</h4>
<ul class="space-y-4 text-sm text-gray-400">
<li class="flex items-center space-x-2"><iconify-icon class="text-green-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_basic_1">工單系統支持</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-green-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_basic_2">技術文檔中心</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-green-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_basic_3">工作日 IM 支持</span></li>
<li class="flex items-center space-x-2 opacity-30"><iconify-icon icon="heroicons:x-mark"></iconify-icon><span data-i18n="support_tier_basic_4">專屬技術經理</span></li>
</ul>
<div class="mt-8 text-xs text-gray-500" data-i18n="support_tier_basic_note">適合測試期與小型項目</div>
</div>
<div class="p-10 border-r border-white/10 bg-blue-500/5 hover:bg-blue-500/10 transition-all relative">
<div class="absolute top-4 right-4 px-3 py-1 bg-blue-500 rounded-full text-[10px] font-bold" data-i18n="support_tier_popular">最受歡迎</div>
<h4 class="text-xl font-bold mb-6" data-i18n="support_tier_advanced">高級支援</h4>
<ul class="space-y-4 text-sm text-gray-400">
<li class="flex items-center space-x-2"><iconify-icon class="text-blue-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_adv_1">7x24 小時 IM 群組</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-blue-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_adv_2">架構優化建議</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-blue-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_adv_3">專屬客戶經理</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-blue-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_adv_4">故障優先處理</span></li>
</ul>
<div class="mt-8 text-xs text-blue-400" data-i18n="support_tier_adv_note">適合正式上線的商業應用</div>
</div>
<div class="p-10 hover:bg-white/5 transition-all">
<h4 class="text-xl font-bold mb-6" data-i18n="support_tier_premium">專屬支援</h4>
<ul class="space-y-4 text-sm text-gray-400">
<li class="flex items-center space-x-2"><iconify-icon class="text-purple-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_prem_1">1 對 1 專家駐場 (可選)</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-purple-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_prem_2">重大活動護航</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-purple-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_prem_3">定制化功能開發</span></li>
<li class="flex items-center space-x-2"><iconify-icon class="text-purple-500" icon="heroicons:check"></iconify-icon><span data-i18n="support_tier_prem_4">源碼級故障分析</span></li>
</ul>
<div class="mt-8 text-xs text-gray-500" data-i18n="support_tier_prem_note">適合超大規模與戰略級項目</div>
</div>
</div>
</div>
<!-- FAQ Section -->
<div class="mb-24">
<h2 class="text-3xl font-bold mb-12 text-center" data-i18n="support_faq_title">常見技術 FAQ</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_1_q">Q: 如何進行 SDK 集成？</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_1_a">A: 我們會提供專屬的集成文檔與 Demo 源碼，並在 IM 群中由架構師引導您完成第一行代碼的編寫。</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_2_q">Q: 支持跨平台開發框架嗎？</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_2_a">A: 是的，所有代理產品均支持 Flutter, React Native, Unity, Electron 等主流跨平台框架。</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_3_q">Q: 遇到網絡波動如何排查？</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_3_a">A: 我們提供全鏈路診斷工具，可實時獲取端到端的網絡指標（丟包率、抖動、往返時延）。</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_4_q">Q: 如何保證直播的安全合規？</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_4_a">A: 系統內置 AI 智能審核，可自動識別違規音視頻內容，並支持自定義敏感詞與黑名單。</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_5_q">Q: 代理商提供的 SDK 和原廠一樣嗎？</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_5_a">A: 完全一樣。我們直接對接原廠 SDK 資源，且額外提供封裝好的 UI 組件庫以加速開發。</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_6_q">Q: 可以申請測試賬號嗎？</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_6_a">A: 當然。聯繫商務經理可獲取帶有免費額度的測試賬號，供您進行功能評估。</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_7_q">Q: 如何處理高併發場景下的壓力？</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_7_a">A: 我們會協助您進行壓力測試，並根據預估規模提前進行服務端擴容與帶寬儲備。</p>
</div>
<div class="glass-card p-6 rounded-2xl">
<h5 class="font-bold mb-2" data-i18n="support_faq_8_q">Q: 是否支持私有化部署？</h5>
<p class="text-sm text-gray-400" data-i18n="support_faq_8_a">A: 部分產品支持私有化部署或混合雲方案，具體需根據您的安全合規要求進行評估。</p>
</div>
</div>
</div>
<!-- Emergency Contact -->
<div class="glass-card p-12 rounded-[40px] text-center bg-red-500/5 border-red-500/20">
<h3 class="text-2xl font-bold mb-4" data-i18n="support_emergency_title">緊急技術支持</h3>
<p class="text-gray-400 mb-8" data-i18n="support_emergency_desc">如果您遇到嚴重的生產環境故障，請透過 Telegram 聯繫我們：</p>
<div class="flex justify-center space-x-4">
<a class="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all" href="/contact"><span data-i18n="support_emergency_ticket">提交工單</span></a>
<a class="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all" href="https://t.me/cdstar" target="_blank" rel="noopener noreferrer"><iconify-icon class="text-xl" icon="logos:telegram"></iconify-icon><span data-i18n="support_emergency_chat">Telegram 聯繫</span></a>
</div>
</div>
</div>
</section>
</template>

<script setup lang="ts">
definePageMeta({
  alias: ['/zh/support']
})

usePageSeo('support')
</script>
