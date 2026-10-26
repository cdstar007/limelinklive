export function estimateStandardMonthlyCost(listCost: number): number {
  if (!Number.isFinite(listCost) || listCost < 0) {
    throw new RangeError('List cost must be a finite, non-negative amount')
  }
  return Math.round((listCost * 0.8 + Number.EPSILON) * 100) / 100
}

export function compareMonthlyCosts(currentBill: number | string | null | undefined, estimatedCost: number) {
  if (currentBill == null || (typeof currentBill === 'string' && !currentBill.trim())) return null
  const bill = Number(currentBill)
  if (!Number.isFinite(bill) || bill <= 0 || !Number.isFinite(estimatedCost) || estimatedCost < 0) return null

  const billCents = Math.round(bill * 100)
  const estimateCents = Math.round(estimatedCost * 100)
  if (!billCents) return null
  const difference = (billCents - estimateCents) / 100
  return {
    difference,
    savingsPercent: difference > 0 ? Math.round((billCents - estimateCents) / billCents * 10000) / 100 : 0,
    hasSavings: difference > 0
  }
}
