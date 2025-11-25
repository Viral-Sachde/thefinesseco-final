import React from 'react';
import { CheckIcon, PlusIcon, StarIcon } from './Icons';

export const Pricing: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-16 text-center">
        <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm">Investment Tiers</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">Clear Pricing</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Transparent partnerships for partners at every stage of growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Starter - Soft Pink */}
        <div className="bg-eddie-pink rounded-[2.5rem] p-8 flex flex-col hover:scale-[1.02] transition-transform duration-300">
          <div className="mb-8">
            <span className="bg-white/40 text-eddie-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">Essentials</span>
            <h3 className="text-4xl font-bold mt-4 mb-2">$4,900<span className="text-lg text-eddie-dark/60 font-medium">/project</span></h3>
            <p className="text-eddie-dark/70 font-medium">Perfect for startups establishing their first digital footprint.</p>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {['Custom Landing Page', 'Basic SEO Setup', 'Mobile Responsive', '1 Week Support', 'CMS Integration'].map(item => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-1 bg-white/50 rounded-full p-1"><CheckIcon className="w-3 h-3 text-eddie-dark" /></div>
                <span className="font-bold text-eddie-dark/80">{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-white text-eddie-dark py-4 rounded-2xl font-bold hover:bg-white/80 transition-colors shadow-sm">
            Select Essentials
          </button>
        </div>

        {/* Growth - Soft Purple */}
        <div className="bg-eddie-purple text-white rounded-[2.5rem] p-8 flex flex-col transform md:-translate-y-4 shadow-2xl relative hover:scale-[1.02] transition-transform duration-300 z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-eddie-purple px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg flex items-center gap-1">
            <StarIcon className="w-3 h-3" /> Most Popular
          </div>
          <div className="mb-8">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Growth</span>
            <h3 className="text-4xl font-bold mt-4 mb-2">$12,500<span className="text-lg text-white/70 font-medium">/project</span></h3>
            <p className="text-white/80 font-medium">For scaling brands needing a comprehensive digital overhaul.</p>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {['Full Brand Identity', '5-Page Custom Site', 'Advanced Animations', 'SEO & Analytics', 'Social Media Kit', '1 Month Retainer'].map(item => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-1 bg-white rounded-full p-1"><CheckIcon className="w-3 h-3 text-eddie-purple" /></div>
                <span className="font-bold text-white">{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-white text-eddie-purple py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
            Get Started
          </button>
        </div>

        {/* Enterprise - Soft Mint */}
        <div className="bg-eddie-mint rounded-[2.5rem] p-8 flex flex-col hover:scale-[1.02] transition-transform duration-300">
          <div className="mb-8">
            <span className="bg-white/40 text-eddie-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">Enterprise</span>
            <h3 className="text-4xl font-bold mt-4 mb-2">Custom</h3>
            <p className="text-eddie-dark/70 font-medium">Tailored solutions for large organizations with complex needs.</p>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {['Product Design (SaaS)', 'Design Systems', 'Full Stack App Dev', 'Dedicated Squad', '24/7 Priority Support'].map(item => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-1 bg-white/50 rounded-full p-1"><PlusIcon className="w-3 h-3 text-eddie-dark" /></div>
                <span className="font-bold text-eddie-dark/80">{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-white text-eddie-dark py-4 rounded-2xl font-bold hover:bg-white/80 transition-colors shadow-sm">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};