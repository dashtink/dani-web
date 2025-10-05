# Cloudflare Pages Deployment Guide

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **GitHub Repository**: Your code should be in a GitHub repository

## Environment Variables

No environment variables are required for this static site deployment.

## Deployment Steps

### 1. Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Connect your GitHub repository

### 2. Configure Build Settings

- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave empty)

### 3. Deploy

1. Click **Save and Deploy**
2. Your site will be built and deployed automatically
3. You'll get a preview URL to test your deployment

## Local Development

To test the build locally:

```bash
npm run build
```

This will create an `out` directory with your static files, which is what Cloudflare Pages will serve.

## Troubleshooting

- **Build fails**: Check that all dependencies are installed correctly
- **Images not loading**: Ensure `unoptimized: true` is set in `next.config.mjs` (already configured)
- **Static export issues**: Verify `output: 'export'` is set in `next.config.mjs` (already configured)

## Custom Domain

After deployment, you can add a custom domain in the Cloudflare Pages dashboard under **Custom domains**.
