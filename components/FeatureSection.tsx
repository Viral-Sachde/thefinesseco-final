'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon, CheckIcon, CloseIcon } from './Icons';

export const FeatureSection: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-16 mb-24 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">
          The Unfair Advantage.
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          While they're building basic sites, we're building your empire. No cap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        
        {/* The Old Way (Left) */}
        <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden opacity-90">
           <div className="flex justify-between items-start mb-8 md:absolute md:top-12 md:right-12">
             <span className="text-xs md:text-sm font-bold uppercase tracking-wide line-through decoration-red-500 decoration-2 text-gray-400">Basic Agencies</span>
           </div>
           
           <h3 className="text-3xl font-bold text-gray-300 mb-8 line-through decoration-gray-300/50">Mid Websites</h3>
           
           <ul className="space-y-4">
             {['Navigation that makes no sense', 'Takes forever to load (we timed it)', 'SEO? What SEO?', 'Looks fire, makes $0'].map((item, i) => (
               <li key={i} className="flex items-center gap-4 text-gray-400 font-medium">
                  <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                    <CloseIcon className="w-3 h-3 text-gray-300" />
                  </div>
                  <span className="line-through decoration-gray-300">{item}</span>
               </li>
             ))}
           </ul>
        </div>

        {/* The Finesse Way (Right) */}
        <div className="bg-white border-2 border-eddie-purple rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl lg:-translate-y-8 z-10">
           
           <h3 className="text-3xl font-bold text-eddie-dark mb-8">The Finesse Way</h3>
           
           <ul className="space-y-6">
             {[
               { text: 'UX That Actually Converts', sub: 'We make your users want to buy (it\'s science, not magic).' },
               { text: 'Lightning Fast Load Times', sub: 'Sub-second speeds. Google gives us 99/100. We\'re built different.' },
               { text: 'SEO That Hits Different', sub: 'We dominate search results. Your competitors will be pressed.' },
               { text: 'Designs People Actually Remember', sub: 'So fire, your customers might get it tattooed. No cap.' }
             ].map((item, i) => (
               <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-eddie-purple flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-lg block leading-tight">{item.text}</span>
                    <span className="text-sm text-gray-500 font-medium">{item.sub}</span>
                  </div>
               </li>
             ))}
           </ul>

           <button onClick={() => router.push('/contact')} className="mt-10 md:mt-12 w-full bg-eddie-dark text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 shadow-lg">
             Level Up Your Brand <ArrowRightIcon className="w-4 h-4" />
           </button>
        </div>

      </div>
    </div>
  );
};