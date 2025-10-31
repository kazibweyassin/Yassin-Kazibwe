'use client'

import Link from 'next/link'
import { Linkedin, Github, Twitter, ExternalLink, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yassin-kazibwe' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/yassin-kazibwe' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/yassin-kazibwe' },
    { name: 'Email', icon: Mail, href: 'mailto:kazibweusama@gmail.com' },
  ]

  const companyLinks = [
    { name: 'Beelio Technologies', href: 'https://beelio.com' },
    { name: 'AILES Global', href: 'https://ailesglobal.com' },
    { name: 'VizzarJobs', href: 'https://vizzarjobs.com' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold font-display mb-4">Yassin Kazibwe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Software Engineer, Entrepreneur & Founder. Building technology and businesses that connect Africa to global opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div>
            <h3 className="text-lg font-bold font-display mb-4">Companies</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Yassin Kazibwe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
