<template>
  <main class="pt-32 pb-24">
    <section class="relative overflow-hidden py-20">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_36rem)]" />
      <div class="relative max-w-5xl mx-auto px-6">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400 mb-4">
          {{ content.eyebrow }}
        </p>
        <h1 class="text-4xl lg:text-6xl font-bold mb-6">
          <span class="text-gradient">{{ content.title }}</span>
        </h1>
        <p class="text-lg text-gray-400 leading-relaxed max-w-3xl">
          {{ content.intro }}
        </p>
        <p class="mt-6 text-sm text-gray-500">
          {{ content.lastUpdated }}
        </p>
      </div>
    </section>

    <section class="py-8">
      <div class="max-w-5xl mx-auto px-6">
        <div class="glass-card rounded-3xl p-8 md:p-12">
          <div class="space-y-12">
            <article v-for="section in content.sections" :key="section.title">
              <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
              <div class="space-y-4 text-gray-400 leading-relaxed">
                <p v-for="paragraph in section.paragraphs" :key="paragraph">
                  {{ paragraph }}
                </p>
                <ul v-if="section.items?.length" class="space-y-3 pl-5 list-disc">
                  <li v-for="item in section.items" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </article>
          </div>

          <div class="mt-12 pt-8 border-t border-white/10">
            <h2 class="text-2xl font-bold mb-4">{{ content.contactTitle }}</h2>
            <p class="text-gray-400 leading-relaxed">
              {{ content.contactText }}
              <NuxtLink class="text-blue-400 hover:text-blue-300 transition-colors" :to="localizePath('/contact')">
                support@limelink.live
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  alias: ['/zh/privacy']
})

usePageSeo('privacy')

const { currentLang, localizePath } = useDomI18n()

