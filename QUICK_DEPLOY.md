# Quick Deploy Instructions

## Your Repository
✅ Already pushed to: `https://github.com/kazibweyassin/Yassin-Kazibwe`

## Deploy to Vercel (3 Steps)

### Step 1: Go to Vercel
Visit: https://vercel.com/new

### Step 2: Import Repository
- Click "Import Git Repository"
- Select: `kazibweyassin/Yassin-Kazibwe`
- Click "Import"

### Step 3: Configure & Deploy
1. **Project Name**: (Use default: `yassin-kazibwe`)
2. **Framework Preset**: Next.js (auto-detected) ✅
3. **Root Directory**: `./` (default) ✅
4. **Build Command**: `npm run build` (default) ✅
5. **Output Directory**: `.next` (default) ✅

### Step 4: Add Environment Variables
Before clicking "Deploy", click "Environment Variables" and add:

```
RESEND_API_KEY=your_actual_resend_api_key_here
CONTACT_EMAIL=kazibweusama@gmail.com
```

### Step 5: Deploy!
Click "Deploy" and wait ~2-3 minutes

Your site will be live at: `https://yassin-kazibwe.vercel.app`

---

## After Deployment

1. **Test your site:**
   - ✅ All pages load
   - ✅ Contact form works
   - ✅ Images display
   - ✅ Dark mode works
   - ✅ Mobile responsive

2. **Update URLs** (if using custom domain):
   - Update `app/sitemap.ts`
   - Update `app/robots.ts`
   - Update `app/layout.tsx` metadata

3. **Verify contact form:**
   - Submit a test message
   - Check email at kazibweusama@gmail.com

---

**Need help?** Check `DEPLOYMENT.md` for detailed instructions.

