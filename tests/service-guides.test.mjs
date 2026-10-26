import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { buildFaqSchema, serializeFaqSchema } from '../utils/service-faq.ts'

async function guide(product, language) {
  return JSON.parse(await readFile(new URL(`../data/service-guides/${product}.${language}.json`, import.meta.url), 'utf8'))
}

function visibleStrings(value) {
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.flatMap(visibleStrings)
  return Object.entries(value).filter(([key]) => key !== 'url').flatMap(([, child]) => visibleStrings(child))
}

test('all nine service guides meet the requested depth and retain the approved pricing and illustrative case labels', async () => {
  for (const product of ['css', 'byteplus', 'agora']) {
    for (const language of ['en', 'zh', 'zh-cn']) {
      const content = await guide(product, language)
      const text = visibleStrings(content).join(' ')
      const length = language === 'en' ? (text.match(/[A-Za-z0-9]+(?:[’'-][A-Za-z0-9]+)*/g) || []).length : (text.match(/[\u3400-\u9fff]/g) || []).length
      assert.ok(length >= (language === 'en' ? 1000 : 1500) && length <= (language === 'en' ? 1500 : 2500), `${product}/${language}: ${length}`)
      assert.equal(content.faqs.length, 6)
      assert.equal(content.features.length, 3)
      assert.equal(content.scenarios.length, 3)
      assert.equal(content.steps.length, 4)
      assert.match(content.caseLabel, /Illustrative|假設|假设/)
      assert.match(content.pricing.join(' '), language === 'en' ? /20% off/ : /8 折/)
      assert.doesNotMatch(text, /65 折|7 折|提貨價|提货价/)
      assert.ok(content.sources.length >= 2)
      assert.ok(content.sources.every(source => new URL(source.url).protocol === 'https:'))
      if (language === 'zh') assert.ok(!text.includes('視頻'))
    }
  }
})

test('FAQPage questions and answers exactly match the visible guide data for each locale', async () => {
  for (const product of ['css', 'byteplus', 'agora']) {
    for (const [language, prefix, htmlLang] of [['en', '', 'en'], ['zh', '/zh', 'zh-Hant'], ['zh-cn', '/zh-cn', 'zh-Hans']]) {
      const content = await guide(product, language)
      const url = `https://limelink.live${prefix}/service-${product}`
      const schema = buildFaqSchema(content.faqs, url, htmlLang)
      assert.equal(schema['@type'], 'FAQPage')
      assert.equal(schema['@id'], `${url}#faq`)
      assert.equal(schema.inLanguage, htmlLang)
      assert.deepEqual(schema.mainEntity.map(item => [item.name, item.acceptedAnswer.text]), content.faqs.map(item => [item.question, item.answer]))
      assert.ok(schema.mainEntity.every(item => item['@type'] === 'Question' && item.acceptedAnswer['@type'] === 'Answer'))
    }
  }
})

test('serialized FAQ data cannot terminate the JSON-LD script element', () => {
  const schema = buildFaqSchema([{ question: 'Question', answer: '</script><script>alert(1)</script>' }], 'https://limelink.live/service-css', 'en')
  const json = serializeFaqSchema(schema)
  assert.ok(!json.includes('<'))
  assert.deepEqual(JSON.parse(json), schema)
})
