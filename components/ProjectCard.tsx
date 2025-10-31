'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ZoomIn } from 'lucide-react'
import Link from 'next/link'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700 group"
    >
      {project.image && (
        <div className="relative w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-3 group/image">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-32 w-auto object-contain transition-transform duration-300"
            loading="lazy"
          />
          {/* Hover Popup */}
          <div className="absolute inset-0 z-50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[9998]">
              <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 pointer-events-none z-[9999]">
            <ZoomIn className="w-3 h-3" />
            Hover to enlarge
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold font-display mb-2">{project.title}</h3>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          )}
          {project.website && !project.website.includes('github.com') && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
            >
              Visit Site
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm"
          >
            Learn More
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
