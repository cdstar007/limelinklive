# LIMELINK Live

Nuxt 3 site for LIMELINK cloud video service pages, built for Cloudflare Pages.

## Development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The production build outputs to `dist`, matching `wrangler.toml`.

## CI/CD

Pushes to the `main` branch run `.github/workflows/deploy.yml`:

1. Install dependencies with `npm ci`
2. Build with `npm run build`
3. Deploy `dist` to Cloudflare Pages project `limelinkstreaming`

Configure these GitHub repository secrets before relying on automatic deploys:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Configure runtime environment variables in Cloudflare Pages:

- `FEISHU_WEBHOOK_URL`
- `FEISHU_WEBHOOK_SECRET` if Feishu signature verification is enabled
- `RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`
