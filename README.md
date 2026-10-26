# LIMELINK Live

Nuxt 3 site for LIMELINK cloud video service pages, deployed to Cloudflare Workers.

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
