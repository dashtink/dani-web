# Cloudflare Workers Deployment Guide

This site deploys as a Cloudflare Worker serving static assets (not classic Cloudflare Pages) — see `wrangler.toml`.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **GitHub Repository**: Your code should be in a GitHub repository

## Environment Variables

No environment variables are required for this static site deployment.

## Deployment Steps

### 1. Connect via Workers Builds

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** in the sidebar
3. Select the `dani-web` Worker (or create one and connect this GitHub repository)
4. Under its **Build** settings, confirm the Git integration points at this repo/branch

### 2. Build Settings

Build and deploy settings are read from `wrangler.toml`:

- **Build command**: `npm run build` (runs `next build`, which produces the `out/` static export)
- **Assets directory**: `out`
- **Deploy command**: `wrangler deploy`

### 3. Deploy

Pushing to the connected branch triggers a Workers Build automatically. You'll see build status as a GitHub check on the PR/commit.

## Local Development

To test the build locally:

```bash
npm run build
```

This creates an `out` directory with the static files. To validate the Workers deploy config without actually deploying:

```bash
npx wrangler deploy --dry-run
```

## Troubleshooting

- **Build fails**: Check that all dependencies are installed correctly
- **Images not loading**: Ensure `unoptimized: true` is set in `next.config.mjs` (already configured)
- **Static export issues**: Verify `output: 'export'` is set in `next.config.mjs` (already configured)
- **"Missing entry-point to Worker script or to assets directory"**: `wrangler.toml` must use the `[assets]` table (not the classic Pages `pages_build_output_dir` key) — the two are mutually exclusive.

## Custom Domain

Custom domains are managed in the Cloudflare dashboard under the Worker's **Settings → Domains & Routes**.

## Note on the old classic Pages project

This repo previously also had a classic Cloudflare Pages project (a separate GitHub integration, using `pages_build_output_dir`) watching the same branch. That's been superseded by the Worker above — if it's still connected in the dashboard, disable/unlink it there to avoid duplicate/conflicting deploys.
