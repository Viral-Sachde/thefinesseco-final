import type { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | Web Development, App Development & Branding Agency | USA, Canada, UK, Germany, India',
  description: 'Get in touch with The Finesse Co. for web development, app development, and branding services. Serving businesses in USA, Canada, UK, Germany, and India. Let\'s build something iconic together.',
  keywords: 'contact web development agency, contact app development company, contact branding agency, web development agency contact, app development company contact, branding agency contact, web development USA contact, app development Canada contact, branding UK contact',
  openGraph: {
    title: 'Contact Us | The Finesse Co.',
    description: 'Get in touch with The Finesse Co. for professional web development, app development, and branding services.',
    url: 'https://thefinesse.co/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://thefinesse.co/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

