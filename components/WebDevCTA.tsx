import React from 'react';

interface WebDevCTAProps {
  onNavigate: (page: string) => void;
}

export const WebDevCTA: React.FC<WebDevCTAProps> = ({ onNavigate }) => {
  return (
    <div className="bg-eddie-purple rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-24 text-center relative overflow-hidden group">
       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem]"></div>
       <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">Ready to Ship?</h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8">Stop losing traffic to slow websites.</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-eddie-purple px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-lg">
            Book a Call
          </button>
       </div>
    </div>
  );
};

