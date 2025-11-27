import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding & Marketing Services | Brand Identity Design Agency | USA, Canada, UK, Germany, India',
  description: 'Professional branding agency offering brand identity design, logo design, brand strategy, and digital marketing services. Serving USA, Canada, UK, Germany, and India. Create memorable brands that drive growth.',
  keywords: 'branding agency, brand identity design, logo design, brand strategy, branding agency USA, branding agency Canada, branding agency UK, branding agency Germany, branding agency India, branding agency near me, digital marketing agency, digital marketing services, brand development, corporate branding, visual identity design, rebranding services, brand consulting, marketing strategy, brand positioning',
  openGraph: {
    title: 'Branding & Marketing Services | The Finesse Co.',
    description: 'Brand identity design, logo design, and digital marketing services for businesses in USA, Canada, UK, Germany, and India.',
    url: 'https://thefinesse.co/services/branding-marketing',
    type: 'website',
    siteName: 'The Finesse Co.',
    images: [
      {
        url: 'https://thefinesse.co/og-branding-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Branding & Marketing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding & Marketing Services | The Finesse Co.',
    description: 'Professional branding and marketing services for businesses worldwide.',
  },
  alternates: {
    canonical: 'https://thefinesse.co/services/branding-marketing',
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

export default function BrandingMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Branding & Marketing",
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
    "description": "Professional branding and marketing services including brand identity design, logo design, brand strategy, and digital marketing services.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Branding & Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logo Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing"
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

