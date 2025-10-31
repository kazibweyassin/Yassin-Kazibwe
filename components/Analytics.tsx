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
export function VercelAnalytics() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_VERCEL_ANALYTICS) {
      import('@vercel/analytics/react').then((mod) => {
        // Vercel Analytics auto-initializes
      })
    }
  }, [])

  return null
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
