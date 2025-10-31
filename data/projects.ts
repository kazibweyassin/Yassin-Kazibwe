export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  website?: string
  github?: string
  image?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'beelio-technologies',
    title: 'Beelio Technologies',
    description: 'P2P lending platform for financial empowerment, connecting lenders and borrowers across Africa.',
    longDescription: 'Beelio Technologies is a fintech startup focused on building peer-to-peer lending and financial empowerment tools. The platform enables individuals and small businesses to access capital through innovative lending solutions, democratizing access to financial services across Africa.',
    category: 'Fintech',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Fintech', 'P2P Lending'],
    website: 'https://beelio.com',
    image: '/images/beelio.tech.png',
    featured: true,
  },
  {
    id: 'ailes-global',
    title: 'AILES Global',
    description: 'Education consultancy brand focused on study abroad opportunities and global scholarships for African students.',
    longDescription: 'AILES Global (formerly AILES Travel) is an education consultancy that helps African students access global education opportunities. The platform provides comprehensive support for study abroad programs, visa applications, and connects students with scholarship opportunities worldwide.',
    category: 'Education',
    tags: ['Next.js', 'React', 'Education', 'Study Abroad', 'Consultancy'],
    website: 'https://ailesglobal.com',
    image: '/images/ailesglobal.png',
    featured: true,
  },
  {
    id: 'vizzarjobs',
    title: 'VizzarJobs.com',
    description: 'Global job board connecting African professionals to visa sponsorship jobs and international opportunities.',
    longDescription: 'VizzarJobs.com is a specialized job board that connects African professionals with employers offering visa sponsorship and international relocation opportunities. The platform helps bridge the gap between talented professionals and global opportunities, focusing on roles that provide legal pathways to work abroad.',
    category: 'Job Board',
    tags: ['Next.js', 'React', 'Job Board', 'Recruitment', 'Visa Sponsorship'],
    website: 'https://vizzarjobs.com',
    image: '/images/vizzarjobs.com.png',
    featured: true,
  },
  {
    id: 'cloudnest',
    title: 'CloudNest',
    description: 'Open-source Kubernetes and Cloud-Native Learning Platform for Africa, featuring mentorship, community forums, and hands-on practice environments.',
    longDescription: 'CloudNest is a comprehensive open-source learning platform specifically designed for African students and developers to learn Kubernetes and cloud-native technologies. The platform provides interactive tutorials, community forums where mentors and learners share knowledge, job opportunities, and hands-on practice environments. It features progressive learning paths from beginner to advanced, real-world examples from African tech companies, and is optimized for low-bandwidth connections and mobile devices. The platform encourages community participation where people can mentor, post articles, share cloud and open-source tech knowledge, and collaborate on learning.',
    category: 'Open Source',
    tags: ['Next.js', 'TypeScript', 'Kubernetes', 'PostgreSQL', 'Prisma', 'Docker', 'Open Source', 'Education'],
    website: 'https://github.com/kazibweyassin/CloudNest',
    github: 'https://github.com/kazibweyassin/CloudNest',
    featured: true,
  },
  {
    id: 'ailes-scholarships',
    title: 'AILES Scholarships',
    description: 'Platform connecting students to global scholarship opportunities and educational funding resources.',
    longDescription: 'AILES Scholarships is a comprehensive platform that aggregates and curates scholarship opportunities for African students. The platform helps students discover, apply for, and secure funding for their educational pursuits, making higher education more accessible.',
    category: 'Education',
    tags: ['Next.js', 'React', 'Education', 'Scholarships', 'Platform'],
    featured: false,
  },
]
