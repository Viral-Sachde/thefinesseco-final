import React, { useEffect, useState } from 'react';
import { CheckIcon } from './Icons';

export const ChecklistVisual: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCheckedItems(prev => {
        if (prev.length < 5) {
          return [...prev, prev.length];
        }
        return prev; // Stop at 5
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  const items = [
    "Pixel Perfect Audit",
    "Mobile Responsiveness",
    "Accessibility Compliance (WCAG)",
    "SEO Meta Tags & Schema",
    "Lighthouse Performance > 95"
  ];

  return (
    <div className="bg-eddie-dark text-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] h-full flex flex-col justify-center">
       <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 text-eddie-lime">The Quality Standard</h3>
       <div className="space-y-3 sm:space-y-4">
          {items.map((item, idx) => (
             <div key={idx} className="flex items-center gap-2 sm:gap-3 md:gap-4 group">
                <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-300 shrink-0 ${checkedItems.includes(idx) ? 'bg-green-500 border-green-500 scale-100' : 'bg-transparent scale-90'}`}>
                   <CheckIcon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white transition-opacity ${checkedItems.includes(idx) ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                <span className={`font-bold text-sm sm:text-base md:text-lg transition-colors leading-tight ${checkedItems.includes(idx) ? 'text-white' : 'text-gray-600'}`}>{item}</span>
             </div>
          ))}
       </div>
    </div>
  );
};

