'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
        aria-label="Close modal"
      >
        <X className="w-8 h-8" />
      </button>
      <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[95vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}
