import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Services | Custom Website Development Agency | USA, Canada, UK, Germany, India',
  description: 'Professional web development agency offering custom website development, React development, Next.js development, and responsive web design services. Serving USA, Canada, UK, Germany, and India. Build high-performance websites that convert.',
  keywords: 'web development agency, custom web development, website development company, React development, Next.js development, web development USA, web development Canada, web development UK, web development Germany, web development India, web development near me, responsive web development, frontend development, backend development, full stack development, web application development, progressive web apps, ecommerce web development, headless CMS, SEO optimization, performance optimization, modern web technologies, TypeScript development, GraphQL development',
  openGraph: {
    title: 'Web Development Services | The Finesse Co.',
    description: 'Custom web development services for businesses in USA, Canada, UK, Germany, and India. React, Next.js, and modern web technologies.',
    url: 'https://thefinesse.co/services/web-development',
    type: 'website',
    siteName: 'The Finesse Co.',
    images: [
      {
        url: 'https://thefinesse.co/og-web-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services | The Finesse Co.',
    description: 'Professional web development services for businesses worldwide.',
  },
  alternates: {
    canonical: 'https://thefinesse.co/services/web-development',
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

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Organization",
      "name": "The Finesse Co.",
      "url": "https://thefinesse.co"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Professional web development services including custom website development, React development, Next.js development, and responsive web design.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}

