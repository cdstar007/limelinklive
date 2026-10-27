import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { stripTypeScriptTypes } from 'node:module'
import vm from 'node:vm'
import { webcrypto } from 'node:crypto'

const source = stripTypeScriptTypes(readFileSync(new URL('../server/api/inquiry.post.ts', import.meta.url), 'utf8'))
  .replace('export default ', 'globalThis.handler = ')

function fixture(responses, options = {}) {
  let calls = 0
  const logs = []
  const context = vm.createContext({
    Map, Date, TextEncoder, Uint8Array, URLSearchParams, btoa,
    process: { env: {} },
    crypto: options.crypto || webcrypto,
    console: { error: (...args) => logs.push(args) },
    defineEventHandler: handler => handler,
    useRuntimeConfig: () => ({ feishuWebhookUrl: 'https://example.invalid/secret-hook', feishuWebhookSecret: options.secret || '' }),
    getHeader: () => '192.0.2.1',
    readBody: async () => ({ body: 'System test' }),
    createError: details => Object.assign(new Error(details.statusMessage), details),
    $fetch: async () => {
      const response = responses[calls++]
      if (response instanceof Error) throw response
      return response
    }
  })
  vm.runInContext(source, context)
  return { submit: () => context.handler({ context: {} }), calls: () => calls, logs }
}

for (const response of [{ code: 0 }, { StatusCode: 0 }]) {
  test(`accepts explicit Feishu success: ${JSON.stringify(response)}`, async () => {
    const api = fixture([response])
    assert.equal((await api.submit()).ok, true)
    await assert.rejects(api.submit(), error => error.statusCode === 429)
    assert.equal(api.calls(), 1)
  })
}

test('HTTP 200 with a Feishu rejection is a delivery failure and can be retried', async () => {
  const api = fixture([{ code: 19021, msg: 'sign match fail' }, { code: 0 }])
  await assert.rejects(api.submit(), error => error.statusCode === 502 && error.data.providerCode === 19021)
  assert.equal((await api.submit()).ok, true)
})

test('missing or malformed success codes never produce false success', async () => {
  for (const response of [undefined, null, {}, '<html>error</html>', { code: '0' }, { code: 19024, StatusCode: 0 }]) {
    const api = fixture([response])
    await assert.rejects(api.submit(), error => error.statusCode === 502)
  }
})

test('transport failures do not log webhook URLs and release the retry cooldown', async () => {
  const api = fixture([new Error('request failed https://example.invalid/secret-hook'), { code: 0 }])
  await assert.rejects(api.submit(), error => error.statusCode === 502)
  assert.ok(!api.logs.flat().map(String).join(' ').includes('secret-hook'))
  assert.equal((await api.submit()).ok, true)
})

test('signing failures release the cooldown and return a controlled failure', async () => {
  const api = fixture([], { secret: 'test-only-secret', crypto: { subtle: { importKey: async () => { throw new Error('sign failed') } } } })
  for (let i = 0; i < 2; i++) await assert.rejects(api.submit(), error => error.statusCode === 502)
  assert.equal(api.calls(), 0)
})
