'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Google Analytics 4 Component
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize GA4
    if (typeof window !== 'undefined' && !window.gtag) {
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', {
          page_path: window.location.pathname,
        });
      `
      document.head.appendChild(script2)
    }
  }, [measurementId])

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      window.gtag('config', measurementId, {
        page_path: url,
      })
    }
  }, [pathname, searchParams, measurementId])

  return null
}

// Vercel Analytics Component
// To use: npm install @vercel/analytics
// Then add <Analytics /> from '@vercel/analytics/react' to your layout
export function VercelAnalytics() {
  // Vercel Analytics will be initialized when package is installed
  // and component is added to layout
  return null
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
