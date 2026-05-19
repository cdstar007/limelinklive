function normalizePrimaryPath(path: string) {
  if (path === '/en' || path === '/en/') return '/'

  const strippedPath = path.replace(/^\/en/, '')
  return strippedPath.endsWith('/') ? strippedPath.slice(0, -1) : strippedPath
}

export default defineEventHandler((event) => {
  const url = getRequestURL(event)

  if (url.pathname !== '/en' && !url.pathname.startsWith('/en/')) {
    return
  }

  const targetPath = normalizePrimaryPath(url.pathname)
  const target = `${targetPath}${url.search}`

  return sendRedirect(event, target, 301)
})
