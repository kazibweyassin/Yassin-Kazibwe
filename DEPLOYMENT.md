# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables:**
   In Vercel Dashboard → Project Settings → Environment Variables:
   ```
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=kazibweusama@gmail.com
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name? (use default or custom)
   - Directory? **./** (current directory)
   - Override settings? **No**

5. **Add environment variables:**
   ```bash
   vercel env add RESEND_API_KEY
   vercel env add CONTACT_EMAIL
   ```

6. **Deploy to production:**
   ```bash
   vercel --prod
   ```

---

## 📝 Post-Deployment Checklist

### 1. Update URLs in Code
After deployment, update these URLs to your actual domain:

- `app/sitemap.ts` - Update baseUrl
- `app/robots.ts` - Update sitemap URL
- `app/layout.tsx` - Update metadataBase and OpenGraph URLs

### 2. Environment Variables in Vercel
Add these in Vercel Dashboard → Settings → Environment Variables:

**Required:**
```
RESEND_API_KEY=re_your_actual_key
CONTACT_EMAIL=kazibweusama@gmail.com
```

**Optional (if using analytics):**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS=true
```

### 3. Custom Domain (Optional)
1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain (e.g., `yassin-kazibwe.com`)
3. Follow DNS configuration instructions
4. Update URLs in code to match your domain

### 4. Verify Deployment
- ✅ Homepage loads correctly
- ✅ Dark/light mode works
- ✅ All sections visible
- ✅ Contact form works (test with Resend)
- ✅ Projects display with images
- ✅ Image hover effects work
- ✅ Mobile responsive
- ✅ All links work

---

## 🔧 Troubleshooting

### Build Fails
- Check Vercel build logs
- Verify all dependencies in `package.json`
- Ensure TypeScript compiles without errors

### Images Not Loading
- Verify image paths start with `/images/`
- Check file names match exactly (case-sensitive)
- Ensure images are in `public/images/` folder

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set in Vercel
- Check Resend dashboard for email logs
- Verify email is correct in environment variables

### Environment Variables Not Working
- Make sure to redeploy after adding env vars
- Check variable names match exactly
- Restart deployment from Vercel dashboard

---

## 📊 Post-Deployment Optimization

### 1. Set Up Analytics
Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'
// In body:
<Analytics />
```

### 2. Monitor Performance
- Use Vercel Analytics (free)
- Check Lighthouse scores
- Monitor Core Web Vitals

### 3. SEO Verification
- Submit sitemap to Google Search Console
- Verify structured data with Google Rich Results Test
- Check OpenGraph previews with social media validators

---

**Your portfolio is production-ready! 🎉**

