import React from 'react';
import { WebDevHero } from './WebDevHero';
import { WebDevSpeedStack } from './WebDevSpeedStack';
import { WebDevCMSControl } from './WebDevCMSControl';
import { WebDevCTA } from './WebDevCTA';

interface WebDevProps {
  onNavigate: (page: string) => void;
}

export const WebDev: React.FC<WebDevProps> = ({ onNavigate }) => {
  return (
    <div className="w-full animate-fade-in pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <WebDevHero onNavigate={onNavigate} />
        <WebDevSpeedStack />
        <WebDevCMSControl />
        <WebDevCTA onNavigate={onNavigate} />
      </div>
    </div>
  );
};

