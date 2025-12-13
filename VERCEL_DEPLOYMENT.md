# Deploy to Vercel (FREE - Recommended)

Since you already own ryzafit.com on Namecheap, you can:
- Host on Vercel for FREE (no hosting fees!)
- Point your Namecheap domain to Vercel
- Get automatic deployments, SSL, and CDN

## Step 1: Push to GitHub

```bash
cd /Users/aayushi/Projects/ryzafit-landing
git init
git add .
git commit -m "Initial RyzaFit landing page"
gh repo create ryzafit-landing --public --source=. --push
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select **ryzafit-landing** repository
5. Vercel auto-detects Vite settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**

## Step 3: Add Your Custom Domain

1. In Vercel dashboard: **Settings** > **Domains**
2. Add `ryzafit.com`
3. Vercel will show DNS records

## Step 4: Update Namecheap DNS

1. Go to Namecheap dashboard
2. **Domain List** > **Manage** (next to ryzafit.com)
3. Click **Advanced DNS** tab
4. Add these records:

```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic

Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

5. Click **Save All Changes**

## Step 5: Done!

- Your site will be live at https://ryzafit.com in ~10-30 minutes
- Future updates: Just push to GitHub, auto-deploys in 1-2 minutes
- Free SSL certificate
- Global CDN (faster than Namecheap hosting)
- Zero hosting costs

## Benefits vs Namecheap Hosting:
- ✅ FREE (Namecheap hosting = $2-10/month)
- ✅ Faster (global CDN)
- ✅ Auto-deploy on git push
- ✅ Automatic SSL
- ✅ Better for React apps
