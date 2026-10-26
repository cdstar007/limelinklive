import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

// Exercise the real route without starting Nitro; only its HTTP wrappers are stubbed.
globalThis.defineEventHandler = handler => handler
globalThis.setHeader = () => {}
const { default: sitemapHandler } = await import('../server/api/sitemap.get.ts')

function entries(xml) {
  return new Map([...xml.matchAll(/<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>/gs)]
    .map(([, url, date]) => [url, date]))
}

test('sitemap output and article dates stay unchanged as the clock advances', () => {
  const NativeDate = globalThis.Date
  try {
    globalThis.Date = class extends NativeDate { constructor() { super('2026-10-26T12:00:00Z') } }
    const first = sitemapHandler({})
    globalThis.Date = class extends NativeDate { constructor() { super('2026-11-26T12:00:00Z') } }
    const second = sitemapHandler({})
    assert.equal(first, second)
    const urls = entries(first)
    assert.equal(urls.size, 42)
    assert.equal(urls.get('https://limelink.live/about'), '2026-10-26')
    assert.equal(urls.get('https://limelink.live/zh/about'), '2026-10-26')
    assert.equal(urls.get('https://limelink.live/zh-cn/about'), '2026-10-26')
    for (const language of ['', '/zh']) {
      for (const slug of ['ai-video-call-app', 'best-webrtc-providers-2026']) {
        assert.equal(urls.get(`https://limelink.live${language}/docs/${slug}`), language ? '2026-10-26' : '2026-05-21')
      }
    }
    assert.equal(urls.get('https://limelink.live/privacy'), '2026-05-24')
    assert.equal(urls.get('https://limelink.live/pricing'), '2026-10-26')
  } finally {
    globalThis.Date = NativeDate
  }
})

test('static all-language and split sitemaps agree with the API dates', async () => {
  const dynamic = sitemapHandler({})
  const combined = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8')
  const en = await readFile(new URL('../public/sitemap-en.xml', import.meta.url), 'utf8')
  const zh = await readFile(new URL('../public/sitemap-zh.xml', import.meta.url), 'utf8')
  const cn = await readFile(new URL('../public/sitemap-zh-cn.xml', import.meta.url), 'utf8')
  assert.deepEqual(entries(combined), entries(dynamic))
  assert.equal(entries(en).size, 14)
  assert.equal(entries(zh).size, 14)
  assert.equal(entries(cn).size, 14)
  assert.deepEqual(new Map([...entries(en), ...entries(zh), ...entries(cn)]), entries(dynamic))
  assert.ok([...entries(en).keys()].every(url => !new URL(url).pathname.startsWith('/zh')))
  assert.ok([...entries(zh).keys()].every(url => new URL(url).pathname === '/zh' || new URL(url).pathname.startsWith('/zh/')))
  assert.ok([...entries(cn).keys()].every(url => new URL(url).pathname === '/zh-cn' || new URL(url).pathname.startsWith('/zh-cn/')))
})

test('robots advertises only the index and its child modification dates match their content', async () => {
  const robots = await readFile(new URL('../public/robots.txt', import.meta.url), 'utf8')
  assert.deepEqual(robots.match(/^Sitemap:.*$/gm), ['Sitemap: https://limelink.live/sitemap-index.xml'])
  const index = await readFile(new URL('../public/sitemap-index.xml', import.meta.url), 'utf8')
  const children = [...index.matchAll(/<sitemap>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>/gs)]
  assert.equal(children.length, 3)
  for (const [, url, date] of children) {
    const filename = new URL(url).pathname.slice(1)
    const child = await readFile(new URL(`../public/${filename}`, import.meta.url), 'utf8')
    assert.equal(date, [...entries(child).values()].sort().at(-1))
  }
})
