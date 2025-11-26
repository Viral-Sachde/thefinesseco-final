import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'App & Software Development Services | Mobile App Development Company | USA, Canada, UK, Germany, India',
  description: 'Professional app development company offering mobile app development, SaaS development, MVP development, iOS and Android app development. Serving USA, Canada, UK, Germany, and India. Build scalable applications that grow with your business.',
  keywords: 'app development company, mobile app development, SaaS development, MVP development, iOS app development, Android app development, app development USA, app development Canada, app development UK, app development Germany, app development India, app development near me, React Native development, Flutter development, custom software development, software development company, SaaS platform development, startup app development',
  openGraph: {
    title: 'App & Software Development Services | The Finesse Co.',
    description: 'Mobile app development, SaaS development, and MVP development services for businesses in USA, Canada, UK, Germany, and India.',
    url: 'https://thefinesse.co/app-software',
    type: 'website',
  },
  alternates: {
    canonical: 'https://thefinesse.co/app-software',
  },
}

export default function AppSoftwareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

