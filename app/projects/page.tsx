'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4">
            All <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of innovative startups and projects I&apos;ve built to create impact and
            connect Africa to global opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
