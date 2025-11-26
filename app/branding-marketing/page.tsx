'use client'

import React, { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Services } from '../../components/Services'
import { Pricing } from '../../components/Pricing'
import { BentoGrid } from '../../components/BentoGrid'
import { Process } from '../../components/Process'

export default function BrandingMarketingPage() {
  useEffect(() => {
    document.title = 'Branding & Marketing Services | Brand Identity Design Agency | USA, Canada, UK, Germany, India';
  }, []);

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
    <div className="min-h-screen bg-white text-eddie-dark font-sans">
      <Header />
      <main className="w-full flex flex-col relative">
        <div className="pt-32 pb-12 gap-24 md:gap-32 flex flex-col">
          {/* Hero Section */}
          <div className="flex flex-col gap-16 animate-fade-in">
            <div className="flex flex-col items-center px-4">
              <div className="w-full max-w-6xl mx-auto text-center mb-12">
                <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm mb-6 block">Branding & Marketing</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  Brands That<br />
                  <span className="text-eddie-purple">People Remember</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
                  We don't just design logos. We engineer brand identities that make people obsessed. 
                  <br className="hidden md:block" />
                  So fire, your customers might get it tattooed. No cap.
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
