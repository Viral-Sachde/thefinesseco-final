import React, { useState } from 'react';
import { CheckIcon, PlusIcon, StarIcon, ChevronDownIcon } from './Icons';

type PricingCategory = 'Web' | 'App' | 'Branding';

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PricingCategory>('Web');
  const [expandedMobileCard, setExpandedMobileCard] = useState<number | null>(null);

  const pricingData = {
    Web: [
      {
        name: 'Starter',
        desc: 'Essential web presence for emerging brands.',
        color: 'bg-eddie-pink',
        features: ['Responsive Landing Page', 'Basic SEO Setup', 'CMS Integration', '2 Rounds of Revisions', '1 Week Support'],
        btnText: 'Select Starter'
      },
      {
        name: 'Pro',
        desc: 'High-performance site for growth-focused businesses.',
        color: 'bg-eddie-purple',
        textColor: 'text-white',
        iconColor: 'text-eddie-purple',
        features: ['5-Page Custom Website', 'Advanced Animations', 'Speed Optimization', 'SEO & Analytics Setup', '1 Month Support'],
        btnText: 'Get Started',
        popular: true
      },
      {
        name: 'Custom',
        desc: 'Enterprise-grade architecture and design.',
        color: 'bg-eddie-mint',
        features: ['Headless Architecture', 'Global CDN', 'Custom Integrations', 'Dedicated Team', 'Priority Support'],
        btnText: 'Contact Sales'
      }
    ],
    App: [
      {
        name: 'MVP',
        desc: 'Rapid prototype to validate your idea.',
        color: 'bg-[#F9FCD0]',
        features: ['Core Features Impl.', 'React Native / Web App', 'Basic Database', 'UI/UX Design', '2 Week Sprint'],
        btnText: 'Build MVP'
      },
      {
        name: 'Scale',
        desc: 'Full-featured application for scaling users.',
        color: 'bg-eddie-blue',
        textColor: 'text-eddie-dark',
        features: ['Advanced Backend', 'Real-time Features', 'Payment Integration', 'Admin Dashboard', '1 Month Support'],
        btnText: 'Scale Up',
        popular: true
      },
      {
        name: 'Custom',
        desc: 'Complex ecosystems and SaaS platforms.',
        color: 'bg-eddie-gray',
        features: ['Microservices', 'AI Integration', 'High Availability', 'Audit & Security', 'SLA Support'],
        btnText: 'Contact Engineering'
      }
    ],
    Branding: [
      {
        name: 'Identity',
        desc: 'Visual foundation for your brand.',
        color: 'bg-[#E0DEFA]',
        features: ['Logo Design', 'Color Palette', 'Typography System', 'Brand Guidelines', 'Social Media Kit'],
        btnText: 'Start Branding'
      },
      {
        name: 'Growth',
        desc: 'Comprehensive marketing and strategy.',
        color: 'bg-eddie-purple',
        textColor: 'text-white',
        iconColor: 'text-eddie-purple',
        features: ['Full Identity System', 'Marketing Collateral', 'Content Strategy', 'Email Templates', 'Ad Creatives'],
        btnText: 'Grow Brand',
        popular: true
      },
      {
        name: 'Custom',
        desc: 'Total brand dominance packages.',
        color: 'bg-eddie-mint',
        features: ['Rebranding Strategy', 'Video Production', 'Campaign Management', 'Influence Marketing', 'Full Retainer'],
        btnText: 'Partner Up'
      }
    ]
  };

  const toggleMobileCard = (idx: number) => {
      setExpandedMobileCard(expandedMobileCard === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-24 overflow-hidden">
      <div className="mb-12 text-center">
        <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm">Investment Tiers</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">Strategic Investment</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">Choose the package that fits your stage of growth.</p>
        
        {/* Category Tabs - Scrollable on mobile */}
        <div className="relative w-full flex justify-center">
            {/* Removed Gradients to fix spacing visibility issue */}
            
            <div className="inline-flex bg-gray-100 p-2 rounded-full mb-8 md:mb-12 relative overflow-x-auto max-w-full no-scrollbar snap-x">
                {(['Web', 'App', 'Branding'] as PricingCategory[]).map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap snap-center ${activeTab === tab ? 'bg-white text-eddie-dark shadow-md scale-105' : 'text-gray-500 hover:text-eddie-dark'}`}
                    >
                    {tab === 'Web' ? 'Web Development' : tab === 'App' ? 'App / Software' : 'Branding & Growth'}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* MOBILE: Accordion Stack (Creative Compact View) */}
      <div className="flex flex-col gap-4 md:hidden">
        {pricingData[activeTab].map((plan, idx) => {
            const isExpanded = expandedMobileCard === idx;
            return (
                <div 
                    key={idx} 
                    className={`rounded-[2rem] overflow-hidden transition-all duration-300 ${isExpanded ? 'bg-white shadow-xl border border-gray-100' : plan.color}`}
                >
                    {/* Collapsed Header Bar */}
                    <button 
                        onClick={() => toggleMobileCard(idx)}
                        className={`w-full p-6 flex items-center justify-between ${!isExpanded && plan.color} ${!isExpanded && plan.textColor ? plan.textColor : 'text-eddie-dark'}`}
                    >
                        <div className="flex items-center gap-4">
                            <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'bg-gray-100 rotate-180 text-eddie-dark' : 'bg-black/5'}`}>
                            <ChevronDownIcon className="w-5 h-5" />
                        </div>
                    </button>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 pt-0">
                            
                            <p className="text-gray-500 font-medium mb-6 mt-4">{plan.desc}</p>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map(item => (
                                    <li key={item} className="flex items-start gap-3">
                                        <div className="mt-1 rounded-full p-1 bg-green-100">
                                            <CheckIcon className="w-3 h-3 text-green-600" />
                                        </div>
                                        <span className="font-medium text-gray-700 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 rounded-xl font-bold bg-eddie-dark text-white shadow-md">
                                {plan.btnText}
                            </button>
                        </div>
                    </div>
                </div>
            );
        })}
      </div>

      {/* DESKTOP: Grid Layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        
        {pricingData[activeTab].map((plan, idx) => (
          <div 
            key={idx} 
            className={`
              ${plan.color} ${plan.textColor || 'text-eddie-dark'} 
              rounded-[2.5rem] p-8 flex flex-col hover:scale-[1.02] transition-all duration-300 shadow-sm relative min-h-[500px]
            `}
          >
            {plan.popular && (
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-eddie-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg flex items-center gap-1">
                <StarIcon className="w-3 h-3 text-eddie-purple" /> Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-4xl font-bold tracking-tight mb-4">{plan.name}</h3>
              <p className={`font-medium text-lg leading-relaxed ${plan.textColor ? 'text-white/80' : 'text-eddie-dark/70'}`}>{plan.desc}</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <div className={`mt-1 rounded-full p-1 ${plan.textColor ? 'bg-white' : 'bg-white/50'}`}>
                    <CheckIcon className={`w-3 h-3 ${plan.iconColor || 'text-eddie-dark'}`} />
                  </div>
                  <span className={`font-bold ${plan.textColor ? 'text-white' : 'text-eddie-dark/80'}`}>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-2xl font-bold transition-colors shadow-sm ${plan.textColor ? 'bg-white text-eddie-purple hover:bg-gray-50' : 'bg-white text-eddie-dark hover:bg-white/80'}`}>
              {plan.btnText}
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};