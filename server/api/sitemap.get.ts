import { renderSitemap } from '../utils/sitemap.mjs'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')
  return renderSitemap()
})
