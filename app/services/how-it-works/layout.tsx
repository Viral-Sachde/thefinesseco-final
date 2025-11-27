import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Work | Our Process & Methodology | The Finesse Co.',
  description: 'Discover how The Finesse Co. works. Learn about our 4-week sprint cycle, obsessive communication, quality standards, and no-outsourcing promise. Direct access to talent, rapid sprints, zero corporate jargon.',
  keywords: 'how we work, agency process, sprint cycle, agile development, design process, development methodology, 4-week sprints, quality standards, no outsourcing, direct access talent, rapid development, communication process, design agency workflow, development workflow',
  openGraph: {
    title: 'How We Work | The Finesse Co.',
    description: 'Our process: 4-week sprints, obsessive communication, and zero corporate jargon. Direct access to talent.',
    url: 'https://thefinesse.co/services/how-it-works',
    type: 'website',
    siteName: 'The Finesse Co.',
    images: [
      {
        url: 'https://thefinesse.co/og-how-it-works.jpg',
        width: 1200,
        height: 630,
        alt: 'How We Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Work | The Finesse Co.',
    description: 'Our process: 4-week sprints, obsessive communication, and zero corporate jargon.',
  },
  alternates: {
    canonical: 'https://thefinesse.co/services/how-it-works',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const dynamic = 'force-static'

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

