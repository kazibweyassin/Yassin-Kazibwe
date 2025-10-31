import Hero from '@/components/Hero'
import About from '@/components/About'
import SkillsGrid from '@/components/SkillsGrid'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsGrid />
      <Projects />
      <Experience />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  )
}
