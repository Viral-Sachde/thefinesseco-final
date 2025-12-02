import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'View Our Work | Portfolio & Case Studies | The Finesse Co.',
  description: 'Explore our portfolio of successful projects including web development, app development, and branding case studies. See how we helped Lumina Skin achieve 240% revenue increase, Flow State reach 10k+ daily users, Urban Roots raise $2M, and Velvet Capital build secure fintech solutions.',
  keywords: 'portfolio, case studies, web development portfolio, app development portfolio, branding portfolio, design portfolio, web development case studies, app development case studies, branding case studies, e-commerce case studies, SaaS case studies, fintech case studies, web development examples, app development examples, successful web projects, successful app projects, digital agency portfolio, web design portfolio, mobile app portfolio, React portfolio, Next.js portfolio',
  openGraph: {
    title: 'View Our Work | Portfolio & Case Studies | The Finesse Co.',
    description: 'Explore our portfolio of successful digital projects. See real results from web development, app development, and branding work.',
    url: 'https://thefinesse.co/work',
    type: 'website',
    siteName: 'The Finesse Co.',
    images: [
      {
        url: 'https://thefinesse.co/og-work.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Work Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'View Our Work | Portfolio & Case Studies | The Finesse Co.',
    description: 'Explore our portfolio of successful digital projects and case studies.',
  },
  alternates: {
    canonical: 'https://thefinesse.co/work',
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

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Work Portfolio",
    "description": "A curated collection of successful web development, app development, and branding projects",
    "url": "https://thefinesse.co/work",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "name": "Lumina Skin",
          "description": "Rebranding and Shopify headless transition for a luxury skincare line resulting in 240% revenue increase",
          "category": "E-Commerce",
          "creator": {
            "@type": "Organization",
            "name": "The Finesse Co."
          }
        },
        {
          "@type": "CreativeWork",
          "name": "Flow State",
          "description": "Product design system and frontend architecture for productivity software reaching 10k+ daily users",
          "category": "SaaS Product",
          "creator": {
            "@type": "Organization",
            "name": "The Finesse Co."
          }
        },
        {
          "@type": "CreativeWork",
          "name": "Urban Roots",
          "description": "Donation platform optimization and visual storytelling for urban farming, raising $2M",
          "category": "Non-Profit",
          "creator": {
            "@type": "Organization",
            "name": "The Finesse Co."
          }
        },
        {
          "@type": "CreativeWork",
          "name": "Velvet Capital",
          "description": "Web3 dashboard design and secure marketing site for crypto investment platform",
          "category": "FinTech",
          "creator": {
            "@type": "Organization",
            "name": "The Finesse Co."
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      {children}
    </>
  )
}

