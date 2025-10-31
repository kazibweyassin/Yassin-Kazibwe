'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delay?: number
}

export default function TypingEffect({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
}: TypingEffectProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delay)
      return () => clearTimeout(timeout)
    }

    if (!isDeleting && currentText === texts[currentIndex]) {
      timeout = setTimeout(() => {
        setIsPaused(true)
      }, delay)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    } else {
      timeout = setTimeout(() => {
        if (isDeleting) {
          setCurrentText((prev) => prev.slice(0, -1))
        } else {
          setCurrentText((prev) => texts[currentIndex].slice(0, prev.length + 1))
        }
      }, isDeleting ? deleteSpeed : speed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentIndex, texts, speed, deleteSpeed, delay])

  return (
    <span className="inline-block">
      {currentText}
      <span className="inline-block w-0.5 h-[1em] bg-current animate-pulse align-middle ml-1">|</span>
    </span>
  )
}
