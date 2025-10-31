export interface Experience {
  year: string
  title: string
  company: string
  description: string
  type: 'founder' | 'co-founder' | 'employee' | 'education'
}

export const experiences: Experience[] = [
  {
    year: '2025',
    title: 'Founder',
    company: 'VizzarJobs.com',
    description: 'Building a global job board connecting African professionals to visa sponsorship opportunities.',
    type: 'founder',
  },
  {
    year: '2024',
    title: 'Founder',
    company: 'AILES Global (formerly AILES Travel)',
    description: 'Leading an education consultancy helping African students access global education and scholarship opportunities.',
    type: 'founder',
  },
  {
    year: '2023',
    title: 'Co-founder',
    company: 'Beelio Technologies',
    description: 'Co-founding a fintech startup focused on P2P lending and financial empowerment tools.',
    type: 'co-founder',
  },
  {
    year: '2022 - 2023',
    title: 'Software Engineering Graduate',
    company: 'ALX',
    description: 'Completed intensive software engineering program focusing on full-stack development and system design.',
    type: 'education',
  },
  {
    year: '2020 - 2022',
    title: 'Founder',
    company: 'Fast World Solutions',
    description: 'Founded and led a microfinance company providing financial services to underserved communities.',
    type: 'founder',
  },
]
