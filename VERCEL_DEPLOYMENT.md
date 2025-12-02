# Vercel Deployment Guide

## Issue: routes-manifest.json Error

If you're seeing the error: `The file "/vercel/path0/out/routes-manifest.json" couldn't be found`

This happens because Vercel is trying to use Next.js server features, but this is a static export.

## Solution: Configure Vercel Dashboard

### Option 1: Configure in Vercel Dashboard (Recommended)

1. Go to your Vercel project settings
2. Navigate to **Settings** → **General**
3. Under **Build & Development Settings**:
   - **Framework Preset:** Select `Other` or leave blank
   - **Build Command:** `npm run build`
   - **Output Directory:** `out`
   - **Install Command:** `npm install`
   - **Root Directory:** Leave as default (or set if needed)

4. Save settings
5. Redeploy

### Option 2: Use vercel.json (Current Setup)

The `vercel.json` file is already configured correctly:
- ✅ `outputDirectory: "out"`
- ✅ `buildCommand: "npm run build"`
- ✅ Rewrites for all routes

### Option 3: Force Static Site Detection

If the above doesn't work, try:

1. In Vercel Dashboard → Settings → General
2. Set **Framework Preset** to `Other`
3. Make sure **Output Directory** is set to `out`
4. Redeploy

## Verification

After deployment, check:
- ✅ All routes work (homepage, services, work, contact)
- ✅ Direct URL access works (e.g., `/services/web-development`)
- ✅ No 404 errors
- ✅ Static files are served correctly

## Current Configuration

- **Next.js Config:** `output: 'export'` (static export)
- **Build Output:** `out/` directory
- **Vercel Config:** `vercel.json` with rewrites

## Troubleshooting

If issues persist:
1. Clear Vercel build cache
2. Delete `.vercel` folder locally (if exists)
3. Reconnect repository
4. Redeploy


