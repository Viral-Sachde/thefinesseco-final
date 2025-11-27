import React from 'react';

export const BrandingNeuromarketing: React.FC = () => {
  return (
    <div className="bg-eddie-dark text-white rounded-[2.5rem] p-8 md:p-16 mb-24 relative overflow-hidden">
       <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-eddie-purple/20 to-transparent"></div>
       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Neuromarketing UX</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We don't just pick pretty colors. We use psychology to trigger dopamine and trust. Scarcity, social proof, and color psychology are baked into every pixel.
            </p>
            <div className="flex gap-4">
               <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold">Dopamine Loops</div>
               <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold">Trust Markers</div>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold">$$</div>
                <div>
                   <div className="font-bold text-lg">Conversion Rate</div>
                   <div className="text-xs text-gray-500">Optimization Goal</div>
                </div>
             </div>
             <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-2">
                <div className="w-[85%] bg-green-500 h-full"></div>
             </div>
             <div className="text-right text-xs font-mono text-green-400">+142% Increase</div>
          </div>
       </div>
    </div>
  );
};

