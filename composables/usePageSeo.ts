import { type Lang } from '~/data/i18n'
import { inferLanguage, localizePath, locales } from '~/utils/locales'

type LocalizedText = {
  zh: string
  'zh-cn': string
  en: string
}

type PageSeoKey =
  | 'home'
  | 'about'
  | 'services'
  | 'solutions'
  | 'pricing'
  | 'support'
  | 'docs'
  | 'articleAi'
  | 'articleWebrtc'
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
  schemaType?: 'WebPage' | 'Service' | 'AboutPage'
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
      availableLanguage: ['zh-Hant', 'zh-Hans', 'en']
    }
  ],
  sameAs: []
}

const seoPages: Record<PageSeoKey, PageSeo> = {
  articleAi: {
    path: '/docs/ai-video-call-app',
    title: { zh: '如何建構 AI 視訊通話應用程式 | LIMELINK', 'zh-cn': '如何构建 AI 视频通话应用 | LIMELINK', en: 'How to Build an AI Video Call App | LIMELINK' },
    description: { zh: '了解 AI 視訊通話的 WebRTC 媒體串流、語音與 AI 管線、系統架構及延遲最佳化。', 'zh-cn': '了解 AI 视频通话的 WebRTC 媒体流、语音与 AI 管线、系统架构及延迟优化。', en: 'Explore AI video call architecture, WebRTC media transport, speech and AI pipelines, and latency optimization.' },
    keywords: { zh: ['AI 視訊通話', '視訊應用程式', 'WebRTC 架構'], 'zh-cn': ['AI 视频通话', '视频应用', 'WebRTC 架构'], en: ['AI video calls', 'video call app', 'WebRTC architecture'] }
  },
  articleWebrtc: {
    path: '/docs/best-webrtc-providers-2026',
    title: { zh: '2026 年最佳 WebRTC 供應商比較 | LIMELINK', 'zh-cn': '2026 年最佳 WebRTC 服务商比较 | LIMELINK', en: 'Best WebRTC Providers in 2026 | LIMELINK' },
    description: { zh: '比較全球與亞洲 WebRTC 供應商的視訊與即時音視訊服務、SDK、延遲、價格及適用情境。', 'zh-cn': '比较全球与亚洲 WebRTC 服务商的视频与实时音视频服务、SDK、延迟、价格及适用场景。', en: 'Compare global and Asian WebRTC providers by real-time video capabilities, SDKs, latency, pricing and use cases.' },
    keywords: { zh: ['WebRTC 比較', '視訊供應商', '即時音視訊'], 'zh-cn': ['WebRTC 比较', '视频服务商', '实时音视频'], en: ['WebRTC providers', 'RTC comparison', 'video providers'] }
  },
  about: {
    path: '/about',
    title: {
      'zh-cn': '关于 LIMELINK｜企业音视频采购与技术集成',
      zh: '關於 LIMELINK｜企業影音採購與技術整合',
      en: 'About LIMELINK | Enterprise Video Procurement & Integration'
    },
    description: {
      'zh-cn': '了解 LIMELINK 的云端音视频采购、成本评估与技术集成服务，以及供应商合作范围、协作分工与联系方式。',
      zh: '了解 LIMELINK 的雲端影音採購、成本評估與技術整合服務，以及供應商合作範圍、協作分工與聯絡方式。',
      en: 'Learn about LIMELINK cloud video procurement, cost reviews and integration services, including provider scope, project collaboration and contact details.'
    },
    keywords: {
      'zh-cn': ['关于 LIMELINK', '音视频代理采购', '音视频成本评估', '技术集成'],
      zh: ['關於 LIMELINK', '影音代理採購', '影音成本評估', '技術整合'],
      en: ['about LIMELINK', 'video procurement', 'video cost review', 'technical integration']
    },
    schemaType: 'AboutPage'
  },
  home: {
    path: '/',
    title: {
      'zh-cn': 'LIMELINK｜直播与 RTC 成本评估、企业采购',
      zh: 'LIMELINK｜直播與 RTC 成本評估、企業採購',
      en: 'LIMELINK | Streaming & RTC Cost Review and Procurement'
    },
    description: {
      'zh-cn': '已有直播或 RTC 用量？LIMELINK 提供官网 8 折标准采购估算、现有账单比较与企业项目议价，依产品、地区及合约核对降本空间。',
      zh: '已有直播或 RTC 用量？LIMELINK 提供官網 8 折標準採購估算、現有帳單比較與企業專案議價，依產品、地區及合約核對降本空間。',
      en: 'Review existing streaming and RTC costs with LIMELINK. Estimate standard procurement at 20% off eligible list prices and request a custom enterprise quote.'
    },
    keywords: {
      'zh-cn': ['LIMELINK', '云端视频', '直播', 'RTC', 'CDN', '视频云代理', '腾讯云 CSS', 'BytePlus Media', 'Agora RTC'],
      zh: ['LIMELINK', '雲端影音', '直播', 'RTC', 'CDN', '影音雲代理', '騰訊雲 CSS', 'BytePlus Media', 'Agora RTC'],
      en: ['LIMELINK', 'cloud video', 'live streaming', 'RTC', 'CDN', 'video cloud agent', 'Tencent Cloud CSS', 'BytePlus Media', 'Agora RTC']
    }
  },
  services: {
    path: '/services',
    title: {
      'zh-cn': '云端视频服务产品 | LIMELINK',
      zh: '雲端影音服務產品 | LIMELINK',
      en: 'Cloud Video Services | LIMELINK'
    },
    description: {
      'zh-cn': '浏览 LIMELINK 的云端视频服务，包括直播、实时音视频、CDN 分发、云端转码、储存、安全与技术运维。',
      zh: '瀏覽 LIMELINK 的雲端影音服務，包括直播、即時音視訊、CDN 分發、雲端轉碼、儲存、安全與技術維運。',
      en: 'Explore LIMELINK cloud video services including live streaming, real-time audio and video, CDN distribution, cloud transcoding, storage, security and technical operations.'
    },
    keywords: {
      'zh-cn': ['云端视频服务', '直播服务', 'RTC 服务', '视频 CDN', '云端转码', '视频储存'],
      zh: ['雲端影音服務', '直播服務', 'RTC 服務', '影音 CDN', '雲端轉碼', '影音儲存'],
      en: ['cloud video services', 'live streaming service', 'RTC service', 'video CDN', 'cloud transcoding', 'video storage']
    },
    schemaType: 'Service',
    serviceName: {
      'zh-cn': '云端视频集成服务',
      zh: '雲端影音整合服務',
      en: 'Cloud video integration services'
    }
  },
  solutions: {
    path: '/solutions',
    title: {
      'zh-cn': '行业视频解决方案 | LIMELINK',
      zh: '行業影音解決方案 | LIMELINK',
      en: 'Industry Video Solutions | LIMELINK'
    },
    description: {
      'zh-cn': 'LIMELINK 针对电商直播、线上教育、社交娱乐、企业会议与全球媒体分发，设计可快速落地的视频云解决方案。',
      zh: 'LIMELINK 針對電商直播、線上教育、社交娛樂、企業會議與全球媒體分發，設計可快速落地的影音雲解決方案。',
      en: 'LIMELINK designs video cloud solutions for live commerce, online education, social entertainment, enterprise conferencing and global media delivery.'
    },
    keywords: {
      'zh-cn': ['视频解决方案', '电商直播', '线上教育视频', '企业视频', '全球媒体分发'],
      zh: ['影音解決方案', '電商直播', '線上教育影音', '企業影音', '全球媒體分發'],
      en: ['video solutions', 'live commerce', 'online education video', 'enterprise video', 'global media delivery']
    },
    schemaType: 'Service',
    serviceName: {
      'zh-cn': '行业视频云解决方案',
      zh: '行業影音雲解決方案',
      en: 'Industry video cloud solutions'
    }
  },
  pricing: {
    path: '/pricing',
    title: {
      'zh-cn': '音视频采购 8 折方案与企业议价 | LIMELINK',
      zh: '影音採購 8 折方案與企業議價 | LIMELINK',
      en: 'Video Cloud Procurement & Custom Quotes | LIMELINK'
    },
    description: {
      'zh-cn': '比较 Tencent Cloud、BytePlus 与 Agora 的音视频采购方案，官网 8 折标准估算，企业用量项目议价；实际价格以适用项目与书面报价为准。',
      zh: '比較 Tencent Cloud、BytePlus 與 Agora 的影音採購方案，官網 8 折標準估算，企業用量專案議價；實際價格以適用項目與書面報價為準。',
      en: 'Compare Tencent Cloud, BytePlus and Agora procurement. Standard estimates use 20% off eligible list prices; enterprise usage and support receive written custom quotes.'
    },
    keywords: {
      'zh-cn': ['视频云报价', '云端视频折扣', 'CDN 价格', '直播定价', '企业视频成本优化'],
      zh: ['影音雲報價', '雲端影音折扣', 'CDN 價格', '直播定價', '企業影音成本優化'],
      en: ['video cloud pricing', 'cloud video discount', 'CDN pricing', 'live streaming pricing', 'enterprise video cost optimization']
    }
  },
  support: {
    path: '/support',
    title: {
      'zh-cn': '技术支持与运维服务 | LIMELINK',
      zh: '技術支援與維運服務 | LIMELINK',
      en: 'Technical Support & Operations | LIMELINK'
    },
    description: {
      'zh-cn': 'LIMELINK 提供视频云技术支持、架构审查、迁移协助、监控、故障排除与运维保障。',
      zh: 'LIMELINK 提供影音雲技術支援、架構審查、遷移協助、監控、故障排除與維運保障。',
      en: 'LIMELINK offers video cloud technical support, architecture review, migration assistance, monitoring, troubleshooting and operational service assurance.'
    },
    keywords: {
      'zh-cn': ['视频云支持', '直播支持', 'RTC 故障排除', '视频运维', '架构咨询'],
      zh: ['影音雲支援', '直播支援', 'RTC 故障排除', '影音維運', '架構諮詢'],
      en: ['video cloud support', 'live streaming support', 'RTC troubleshooting', 'video operations', 'architecture consulting']
    },
    schemaType: 'Service',
    serviceName: {
      'zh-cn': '视频云技术支持',
      zh: '影音雲技術支援',
      en: 'Video cloud technical support'
    }
  },
  docs: {
    path: '/docs',
    title: {
      'zh-cn': '直播技术文档中心 | LIMELINK',
      zh: '直播技術文件中心 | LIMELINK',
      en: 'Live Streaming Documentation Center | LIMELINK'
    },
    description: {
      'zh-cn': '整理腾讯云 CSS、BytePlus MediaLive、Agora 互动直播与 LIMELINK 技术笔记，协助团队快速查找直播接入、推流、播放、录制、转码与排障文档。',
      zh: '整理騰訊雲 CSS、BytePlus MediaLive、Agora 互動直播與 LIMELINK 技術筆記，協助團隊快速查找直播接入、推流、播放、錄製、轉碼與排障文件。',
      en: 'Find Tencent Cloud CSS, BytePlus MediaLive, Agora live streaming documentation and LIMELINK technical notes for integration, ingest, playback, recording, transcoding and troubleshooting.'
    },
    keywords: {
      'zh-cn': ['直播文档', '腾讯云 CSS 文档', 'BytePlus MediaLive 文档', 'Agora 直播文档', '直播技术笔记'],
      zh: ['直播文件', '騰訊雲 CSS 文件', 'BytePlus MediaLive 文件', 'Agora 直播文件', '直播技術筆記'],
      en: ['live streaming docs', 'Tencent Cloud CSS docs', 'BytePlus MediaLive docs', 'Agora live streaming docs', 'streaming technical notes']
    }
  },
  contact: {
    path: '/contact',
    title: {
      'zh-cn': '联系 LIMELINK｜云端视频顾问',
      zh: '聯絡 LIMELINK｜雲端影音顧問',
      en: 'Contact LIMELINK | Video Cloud Consulting'
    },
    description: {
      'zh-cn': '联系 LIMELINK 取得云端视频顾问、价格洽询、技术支持与商务合作服务。提交表单后，我们会尽快回复。',
      zh: '聯絡 LIMELINK 取得雲端影音顧問、價格洽詢、技術支援與商務合作服務。提交表單後，我們會盡快回覆。',
      en: 'Contact LIMELINK for cloud video consultation, pricing requests, technical support and business cooperation. Submit the form and our team will respond soon.'
    },
    keywords: {
      'zh-cn': ['联系 LIMELINK', '视频云顾问', '直播顾问', 'RTC 顾问'],
      zh: ['聯絡 LIMELINK', '影音雲顧問', '直播顧問', 'RTC 顧問'],
      en: ['contact LIMELINK', 'video cloud consultation', 'live streaming consulting', 'RTC consulting']
    }
  },
  privacy: {
    path: '/privacy',
    title: {
      'zh-cn': '隐私政策 | LIMELINK',
      zh: '隱私權政策 | LIMELINK',
      en: 'Privacy Policy | LIMELINK'
    },
    description: {
      'zh-cn': '了解 LIMELINK 如何收集、使用、保护与管理您在使用网站、表单与云端视频顾问服务时提供的个人数据。',
      zh: '了解 LIMELINK 如何收集、使用、保護與管理您在使用網站、表單與雲端影音顧問服務時提供的個人資料。',
      en: 'Learn how LIMELINK collects, uses, protects and manages personal information provided through our website, forms and cloud video consulting services.'
    },
    keywords: {
      'zh-cn': ['LIMELINK 隐私政策', '个人数据保护', '隐私政策', '数据安全'],
      zh: ['LIMELINK 隱私權政策', '個人資料保護', '隱私政策', '資料安全'],
      en: ['LIMELINK privacy policy', 'personal data protection', 'privacy policy', 'data security']
    }
  },
  serviceCss: {
    path: '/service-css',
    title: {
      en: "Tencent Cloud CSS live streaming services | LIMELINK",
      zh: "騰訊雲 CSS 直播串流服務 | LIMELINK",
      'zh-cn': "腾讯云 CSS 直播流媒体服务 | LIMELINK"
    },
    description: {
      en: "Review Tencent Cloud CSS features, use cases, procurement pricing and implementation. Compare regional usage, processing charges and existing bills.",
      zh: "評估騰訊雲 CSS 直播功能、適用情境、官網 8 折採購參考與導入流程，核對區域用量、轉碼錄製及實際帳單。",
      'zh-cn': "评估腾讯云 CSS 直播功能、适用场景、官网 8 折采购参考与实施流程，核对区域用量、转码录制及实际账单。"
    },
    keywords: {
      'zh-cn': ['腾讯云 CSS', '腾讯直播', 'CSS 直播流媒体', '直播代理'],
      zh: ['騰訊雲 CSS', '騰訊直播', 'CSS 直播串流', '直播代理'],
      en: ['Tencent Cloud CSS', 'Tencent live streaming', 'CSS live streaming', 'live streaming agent']
    },
    schemaType: 'Service',
    serviceName: {
      'zh-cn': '腾讯云 CSS 直播服务',
      zh: '騰訊雲 CSS 直播服務',
      en: 'Tencent Cloud CSS live streaming service'
    }
  },
  serviceByteplus: {
    path: '/service-byteplus',
    title: {
      en: "BytePlus MediaLive for live video delivery | LIMELINK",
      zh: "BytePlus MediaLive 媒體直播服務 | LIMELINK",
      'zh-cn': "BytePlus MediaLive 媒体直播服务 | LIMELINK"
    },
    description: {
      en: "Evaluate BytePlus MediaLive delivery, player integration and media processing, with procurement terms, domain setup, pilot steps and billing guidance.",
      zh: "了解 BytePlus MediaLive 直播分發、播放器與媒體處理，評估採購折扣、網域設定、導入測試及完整計費範圍。",
      'zh-cn': "了解 BytePlus MediaLive 直播分发、播放器与媒体处理，评估采购折扣、域名配置、实施测试及完整计费范围。"
    },
    keywords: {
      'zh-cn': ['BytePlus Media', 'BytePlus 直播', '媒体直播服务', '全球视频分发'],
      zh: ['BytePlus Media', 'BytePlus 直播', '媒體直播服務', '全球影音分發'],
      en: ['BytePlus Media', 'BytePlus live streaming', 'media live service', 'global video delivery']
    },
    schemaType: 'Service',
    serviceName: {
      'zh-cn': 'BytePlus Media 直播服务',
      zh: 'BytePlus Media 直播服務',
      en: 'BytePlus Media live service'
    }
  },
  serviceAgora: {
    path: '/service-agora',
    title: {
      en: "Agora RTC for video calls and interactive live streaming | LIMELINK",
      zh: "Agora RTC 視訊通話與互動直播服務 | LIMELINK",
      'zh-cn': "Agora RTC 视频通话与互动直播服务 | LIMELINK"
    },
    description: {
      en: "Explore Agora RTC video calls, interactive streaming and SDK integration. Review procurement terms, billable usage, pilot testing and FAQs.",
      zh: "評估 Agora RTC 視訊通話、互動直播與跨裝置 SDK，了解代理採購、計費用量、測試發布及常見問題。",
      'zh-cn': "评估 Agora RTC 视频通话、互动直播与跨设备 SDK，了解代理采购、计费用量、测试发布及常见问题。"
    },
    keywords: {
      'zh-cn': ['Agora RTC', '实时音视频', '互动直播', '低延迟视频', 'RTC 集成'],
      zh: ['Agora RTC', '即時音視訊', '互動直播', '低延遲影音', 'RTC 整合'],
      en: ['Agora RTC', 'real-time audio video', 'interactive live streaming', 'low latency video', 'RTC integration']
    },
    schemaType: 'Service',
    serviceName: {
      'zh-cn': 'Agora RTC 集成服务',
      zh: 'Agora RTC 整合服務',
      en: 'Agora RTC integration service'
    }
  }
}

