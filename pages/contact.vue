<template>
<section class="pt-40 pb-20 relative overflow-hidden">
<div class="max-w-7xl mx-auto px-6 text-center">
<h1 class="text-4xl lg:text-6xl font-bold mb-6"><span class="text-gradient" data-i18n="contact_title">聯絡我們</span></h1>
<p class="text-xl text-gray-400 max-w-3xl mx-auto" data-i18n="contact_hero_desc">
                無論您有任何技術疑問或商務合作需求，我們的專家團隊隨時準備為您服務。
            </p>
</div>
</section>
<section class="py-12">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
<!-- Contact Info Cards -->
<div class="glass-card p-10 rounded-3xl flex flex-col items-center text-center">
<a class="mb-6 inline-flex transition-transform hover:scale-105" href="https://t.me/cdstar" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
<img class="w-[90px] h-[90px] object-contain" :src="telegramIcon" alt="Telegram icon">
</a>
<h4 class="text-xl font-bold mb-2" data-i18n="contact_phone_title">Telegram</h4>
<p class="text-sm text-gray-400 mb-4" data-i18n="contact_phone_hours">點擊後開啟 Telegram</p>
<a class="text-blue-500 font-bold hover:underline" data-i18n="contact_phone_cta" href="https://t.me/cdstar" target="_blank" rel="noopener noreferrer">點擊聯絡</a>
</div>
<div class="glass-card p-10 rounded-3xl flex flex-col items-center text-center">
<img class="w-[90px] h-[90px] object-contain mb-6" :src="emailIcon" alt="郵件聯繫 icon">
<h4 class="text-xl font-bold mb-2" data-i18n="contact_email_title">郵件聯繫</h4>
<p class="text-sm text-gray-400 mb-4" data-i18n="contact_email_hours">我們將在 24 小時內回覆</p>
<div class="text-cyan-500 font-bold">support@limelink.live</div>
</div>
<div class="glass-card p-10 rounded-3xl flex flex-col items-center text-center">
<a class="mb-6 inline-flex transition-transform hover:scale-105" href="https://wa.me/886919875294" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
<img class="w-[90px] h-[90px] object-contain" :src="whatsAppIcon" alt="WhatsApp icon">
</a>
<h4 class="text-xl font-bold mb-2" data-i18n="contact_chat_title">WhatsApp</h4>
<p class="text-sm text-gray-400 mb-4" data-i18n="contact_chat_hours">點擊後開啟 WhatsApp</p>
<a class="text-purple-500 font-bold hover:underline" data-i18n="contact_chat_cta" href="https://wa.me/886919875294" target="_blank" rel="noopener noreferrer">點擊聯絡</a>
</div>
</div>
<div class="mb-24">
<!-- Form -->
<div>
<div class="glass-card p-10 rounded-[40px]">
<h2 class="text-3xl font-bold mb-8" data-i18n="contact_form_title">商務諮詢</h2>
<form class="space-y-6" @submit.prevent="submitContactInquiry">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<input class="input-field" data-i18n-placeholder="contact_placeholder_name" name="name" placeholder="您的姓名" required type="text"/>
<input class="input-field" data-i18n-placeholder="contact_placeholder_company" name="company" placeholder="公司名稱" type="text"/>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<input class="input-field" data-i18n-placeholder="contact_placeholder_email" name="email" placeholder="電子郵箱" required type="email"/>
<input class="input-field" data-i18n-placeholder="contact_placeholder_phone" name="phone" placeholder="聯繫電話" type="tel"/>
</div>
<textarea class="input-field h-40" data-i18n-placeholder="contact_placeholder_message" name="message" placeholder="請詳細描述您的需求或問題..." required></textarea>
<RecaptchaChallenge />
<button class="w-full py-4 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all disabled:cursor-not-allowed disabled:opacity-60" :disabled="inquiryStatus === 'submitting'" type="submit">
{{ contactSubmitLabel }}
</button>
<p v-if="inquiryMessage" class="text-sm" :class="inquiryStatus === 'success' ? 'text-green-400' : 'text-red-400'">{{ inquiryMessage }}</p>
</form>
</div>
</div>
</div>
<!-- Social Media -->
<div class="text-center">
<h3 class="text-xl font-bold mb-8" data-i18n="contact_social_title">關注我們的社交平台</h3>
<div class="flex justify-center space-x-6">
<a class="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-all" href="#">
<iconify-icon class="text-xl" icon="brandico:facebook"></iconify-icon>
</a>
<a class="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400 transition-all" href="#">
<iconify-icon class="text-xl" icon="brandico:twitter"></iconify-icon>
</a>
<a class="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 transition-all" href="#">
<iconify-icon class="text-xl" icon="brandico:linkedin"></iconify-icon>
</a>
<a class="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 transition-all" href="#">
<iconify-icon class="text-xl" icon="brandico:instagram"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</template>

<script setup lang="ts">
import { messages } from '~/data/i18n'
import emailIcon from '~/assets/images/email.png'
import telegramIcon from '~/assets/images/Telegram.png'
import whatsAppIcon from '~/assets/images/WhatsApp.png'

definePageMeta({
  alias: ['/zh/contact']
})

usePageSeo('contact')

const { currentLang } = useDomI18n()
const { inquiryMessage, inquiryStatus, submitInquiry } = useInquiryEmail()
const contactSubmitLabel = computed(() => {
  return inquiryStatus.value === 'submitting'
    ? messages[currentLang.value].contact_form_sending
    : messages[currentLang.value].contact_form_submit
})

function submitContactInquiry(event: Event) {
  submitInquiry(event, 'Contact inquiry', {
    successEvent: {
      event: 'contact_submit_success',
      form_type: 'contact'
    }
  })
}
</script>
