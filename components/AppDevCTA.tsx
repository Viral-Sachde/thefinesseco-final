import React from 'react';

interface AppDevCTAProps {
  onNavigate: (page: string) => void;
}

export const AppDevCTA: React.FC<AppDevCTAProps> = ({ onNavigate }) => {
  return (
    <div className="text-center">
        <button onClick={() => onNavigate('contact')} className="bg-eddie-dark text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl">
          Build Your SaaS
        </button>
    </div>
  );
};

