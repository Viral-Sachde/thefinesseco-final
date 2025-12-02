import React from 'react';
import { AppDevHero } from './AppDevHero';
import { AppDevComparison } from './AppDevComparison';
import { AppDevArchitecture } from './AppDevArchitecture';
import { AppDevProcess } from './AppDevProcess';
import { AppDevCTA } from './AppDevCTA';
import { TechMarquee } from './TechMarquee';

interface AppDevProps {
  onNavigate: (page: string) => void;
}

export const AppDev: React.FC<AppDevProps> = ({ onNavigate }) => {
  return (
    <div className="w-full animate-fade-in pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AppDevHero onNavigate={onNavigate} />
      </div>
      
      {/* Module 2: Tech Stack Marquee */}
      <div className="w-full mb-16 sm:mb-20 md:mb-24">
         <TechMarquee />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AppDevComparison />
        <AppDevArchitecture />
        <AppDevProcess />
        <AppDevCTA onNavigate={onNavigate} />
      </div>
    </div>
  );
};

