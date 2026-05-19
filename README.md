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

For a Node server deployment, build with:

```bash
npm run build:server
```

This outputs `.output/server/index.mjs`, which can be run with PM2 using `ecosystem.config.cjs`.

## CI/CD

Pushes to the `main` branch run `.github/workflows/deploy.yml` and deploy to the VPS:

1. SSH into the VPS
2. Pull `origin/main`
3. Install dependencies with `npm ci`
4. Build with `npm run build:server`
5. Reload PM2 app `limelinklive`

Configure these GitHub repository secrets before relying on automatic deploys:

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`

Configure runtime environment variables on the VPS or in the PM2 ecosystem file:

- `FEISHU_WEBHOOK_URL`
- `FEISHU_WEBHOOK_SECRET` if Feishu signature verification is enabled
- `RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`
