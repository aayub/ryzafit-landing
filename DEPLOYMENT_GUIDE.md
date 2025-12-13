# Namecheap Deployment Guide

## Prerequisites

- ✅ Google Apps Script set up (see GOOGLE_APPS_SCRIPT.md)
- ✅ Script URL added to WaitlistForm.jsx
- ✅ Domain purchased on Namecheap (ryzafit.com)

## Option 1: Using Vercel or Netlify (Recommended - FREE!)

### Why NOT Namecheap Hosting?

Namecheap hosting is designed for WordPress/PHP sites, not modern React apps. Here's why Vercel/Netlify are better:

- ✅ **FREE** (Namecheap hosting costs $2-10/month)
- ✅ **Faster** (Global CDN vs single server)
- ✅ **Automatic** SSL certificates
- ✅ **Easy** deployments (connect GitHub, auto-deploy on push)
- ✅ **Better** for React apps (optimized builds)

### Deploy to Vercel (5 minutes)

1. **Push code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create ryzafit-landing --public --source=. --push
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Click "Add New Project"**

4. **Import your GitHub repository** (ryzafit-landing)

5. **Configure settings** (Vercel auto-detects Vite):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**

6. **Point your domain**:
   - In Vercel dashboard: **Settings** > **Domains**
   - Add `ryzafit.com`
   - Vercel will show DNS records to update

7. **Update Namecheap DNS**:
   - Go to Namecheap dashboard
   - Domain List > Manage
   - Advanced DNS tab
   - Add these records:
     ```
     Type: A Record
     Host: @
     Value: 76.76.21.21 (Vercel's IP)

     Type: CNAME
     Host: www
     Value: cname.vercel-dns.com
     ```

8. **Done!** Your site will be live in ~10 minutes

---

## Option 2: Deploy to Namecheap Hosting (Not Recommended)

If you insist on using Namecheap hosting:

### Step 1: Build the Production Bundle

```bash
cd /Users/aayushi/Projects/ryzafit-landing
npm run build
```

This creates a `dist/` folder with all your static files.

### Step 2: Upload to Namecheap

**Method A: Using File Manager (Easier)**

1. Log into [Namecheap cPanel](https://www.namecheap.com/myaccount/login/)
2. Go to **File Manager**
3. Navigate to `public_html/`
4. **Delete all existing files** in public_html (or backup first)
5. Click **Upload** button
6. Upload **ALL files from the dist/ folder**:
   - index.html
   - assets/ folder
   - All .png files
   - vite.svg
7. Make sure files are in `public_html/`, not `public_html/dist/`

**Method B: Using FTP (Advanced)**

1. Get FTP credentials from Namecheap:
   - cPanel > FTP Accounts
2. Use FileZilla or similar FTP client
3. Connect to your server
4. Upload contents of `dist/` to `public_html/`

### Step 3: Configure Domain

1. In Namecheap dashboard
2. Domain List > Manage > Advanced DNS
3. Ensure A Record points to your hosting IP
4. Wait 10-30 minutes for DNS propagation

### Step 4: Test

Visit `https://ryzafit.com` and test the waitlist signup!

---

## After Deployment

### Test Checklist

- [ ] Landing page loads correctly
- [ ] App mockup image appears
- [ ] Form accepts email input
- [ ] Submit button shows loading state
- [ ] Success message appears after submit
- [ ] Email appears in Google Sheet
- [ ] Kickstarter button links work
- [ ] Social media links work
- [ ] Mobile responsive (test on phone)

### Making Updates

**If using Vercel/Netlify:**
1. Edit code locally
2. Commit and push to GitHub
3. Site auto-deploys (1-2 minutes)

**If using Namecheap:**
1. Edit code locally
2. Run `npm run build`
3. Upload new `dist/` files via FTP/File Manager
4. Clear browser cache to see changes

---

## Troubleshooting

### "White screen" or 404 error
- Make sure files are in `public_html/` not `public_html/dist/`
- Check that `index.html` is in the root of public_html
- Clear browser cache

### Images not loading
- Make sure all files from `dist/assets/` folder are uploaded
- Check that `app-mockup.png` and `LOGO.png` are in `public_html/`

### Form submissions not working
- Verify Google Apps Script URL is correct in WaitlistForm.jsx
- Check that Google Script is deployed as "Anyone can access"
- Look at browser console for errors (F12)

### Domain not pointing to site
- DNS changes take 10-60 minutes to propagate
- Use [dnschecker.org](https://dnschecker.org) to verify
- Make sure A record points to correct IP
- For Vercel: Use their DNS records exactly as shown

---

## Cost Comparison

| Service | Cost | Speed | SSL | Auto-Deploy | CDN |
|---------|------|-------|-----|-------------|-----|
| **Vercel** | FREE | ⚡⚡⚡ | ✅ | ✅ | ✅ |
| **Netlify** | FREE | ⚡⚡⚡ | ✅ | ✅ | ✅ |
| Namecheap | $2-10/mo | ⚡ | ✅ (manual) | ❌ | ❌ |

**Recommendation**: Use Vercel. It's free, faster, and easier!
