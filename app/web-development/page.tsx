'use client'

import React, { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Services } from '../../components/Services'
import { Pricing } from '../../components/Pricing'
import { BentoGrid } from '../../components/BentoGrid'
import { Process } from '../../components/Process'

export default function WebDevelopmentPage() {
  useEffect(() => {
    document.title = 'Web Development Services | Custom Website Development Agency | USA, Canada, UK, Germany, India';
  }, []);

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
    <div className="min-h-screen bg-white text-eddie-dark font-sans">
      <Header />
      <main className="w-full flex flex-col relative">
        <div className="pt-32 pb-12 gap-24 md:gap-32 flex flex-col">
          {/* Hero Section */}
          <div className="flex flex-col gap-16 animate-fade-in">
            <div className="flex flex-col items-center px-4">
              <div className="w-full max-w-6xl mx-auto text-center mb-12">
                <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm mb-6 block">Web Development</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  Websites That<br />
                  <span className="text-eddie-purple">Actually Convert</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
                  While others build basic sites, we engineer revenue engines. 
                  <br className="hidden md:block" />
                  Lightning-fast, SEO-optimized, and built to make you money. No cap.
                </p>
              </div>
            </div>

            {/* Stats */}
            <BentoGrid />
          </div>

          {/* Services */}
          <section id="services" className="w-full max-w-6xl mx-auto px-4">
            <Services />
          </section>

          {/* Process */}
          <section id="process" className="w-full max-w-6xl mx-auto px-4">
            <Process />
          </section>

          {/* Pricing */}
          <section id="pricing" className="w-full max-w-6xl mx-auto px-4">
            <Pricing />
          </section>
        </div>
        <Footer />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </main>
    </div>
  )
}
