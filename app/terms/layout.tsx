import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | The Finesse Co. | Web Development, App Development & Branding Agency',
  description: 'Terms of Service for The Finesse Co. - Professional web development, app development, and branding agency serving USA, Canada, UK, Germany, and India.',
  keywords: 'terms of service, web development agency terms, app development company terms, branding agency terms',
  alternates: {
    canonical: 'https://thefinesse.co/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

