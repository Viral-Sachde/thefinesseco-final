import React from 'react';
import { ArrowUpRightIcon } from './Icons';

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "Lumina Skin",
      category: "E-Commerce",
      image: "bg-[#E0DEFA]", // Placeholder color representing image
      stats: "240% Revenue Inc.",
      desc: "Rebranding and Shopify headless transition for a luxury skincare line."
    },
    {
      title: "Flow State",
      category: "SaaS Product",
      image: "bg-[#E3F2FD]",
      stats: "10k+ Daily Users",
      desc: "Product design system and frontend architecture for productivity software."
    },
    {
      title: "Urban Roots",
      category: "Non-Profit",
      image: "bg-[#F9FCD0]",
      stats: "$2M Raised",
      desc: "Donation platform optimization and visual storytelling for urban farming."
    },
    {
      title: "Velvet Capital",
      category: "FinTech",
      image: "bg-[#F4F4F4]",
      stats: "Secure & Fast",
      desc: "Web3 dashboard design and secure marketing site for crypto investment."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-16 text-center">
         <span className="bg-eddie-purple/20 text-eddie-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">Selected Work</span>
         <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Masterpieces</h2>
         <p className="text-xl text-gray-500 max-w-2xl mx-auto">
           A curated selection of projects where strategy meets aesthetic perfection.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((project, idx) => (
          <div key={idx} className="group cursor-pointer">
            {/* Image Card */}
            <div className={`w-full aspect-[4/3] rounded-[2.5rem] ${project.image} mb-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] shadow-sm group-hover:shadow-xl`}>
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white rounded-full px-6 py-3 font-bold text-eddie-dark flex items-center gap-2 shadow-lg">
                    View Case Study <ArrowUpRightIcon className="w-4 h-4" />
                  </div>
               </div>
               
               {/* Decorative Placeholder Shape */}
               <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/30 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="px-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="text-xs font-bold border border-gray-200 px-3 py-1 rounded-full">{project.stats}</span>
              </div>
              <p className="text-gray-500 font-medium mb-3">{project.desc}</p>
              <div className="flex gap-2">
                 <span className="text-xs font-bold text-eddie-purple uppercase tracking-wide bg-eddie-purple/10 px-2 py-1 rounded-md">{project.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};