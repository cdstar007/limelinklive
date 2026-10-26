import test from 'node:test'
import assert from 'node:assert/strict'
import { inferLanguage, localizePath, locales } from '../utils/locales.ts'
import { messages } from '../data/i18n.ts'

test('detects three languages from complete route prefixes', () => {
  for (const [path, expected] of [['/', 'en'], ['/zh', 'zh'], ['/zh/services', 'zh'], ['/zh-cn', 'zh-cn'], ['/zh-cn/services', 'zh-cn'], ['/en/docs', 'en'], ['/zh-cn-extra', 'en']]) {
    assert.equal(inferLanguage(path), expected)
  }
})

test('language switches keep the page, query and fragment without stacking prefixes', () => {
  assert.equal(localizePath('/zh/services?from=nav#pricing', 'zh-cn'), '/zh-cn/services?from=nav#pricing')
  assert.equal(localizePath('/zh-cn/services', 'zh'), '/zh/services')
  assert.equal(localizePath('/zh-cn/services', 'en'), '/services')
  assert.equal(localizePath('/zh-cn/', 'zh'), '/zh')
  assert.equal(localizePath('/zh', 'zh-cn'), '/zh-cn')
  assert.equal(localizePath('/en/docs/', 'zh-cn'), '/zh-cn/docs')
})

test('all message keys exist in English, Taiwanese Traditional and Simplified Chinese', () => {
  const keys = Object.keys(messages.en).sort()
  assert.deepEqual(Object.keys(messages.zh).sort(), keys)
  assert.deepEqual(Object.keys(messages['zh-cn']).sort(), keys)
  assert.equal(locales.zh.htmlLang, 'zh-Hant')
  assert.equal(locales['zh-cn'].htmlLang, 'zh-Hans')
  assert.ok(Object.values(messages.zh).every(value => !value.includes('視頻')))
  assert.match(messages.zh.services_title, /影音|視訊/)
  assert.match(messages['zh-cn'].services_title, /视频/)
})
