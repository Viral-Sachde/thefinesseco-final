import React from 'react';
import { CheckIcon, PlusIcon } from './Icons';

export const Pricing: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Investment Tiers</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Transparent pricing for partners at every stage of growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Starter */}
        <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 flex flex-col hover:border-gray-300 transition-colors">
          <div className="mb-8">
            <span className="bg-gray-100 text-eddie-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Essentials</span>
            <h3 className="text-4xl font-bold mt-4 mb-2">$4,900<span className="text-lg text-gray-400 font-medium">/project</span></h3>
            <p className="text-gray-500 font-medium">Perfect for startups establishing their first digital footprint.</p>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {['Custom Landing Page', 'Basic SEO Setup', 'Mobile Responsive', '1 Week Support', 'CMS Integration'].map(item => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-1 bg-gray-100 rounded-full p-1"><CheckIcon className="w-3 h-3 text-eddie-dark" /></div>
                <span className="font-bold text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-white border-2 border-eddie-dark text-eddie-dark py-4 rounded-2xl font-bold hover:bg-eddie-dark hover:text-white transition-colors">
            Select Essentials
          </button>
        </div>

        {/* Growth (Featured) */}
        <div className="bg-eddie-dark text-white rounded-[2.5rem] p-8 flex flex-col transform md:-translate-y-4 shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-eddie-lime text-eddie-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg">
            Most Popular
          </div>
          <div className="mb-8">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Growth</span>
            <h3 className="text-4xl font-bold mt-4 mb-2">$12,500<span className="text-lg text-gray-400 font-medium">/project</span></h3>
            <p className="text-gray-400 font-medium">For scaling brands needing a comprehensive digital overhaul.</p>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {['Full Brand Identity', '5-Page Custom Site', 'Advanced Animations', 'SEO & Analytics', 'Social Media Kit', '1 Month Retainer'].map(item => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-1 bg-eddie-lime rounded-full p-1"><CheckIcon className="w-3 h-3 text-eddie-dark" /></div>
                <span className="font-bold text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-eddie-lime text-eddie-dark py-4 rounded-2xl font-bold hover:bg-[#ccee2d] transition-colors shadow-lg hover:scale-105 duration-200">
            Get Started
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-eddie-beige rounded-[2.5rem] p-8 flex flex-col hover:bg-[#e4e2de] transition-colors">
          <div className="mb-8">
            <span className="bg-white text-eddie-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Enterprise</span>
            <h3 className="text-4xl font-bold mt-4 mb-2">Custom</h3>
            <p className="text-gray-500 font-medium">Tailored solutions for large organizations with complex needs.</p>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {['Product Design (SaaS)', 'Design Systems', 'Full Stack App Dev', 'Dedicated Squad', '24/7 Priority Support'].map(item => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-1 bg-white rounded-full p-1"><PlusIcon className="w-3 h-3 text-eddie-dark" /></div>
                <span className="font-bold text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-eddie-dark/5 hover:bg-eddie-dark/10 text-eddie-dark py-4 rounded-2xl font-bold transition-colors">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};