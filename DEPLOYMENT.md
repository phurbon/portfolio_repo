# GitHub Pages Deployment Guide

## Prerequisites
- Your React Vite project is ready
- GitHub repository is set up and connected

## Step 1: Build the Project
```bash
npm run build
```

## Step 2: Commit and Push Changes
```bash
git add .
git commit -m "Fix GitHub Pages deployment - update base path and asset handling"
git push origin main
```

## Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

## Step 4: Wait for Deployment
- GitHub will automatically build and deploy your site
- You'll see a green checkmark when it's ready
- Your site will be available at: `https://yourusername.github.io/portfolio_repo/`

## What Was Fixed
1. **Vite Config**: Added `base: '/portfolio_repo/'` for correct asset paths
2. **Asset Handling**: Updated `utils.js` to use `import.meta.env.BASE_URL`
3. **Routing**: Added 404.html and routing script for single-page app support
4. **Favicon**: Updated favicon path to work with base path

## Troubleshooting
- If you still see a white screen, check the browser console for errors
- Make sure your repository name matches exactly: `portfolio_repo`
- Wait 5-10 minutes for GitHub to rebuild after pushing changes

## Automatic Deployment
- Every time you push to main, GitHub will automatically rebuild and deploy
- No manual intervention needed for future updates
