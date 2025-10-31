# Yassin Kazibwe - Portfolio Website

A professional, modern portfolio website built with Next.js, React, and TailwindCSS. This portfolio showcases Yassin's work as a Software Engineer, Entrepreneur, and Founder of multiple startups including Beelio Technologies, AILES Global, and VizzarJobs.com.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with dark/light mode toggle
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **SEO Optimized**: Comprehensive meta tags, sitemap, and robots.txt
- **Smooth Animations**: Framer Motion for elegant page transitions
- **Type-Safe**: Full TypeScript support
- **Accessible**: WCAG-compliant components and navigation

## 📋 Sections

1. **Hero Section** - Compelling introduction with call-to-action buttons
2. **About** - Personal bio and journey
3. **Skills** - Technical and soft skills organized by category
4. **Projects** - Showcase of startups and projects with detailed pages
5. **Experience** - Timeline of professional journey
6. **Testimonials** - Client and partner testimonials
7. **Blog** - Thoughts on tech, entrepreneurship, and career growth
8. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: next-seo
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yassin-kazibwe/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Updating Personal Information

Edit the following files to customize your portfolio:

- `data/projects.ts` - Update project information
- `data/experience.ts` - Update professional experience
- `data/testimonials.ts` - Update testimonials
- `data/blog.ts` - Update blog posts
- `app/layout.tsx` - Update SEO metadata

### Contact Form Integration

The contact form currently uses a simulated submission. To integrate with a real service:

1. **EmailJS**:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Install: `npm install @emailjs/browser`
   - Update `components/ContactForm.tsx` with your service configuration

2. **Formspree**:
   - Sign up at [Formspree](https://formspree.io/)
   - Update the form action URL in `components/ContactForm.tsx`

3. **Custom API**:
   - Create an API route in `app/api/contact/route.ts`
   - Update the form submission handler

### Adding Images

1. Place images in the `public/images/` directory
2. Update image references in project data files
3. Configure image domains in `next.config.js` if using external images

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live at `your-project.vercel.app`

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

For production, ensure you update:
- Site URL in `app/sitemap.ts`
- Site URL in `app/robots.ts`
- OpenGraph URLs in `app/layout.tsx`

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── projects/
│   │   ├── page.tsx         # Projects listing
│   │   └── [slug]/
│   │       └── page.tsx     # Individual project pages
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Sitemap generation
│   └── robots.ts            # Robots.txt generation
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── SkillsGrid.tsx       # Skills display
│   ├── Projects.tsx         # Projects section
│   ├── ProjectCard.tsx      # Project card component
│   ├── Experience.tsx        # Experience timeline
│   ├── Testimonials.tsx     # Testimonials section
│   ├── Blog.tsx             # Blog section
│   ├── Contact.tsx          # Contact section
│   ├── ContactForm.tsx      # Contact form component
│   └── ThemeProvider.tsx    # Dark mode provider
├── data/
│   ├── projects.ts          # Projects data
│   ├── experience.ts        # Experience data
│   ├── testimonials.ts     # Testimonials data
│   └── blog.ts             # Blog posts data
└── public/
    └── images/              # Image assets
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // ... other colors
    }
  }
}
```

### Fonts

Fonts are configured in `app/layout.tsx` and `app/globals.css`. The default fonts are:
- **Body**: Inter
- **Headings**: Poppins

### Animations

Animation configurations are in `tailwind.config.js`. Customize keyframes and durations as needed.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Yassin Kazibwe**
- Portfolio: [yassin-kazibwe.vercel.app](https://yassin-kazibwe.vercel.app)
- LinkedIn: [linkedin.com/in/yassin-kazibwe](https://linkedin.com/in/yassin-kazibwe)
- GitHub: [github.com/yassin-kazibwe](https://github.com/yassin-kazibwe)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

---

Built with ❤️ by Yassin Kazibwe
