import { writeFile } from 'node:fs/promises'
import { renderSitemap, renderSitemapIndex } from '../server/utils/sitemap.mjs'

const outputs = {
  'sitemap.xml': renderSitemap(),
  'sitemap-en.xml': renderSitemap('en'),
  'sitemap-zh.xml': renderSitemap('zh'),
  'sitemap-zh-cn.xml': renderSitemap('zh-cn'),
  'sitemap-index.xml': renderSitemapIndex()
}

await Promise.all(Object.entries(outputs).map(([filename, xml]) =>
  writeFile(new URL(`../public/${filename}`, import.meta.url), xml, 'utf8')
))
