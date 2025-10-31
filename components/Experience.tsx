'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { Briefcase, GraduationCap, Users } from 'lucide-react'

const iconMap = {
  founder: Briefcase,
  'co-founder': Users,
  employee: Briefcase,
  education: GraduationCap,
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Experience & <span className="text-blue-600 dark:text-blue-400">Timeline</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A journey of building, learning, and creating impact.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.type]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={`${exp.year}-${exp.company}`}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16 md:pr-0'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="font-bold text-blue-600 dark:text-blue-400">
                            {exp.year}
                          </div>
                          <h3 className="text-xl font-bold font-display">
                            {exp.title}
                          </h3>
                          <div className="text-lg text-gray-600 dark:text-gray-400">
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mt-3">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
