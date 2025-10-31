export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'David Kiprotich',
    role: 'Investment Partner',
    company: 'Tech Ventures Africa',
    content: 'Yassin is a visionary entrepreneur with exceptional technical skills. His ability to identify market gaps and build scalable solutions is remarkable. Working with him on Beelio Technologies has been an inspiring experience.',
    avatar: undefined,
  },
  {
    id: '2',
    name: 'Sarah Mwangi',
    role: 'Education Consultant',
    company: 'Global Education Network',
    content: 'Yassin\'s dedication to connecting African students with global opportunities through AILES Global is truly transformative. His technical expertise combined with his passion for education makes him an invaluable partner.',
    avatar: undefined,
  },
  {
    id: '3',
    name: 'James Ochieng',
    role: 'Software Engineer',
    company: 'Tech Solutions Ltd.',
    content: 'As a mentor and leader, Yassin has been instrumental in my career growth. His deep understanding of both technology and business strategy sets him apart. His projects demonstrate real-world impact and innovation.',
    avatar: undefined,
  },
]
