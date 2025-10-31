'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface ProjectFilterProps {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export default function ProjectFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter by:</span>
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          selectedCategory === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        All Projects
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
      {selectedCategory && (
        <button
          onClick={() => onCategoryChange(null)}
          className="ml-auto text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
        >
          <X className="w-4 h-4" />
          Clear filter
        </button>
      )}
    </div>
  )
}
