import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setIsIntersecting(isVisible)

        if (isVisible && triggerOnce) {
          setHasBeenVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, root, rootMargin, triggerOnce])

  return { elementRef, isIntersecting, hasBeenVisible }
}
