import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'App & Software Development Services | Mobile App Development Company | USA, Canada, UK, Germany, India',
  description: 'Professional app development company offering mobile app development, SaaS development, MVP development, iOS and Android app development. Serving USA, Canada, UK, Germany, and India. Build scalable applications that grow with your business.',
  keywords: 'app development company, mobile app development, SaaS development, MVP development, iOS app development, Android app development, app development USA, app development Canada, app development UK, app development Germany, app development India, app development near me, React Native development, Flutter development, custom software development, software development company, SaaS platform development, startup app development, microservices architecture, enterprise software, cloud-native applications, API development, backend development',
  openGraph: {
    title: 'App & Software Development Services | The Finesse Co.',
    description: 'Mobile app development, SaaS development, and MVP development services for businesses in USA, Canada, UK, Germany, and India.',
    url: 'https://thefinesse.co/services/app-software',
    type: 'website',
    siteName: 'The Finesse Co.',
    images: [
      {
        url: 'https://thefinesse.co/og-app-software.jpg',
        width: 1200,
        height: 630,
        alt: 'App & Software Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App & Software Development Services | The Finesse Co.',
    description: 'Professional app and software development services for businesses worldwide.',
  },
  alternates: {
    canonical: 'https://thefinesse.co/services/app-software',
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

export default function AppSoftwareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "App & Software Development",
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
    "description": "Professional app and software development services including mobile app development, SaaS development, MVP development, iOS and Android app development.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "App & Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iOS App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android App Development"
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

