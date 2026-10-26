import test from 'node:test'
import assert from 'node:assert/strict'
import { request } from 'node:http'

// Run against a production build: SEO_BASE_URL=http://127.0.0.1:3107 node --test tests/seo.test.mjs
const base = process.env.SEO_BASE_URL || 'http://127.0.0.1:3107'
const site = 'https://limelink.live'
const fixtures = [
  ['/', 'en', 'Realtime Infrastructure for Global Applications'],
  ['/zh', 'zh-Hant', '專業雲端視頻服務代理與技術整合商'],
  ['/services', 'en', 'Cloud Video Services'],
  ['/zh/services', 'zh-Hant', '雲端視頻服務產品'],
  ['/docs/ai-video-call-app', 'en', 'How to Build an AI Video Call App'],
  ['/zh/docs/ai-video-call-app', 'zh-Hant', '如何建構 AI 視訊通話應用程式'],
  ['/docs/best-webrtc-providers-2026', 'en', 'Best WebRTC Providers in 2026'],
  ['/zh/docs/best-webrtc-providers-2026', 'zh-Hant', '2026 年最佳 WebRTC 供應商比較']
]

function tags(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map(([text]) =>
    Object.fromEntries([...text.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])))
}

for (const [path, lang, heading] of fixtures) {
  test(`${path} serves its own canonical and localized content without JavaScript`, async () => {
    const response = await fetch(base + path)
    assert.equal(response.status, 200)
    const html = await response.text()
    const canonicals = tags(html, 'link').filter(tag => tag.rel === 'canonical')
    assert.deepEqual(canonicals.map(tag => tag.href), [site + (path === '/' ? '' : path)])
    assert.equal(tags(html, 'html')[0].lang, lang)
    const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)]
      .map(([, text]) => text.replace(/<[^>]*>/g, '').trim())
    assert.ok(headings.includes(heading), `Expected SSR H1: ${heading}; received ${headings}`)
    if (path.includes('/docs/')) {
      const alternate = tags(html, 'link').find(tag => tag.hreflang === 'en')
      assert.equal(alternate.href, site + path.replace(/^\/zh/, ''))
    }
  })
}

test('English homepage links directly to its Chinese version', async () => {
  const html = await (await fetch(base + '/')).text()
  assert.ok(tags(html, 'a').some(tag => tag.href === '/zh'), 'No crawlable Chinese homepage link')
})

test('Chinese homepage content links stay in the Chinese section', async () => {
  const html = await (await fetch(base + '/zh')).text()
  const links = tags(html, 'a').map(tag => tag.href)
  assert.ok(links.includes('/zh/service-css'), 'Missing localized service link')
  assert.ok(!links.includes('/service-css'), 'Chinese service card links to English page')
})

test('HTTP requests for the production host redirect permanently to HTTPS in one hop', async () => {
  // Node fetch does not preserve a custom Host header; send the actual proxy request.
  const response = await new Promise((resolve, reject) => {
    const req = request(base + '/en/services?source=seo', {
      headers: { host: 'limelink.live', 'x-forwarded-proto': 'http' }
    }, res => { res.resume(); resolve(res) })
    req.on('error', reject)
    req.end()
  })
  assert.equal(response.statusCode, 301)
  assert.equal(response.headers.location, 'https://limelink.live/services?source=seo')
})
