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
  alias: ['/zh/privacy', '/zh-cn/privacy']
})

usePageSeo('privacy')

const { currentLang, localizePath } = useDomI18n()

const privacyContent = {
  'zh-cn': {
    eyebrow: 'Privacy Policy',
    title: '隐私政策',
    intro: '本政策说明 LIMELINK 在您浏览网站、提交表单、洽询云端视频服务或与我们互动时，如何处理与保护您的个人数据。',
    lastUpdated: '最后更新：2026 年 5 月 24 日',
    sections: [
      {
        title: '1. 我们收集的数据',
        paragraphs: [
          '当您使用 LIMELINK 网站或联系我们时，我们可能会收集您主动提供的数据，以及为维持网站安全与服务品质所需的技术数据。'
        ],
        items: [
          '联系数据，例如姓名、公司名称、电子邮箱、电话、Telegram 或 WhatsApp 联系方式。',
          '需求数据，例如您在询价、技术咨询或合作表单中提供的项目背景、预算、使用情境与讯息内容。',
          '技术数据，例如 IP 位址、装置类型、浏览器、参照网址、浏览页面、时间戳记与网站互动纪录。',
          '安全验证数据，例如为防止垃圾讯息与滥用而使用的 reCAPTCHA 或类似防护工具所产生的风险判断资讯。'
        ]
      },
      {
        title: '2. 数据使用目的',
        paragraphs: [
          '我们仅在合理且必要的范围内使用数据，用于提供、维护、改善与保护 LIMELINK 的服务。'
        ],
        items: [
          '回复您的商务洽询、报价需求、技术问题与合作请求。',
          '评估您的云端视频、直播、RTC、CDN 或技术支持需求，并提供合适的服务建议。',
          '维护网站运作、安全防护、滥用侦测、问题排查与服务品质分析。',
          '在您同意或法律允许的情况下，向您提供与 LIMELINK 服务相关的更新或后续联系。'
        ]
      },
      {
        title: '3. Cookie 与分析工具',
        paragraphs: [
          '我们可能使用 Cookie、Google Tag Manager、网站分析与类似技术，以了解网站流量、改善内容与维护安全。您可透过浏览器设定停用或删除 Cookie，但部分功能可能因此无法正常运作。'
        ]
      },
      {
        title: '4. 第三方服务与数据分享',
        paragraphs: [
          '我们不会出售您的个人数据。为提供网站、通讯、安全验证、云端视频顾问与技术交付服务，我们可能在必要范围内与可信任的服务供应商、云端服务商或合作伙伴分享数据。这些对象仅能依照我们的指示或其合法义务处理数据。'
        ]
      },
      {
        title: '5. 数据保存与安全',
        paragraphs: [
          '我们会依照数据用途、商业需求、合约义务与法律要求保存数据，并采取合理的技术与组织措施保护数据，避免未授权存取、遗失、滥用、变更或揭露。'
        ]
      },
      {
        title: '6. 您的权利',
        paragraphs: [
          '在适用法律允许的范围内，您可以要求查询、取得副本、更正、删除、限制使用或停止特定数据处理。若您希望行使相关权利，请透过本页下方联系方式与我们联系。'
        ]
      },
      {
        title: '7. 跨境数据处理',
        paragraphs: [
          '由于 LIMELINK 的服务可能涉及全球云端供应商、跨境通讯与技术支持，您的数据可能在您所在司法管辖区以外被处理。我们会采取合理措施，确保跨境处理符合适用的数据保护要求。'
        ]
      },
      {
        title: '8. 政策更新',
        paragraphs: [
          '我们可能因服务、技术、法规或运营需求更新本政策。更新后的版本会发布于本页，并以页面上标示的最后更新日期为准。'
        ]
      }
    ],
    contactTitle: '联系我们',
    contactText: '若您对本隐私政策或个人数据处理方式有任何疑问，请联系：'
  },
  zh: {
    eyebrow: 'Privacy Policy',
    title: '隱私權政策',
    intro: '本政策說明 LIMELINK 在您瀏覽網站、提交表單、洽詢雲端影音服務或與我們互動時，如何處理與保護您的個人資料。',
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
          '評估您的雲端影音、直播、RTC、CDN 或技術支援需求，並提供合適的服務建議。',
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
          '我們不會出售您的個人資料。為提供網站、通訊、安全驗證、雲端影音顧問與技術交付服務，我們可能在必要範圍內與可信任的服務供應商、雲端服務商或合作夥伴分享資料。這些對象僅能依照我們的指示或其合法義務處理資料。'
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
          '在適用法律允許的範圍內，您可以要求查詢、取得副本、更正、刪除、限制使用或停止特定資料處理。若您希望行使相關權利，請透過本頁下方聯絡方式與我們聯絡。'
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
