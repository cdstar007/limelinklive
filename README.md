# LIMELINK Live

Nuxt 3 site for LIMELINK cloud video service pages, deployed to Cloudflare Workers.

Deployment configuration, verification results, and VPS deployment details are recorded in [DEPLOY.md](./DEPLOY.md).

## Development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The Workers build outputs to `.output`. Nitro generates the Worker entry point,
the `ASSETS` binding and `.output/server/wrangler.json` from `wrangler.toml`.

## Cloudflare deployments

Deploy the current build to the named staging Preview:

```bash
npm run build
npx wrangler preview --name staging
```

Staging uses `https://staging-limelinklive.ljq98.workers.dev`. Cloudflare marks
workers.dev Preview responses with `X-Robots-Tag: noindex`.
The server also adds `noindex` for `staging.limelink.live` and its Preview subdomains.

Deploy to production:

```bash
npm run build
npx wrangler deploy
```

Production uses `https://limelink.live`. The Cloudflare Git integration builds
and deploys pushes to `main`. Deploying a named Preview does not switch
production traffic.

## Sitemap maintenance

Page-specific `lastmod` dates are maintained in `server/utils/sitemap.mjs`.
Change a date only when that page's main content, structured data, or substantive
links change; do not use the request, deployment, or build date. The current
English historical dates come from page/article Git history. The 2026-10-26
dates mark procurement-content changes, the Taiwan terminology revision and
the new Simplified Chinese translations. Each page stores a separate date for
each language.

The API and static XML files share this source. `npm run build`,
`npm run build:server` and `npm run generate` regenerate the static files
automatically. After editing dates locally, regenerate and verify with:

```bash
npm run generate:sitemaps
npm test
```

`robots.txt` advertises only `/sitemap-index.xml`, which links to the English,
Traditional Chinese and Simplified Chinese sitemaps. `/sitemap.xml` remains
available for existing consumers.

## Languages and regional copy

- English: `/`, with unprefixed service and article routes.
- Traditional Chinese for Taiwan: `/zh`, with `/zh/...` routes. Use Taiwanese
  terms such as 視訊、影音、直播、即時、軟體、資料、文件 and 網路.
- Simplified Chinese: `/zh-cn`, with `/zh-cn/...` routes and its own copy.

Shared messages live in `data/i18n.ts`; page-specific content is maintained in
the relevant page's three-language content object. Chinese article sources use
`_zh.md` and `_zh-cn.md`. Simplified copy was initially converted using OpenCC
and adjusted for regional terminology; no conversion library ships to browsers.
Maintain the three versions explicitly when copy changes.

Language selection preserves the current page, query and fragment and loads
the selected locale document to avoid Vue Router deduplicating language aliases.
All versions
render their copy on the server, with self-referencing canonical URLs and
reciprocal `en`, `zh-Hant` and `zh-Hans` alternate links. Article SEO uses each
article's own URL, not the documentation index. Each language has 14 sitemap
entries; update only the affected language's content date when making changes.

## Service page content and FAQs

The CSS, BytePlus and Agora pages each load their own English, Traditional
Chinese and Simplified Chinese content from `data/service-guides/`. The shared
`components/ServiceLanding.vue` renders the product overview, features,
scenarios, procurement terms, rollout steps, illustrative example and FAQ.

FAQPage JSON-LD is generated from the same six question/answer objects displayed
on each page, using `utils/service-faq.ts`. Keep answers visible in the page's
expandable FAQ; do not add schema-only promotional answers. Google discontinued
FAQ rich results in May 2026, so this markup must not be presented as a promise
of a special Search appearance. See [Google's update log](https://developers.google.com/search/updates).

Examples are explicitly hypothetical, as approved by the user. Do not replace
them with named customers, results, dates or testimonials without verified,
publishable source material. Public pricing remains 20% off eligible list items
(8 折); enterprise terms require a custom quote. Internal purchasing costs are
not part of these files.

`npm test` checks the nine content variants, editorial depth, FAQ/schema parity
and script-safe JSON serialization. The merged SEO integration tests also require
a running Node production build at `http://127.0.0.1:3107` (override with
`SEO_BASE_URL`); start it with `PORT=3107 HOST=127.0.0.1 node .output/server/index.mjs`
after `npm run build:server`. After content changes, update the relevant
service route's language-specific `lastmod` in `server/utils/sitemap.mjs`.

## Node server deployment

For a Node server deployment, build with:

```bash
npm run build:server
```

This outputs `.output/server/index.mjs`, which can be run with PM2 using `ecosystem.config.cjs`.

## CI/CD

Pushes to the `main` branch run `.github/workflows/deploy.yml` on the VPS self-hosted runner:

1. Pull `origin/main`
2. Install dependencies with `npm ci`
3. Build with `npm run build:server`
4. Reload PM2 app `limelinklive`

The runner is installed on the VPS as a systemd service in `/home/ubuntu/actions-runner-limelinklive`.

Configure runtime environment variables on the VPS or in the PM2 ecosystem file:

- `FEISHU_WEBHOOK_URL`
- `FEISHU_WEBHOOK_SECRET` if Feishu signature verification is enabled
- `RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`
