import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#B0A9F8',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://thefinesse.co'),
  title: {
    default: 'The Finesse Co. | Web Development, App Development & Branding Agency | USA, Canada, UK, Germany, India',
    template: '%s | The Finesse Co.'
  },
  description: 'Professional web development, app development, and branding agency. Custom website development, mobile app development, SaaS development, and brand identity design. Serving businesses in USA, Canada, UK, Germany, and India. Build revenue engines that convert.',
  keywords: 'web development agency, app development company, branding agency, website development, mobile app development, SaaS development, brand identity design, web development USA, web development Canada, web development UK, web development Germany, web development India, app development near me, branding agency near me, custom web development, React development, Next.js development, MVP development, web development agency USA, web development company Canada, app development company UK, branding agency Germany, web development India, app development near me USA, branding agency near me Canada',
  authors: [{ name: 'The Finesse Co.' }],
  creator: 'The Finesse Co.',
  publisher: 'The Finesse Co.',
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
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://thefinesse.co/',
    siteName: 'The Finesse Co.',
    title: 'The Finesse Co. | Web Development, App Development & Branding Agency',
    description: 'Professional web development, app development, and branding services. Serving USA, Canada, UK, Germany, and India. We turn clicks into cults.',
    images: [
      {
        url: 'https://thefinesse.co/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Finesse Co. - Digital Revenue Engines',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['en_CA', 'en_GB', 'de_DE', 'en_IN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Finesse Co. | Digital Revenue Engines',
    description: 'We turn clicks into cults. Strategic digital transformation for brands that refuse to blend in.',
    images: ['https://thefinesse.co/twitter-image.jpg'],
    creator: '@thefinesseco',
  },
  alternates: {
    canonical: 'https://thefinesse.co',
    languages: {
      'en-US': 'https://thefinesse.co',
      'en-CA': 'https://thefinesse.co',
      'en-GB': 'https://thefinesse.co',
      'de-DE': 'https://thefinesse.co',
      'en-IN': 'https://thefinesse.co',
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Finesse Co.",
    "url": "https://thefinesse.co",
    "logo": "https://thefinesse.co/logo/logo-with-text.svg",
    "description": "Professional website design, branding and development agency offering custom web design, UI UX design, SEO services, mobile app development, SaaS development and MVP launches.",
    "email": "hello@thefinesse.co",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://instagram.com/thefinesseco",
      "https://twitter.com/thefinesseco",
      "https://linkedin.com/company/thefinesseco"
    ],
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web development, React development, Next.js development, responsive web development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App & Software Development",
            "description": "Mobile app development, SaaS development, MVP development, custom software development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding & Marketing",
            "description": "Brand identity design, logo design, brand strategy, digital marketing services"
          }
        }
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Finesse Co.",
    "image": "https://thefinesse.co/logo/logo-with-text.svg",
    "description": "Web development agency, app development company, and branding agency serving USA, Canada, UK, Germany, and India.",
    "url": "https://thefinesse.co",
    "telephone": "+91-9484991399",
    "email": "hello@thefinesse.co",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.0225",
      "longitude": "72.5714"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": ["Web Development", "App Development", "Branding & Marketing"],
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thefinesse.co" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        {/* Hidden SEO Section - Visible to search engines but hidden from users */}
        <div className="sr-only" aria-hidden="true">
          <h1>The Finesse Co - Professional Website Design, Branding and Development Agency</h1>
          <p>
            The Finesse Co is a professional website design, branding and development agency offering custom web design, UI UX design, SEO services, mobile app development, SaaS development and MVP launches for companies and startups. We build high performance, secure and SEO optimized digital solutions using modern technologies.
          </p>
          <h2>Website Design Services</h2>
          <p>
            Professional website design agency, custom website design, responsive web design, modern website design, 
            website design company, website design services, web design agency, custom web design, 
            professional web design, ecommerce website design, landing page design, website redesign services.
          </p>
          <h2>UI UX Design Services</h2>
          <p>
            UI UX design agency, user interface design, user experience design, UX design services, 
            UI design services, mobile UI design, web UI design, UX research, user experience consulting, 
            interface design, user experience optimization, UX audit services, design system development.
          </p>
          <h2>Branding Services</h2>
          <p>
            Branding agency, brand identity design, logo design, brand strategy, corporate branding, 
            brand design services, visual identity design, brand development, rebranding services, 
            brand guidelines, brand positioning, brand consulting.
          </p>
          <h2>Web Development Services</h2>
          <p>
            Web development agency, custom web development, frontend development, backend development, 
            full stack development, React development, Next.js development, web application development, 
            responsive web development, progressive web apps, web development services.
          </p>
          <h2>SEO Services</h2>
          <p>
            SEO services, search engine optimization, SEO agency, local SEO, technical SEO, 
            on-page SEO, off-page SEO, SEO consulting, keyword research, SEO audit, 
            content SEO, ecommerce SEO, SEO optimization services.
          </p>
          <h2>Mobile App Development</h2>
          <p>
            Mobile app development, iOS app development, Android app development, 
            cross-platform app development, React Native development, Flutter development, 
            mobile app design, app development services, native app development, 
            hybrid app development, mobile application development.
          </p>
          <h2>SaaS Development</h2>
          <p>
            SaaS development, SaaS application development, software as a service development, 
            cloud application development, SaaS platform development, subscription software development, 
            SaaS product development, SaaS consulting, SaaS architecture, SaaS MVP development.
          </p>
          <h2>MVP Development</h2>
          <p>
            MVP development, minimum viable product development, startup MVP, MVP launch, 
            rapid prototyping, product development, startup development services, 
            MVP design and development, lean startup MVP, proof of concept development.
          </p>
          <h2>Digital Solutions</h2>
          <p>
            Digital agency, digital transformation, digital solutions, digital marketing services, 
            digital strategy, high performance websites, secure web development, 
            SEO optimized websites, modern web technologies, custom digital solutions, 
            enterprise web development, startup web development.
          </p>
          <h2>Technology Services</h2>
          <p>
            React development, Next.js development, TypeScript development, Node.js development, 
            modern web technologies, cloud development, API development, database development, 
            performance optimization, security implementation, scalable web architecture.
          </p>
          <h2>Business Services</h2>
          <p>
            Web design for startups, web development for companies, branding for businesses, 
            digital solutions for enterprises, custom software development, 
            technology consulting, digital agency services, web development company, 
            design and development agency, full service digital agency.
          </p>
          <h2>Web Development Services by Location</h2>
          <p>
            Web development agency USA, web development company USA, custom web development USA, 
            web development agency Canada, web development company Canada, custom web development Canada,
            web development agency UK, web development company UK, custom web development UK,
            web development agency Germany, web development company Germany, custom web development Germany,
            web development agency India, web development company India, custom web development India,
            web development agency near me, web development company near me, custom web development near me,
            React development USA, Next.js development USA, React development Canada, Next.js development Canada,
            React development UK, Next.js development UK, React development Germany, Next.js development Germany,
            React development India, Next.js development India, React development near me, Next.js development near me.
          </p>
          <h2>App & Software Development Services by Location</h2>
          <p>
            App development company USA, mobile app development USA, SaaS development USA, MVP development USA,
            App development company Canada, mobile app development Canada, SaaS development Canada, MVP development Canada,
            App development company UK, mobile app development UK, SaaS development UK, MVP development UK,
            App development company Germany, mobile app development Germany, SaaS development Germany, MVP development Germany,
            App development company India, mobile app development India, SaaS development India, MVP development India,
            App development company near me, mobile app development near me, SaaS development near me, MVP development near me,
            iOS app development USA, Android app development USA, iOS app development Canada, Android app development Canada,
            iOS app development UK, Android app development UK, iOS app development Germany, Android app development Germany,
            iOS app development India, Android app development India, iOS app development near me, Android app development near me.
          </p>
          <h2>Branding & Marketing Services by Location</h2>
          <p>
            Branding agency USA, brand identity design USA, logo design USA, brand strategy USA,
            Branding agency Canada, brand identity design Canada, logo design Canada, brand strategy Canada,
            Branding agency UK, brand identity design UK, logo design UK, brand strategy UK,
            Branding agency Germany, brand identity design Germany, logo design Germany, brand strategy Germany,
            Branding agency India, brand identity design India, logo design India, brand strategy India,
            Branding agency near me, brand identity design near me, logo design near me, brand strategy near me,
            Digital marketing agency USA, digital marketing services USA, digital marketing agency Canada,
            Digital marketing services Canada, digital marketing agency UK, digital marketing services UK,
            Digital marketing agency Germany, digital marketing services Germany, digital marketing agency India,
            Digital marketing services India, digital marketing agency near me, digital marketing services near me.
          </p>
        </div>
      </body>
    </html>
  )
}

