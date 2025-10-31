# Contact Form Email Setup Guide

Your contact form is now configured to send emails to **kazibweusama@gmail.com**. 

## Current Status

✅ Contact information updated:
- Email: `kazibweusama@gmail.com`
- Phone: `+256 704 833 021`
- Contact form API route created at `/app/api/contact/route.ts`
- Form submission handler updated

⚠️ **Email Service Needed**: The API route is ready but needs an email service provider to actually send emails.

## Email Service Setup Options

### Option 1: Resend (Recommended - Easiest)

1. **Sign up** at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. **Get your API key** from the dashboard
3. **Install Resend**:
   ```bash
   npm install resend
   ```
4. **Add to `.env.local`**:
   ```
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=kazibweusama@gmail.com
   ```
5. **Update `/app/api/contact/route.ts`** - Uncomment the Resend code (lines 23-48)

### Option 2: Formspree (No Backend Required)

1. **Sign up** at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. **Create a new form** and get your form endpoint
3. **Update `/components/ContactForm.tsx`**:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData),
   })
   ```
4. **Remove or disable** `/app/api/contact/route.ts` (no longer needed)

### Option 3: EmailJS (Client-Side)

1. **Sign up** at [emailjs.com](https://www.emailjs.com) (free tier: 200 emails/month)
2. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```
3. **Update `/components/ContactForm.tsx`**:
   ```typescript
   import emailjs from '@emailjs/browser'
   
   // In handleSubmit:
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       from_name: formData.name,
       from_email: formData.email,
       subject: formData.subject,
       message: formData.message,
       to_email: 'kazibweusama@gmail.com',
     },
     'YOUR_PUBLIC_KEY'
   )
   ```
4. **Remove** `/app/api/contact/route.ts` (no longer needed)

### Option 4: SendGrid

1. **Sign up** at [sendgrid.com](https://sendgrid.com) (free tier: 100 emails/day)
2. **Get your API key** from Settings > API Keys
3. **Install SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```
4. **Update `/app/api/contact/route.ts`**:
   ```typescript
   import sgMail from '@sendgrid/mail'
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
   
   await sgMail.send({
     to: 'kazibweusama@gmail.com',
     from: 'noreply@yassin-kazibwe.vercel.app',
     replyTo: formData.email,
     subject: `Portfolio Contact: ${formData.subject}`,
     html: `...`,
   })
   ```
5. **Add to `.env.local`**:
   ```
   SENDGRID_API_KEY=SG.your_api_key_here
   ```

### Option 5: Nodemailer with Gmail SMTP

1. **Install Nodemailer**:
   ```bash
   npm install nodemailer
   ```
2. **Enable 2FA** on your Gmail account
3. **Create an App Password**: Google Account > Security > 2-Step Verification > App Passwords
4. **Update `/app/api/contact/route.ts`** with Nodemailer configuration
5. **Add to `.env.local`**:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=kazibweusama@gmail.com
   SMTP_PASS=your_app_password
   ```

## Quick Setup (Recommended: Resend)

1. Install: `npm install resend`
2. Get API key from [resend.com](https://resend.com)
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key
   CONTACT_EMAIL=kazibweusama@gmail.com
   ```
4. Uncomment Resend code in `/app/api/contact/route.ts` (lines 23-48)
5. Remove the temporary console.log code

## Testing

1. Fill out the contact form on your site
2. Check your email inbox at `kazibweusama@gmail.com`
3. Verify the email includes:
   - Sender name and email
   - Subject line
   - Message content

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Your email service API key
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Contact email (where form submissions go)
CONTACT_EMAIL=kazibweusama@gmail.com

# Optional: For production deployment
NEXT_PUBLIC_SITE_URL=https://yassin-kazibwe.vercel.app
```

## Vercel Deployment

When deploying to Vercel:
1. Add environment variables in Vercel Dashboard > Settings > Environment Variables
2. Add `RESEND_API_KEY` and `CONTACT_EMAIL`
3. Redeploy your application

## Current Contact Info Summary

- **Email**: kazibweusama@gmail.com
- **Phone**: +256 704 833 021
- **Display Format**: +256 704 833 021 (spaces for readability)
- **Tel Link**: tel:+256704833021 (no spaces for functionality)

All contact information has been updated across:
- ✅ Contact section
- ✅ Footer
- ✅ Structured data (SEO)
- ✅ Contact form error messages

## Need Help?

- Resend Docs: https://resend.com/docs
- Formspree Docs: https://help.formspree.io
- EmailJS Docs: https://www.emailjs.com/docs
- SendGrid Docs: https://docs.sendgrid.com

---

**Next Step**: Choose an email service provider and follow their setup instructions above.
