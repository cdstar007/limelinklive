<template>
  <footer class="bg-[#050810] pt-20 pb-10 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <NuxtLink class="inline-flex items-center mb-6" :to="localizePath('/')" aria-label="LIMELINK home">
            <img class="h-10 w-auto" :src="logoWide" alt="LIMELINK" />
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed mb-6" data-i18n="footer_desc">{{ pageMessages.footer_desc }}</p>
          <div class="flex space-x-4">
            <a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-colors" href="#"><iconify-icon icon="brandico:facebook" /></a>
            <a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400 transition-colors" href="#"><iconify-icon icon="brandico:twitter" /></a>
            <a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 transition-colors" href="#"><iconify-icon icon="brandico:linkedin" /></a>
          </div>
        </div>

        <div>
          <h6 class="font-bold mb-6" data-i18n="footer_services">{{ pageMessages.footer_services }}</h6>
          <ul class="space-y-4 text-gray-400 text-sm">
            <li><NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/service-css')" data-i18n="home_footer_css">{{ pageMessages.home_footer_css }}</NuxtLink></li>
            <li><NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/service-byteplus')">BytePlus Media</NuxtLink></li>
            <li><NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/service-agora')">Agora RTC</NuxtLink></li>
            <li><NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/services')" data-i18n="home_footer_compare">{{ pageMessages.home_footer_compare }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h6 class="font-bold mb-6" data-i18n="footer_solutions">{{ pageMessages.footer_solutions }}</h6>
          <ul class="space-y-4 text-gray-400 text-sm">
            <li><NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/solutions')" data-i18n="home_footer_solution_1">{{ pageMessages.home_footer_solution_1 }}</NuxtLink></li>
            <li><NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/solutions')" data-i18n="home_footer_solution_2">{{ pageMessages.home_footer_solution_2 }}</NuxtLink></li>
            <li><NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/solutions')" data-i18n="home_footer_solution_3">{{ pageMessages.home_footer_solution_3 }}</NuxtLink></li>
            <li><NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/solutions')" data-i18n="home_footer_solution_4">{{ pageMessages.home_footer_solution_4 }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h6 class="font-bold mb-6" data-i18n="footer_contact_us">{{ pageMessages.footer_contact_us }}</h6>
          <ul class="space-y-4 text-gray-400 text-sm">
            <li data-i18n="footer_address">{{ pageMessages.footer_address }}</li>
            <li>
              <a class="inline-flex items-center gap-2 hover:text-blue-500 transition-colors" href="https://t.me/cdstar" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <iconify-icon class="text-lg" icon="logos:telegram" />
                <span>Telegram</span>
              </a>
            </li>
            <li>
              <a class="inline-flex items-center gap-2 hover:text-green-500 transition-colors" href="https://wa.me/886919875294" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <iconify-icon class="text-lg" icon="logos:whatsapp-icon" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li data-i18n="footer_email">{{ pageMessages.footer_email }}</li>
          </ul>
        </div>
      </div>
      <div class="pt-10 border-t border-white/5 text-center text-gray-500 text-xs">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <span data-i18n="footer_copyright">{{ pageMessages.footer_copyright }}</span>
          <NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/about')">
            {{ messages[currentLang].nav_about }}
          </NuxtLink>
          <NuxtLink class="hover:text-blue-500 transition-colors" :to="localizePath('/privacy')" data-i18n="footer_privacy">{{ pageMessages.footer_privacy }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logoWide from '~/assets/images/logowide.png'
import { messages } from '~/data/i18n'

const { currentLang, localizePath } = useDomI18n()
const pageMessages = computed(() => messages[currentLang.value])
</script>
