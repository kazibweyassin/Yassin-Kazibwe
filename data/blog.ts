export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: 'building-africas-fintech',
    title: 'Building Africa\'s Next Generation Fintech Platforms',
    excerpt: 'Exploring the challenges and opportunities in creating fintech solutions that truly serve African markets.',
    content: 'The fintech landscape in Africa is rapidly evolving. Building platforms like Beelio Technologies requires a deep understanding of local market dynamics, regulatory environments, and user behavior...',
    date: '2024-01-15',
    category: 'Technology',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 'future-of-work-visa-sponsorship',
    title: 'The Future of Work and Visa Sponsorship Opportunities',
    excerpt: 'How visa sponsorship job platforms are reshaping global talent mobility and career opportunities.',
    content: 'The future of work is increasingly borderless. Platforms like VizzarJobs.com are creating pathways for talented professionals to access opportunities beyond their geographic constraints...',
    date: '2024-02-20',
    category: 'Career',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 'travel-consultancy-to-global-brand',
    title: 'How to Turn Travel Consultancy into a Global Brand',
    excerpt: 'Lessons learned from transforming AILES Travel into AILES Global and scaling an education consultancy business.',
    content: 'Transforming a local travel consultancy into a global education brand requires strategic vision, customer focus, and the right technology stack. Here\'s how we did it...',
    date: '2024-03-10',
    category: 'Entrepreneurship',
    readTime: '7 min read',
    featured: false,
  },
]