function pageUrl(path: string) {
  return path === '/' ? siteUrl : `${siteUrl}${path}`
}

function localizedPaths(path: string) {
  return {
    en: localizePath(path, 'en'),
    zh: localizePath(path, 'zh'),
    'zh-cn': localizePath(path, 'zh-cn')
  }
}

function resolveText(value: LocalizedText, lang: Lang) {
  return value[lang]
}

function resolveLocale(lang: Lang) {
  return locales[lang].ogLocale
}

function resolveHtmlLang(lang: Lang) {
  return locales[lang].htmlLang
}

function makeBreadcrumbSchema(page: PageSeo, lang: Lang, currentPath: string) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: lang === 'en' ? 'Home' : lang === 'zh-cn' ? '首页' : '首頁',
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
    areaServed: lang === 'en' ? 'Worldwide' : '全球'
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
          inLanguage: ['zh-Hant', 'zh-Hans', 'en'],
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
    const lang = inferLanguage(route.path)
    const title = resolveText(page.title, lang)
    const description = resolveText(page.description, lang)
    const keywords = page.keywords[lang]
    const paths = localizedPaths(page.path)
    const canonicalPath = paths[lang]
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
        ...(['en', 'zh', 'zh-cn'] as const).filter(other => other !== lang).map(other => ({ property: 'og:locale:alternate', content: resolveLocale(other), key: `og-locale-${other}` })),
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: defaultOgImage }
      ],
      link: [
        { rel: 'canonical', href: url },
        { rel: 'alternate', hreflang: 'en', href: pageUrl(paths.en) },
        { rel: 'alternate', hreflang: 'zh-Hant', href: pageUrl(paths.zh) },
        { rel: 'alternate', hreflang: 'zh-Hans', href: pageUrl(paths['zh-cn']) },
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
