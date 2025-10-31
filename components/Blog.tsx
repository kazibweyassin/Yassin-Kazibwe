'use client'

import { motion } from 'framer-motion'
import { blogPosts } from '@/data/blog'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 2)

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Blog & <span className="text-blue-600 dark:text-blue-400">Insights</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Thoughts on technology, entrepreneurship, and career growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold font-display mb-3">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
