'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import TypingEffect from './TypingEffect'

export default function Hero() {
  const roles = [
    'Software Engineer',
    'Entrepreneur',
    'Tech Founder',
    'Full-Stack Developer',
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Yassin</span>
            <br />
            <TypingEffect texts={roles} speed={80} delay={2000} />
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">
              & Founder.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I build technology and businesses that connect Africa to global opportunities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors font-medium"
            >
              Let&apos;s Connect
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
            <motion.div
              className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
