import React from 'react';

interface BrandingCTAProps {
  onNavigate: (page: string) => void;
}

export const BrandingCTA: React.FC<BrandingCTAProps> = ({ onNavigate }) => {
  return (
    <div className="text-center">
        <button onClick={() => onNavigate('contact')} className="bg-eddie-dark text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
          Create Your Identity
        </button>
    </div>
  );
};

