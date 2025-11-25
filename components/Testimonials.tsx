import React from 'react';
import { QuoteIcon } from './Icons';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Working with The Finesse Co. was a revelation. They didn't just build a site; they reimagined our entire digital existence. The ROI speaks for itself.",
      author: "Elena R.",
      role: "CMO, Velvet Capital",
      bg: "bg-[#F9FCD0]"
    },
    {
      text: "Absolute professionals. The design team has an eye for detail that is unmatched in the industry. Our conversion rate doubled within a month.",
      author: "Marcus T.",
      role: "Founder, Urban Roots",
      bg: "bg-[#E3F2FD]"
    },
    {
      text: "They cut through the noise. No jargon, no fluff—just pure strategy and execution. The best agency partner we've ever had.",
      author: "Sarah Jenkins",
      role: "Director, Lumina Skin",
      bg: "bg-[#E0DEFA]"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-24">
      <div className="mb-16 text-center">
        <span className="bg-eddie-purple text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">Social Proof</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">What people say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {reviews.map((review, idx) => (
           <div key={idx} className={`${review.bg} rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300`}>
              <div className="mb-8">
                 <QuoteIcon className="w-10 h-10 text-eddie-dark/10 mb-6" />
                 <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center font-bold text-lg text-eddie-dark/50">
                    {review.author[0]}
                 </div>
                 <div>
                    <p className="font-bold text-eddie-dark">{review.author}</p>
                    <p className="text-xs font-bold text-eddie-dark/50 uppercase">{review.role}</p>
                 </div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};