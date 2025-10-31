'use client'

import { motion } from 'framer-motion'
import { Users, Briefcase, Globe, TrendingUp, Award, Target } from 'lucide-react'

interface Achievement {
  icon: React.ElementType
  value: string
  label: string
  description?: string
}

const achievements: Achievement[] = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Students Helped',
    description: 'Through AILES Global and scholarship platforms',
  },
  {
    icon: Briefcase,
    value: '5,000+',
    label: 'Jobs Listed',
    description: 'Visa sponsorship opportunities on VizzarJobs',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Countries Reached',
    description: 'Global impact across continents',
  },
  {
    icon: TrendingUp,
    value: '4',
    label: 'Startups Founded',
    description: 'Creating opportunities across Africa',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Open Source',
    description: 'CloudNest - Free education platform',
  },
  {
    icon: Target,
    value: '20+',
    label: 'Projects Completed',
    description: 'Successful deployments and launches',
  },
]

export default function Achievements() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Impact & <span className="text-blue-600 dark:text-blue-400">Achievements</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building solutions that create real-world impact across Africa and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <achievement.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold font-display text-gray-900 dark:text-gray-100 mb-2">
                {achievement.value}
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {achievement.label}
              </div>
              {achievement.description && (
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {achievement.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
