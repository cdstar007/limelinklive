const siteUrl = 'https://limelink.live'

// Significant content updates, never request/build dates or shared header changes.
// Historical dates are from page/article Git history. October dates reflect the
// procurement-content changes made in this workspace on 2026-10-26.
const pages = [
  { path: '/', lastmod: { en: '2026-10-26', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '1.0', changefreq: 'weekly' },
  { path: '/about', lastmod: { en: '2026-10-26', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.6', changefreq: 'monthly' },
  { path: '/services', lastmod: { en: '2026-10-26', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.9', changefreq: 'monthly' },
  { path: '/solutions', lastmod: { en: '2026-05-19', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.8', changefreq: 'monthly' },
  { path: '/pricing', lastmod: { en: '2026-10-26', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.8', changefreq: 'monthly' },
  { path: '/support', lastmod: { en: '2026-05-21', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.8', changefreq: 'monthly' },
  { path: '/docs', lastmod: { en: '2026-05-21', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.6', changefreq: 'monthly' },
  { path: '/docs/ai-video-call-app', lastmod: { en: '2026-05-21', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.7', changefreq: 'monthly' },
  { path: '/docs/best-webrtc-providers-2026', lastmod: { en: '2026-05-21', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', lastmod: { en: '2026-05-24', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy', lastmod: { en: '2026-05-24', zh: '2026-10-26', 'zh-cn': '2026-10-26' }, priority: '0.3', changefreq: 'yearly' },
  { path: '/service-css', lastmod: { en: '2026-10-27', zh: '2026-10-27', 'zh-cn': '2026-10-27' }, priority: '0.8', changefreq: 'monthly' },
  { path: '/service-byteplus', lastmod: { en: '2026-10-27', zh: '2026-10-27', 'zh-cn': '2026-10-27' }, priority: '0.8', changefreq: 'monthly' },
  { path: '/service-agora', lastmod: { en: '2026-10-27', zh: '2026-10-27', 'zh-cn': '2026-10-27' }, priority: '0.8', changefreq: 'monthly' }
]

// Traditional copy was localized for Taiwan and Simplified pages were added on
// 2026-10-26. English article dates remain unchanged. These are content dates.
export const sitemapRoutes = pages.flatMap(page => [
  { ...page, lang: 'en', lastmod: page.lastmod.en },
  { ...page, lang: 'zh', lastmod: page.lastmod.zh, path: page.path === '/' ? '/zh' : `/zh${page.path}` },
  { ...page, lang: 'zh-cn', lastmod: page.lastmod['zh-cn'], path: page.path === '/' ? '/zh-cn' : `/zh-cn${page.path}` }
])

export function renderSitemap(lang) {
  const urls = sitemapRoutes.filter(route => !lang || route.lang === lang).map(route => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

export function renderSitemapIndex() {
  const children = ['en', 'zh', 'zh-cn'].map(lang => {
    const lastmod = sitemapRoutes.filter(route => route.lang === lang).map(route => route.lastmod).sort().at(-1)
    return `  <sitemap>
    <loc>${siteUrl}/sitemap-${lang}.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children}
</sitemapindex>
`
}
