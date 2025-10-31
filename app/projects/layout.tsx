import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Yassin Kazibwe',
  description: 'Explore the innovative projects and startups built by Yassin Kazibwe, including Beelio Technologies, AILES Global, VizzarJobs.com, and more.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
