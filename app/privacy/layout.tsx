import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Finesse Co. | Web Development, App Development & Branding Agency',
  description: 'Privacy Policy for The Finesse Co. - Professional web development, app development, and branding agency serving USA, Canada, UK, Germany, and India.',
  keywords: 'privacy policy, web development agency privacy, app development company privacy, branding agency privacy',
  alternates: {
    canonical: 'https://thefinesse.co/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

