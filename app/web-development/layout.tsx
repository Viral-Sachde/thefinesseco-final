import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Services | Custom Website Development Agency | USA, Canada, UK, Germany, India',
  description: 'Professional web development agency offering custom website development, React development, Next.js development, and responsive web design services. Serving USA, Canada, UK, Germany, and India. Build high-performance websites that convert.',
  keywords: 'web development agency, custom web development, website development company, React development, Next.js development, web development USA, web development Canada, web development UK, web development Germany, web development India, web development near me, responsive web development, frontend development, backend development, full stack development, web application development, progressive web apps, ecommerce web development',
  openGraph: {
    title: 'Web Development Services | The Finesse Co.',
    description: 'Custom web development services for businesses in USA, Canada, UK, Germany, and India. React, Next.js, and modern web technologies.',
    url: 'https://thefinesse.co/web-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://thefinesse.co/web-development',
  },
}

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

