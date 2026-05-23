type Lang = 'zh' | 'en'

type LocalizedText = {
  zh: string
  en: string
}

type PageSeoKey =
  | 'home'
  | 'services'
  | 'solutions'
  | 'pricing'
  | 'support'
  | 'docs'
  | 'contact'
  | 'privacy'
  | 'serviceCss'
  | 'serviceByteplus'
  | 'serviceAgora'

type PageSeo = {
  path: string
  title: LocalizedText
  description: LocalizedText
  keywords: Record<Lang, string[]>
  schemaType?: 'WebPage' | 'Service'
  serviceName?: LocalizedText
}

const siteUrl = 'https://limelink.live'
const siteName = 'LIMELINK'
const defaultOgImage = `${siteUrl}/og-default.svg`

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  email: 'support@limelink.live',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'support@limelink.live',
      availableLanguage: ['zh-Hant', 'en']
    }
  ],
  sameAs: []
}

const seoPages: Record<PageSeoKey, PageSeo> = {
  home: {
    path: '/',
    title: {
      zh: 'LIMELINK｜雲端視頻服務代理與技術整合商',
      en: 'LIMELINK | Cloud Video Service Agent & Technology Integrator'
    },
    description: {
      zh: 'LIMELINK 提供雲端視頻代理、直播、RTC、CDN、成本優化、架構諮詢與 7x24 技術支援，協助企業快速部署高品質影音服務。',
      en: 'LIMELINK provides cloud video agency, live streaming, RTC, CDN, cost optimization, architecture consulting and 24/7 technical support for global video businesses.'
    },
    keywords: {
      zh: ['LIMELINK', '雲端視頻', '直播', 'RTC', 'CDN', '視頻雲代理', '騰訊雲 CSS', 'BytePlus Media', 'Agora RTC'],
      en: ['LIMELINK', 'cloud video', 'live streaming', 'RTC', 'CDN', 'video cloud agent', 'Tencent Cloud CSS', 'BytePlus Media', 'Agora RTC']
    }
  },
  services: {
    path: '/services',
    title: {
      zh: '雲端視頻服務產品 | LIMELINK',
      en: 'Cloud Video Services | LIMELINK'
    },
    description: {
      zh: '瀏覽 LIMELINK 的雲端視頻服務，包括直播、即時音視頻、CDN 分發、雲端轉碼、儲存、安全與技術運維。',
      en: 'Explore LIMELINK cloud video services including live streaming, real-time audio and video, CDN distribution, cloud transcoding, storage, security and technical operations.'
    },
    keywords: {
      zh: ['雲端視頻服務', '直播服務', 'RTC 服務', '視頻 CDN', '雲端轉碼', '視頻儲存'],
      en: ['cloud video services', 'live streaming service', 'RTC service', 'video CDN', 'cloud transcoding', 'video storage']
    },
    schemaType: 'Service',
    serviceName: {
      zh: '雲端視頻整合服務',
      en: 'Cloud video integration services'
    }
  },
  solutions: {
    path: '/solutions',
    title: {
      zh: '行業視頻解決方案 | LIMELINK',
      en: 'Industry Video Solutions | LIMELINK'
    },
    description: {
      zh: 'LIMELINK 針對電商直播、線上教育、社交娛樂、企業會議與全球媒體分發，設計可快速落地的視頻雲解決方案。',
      en: 'LIMELINK designs video cloud solutions for live commerce, online education, social entertainment, enterprise conferencing and global media delivery.'
    },
    keywords: {
      zh: ['視頻解決方案', '電商直播', '線上教育視頻', '企業視頻', '全球媒體分發'],
      en: ['video solutions', 'live commerce', 'online education video', 'enterprise video', 'global media delivery']
    },
    schemaType: 'Service',
    serviceName: {
      zh: '行業視頻雲解決方案',
      en: 'Industry video cloud solutions'
    }
  },
  pricing: {
    path: '/pricing',
    title: {
      zh: '價格諮詢與成本優化 | LIMELINK',
      en: 'Pricing & Cost Optimization | LIMELINK'
    },
    description: {
      zh: '洽詢 LIMELINK 的視頻雲價格方案、代理折扣、資源包與企業級成本優化服務。',
      en: 'Request video cloud pricing consultation, agent discounts, resource packages and enterprise cost optimization from LIMELINK.'
    },
    keywords: {
      zh: ['視頻雲報價', '雲端視頻折扣', 'CDN 價格', '直播定價', '企業視頻成本優化'],
      en: ['video cloud pricing', 'cloud video discount', 'CDN pricing', 'live streaming pricing', 'enterprise video cost optimization']
    }
  },
  support: {
    path: '/support',
    title: {
      zh: '技術支援與運維服務 | LIMELINK',
      en: 'Technical Support & Operations | LIMELINK'
    },
    description: {
      zh: 'LIMELINK 提供視頻雲技術支援、架構審查、遷移協助、監控、故障排除與運維保障。',
      en: 'LIMELINK offers video cloud technical support, architecture review, migration assistance, monitoring, troubleshooting and operational service assurance.'
    },
    keywords: {
      zh: ['視頻雲支援', '直播支援', 'RTC 故障排除', '視頻運維', '架構諮詢'],
      en: ['video cloud support', 'live streaming support', 'RTC troubleshooting', 'video operations', 'architecture consulting']
    },
    schemaType: 'Service',
    serviceName: {
      zh: '視頻雲技術支援',
      en: 'Video cloud technical support'
    }
  },
  docs: {
    path: '/docs',
    title: {
      zh: '直播技術文檔中心 | LIMELINK',
      en: 'Live Streaming Documentation Center | LIMELINK'
    },
    description: {
      zh: '整理騰訊雲 CSS、BytePlus MediaLive、Agora 互動直播與 LIMELINK 技術筆記，協助團隊快速查找直播接入、推流、播放、錄製、轉碼與排障文檔。',
      en: 'Find Tencent Cloud CSS, BytePlus MediaLive, Agora live streaming documentation and LIMELINK technical notes for integration, ingest, playback, recording, transcoding and troubleshooting.'
    },
    keywords: {
      zh: ['直播文檔', '騰訊雲 CSS 文檔', 'BytePlus MediaLive 文檔', 'Agora 直播文檔', '直播技術筆記'],
      en: ['live streaming docs', 'Tencent Cloud CSS docs', 'BytePlus MediaLive docs', 'Agora live streaming docs', 'streaming technical notes']
    }
  },
  contact: {
    path: '/contact',
    title: {
      zh: '聯絡 LIMELINK｜雲端視頻顧問',
      en: 'Contact LIMELINK | Video Cloud Consulting'
    },
    description: {
      zh: '聯絡 LIMELINK 取得雲端視頻顧問、價格洽詢、技術支援與商務合作服務。提交表單後，我們會盡快回覆。',
      en: 'Contact LIMELINK for cloud video consultation, pricing requests, technical support and business cooperation. Submit the form and our team will respond soon.'
    },
    keywords: {
      zh: ['聯絡 LIMELINK', '視頻雲顧問', '直播顧問', 'RTC 顧問'],
      en: ['contact LIMELINK', 'video cloud consultation', 'live streaming consulting', 'RTC consulting']
    }
  },
  privacy: {
    path: '/privacy',
    title: {
      zh: '隱私權政策 | LIMELINK',
      en: 'Privacy Policy | LIMELINK'
    },
    description: {
      zh: '了解 LIMELINK 如何收集、使用、保護與管理您在使用網站、表單與雲端視頻顧問服務時提供的個人資料。',
      en: 'Learn how LIMELINK collects, uses, protects and manages personal information provided through our website, forms and cloud video consulting services.'
    },
    keywords: {
      zh: ['LIMELINK 隱私權政策', '個人資料保護', '隱私政策', '資料安全'],
      en: ['LIMELINK privacy policy', 'personal data protection', 'privacy policy', 'data security']
    }
  },
  serviceCss: {
    path: '/service-css',
    title: {
      zh: '騰訊雲 CSS 直播串流服務 | LIMELINK',
      en: 'Tencent Cloud CSS Live Streaming | LIMELINK'
    },
    description: {
      zh: '透過 LIMELINK 部署騰訊雲 CSS 直播串流，享有代理價格、架構規劃、遷移、監控與運維支援。',
      en: 'Deploy Tencent Cloud CSS live streaming through LIMELINK with agency pricing, architecture planning, migration, monitoring and operations support.'
    },
    keywords: {
      zh: ['騰訊雲 CSS', '騰訊直播', 'CSS 直播串流', '直播代理'],
      en: ['Tencent Cloud CSS', 'Tencent live streaming', 'CSS live streaming', 'live streaming agent']
    },
    schemaType: 'Service',
    serviceName: {
      zh: '騰訊雲 CSS 直播服務',
      en: 'Tencent Cloud CSS live streaming service'
    }
  },
  serviceByteplus: {
    path: '/service-byteplus',
    title: {
      zh: 'BytePlus Media 直播服務 | LIMELINK',
      en: 'BytePlus Media Live Service | LIMELINK'
    },
    description: {
      zh: '使用 LIMELINK 的 BytePlus Media 方案，提供全球直播、媒體處理、分發與技術交付支援。',
      en: 'Use BytePlus Media services with LIMELINK for global live streaming, media processing, distribution and technical delivery support.'
    },
    keywords: {
      zh: ['BytePlus Media', 'BytePlus 直播', '媒體直播服務', '全球視頻分發'],
      en: ['BytePlus Media', 'BytePlus live streaming', 'media live service', 'global video delivery']
    },
    schemaType: 'Service',
    serviceName: {
      zh: 'BytePlus Media 直播服務',
      en: 'BytePlus Media live service'
    }
  },
  serviceAgora: {
    path: '/service-agora',
    title: {
      zh: 'Agora RTC 即時音視頻服務 | LIMELINK',
      en: 'Agora RTC Real-Time Audio & Video | LIMELINK'
    },
    description: {
      zh: '整合 LIMELINK 與 Agora RTC，打造即時音視頻、互動直播、低延遲互動與技術支援方案。',
      en: 'Integrate Agora RTC with LIMELINK for real-time audio and video, interactive live streaming, low-latency engagement and technical support.'
    },
    keywords: {
      zh: ['Agora RTC', '即時音視頻', '互動直播', '低延遲視頻', 'RTC 整合'],
      en: ['Agora RTC', 'real-time audio video', 'interactive live streaming', 'low latency video', 'RTC integration']
    },
    schemaType: 'Service',
    serviceName: {
      zh: 'Agora RTC 整合服務',
      en: 'Agora RTC integration service'
    }
  }
}

