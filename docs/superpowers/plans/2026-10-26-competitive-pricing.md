# Competitive Pricing Implementation Plan

**Goal:** Publish only an 80%-of-list-price reference in local website content, with custom quotes for other plans and an honest current-bill comparison.

**Architecture:** Keep the Nuxt layout, bilingual message dictionary and inquiry API. Use a pure pricing utility for the estimator and compare equal recurring cost scopes. Internal purchasing costs stay in a separate Markdown document outside shipped assets.

**Tech Stack:** Nuxt 3, Vue 3, TypeScript, Node built-in test runner. No added dependencies.

**Spec:** `docs/superpowers/specs/2026-10-26-competitive-pricing-design.md`; user approval amended public pricing to 8 折 only. Execute directly in the current session under existing user authorization.

## Constraints and review focus

- No public 7 折, 65 折 or purchasing-cost disclosure; no deployment.
- Empty or invalid current bills show no comparison; equal or lower current bills never show a saving.
- A displayed cent-level comparison must agree with displayed estimated USD.
- Chinese and English, including defaults and SEO, must agree.
- Existing inquiry transport and success tracking stay intact; new fields remain optional.

## Task 1: Pricing behavior

- [x] Write `tests/pricing.test.mjs`, import `utils/pricing.ts`, and run `node --test tests/pricing.test.mjs`; expect failure before utility exists.
- [x] Implement `estimateStandardMonthlyCost(listCost: number): number` and `compareMonthlyCosts(currentBill: number | string | null | undefined, estimatedCost: number)`; test $1,000 list → $800 estimate, $1,000 current → $200 / 20% saving, equal / lower bills, invalid input and cent rounding.
- [x] Wire utility and optional current-bill input to `components/PricingCalculator.vue`; preserve existing vendor rate tables and disclaimer scope.

## Task 2: Bilingual conversion content

- [x] Update `data/i18n.ts`, header, homepage, pricing page and homepage/pricing SEO. Remove seasonal promotion, unsupported permanent pricing, and publicly advertised lower discounts.
- [x] Add explanatory conditions and optional qualification fields to pricing form; reuse the existing collector. Localize homepage links and keep the review CTA accessible.
- [x] Update `MARKETING-STRATEGY.md`, and save internal contribution and negotiation guidance in `docs/internal/competitive-pricing.md`.

## Task 3: Verification

- [x] Run pricing tests, `npm run build` and `git diff --check`.
- [x] Inspect local English / Chinese routes and calculator interactions, including each vendor, empty bill and no-saving cases; do not send inquiry forms.
- [x] Review diff and generated assets for stale discounts, internal cost disclosure and translation mismatches. Report actual verification and deployment status.

## Execution record

- User approved public 8 折 only; all other plans use custom quotes.
- Pricing tests first failed against the previous 95% rate and absent comparison behavior, then passed after implementation. `npm test`: 6/6.
- Production `npm run build`: passed with the Cloudflare Pages preset. A retry was needed because the local dev server lock was active; the task-owned server was stopped before the final successful build.
- Bilingual dictionary audit: 467 matching, unique keys; all homepage and pricing references exist.
- Browser verified English/Chinese homepage and pricing routes, Chinese homepage CTA, review-button scrolling, Tencent/BytePlus/Agora estimates and positive/no-saving comparisons. No form was submitted.
- Public source and built asset scan found no old discounts or internal purchasing-cost text. Internal document is ignored by Git.
- Fresh read-only review found no actionable regressions; its documentation consistency note was corrected.
- `git diff --check`: passed. No commit, push, deployment or external communication.
- Existing vendor rate tables were retained with explicit built-in-rate disclaimers; this is not a full vendor tariff audit.
