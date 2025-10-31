'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / windowHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  )
}
