import { type Lang } from '~/data/i18n'
import { inferLanguage, localizePath as localizedRoute, locales } from '~/utils/locales'

export function useDomI18n() {
  const route = useRoute()
  const router = useRouter()
  const currentLang = computed<Lang>(() => inferLanguage(route.path))

  function localizePath(path: string, lang: Lang = currentLang.value) {
    return localizedRoute(path, lang)
  }

  // Visible copy is rendered reactively on the server and client. Keep this
  // hook for the app lifecycle without rewriting Vue-managed DOM text.
  function applyTranslations(lang: Lang = currentLang.value) {
    if (import.meta.client) document.documentElement.lang = locales[lang].htmlLang
  }

  function syncLanguageFromRoute(path = route.path) {
    applyTranslations(inferLanguage(path))
  }

  async function setLanguage(lang: Lang) {
    const target = localizePath(route.path, lang) + route.fullPath.slice(route.path.length)
    if (route.fullPath === target) return
    // Vue Router treats aliases of one page as the same route. A document
    // navigation selects the locale URL reliably and renders its SSR copy.
    if (import.meta.client) {
      window.location.assign(target)
      return
    }
    await router.push(target)
  }

  function initLanguage() {
    applyTranslations()
  }

  return { currentLang, localizePath, applyTranslations, syncLanguageFromRoute, setLanguage, initLanguage }
}
