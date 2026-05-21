const siteUrl = 'https://limelink.live'

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/zh', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/zh/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/zh/solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/zh/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/support', priority: '0.8', changefreq: 'monthly' },
  { path: '/zh/support', priority: '0.8', changefreq: 'monthly' },
  { path: '/docs', priority: '0.6', changefreq: 'monthly' },
  { path: '/zh/docs', priority: '0.6', changefreq: 'monthly' },
  { path: '/docs/ai-video-call-app', priority: '0.7', changefreq: 'monthly' },
  { path: '/zh/docs/ai-video-call-app', priority: '0.7', changefreq: 'monthly' },
  { path: '/docs/best-webrtc-providers-2026', priority: '0.7', changefreq: 'monthly' },
  { path: '/zh/docs/best-webrtc-providers-2026', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/zh/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/service-css', priority: '0.8', changefreq: 'monthly' },
  { path: '/zh/service-css', priority: '0.8', changefreq: 'monthly' },
  { path: '/service-byteplus', priority: '0.8', changefreq: 'monthly' },
  { path: '/zh/service-byteplus', priority: '0.8', changefreq: 'monthly' },
  { path: '/service-agora', priority: '0.8', changefreq: 'monthly' },
  { path: '/zh/service-agora', priority: '0.8', changefreq: 'monthly' }
]

function absoluteUrl(path: string) {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
}

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')

  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = routes.map((route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
