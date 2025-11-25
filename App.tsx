import React, { useState } from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { HeroCard } from './components/HeroCard';
import { FeatureSection } from './components/FeatureSection';
import { BentoGrid } from './components/BentoGrid';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CaseStudies } from './components/CaseStudies';
import { Careers } from './components/Careers';
import { SparkleIcon, PaletteIcon, CodeIcon, RocketIcon } from './components/Icons';

export type SectionId = 'home' | 'services' | 'agency' | 'pricing' | 'faq' | 'cases' | 'careers';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
  };

  return (
    <div className="min-h-screen bg-white text-eddie-dark font-sans selection:bg-eddie-purple-light selection:text-eddie-dark overflow-x-hidden">
      
      <Header onNavigate={(page) => scrollToSection(page as string)} onMenuClick={() => setIsMenuOpen(true)} />
      
      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={(page) => scrollToSection(page as string)}
      />

      <main className="pt-32 md:pt-40 w-full flex flex-col relative pb-12 gap-24 md:gap-32">
        
        {/* Hero Section */}
        <div id="home" className="flex flex-col gap-16 animate-fade-in">
            <div className="flex flex-col items-center px-4">
              
              {/* Title Section */}
              <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter text-center mb-8 flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 gap-y-2 leading-[0.9]">
                <span>Make</span>
                <span>the</span>
                <span className="bg-eddie-purple w-14 h-10 md:w-28 md:h-24 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center text-eddie-dark mx-1 hover:rotate-6 transition-transform duration-300 shadow-sm">
                  <SparkleIcon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </span>
                <br className="block w-full"/>
                <span>Internet</span>
                <span>Obsessed.</span>
              </h1>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-12">
                <div className="group cursor-default flex items-center gap-2 bg-[#E0DEFA] hover:bg-[#d0cefa] text-eddie-dark px-5 py-3 rounded-2xl font-bold text-sm md:text-base transition-colors duration-300">
                   <PaletteIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   <span>Vibe Checks</span>
                </div>
                <div className="group cursor-default flex items-center gap-2 bg-[#E3F2FD] hover:bg-[#d3eafd] text-eddie-dark px-5 py-3 rounded-2xl font-bold text-sm md:text-base transition-colors duration-300">
                   <RocketIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   <span>Growth Hacking</span>
                </div>
                <div className="group cursor-default flex items-center gap-2 bg-[#F9FCD0] hover:bg-[#f0f5b8] text-eddie-dark px-5 py-3 rounded-2xl font-bold text-sm md:text-base transition-colors duration-300">
                   <CodeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   <span>No-Code & Code</span>
                </div>
              </div>

              {/* Hero Card */}
              <HeroCard onClick={() => scrollToSection('services')} />
            </div>

            {/* Social Proof */}
            <BentoGrid />
        </div>

        {/* Feature Teaser */}
        <section id="agency">
            <FeatureSection />
        </section>

        {/* Case Studies */}
        <section id="cases">
            <CaseStudies />
        </section>

        {/* Services */}
        <section id="services">
            <Services />
        </section>

        {/* Pricing */}
        <section id="pricing">
            <Pricing />
        </section>

        {/* Careers */}
        <section id="careers">
            <Careers />
        </section>

        {/* FAQ */}
        <section id="faq">
            <FAQ />
        </section>

        {/* Global Footer */}
        <div>
          <Footer onNavigate={(page) => scrollToSection(page as string)} />
        </div>

      </main>
    </div>
  );
};

export default App;