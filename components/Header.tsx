import React from 'react';
import { SparkleIcon, MenuIcon } from './Icons';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex justify-between items-start pointer-events-none">
      
      {/* Left Island: Logo/Home */}
      <div 
        className="pointer-events-auto bg-[#F3F3F3] hover:bg-[#EAEAEA] transition-colors rounded-2xl p-2 pr-5 flex items-center gap-3 cursor-pointer shadow-sm group" 
        onClick={() => window.location.reload()}
      >
        <div className="w-10 h-10 bg-eddie-purple/20 rounded-xl flex items-center justify-center text-eddie-dark group-hover:rotate-12 transition-transform duration-300">
           <SparkleIcon className="w-5 h-5 text-eddie-dark" />
        </div>
        <span className="font-bold text-sm text-eddie-dark">The Finesse Co.</span>
      </div>

      {/* Right Island: Menu & CTA */}
      <div className="pointer-events-auto bg-[#F3F3F3] rounded-2xl p-2 flex items-center gap-2 shadow-sm">
        <button 
          onClick={onMenuClick}
          className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white transition-colors hover:scale-105 duration-200 active:scale-95"
          aria-label="Menu"
        >
          <MenuIcon className="w-4 h-4 text-eddie-dark" />
        </button>
        <button className="bg-black text-white text-sm font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-200 shadow-md">
          Start Project
        </button>
      </div>
    </header>
  );
};