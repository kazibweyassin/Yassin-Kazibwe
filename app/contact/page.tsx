import { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact | Yassin Kazibwe',
  description: 'Get in touch with Yassin Kazibwe for collaborations, partnerships, or opportunities to build something great together.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  )
}
