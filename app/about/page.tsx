import { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About | Yassin Kazibwe',
  description: 'Learn about Yassin Kazibwe - Software Engineer, Entrepreneur, and Founder building technology solutions that connect Africa to global opportunities.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  )
}
