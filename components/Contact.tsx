'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import { Mail, Linkedin, Github, Twitter, Phone } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kazibweusama@gmail.com',
      href: 'mailto:kazibweusama@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+256 704 833 021',
      href: 'tel:+256704833021',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yassin-kazibwe',
      href: 'https://linkedin.com/in/yassin-kazibwe',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yassin-kazibwe',
      href: 'https://github.com/yassin-kazibwe',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@yassin-kazibwe',
      href: 'https://twitter.com/yassin-kazibwe',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Let&apos;s <span className="text-blue-600 dark:text-blue-400">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let&apos;s collaborate or build something great together. I&apos;m always open to discussing
            new projects, innovative ideas, or opportunities to make an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-6">Send a Message</h3>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors">
                    <method.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {method.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
            >
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Note:</strong> For business
                inquiries, partnerships, or speaking engagements, please use the contact form or
                reach out via email. I typically respond within 24-48 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
