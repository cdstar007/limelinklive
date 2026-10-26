import { messages, type Lang } from '~/data/i18n'

function inferLangFromPath(path: string): Lang {
  if (path === '/zh' || path.startsWith('/zh/')) return 'zh'
  if (path === '/en' || path.startsWith('/en/')) return 'en'
  return 'en'
}

export function useDomI18n() {
  const route = useRoute()
  const currentLang = useState<Lang>('limelink-lang', () => inferLangFromPath(route.path))

  function normalizeZhPath(path: string) {
    if (path === '/' || path === '') return '/'
    return path.endsWith('/') ? path.slice(0, -1) : path
  }

  function localizePath(path: string, lang: Lang = currentLang.value) {
    const primaryPath = path === '/zh'
      ? '/'
      : path.startsWith('/zh/')
        ? normalizeZhPath(path.replace(/^\/zh/, ''))
        : path === '/en'
          ? '/'
          : path.startsWith('/en/')
            ? normalizeZhPath(path.replace(/^\/en/, ''))
            : normalizeZhPath(path)

    if (lang === 'zh') {
      if (primaryPath === '/') return '/zh'
      return `/zh${primaryPath}`
    }

    if (path === '/en') return '/'
    if (path.startsWith('/en/')) return normalizeZhPath(path.replace(/^\/en/, ''))
    return primaryPath
  }

  function translate(key: string) {
    const dictionary = messages[currentLang.value] as Record<string, string>
    return dictionary[key] ?? key
  }

  function applyTranslations(lang: Lang = currentLang.value) {
    if (!import.meta.client) return

    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n
      if (key && key in messages[lang]) {
        el.textContent = messages[lang][key as keyof typeof messages[typeof lang]]
      }
    })

    document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder
      if (key && key in messages[lang]) {
        el.placeholder = messages[lang][key as keyof typeof messages[typeof lang]]
      }
    })

    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en'
    document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach((btn) => {
      btn.dataset.active = btn.dataset.lang === lang ? 'true' : 'false'
    })
  }

  function syncLanguageFromRoute(path = route.path) {
    const lang = path === '/zh' || path.startsWith('/zh/')
      ? 'zh'
      : path === '/en' || path.startsWith('/en/')
        ? 'en'
        : inferLangFromPath(path)
    currentLang.value = lang
    applyTranslations(currentLang.value)
  }

  async function setLanguage(lang: Lang) {
    if (import.meta.client) {
      window.localStorage.setItem('limelink-lang', lang)
    }

    const targetPath = localizePath(route.path, lang)
    if (import.meta.client && route.path !== targetPath) {
      // Vue Router treats language aliases as the same route. Load the localized
      // URL so the server, document language and canonical all agree.
      window.location.assign(targetPath)
      return
    }

    currentLang.value = lang
    applyTranslations(lang)
  }

  function initLanguage() {
    syncLanguageFromRoute(route.path)
  }

  return {
    currentLang,
    translate,
    applyTranslations,
    localizePath,
    setLanguage,
    syncLanguageFromRoute,
    initLanguage
  }
}
