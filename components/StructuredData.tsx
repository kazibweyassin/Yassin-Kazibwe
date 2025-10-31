export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yassin Kazibwe',
    jobTitle: 'Software Engineer, Entrepreneur & Founder',
    description: 'Full-Stack Software Engineer building technology and businesses that connect Africa to global opportunities',
    url: 'https://yassin-kazibwe.vercel.app',
    sameAs: [
      'https://linkedin.com/in/yassin-kazibwe',
      'https://github.com/yassin-kazibwe',
      'https://twitter.com/yassin-kazibwe',
    ],
    email: 'kazibweusama@gmail.com',
    telephone: '+256704833021',
    knowsAbout: [
      'Software Engineering',
      'Full-Stack Development',
      'Entrepreneurship',
      'Fintech',
      'Education Technology',
      'Job Boards',
      'Kubernetes',
      'Cloud-Native Technologies',
      'Open Source',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'ALX',
    },
    founder: [
      {
        '@type': 'Organization',
        name: 'Beelio Technologies',
        url: 'https://beelio.com',
      },
      {
        '@type': 'Organization',
        name: 'AILES Global',
        url: 'https://ailesglobal.com',
      },
      {
        '@type': 'Organization',
        name: 'VizzarJobs.com',
        url: 'https://vizzarjobs.com',
      },
    ],
    creator: [
      {
        '@type': 'SoftwareApplication',
        name: 'CloudNest',
        applicationCategory: 'EducationalApplication',
        description: 'Open-source Kubernetes and Cloud-Native Learning Platform for Africa',
        url: 'https://github.com/kazibweyassin/CloudNest',
        codeRepository: 'https://github.com/kazibweyassin/CloudNest',
        programmingLanguage: ['TypeScript', 'JavaScript'],
        license: 'https://opensource.org/licenses/MIT',
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yassin Kazibwe Portfolio',
    url: 'https://yassin-kazibwe.vercel.app',
    description: 'Portfolio website of Yassin Kazibwe - Software Engineer, Entrepreneur & Founder',
    publisher: {
      '@type': 'Person',
      name: 'Yassin Kazibwe',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
