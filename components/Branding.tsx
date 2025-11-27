import React from 'react';
import { HeartIcon } from './Icons';
import { TypeLab } from './TypeLab';
import { BrandSlider } from './BrandSlider';
import { BrandingHero } from './BrandingHero';
import { BrandingMoodboard } from './BrandingMoodboard';
import { BrandingDeliverables } from './BrandingDeliverables';
import { BrandingNeuromarketing } from './BrandingNeuromarketing';
import { BrandingCTA } from './BrandingCTA';

interface BrandingProps {
  onNavigate: (page: string) => void;
}

export const Branding: React.FC<BrandingProps> = ({ onNavigate }) => {
  return (
    <div className="w-full animate-fade-in pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <BrandingHero />
        <BrandingMoodboard />
        <BrandingDeliverables />
        <BrandingNeuromarketing />
        <BrandingCTA onNavigate={onNavigate} />
      </div>
    </div>
  );
};

