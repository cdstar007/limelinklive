function normalizePrimaryPath(path: string) {
  if (path === '/en' || path === '/en/') return '/'

  const strippedPath = path.replace(/^\/en/, '')
  return strippedPath.endsWith('/') ? strippedPath.slice(0, -1) : strippedPath
}

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const isLegacyEnglishPath = url.pathname === '/en' || url.pathname.startsWith('/en/')
  const targetPath = isLegacyEnglishPath ? normalizePrimaryPath(url.pathname) : url.pathname

  // Normalize the scheme and legacy language prefix together to avoid redirect chains.
  if (url.hostname === 'limelink.live' && url.protocol === 'http:') {
    return sendRedirect(event, `https://limelink.live${targetPath}${url.search}`, 301)
  }

  if (!isLegacyEnglishPath) {
    return
  }

  const target = `${targetPath}${url.search}`

  return sendRedirect(event, target, 301)
})
