export type SiteLanguage = 'en' | 'zh' | 'zh-cn'

export const locales = {
  en: { htmlLang: 'en', ogLocale: 'en_US', label: 'English', short: 'EN' },
  zh: { htmlLang: 'zh-Hant', ogLocale: 'zh_TW', label: '繁體中文（台灣）', short: '繁' },
  'zh-cn': { htmlLang: 'zh-Hans', ogLocale: 'zh_CN', label: '简体中文', short: '简' }
} as const

export function inferLanguage(path: string): SiteLanguage {
  const pathname = path.split(/[?#]/, 1)[0]
  if (pathname === '/zh-cn' || pathname.startsWith('/zh-cn/')) return 'zh-cn'
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh'
  return 'en'
}

export function localizePath(path: string, lang: SiteLanguage): string {
  const suffixAt = path.search(/[?#]/)
  const suffix = suffixAt < 0 ? '' : path.slice(suffixAt)
  const pathname = suffixAt < 0 ? path : path.slice(0, suffixAt)
  const primary = pathname.replace(/^\/(?:zh-cn|zh|en)(?=\/|$)/, '').replace(/\/$/, '') || '/'
  const prefix = lang === 'en' ? '' : `/${lang}`
  return (primary === '/' ? prefix || '/' : `${prefix}${primary}`) + suffix
}
