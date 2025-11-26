'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon } from './Icons';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4 md:py-8 flex justify-between items-start pointer-events-none transition-all duration-300">
      
      {/* Left Island: Logo/Home - Expands on Hover OR Scroll */}
      <Link 
        href="/"
        className="pointer-events-auto bg-[#F3F3F3] hover:bg-[#EAEAEA] transition-colors rounded-2xl p-2 flex items-center shadow-sm group cursor-pointer" 
      >
        <div className="w-10 h-10 bg-eddie-purple rounded-xl flex items-center justify-center shrink-0 z-10 relative overflow-hidden hover:animate-spin-slow">
           <Image 
             src="/logo/logo-white.svg" 
             alt="The Finesse Co. Logo" 
             width={20} 
             height={20}
             className="object-contain"
             unoptimized
           />
        </div>
        
        {/* Collapsible Text Container */}
        <div className={`overflow-hidden transition-all duration-500 ease-cubic ${isScrolled ? 'max-w-[150px]' : 'max-w-0 group-hover:max-w-[150px]'}`}>
            <span className={`font-bold text-sm text-eddie-dark pl-3 pr-4 whitespace-nowrap transition-opacity duration-300 delay-100 block ${isScrolled ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              The Finesse Co.
            </span>
        </div>
      </Link>

      {/* Right Island: Menu & CTA */}
      <div className="pointer-events-auto bg-[#F3F3F3] rounded-2xl p-2 flex items-center gap-2 shadow-sm">
        <button 
          onClick={onMenuClick}
          className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white transition-colors hover:scale-105 duration-200 active:scale-95 bg-white md:bg-transparent"
          aria-label="Menu"
        >
          <MenuIcon className="w-5 h-5 text-eddie-dark" />
        </button>
        <Link 
          href="/contact"
          className="hidden md:block bg-black text-white text-sm font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-200 shadow-md"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
};