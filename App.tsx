import React, { useState, useEffect } from 'react';
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
import { SparkleIcon } from './components/Icons';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Founders } from './components/Founders';
import { VideoShowcase } from './components/VideoShowcase';
import { Contact } from './components/Contact';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';

export type ViewState = 'home' | 'contact' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Handle initial hash routing
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'contact') setCurrentView('contact');
    else if (hash === 'terms') setCurrentView('terms');
    else if (hash === 'privacy') setCurrentView('privacy');
  }, []);

  const handleNavigate = (destination: string) => {
    setIsMenuOpen(false);

    // Handle View Switching
    if (['contact', 'terms', 'privacy'].includes(destination)) {
      setCurrentView(destination as ViewState);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', `#${destination}`);
      return;
    }

    // Handle Home Navigation
    if (destination === 'home') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', ' ');
      return;
    }

    // Handle Section Scrolling (Only if on Home view)
    if (currentView !== 'home') {
      setCurrentView('home');
      // Allow time for render before scrolling
      setTimeout(() => scrollToId(destination), 100);
      window.history.pushState(null, '', ' ');
    } else {
      scrollToId(destination);
    }
  };

  const scrollToId = (id: string) => {
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
      
      <Header onNavigate={handleNavigate} onMenuClick={() => setIsMenuOpen(true)} />
      
      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={handleNavigate}
      />

      <main className="w-full flex flex-col relative">
        
        {currentView === 'home' && (
          <div className="pt-32 md:pt-40 pb-12 gap-24 md:gap-32 flex flex-col">
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
                  <HeroCard onClick={() => handleNavigate('services')} />
                </div>

                {/* Video Showcase */}
                <VideoShowcase />

                {/* Social Proof Stats */}
                <BentoGrid />
            </div>

            {/* Feature Teaser (Pretty vs Profitable) */}
            <section id="agency">
                <FeatureSection />
            </section>

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

            {/* Careers */}
            <section id="careers">
                <Careers />
            </section>

            {/* FAQ */}
            <section id="faq">
                <FAQ />
            </section>
          </div>
        )}

        {currentView === 'contact' && <Contact />}
        {currentView === 'terms' && <Terms />}
        {currentView === 'privacy' && <Privacy />}

        {/* Global Footer */}
        <div>
          <Footer onNavigate={handleNavigate} />
        </div>

      </main>
    </div>
  );
};

export default App;