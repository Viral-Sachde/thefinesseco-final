import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding & Marketing Services | Brand Identity Design Agency | USA, Canada, UK, Germany, India',
  description: 'Professional branding agency offering brand identity design, logo design, brand strategy, and digital marketing services. Serving USA, Canada, UK, Germany, and India. Create memorable brands that drive growth.',
  keywords: 'branding agency, brand identity design, logo design, brand strategy, branding agency USA, branding agency Canada, branding agency UK, branding agency Germany, branding agency India, branding agency near me, digital marketing agency, digital marketing services, brand development, corporate branding, visual identity design, rebranding services, brand consulting, marketing strategy, brand positioning',
  openGraph: {
    title: 'Branding & Marketing Services | The Finesse Co.',
    description: 'Brand identity design, logo design, and digital marketing services for businesses in USA, Canada, UK, Germany, and India.',
    url: 'https://thefinesse.co/branding-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://thefinesse.co/branding-marketing',
  },
}

export default function BrandingMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

