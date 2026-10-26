import test from 'node:test'
import assert from 'node:assert/strict'
import { estimateStandardMonthlyCost, compareMonthlyCosts } from '../utils/pricing.ts'

test('standard procurement estimates 80% of comparable list charges', () => {
  assert.equal(estimateStandardMonthlyCost(1000), 800)
  assert.equal(estimateStandardMonthlyCost(8.22), 6.58)
  assert.equal(estimateStandardMonthlyCost(0), 0)
})

test('compares an actual bill to the standard estimate instead of claiming the list discount as savings', () => {
  assert.deepEqual(compareMonthlyCosts('1000', 800), { difference: 200, savingsPercent: 20, hasSavings: true })
  assert.deepEqual(compareMonthlyCosts(850, 800), { difference: 50, savingsPercent: 5.88, hasSavings: true })
})

test('equal or cheaper existing contracts do not become positive savings', () => {
  assert.deepEqual(compareMonthlyCosts(800, 800), { difference: 0, savingsPercent: 0, hasSavings: false })
  assert.deepEqual(compareMonthlyCosts(700, 800), { difference: -100, savingsPercent: 0, hasSavings: false })
})

test('missing and invalid current bills do not generate comparisons', () => {
  for (const input of ['', ' ', null, undefined, 0, -1, 'invalid', Infinity, NaN]) {
    assert.equal(compareMonthlyCosts(input, 800), null)
  }
  assert.equal(compareMonthlyCosts(1000, Infinity), null)
  assert.equal(compareMonthlyCosts(1000, -1), null)
})

test('comparison uses the cents shown to the customer', () => {
  assert.deepEqual(compareMonthlyCosts(6.58, 6.576), { difference: 0, savingsPercent: 0, hasSavings: false })
  assert.deepEqual(compareMonthlyCosts(10, 6.576), { difference: 3.42, savingsPercent: 34.2, hasSavings: true })
})

test('invalid public charges cannot produce misleading estimates', () => {
  for (const input of [-1, Infinity, NaN]) {
    assert.throws(() => estimateStandardMonthlyCost(input), RangeError)
  }
})
