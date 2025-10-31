'use client'

import { motion } from 'framer-motion'
import { Download, Briefcase, Rocket, Target } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a Full-Stack Software Engineer and serial entrepreneur passionate about building
              technology solutions that create real-world impact. My journey spans from developing
              fintech platforms to creating education and job-market solutions that connect African
              talent with global opportunities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As the founder of multiple startups including <strong>Beelio Technologies</strong>,{' '}
              <strong>AILES Global</strong>, and <strong>VizzarJobs.com</strong>, I&apos;ve learned that successful
              entrepreneurship requires both technical excellence and a deep understanding of market
              needs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building scalable web applications using modern technologies like Next.js,
              React, Node.js, and Python. Beyond coding, I focus on problem-solving, mentorship, and
              creating opportunities that empower communities.
            </p>
            <div className="pt-4">
              <a
                href="/Yassin_Resume.pdf"
                download="Yassin_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Briefcase, label: 'Startups Founded', value: '3+' },
              { icon: Rocket, label: 'Years Experience', value: '5+' },
              { icon: Target, label: 'Projects Completed', value: '20+' },
              { icon: Target, label: 'Countries Reached', value: '10+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <div className="text-3xl font-bold font-display mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
