'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            What People <span className="text-blue-600 dark:text-blue-400">Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Testimonials from partners, clients, and mentors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <div className="font-bold text-gray-900 dark:text-gray-100">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