const privacyContent = {
  zh: {
    eyebrow: 'Privacy Policy',
    title: '隱私權政策',
    intro: '本政策說明 LIMELINK 在您瀏覽網站、提交表單、洽詢雲端視頻服務或與我們互動時，如何處理與保護您的個人資料。',
    lastUpdated: '最後更新：2026 年 5 月 24 日',
    sections: [
      {
        title: '1. 我們收集的資料',
        paragraphs: [
          '當您使用 LIMELINK 網站或聯絡我們時，我們可能會收集您主動提供的資料，以及為維持網站安全與服務品質所需的技術資料。'
        ],
        items: [
          '聯絡資料，例如姓名、公司名稱、電子郵件、電話、Telegram 或 WhatsApp 聯絡方式。',
          '需求資料，例如您在詢價、技術諮詢或合作表單中提供的專案背景、預算、使用情境與訊息內容。',
          '技術資料，例如 IP 位址、裝置類型、瀏覽器、參照網址、瀏覽頁面、時間戳記與網站互動紀錄。',
          '安全驗證資料，例如為防止垃圾訊息與濫用而使用的 reCAPTCHA 或類似防護工具所產生的風險判斷資訊。'
        ]
      },
      {
        title: '2. 資料使用目的',
        paragraphs: [
          '我們僅在合理且必要的範圍內使用資料，用於提供、維護、改善與保護 LIMELINK 的服務。'
        ],
        items: [
          '回覆您的商務洽詢、報價需求、技術問題與合作請求。',
          '評估您的雲端視頻、直播、RTC、CDN 或技術支援需求，並提供合適的服務建議。',
          '維護網站運作、安全防護、濫用偵測、問題排查與服務品質分析。',
          '在您同意或法律允許的情況下，向您提供與 LIMELINK 服務相關的更新或後續聯絡。'
        ]
      },
      {
        title: '3. Cookie 與分析工具',
        paragraphs: [
          '我們可能使用 Cookie、Google Tag Manager、網站分析與類似技術，以了解網站流量、改善內容與維護安全。您可透過瀏覽器設定停用或刪除 Cookie，但部分功能可能因此無法正常運作。'
        ]
      },
      {
        title: '4. 第三方服務與資料分享',
        paragraphs: [
          '我們不會出售您的個人資料。為提供網站、通訊、安全驗證、雲端視頻顧問與技術交付服務，我們可能在必要範圍內與可信任的服務供應商、雲端服務商或合作夥伴分享資料。這些對象僅能依照我們的指示或其合法義務處理資料。'
        ]
      },
      {
        title: '5. 資料保存與安全',
        paragraphs: [
          '我們會依照資料用途、商業需求、合約義務與法律要求保存資料，並採取合理的技術與組織措施保護資料，避免未授權存取、遺失、濫用、變更或揭露。'
        ]
      },
      {
        title: '6. 您的權利',
        paragraphs: [
          '在適用法律允許的範圍內，您可以要求查詢、取得副本、更正、刪除、限制使用或停止特定資料處理。若您希望行使相關權利，請透過本頁下方聯絡方式與我們聯繫。'
        ]
      },
      {
        title: '7. 跨境資料處理',
        paragraphs: [
          '由於 LIMELINK 的服務可能涉及全球雲端供應商、跨境通訊與技術支援，您的資料可能在您所在司法管轄區以外被處理。我們會採取合理措施，確保跨境處理符合適用的資料保護要求。'
        ]
      },
      {
        title: '8. 政策更新',
        paragraphs: [
          '我們可能因服務、技術、法規或營運需求更新本政策。更新後的版本會發布於本頁，並以頁面上標示的最後更新日期為準。'
        ]
      }
    ],
    contactTitle: '聯絡我們',
    contactText: '若您對本隱私權政策或個人資料處理方式有任何疑問，請聯絡：'
  },
  en: {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    intro: 'This policy explains how LIMELINK handles and protects personal information when you browse our website, submit forms, request cloud video services or interact with us.',
    lastUpdated: 'Last updated: May 24, 2026',
    sections: [
      {
        title: '1. Information We Collect',
        paragraphs: [
          'When you use the LIMELINK website or contact us, we may collect information you provide directly and technical information needed to keep the website secure and reliable.'
        ],
        items: [
          'Contact details, such as name, company name, email address, phone number, Telegram or WhatsApp contact details.',
          'Inquiry details, such as project background, budget, use case and message content submitted through pricing, consulting or cooperation forms.',
          'Technical information, such as IP address, device type, browser, referring URL, pages viewed, timestamps and website interaction records.',
          'Security verification information, such as risk assessment data generated by reCAPTCHA or similar tools used to prevent spam and abuse.'
        ]
      },
      {
        title: '2. How We Use Information',
        paragraphs: [
          'We use information only where reasonably necessary to provide, maintain, improve and protect LIMELINK services.'
        ],
        items: [
          'Respond to business inquiries, pricing requests, technical questions and cooperation requests.',
          'Assess your cloud video, live streaming, RTC, CDN or technical support needs and recommend suitable services.',
          'Maintain website operations, security protection, abuse detection, troubleshooting and service quality analysis.',
          'Provide LIMELINK service updates or follow-up communication where you have consented or where permitted by law.'
        ]
      },
      {
        title: '3. Cookies and Analytics',
        paragraphs: [
          'We may use cookies, Google Tag Manager, website analytics and similar technologies to understand traffic, improve content and maintain security. You may disable or delete cookies through your browser settings, but some features may not work properly.'
        ]
      },
      {
        title: '4. Third-Party Services and Sharing',
        paragraphs: [
          'We do not sell your personal information. To provide website, communication, security verification, cloud video consulting and technical delivery services, we may share information with trusted service providers, cloud providers or partners where necessary. These parties may process information only under our instructions or their legal obligations.'
        ]
      },
      {
        title: '5. Retention and Security',
        paragraphs: [
          'We retain information according to its purpose, business needs, contractual obligations and legal requirements. We use reasonable technical and organizational measures to protect information against unauthorized access, loss, misuse, alteration or disclosure.'
        ]
      },
      {
        title: '6. Your Rights',
        paragraphs: [
          'Subject to applicable law, you may request access, a copy, correction, deletion, restriction or objection to certain processing of your personal information. To exercise these rights, contact us using the details below.'
        ]
      },
      {
        title: '7. Cross-Border Processing',
        paragraphs: [
          'Because LIMELINK services may involve global cloud providers, cross-border communication and technical support, your information may be processed outside your jurisdiction. We take reasonable steps to ensure cross-border processing complies with applicable data protection requirements.'
        ]
      },
      {
        title: '8. Policy Updates',
        paragraphs: [
          'We may update this policy due to service, technology, legal or operational changes. The updated version will be posted on this page and identified by the last updated date shown above.'
        ]
      }
    ],
    contactTitle: 'Contact Us',
    contactText: 'If you have questions about this Privacy Policy or how we process personal information, please contact:'
  }
}

const content = computed(() => privacyContent[currentLang.value])
</script>
