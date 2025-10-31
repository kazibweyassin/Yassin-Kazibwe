'use client'

import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ExternalLink, Github, Calendar, Tag, ZoomIn } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          ← Back to Projects
        </Link>

        {/* Project Image */}
        {project.image && (
          <div className="relative w-full mb-8 rounded-xl bg-gray-100 dark:bg-gray-900 shadow-lg flex items-center justify-center p-6 group/image">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[400px] w-auto object-contain rounded-lg transition-transform duration-300"
              loading="eager"
            />
            {/* Hover Popup */}
            <div className="absolute inset-0 z-50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[9998]">
                <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-blue-600 text-white text-sm px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none z-[9999]">
              <ZoomIn className="w-4 h-4" />
              Hover to see full size
            </div>
          </div>
        )}

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mb-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          )}
          {project.website && !project.website.includes('github.com') && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Visit Website
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.website && project.website.includes('github.com') && !project.github && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          )}
        </div>

        {/* Project Description */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </div>

        {/* Tags */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
