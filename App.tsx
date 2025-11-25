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
import { SparkleIcon, PaletteIcon, CodeIcon, RocketIcon } from './components/Icons';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-eddie-dark font-sans selection:bg-eddie-lime selection:text-eddie-dark overflow-x-hidden">
      
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="pt-32 md:pt-40 w-full flex flex-col relative gap-16 md:gap-24 pb-12">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center animate-fade-in px-4">
          
          {/* Title Section */}
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter text-center mb-8 flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 gap-y-2 leading-[0.9]">
            <span>The</span>
            <span className="bg-eddie-purple w-14 h-10 md:w-28 md:h-20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-eddie-dark mx-1 hover:rotate-6 transition-transform duration-300 shadow-sm">
              <SparkleIcon className="w-8 h-8 md:w-12 md:h-12" />
            </span>
            <span>Finesse</span>
            <br className="block w-full"/>
            <span>Co. Agency</span>
          </h1>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-12">
            <div className="group cursor-default flex items-center gap-2 bg-[#E0DEFA] hover:bg-[#d0cefa] text-eddie-dark px-5 py-3 rounded-2xl font-bold text-sm md:text-base transition-colors duration-300">
               <PaletteIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
               <span>Brand Identity</span>
            </div>
            <div className="group cursor-default flex items-center gap-2 bg-[#E3F2FD] hover:bg-[#d3eafd] text-eddie-dark px-5 py-3 rounded-2xl font-bold text-sm md:text-base transition-colors duration-300">
               <RocketIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
               <span>Growth Strategy</span>
            </div>
            <div className="group cursor-default flex items-center gap-2 bg-[#F9FCD0] hover:bg-[#f0f5b8] text-eddie-dark px-5 py-3 rounded-2xl font-bold text-sm md:text-base transition-colors duration-300">
               <CodeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
               <span>Web Engineering</span>
            </div>
          </div>

          {/* Hero Card */}
          <HeroCard />
          
        </div>

        {/* Social Proof & Impact */}
        <BentoGrid />

        {/* Services Section */}
        <div id="services">
          <Services />
        </div>

        {/* Feature Section (About/Process) */}
        <div id="about">
          <FeatureSection />
        </div>

        {/* Pricing Section */}
        <div id="pricing">
          <Pricing />
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Footer */}
        <Footer />

      </main>
    </div>
  );
};

export default App;