'use client'

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { HeroCard } from '../components/HeroCard';
import { FeatureSection } from '../components/FeatureSection';
import { BentoGrid } from '../components/BentoGrid';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { CaseStudies } from '../components/CaseStudies';
import { Careers } from '../components/Careers';
import { SparkleIcon } from '../components/Icons';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { Founders } from '../components/Founders';
import { VideoShowcase } from '../components/VideoShowcase';
import { Philosophy } from '../components/Philosophy';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToId = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Offset for sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-eddie-dark font-sans selection:bg-eddie-purple-light selection:text-eddie-dark overflow-x-hidden">
      
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      
      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
      />

      <main className="w-full flex flex-col relative">
        
        <div className="pt-32 md:pt-40 pb-12 gap-24 md:gap-32 flex flex-col">
          {/* Hero Section */}
          <div id="home" className="flex flex-col gap-16 animate-fade-in">
              <div className="flex flex-col items-center px-4">
                
                {/* Title Section */}
                <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter text-center mb-8 flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 gap-y-2 leading-[0.9]">
                  <span>Make</span>
                  <span>the</span>
                  <span className="bg-eddie-purple w-14 h-10 md:w-28 md:h-24 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center text-eddie-dark mx-1 shadow-sm hover:animate-spin-slow">
                    <SparkleIcon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </span>
                  <br className="block lg:hidden w-full" />
                  <span>Internet</span>
                  <span>Obsessed.</span>
                </h1>

                {/* Text Chain Badges - Forced Single Line */}
                <div className="flex flex-nowrap gap-2 md:gap-6 justify-center mb-12 items-center text-[10px] sm:text-sm md:text-xl font-bold tracking-tight text-eddie-dark whitespace-nowrap overflow-hidden px-2">
                  <span>Noise.</span>
                  <span className="text-gray-300">→</span>
                  <span>Focus.</span>
                  <span className="text-gray-300">→</span>
                  <span>Execute.</span>
                  <span className="text-gray-300">→</span>
                  <span className="text-eddie-purple">Impact.</span>
                </div>

                {/* Hero Card */}
                <HeroCard onClick={() => scrollToId('services')} />
              </div>

              {/* Philosophy Section */}
              <Philosophy />

              {/* Video Showcase */}
              <VideoShowcase />

              {/* Social Proof Stats */}
              <BentoGrid />
          </div>

          {/* Services */}
          <section id="services">
              <Services />
          </section>

          {/* Process */}
          <section id="process">
              <Process />
          </section>

          {/* Founders / Vision (Moved Lower) */}
          <section id="founders">
              <Founders />
          </section>

          {/* Testimonials */}
          <section id="testimonials">
              <Testimonials />
          </section>

          {/* Case Studies */}
          <section id="cases">
              <CaseStudies />
          </section>

          {/* Pricing */}
          <section id="pricing">
              <Pricing />
          </section>

          {/* Unfair Advantage */}
          <section id="agency">
              <FeatureSection />
          </section>

          {/* Careers */}
          <section id="careers">
              <Careers />
          </section>

          {/* FAQ */}
          <section id="faq">
              <FAQ />
          </section>
        </div>

        {/* Global Footer */}
        <div>
          <Footer />
        </div>

      </main>
    </div>
  );
}

