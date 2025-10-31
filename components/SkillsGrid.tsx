'use client'

import { motion } from 'framer-motion'
import { Code, Database, Wrench, Users } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
  },
  {
    title: 'Tools & Services',
    icon: Wrench,
    skills: ['GitHub', 'Docker', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Leadership', 'Strategy', 'Communication', 'Problem Solving', 'Mentorship'],
  },
]

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications and leading innovative teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold font-display">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
