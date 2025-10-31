import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import ScrollToTop from '@/components/ScrollToTop'
import ProgressBar from '@/components/ProgressBar'
import SkipToContent from '@/components/SkipToContent'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'Yassin Kazibwe | Software Engineer, Entrepreneur & Founder',
  description: 'Full-Stack Software Engineer building technology and businesses that connect Africa to global opportunities. Founder of Beelio Technologies, AILES Global, and VizzarJobs.com.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  keywords: ['Yassin Kazibwe', 'Software Engineer', 'Entrepreneur', 'Beelio Technologies', 'AILES Global', 'VizzarJobs', 'CloudNest', 'Kubernetes', 'Open Source', 'Full-Stack Developer', 'Africa Tech', 'Fintech', 'Study Abroad', 'Cloud-Native'],
  authors: [{ name: 'Yassin Kazibwe' }],
  creator: 'Yassin Kazibwe',
  metadataBase: new URL('https://yassin-kazibwe.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yassin-kazibwe.vercel.app',
    title: 'Yassin Kazibwe | Software Engineer & Entrepreneur',
    description: 'Building technology and businesses that connect Africa to global opportunities',
    siteName: 'Yassin Kazibwe Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yassin Kazibwe Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yassin Kazibwe | Software Engineer & Entrepreneur',
    description: 'Building technology and businesses that connect Africa to global opportunities',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification if needed
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://yassin-kazibwe.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563EB" />
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider>
          <SkipToContent />
          <ProgressBar />
          <Navbar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}