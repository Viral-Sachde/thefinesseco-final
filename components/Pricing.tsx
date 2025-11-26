import React, { useState } from 'react';
import { CheckIcon, PlusIcon, StarIcon } from './Icons';

type PricingCategory = 'Web' | 'App' | 'Branding';

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PricingCategory>('Web');

  const pricingData = {
    Web: [
      {
        name: 'Starter',
        price: '$2,000',
        desc: 'Essential web presence for emerging brands.',
        color: 'bg-eddie-pink',
        features: ['Responsive Landing Page', 'Basic SEO Setup', 'CMS Integration', '2 Rounds of Revisions', '1 Week Support'],
        btnText: 'Select Starter'
      },
      {
        name: 'Pro',
        price: '$3,500',
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
        price: 'Custom',
        desc: 'Enterprise-grade architecture and design.',
        color: 'bg-eddie-mint',
        features: ['Headless Architecture', 'Global CDN', 'Custom Integrations', 'Dedicated Team', 'Priority Support'],
        btnText: 'Contact Sales'
      }
    ],
    App: [
      {
        name: 'MVP',
        price: '$3,000',
        desc: 'Rapid prototype to validate your idea.',
        color: 'bg-[#F9FCD0]',
        features: ['Core Features Impl.', 'React Native / Web App', 'Basic Database', 'UI/UX Design', '2 Week Sprint'],
        btnText: 'Build MVP'
      },
      {
        name: 'Scale',
        price: '$5,000',
        desc: 'Full-featured application for scaling users.',
        color: 'bg-eddie-blue',
        textColor: 'text-eddie-dark',
        features: ['Advanced Backend', 'Real-time Features', 'Payment Integration', 'Admin Dashboard', '1 Month Support'],
        btnText: 'Scale Up',
        popular: true
      },
      {
        name: 'Custom',
        price: 'Custom',
        desc: 'Complex ecosystems and SaaS platforms.',
        color: 'bg-eddie-gray',
        features: ['Microservices', 'AI Integration', 'High Availability', 'Audit & Security', 'SLA Support'],
        btnText: 'Contact Engineering'
      }
    ],
    Branding: [
      {
        name: 'Identity',
        price: '$2,500',
        desc: 'Visual foundation for your brand.',
        color: 'bg-[#E0DEFA]',
        features: ['Logo Design', 'Color Palette', 'Typography System', 'Brand Guidelines', 'Social Media Kit'],
        btnText: 'Start Branding'
      },
      {
        name: 'Growth',
        price: '$4,500',
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
        price: 'Custom',
        desc: 'Total brand dominance packages.',
        color: 'bg-eddie-mint',
        features: ['Rebranding Strategy', 'Video Production', 'Campaign Management', 'Influence Marketing', 'Full Retainer'],
        btnText: 'Partner Up'
      }
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-12 text-center">
        <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm">Investment Tiers</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">Transparent Pricing</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">Choose the package that fits your stage of growth.</p>
        
        {/* Category Tabs */}
        <div className="inline-flex bg-gray-100 p-1.5 rounded-full mb-12 relative">
           {(['Web', 'App', 'Branding'] as PricingCategory[]).map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 z-10 ${activeTab === tab ? 'bg-white text-eddie-dark shadow-md scale-105' : 'text-gray-500 hover:text-eddie-dark'}`}
             >
               {tab === 'Web' ? 'Web Development' : tab === 'App' ? 'App / Software' : 'Branding & Growth'}
             </button>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {pricingData[activeTab].map((plan, idx) => (
          <div 
            key={idx} 
            className={`${plan.color} ${plan.textColor || 'text-eddie-dark'} rounded-[2.5rem] p-8 flex flex-col hover:scale-[1.02] transition-all duration-300 shadow-sm relative`}
          >
            {plan.popular && (
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-eddie-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg flex items-center gap-1">
                <StarIcon className="w-3 h-3 text-eddie-purple" /> Most Popular
              </div>
            )}

            <div className="mb-8">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm ${plan.textColor ? 'bg-white/20 text-white' : 'bg-white/40 text-eddie-dark'}`}>
                {plan.name}
              </span>
              <h3 className="text-4xl font-bold mt-4 mb-2">{plan.price}</h3>
              <p className={`font-medium ${plan.textColor ? 'text-white/80' : 'text-eddie-dark/70'}`}>{plan.desc}</p>
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