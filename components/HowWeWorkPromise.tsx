import React from 'react';
import { CoffeeIcon } from './Icons';

interface HowWeWorkPromiseProps {
  onNavigate: (page: string) => void;
}

export const HowWeWorkPromise: React.FC<HowWeWorkPromiseProps> = ({ onNavigate }) => {
  return (
    <div className="text-center bg-[#F9FCD0] rounded-[2.5rem] p-12 md:p-20">
       <CoffeeIcon className="w-16 h-16 text-eddie-dark mx-auto mb-6" />
       <h2 className="text-4xl font-bold mb-6">We Don't Outsource.</h2>
       <p className="text-xl max-w-2xl mx-auto mb-10 text-eddie-dark/80 font-medium">
         Every line of code and pixel is crafted by our core team. We are obsessed artisans, not a factory.
       </p>
       <button onClick={() => onNavigate('contact')} className="bg-eddie-dark text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl">
         Work With Humans
       </button>
    </div>
  );
};

