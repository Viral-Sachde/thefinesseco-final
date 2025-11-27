import React from 'react';
import { HowWeWorkHero } from './HowWeWorkHero';
import { HowWeWorkSprint } from './HowWeWorkSprint';
import { HowWeWorkComms } from './HowWeWorkComms';
import { HowWeWorkPromise } from './HowWeWorkPromise';

interface HowWeWorkProps {
  onNavigate: (page: string) => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigate }) => {
  return (
    <div className="w-full animate-fade-in pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <HowWeWorkHero />
        <HowWeWorkSprint />
        <HowWeWorkComms />
        <HowWeWorkPromise onNavigate={onNavigate} />
      </div>
    </div>
  );
};

