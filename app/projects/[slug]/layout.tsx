import { Metadata } from 'next'
import { projects } from '@/data/projects'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    return {
      title: 'Project Not Found | Yassin Kazibwe',
    }
  }

  return {
    title: `${project.title} | Yassin Kazibwe`,
    description: project.description,
  }
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