function pageUrl(path: string) {
  return path === '/' ? siteUrl : `${siteUrl}${path}`
}

function localizedPaths(path: string) {
  const normalizedPath = path.startsWith('/en/')
    ? path.replace(/^\/en/, '')
    : path.startsWith('/zh/')
      ? path.replace(/^\/zh/, '')
      : path

  return {
    en: normalizedPath === '' ? '/' : normalizedPath,
    zh: normalizedPath === '/' || normalizedPath === '' ? '/zh' : `/zh${normalizedPath}`
  }
}

function resolveText(value: LocalizedText, lang: Lang) {
  return value[lang]
}

function resolveLocale(lang: Lang) {
  return lang === 'zh' ? 'zh_TW' : 'en_US'
}

function resolveHtmlLang(lang: Lang) {
  return lang === 'zh' ? 'zh-Hant' : 'en'
}

function makeBreadcrumbSchema(page: PageSeo, lang: Lang, currentPath: string) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: lang === 'zh' ? '首頁' : 'Home',
      item: pageUrl('/')
    }
  ]

  if (currentPath !== '/') {
    const pageTitle = resolveText(page.title, lang)
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: pageTitle.split('|')[0].trim(),
      item: pageUrl(currentPath)
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
}

function makePageSchema(page: PageSeo, lang: Lang, currentPath: string) {
  const title = resolveText(page.title, lang)
  const description = resolveText(page.description, lang)
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': page.schemaType ?? 'WebPage',
    name: title,
    description,
    url: pageUrl(currentPath),
    inLanguage: [resolveHtmlLang(lang)],
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl
    },
    provider: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl
    }
  }

  if (page.schemaType !== 'Service') {
    return baseSchema
  }

  return {
    ...baseSchema,
    name: resolveText(page.serviceName ?? page.title, lang),
    serviceType: resolveText(page.serviceName ?? page.title, lang),
    areaServed: lang === 'zh' ? '全球' : 'Worldwide'
  }
}

