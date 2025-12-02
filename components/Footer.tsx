'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobeIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleSectionClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer className="w-full px-4 mb-4">
      <div className="bg-white border border-gray-200 text-eddie-dark rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative shadow-sm">
        
        <div className="relative z-10 flex flex-col gap-16 md:gap-24">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-xl">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-eddie-purple rounded-xl flex items-center justify-center shadow-sm overflow-hidden hover:animate-spin-slow">
                    <Image 
                      src="/logo/logo-white.svg" 
                      alt="The Finesse Co. Logo" 
                      width={20} 
                      height={20}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="font-bold text-xl">The Finesse Co.</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
                 Let's build<br/>something<br/><span className="text-eddie-purple">iconic.</span>
               </h2>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link 
                    href="/contact"
                    className="bg-eddie-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-colors hover:scale-105 duration-200 shadow-lg text-center"
                 >
                   Book a Call
                 </Link>
                 <a href="mailto:hello@thefinesse.co" className="bg-gray-50 border border-gray-200 text-eddie-dark px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-sm text-center">
                   hello@thefinesse.co
                 </a>
               </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-gray-400 uppercase text-xs tracking-wider">Socials</h4>
                <a href="https://instagram.com/thefinesseco" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-eddie-purple transition-colors">Instagram</a>
                <a href="https://twitter.com/thefinesseco" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-eddie-purple transition-colors">Twitter / X</a>
                <a href="https://linkedin.com/company/thefinesseco" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-eddie-purple transition-colors">LinkedIn</a>
                <a href="https://dribbble.com/thefinesseco" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-eddie-purple transition-colors">Dribbble</a>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-gray-400 uppercase text-xs tracking-wider">Company</h4>
                <a href="/#services" onClick={(e) => handleSectionClick(e, 'services')} className="text-left font-bold hover:text-eddie-purple transition-colors">Services</a>
                <a href="/#process" onClick={(e) => handleSectionClick(e, 'process')} className="text-left font-bold hover:text-eddie-purple transition-colors">Process</a>
                <a href="/#founders" onClick={(e) => handleSectionClick(e, 'founders')} className="text-left font-bold hover:text-eddie-purple transition-colors">Vision</a>
                <a href="/#careers" onClick={(e) => handleSectionClick(e, 'careers')} className="text-left font-bold hover:text-eddie-purple transition-colors">Careers</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-gray-400 font-medium text-sm">
              © {new Date().getFullYear()} The Finesse Co. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
               <Link href="/privacy" className="text-sm font-bold hover:underline decoration-eddie-purple text-gray-600">Privacy Policy</Link>
               <Link href="/terms" className="text-sm font-bold hover:underline decoration-eddie-purple text-gray-600">Terms of Service</Link>
               <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 w-fit">
                  <GlobeIcon className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-bold text-gray-500 whitespace-nowrap">Global Agency</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};