export function useGlobalSeo() {
  const { currentLang } = useDomI18n()

  useHead(() => ({
    htmlAttrs: {
      lang: resolveHtmlLang(currentLang.value)
    },
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(organizationSchema)
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteName,
          url: siteUrl,
          inLanguage: ['zh-Hant', 'en'],
          publisher: organizationSchema
        })
      }
    ]
  }))
}

export function usePageSeo(key: PageSeoKey) {
  const page = seoPages[key]
  const route = useRoute()

  useHead(() => {
    const lang = route.path === '/zh' || route.path.startsWith('/zh/') ? 'zh' : 'en'
    const title = resolveText(page.title, lang)
    const description = resolveText(page.description, lang)
    const keywords = page.keywords[lang]
    const paths = localizedPaths(page.path)
    const canonicalPath = lang === 'zh' ? paths.zh : paths.en
    const url = pageUrl(canonicalPath)

    return {
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: keywords.join(', ') },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url },
        { property: 'og:site_name', content: siteName },
        { property: 'og:image', content: defaultOgImage },
        { property: 'og:locale', content: resolveLocale(lang) },
        { property: 'og:locale:alternate', content: resolveLocale(lang === 'zh' ? 'en' : 'zh') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: defaultOgImage }
      ],
      link: [
        { rel: 'canonical', href: url },
        { rel: 'alternate', hreflang: 'en', href: pageUrl(paths.en) },
        { rel: 'alternate', hreflang: 'zh-Hant', href: pageUrl(paths.zh) },
        { rel: 'alternate', hreflang: 'x-default', href: pageUrl(paths.en) }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(makePageSchema(page, lang, canonicalPath))
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(makeBreadcrumbSchema(page, lang, canonicalPath))
        }
      ]
    }
  })
}
