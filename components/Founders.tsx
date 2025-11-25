import React from 'react';

export const Founders: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">No Suits. Just Skills.</h2>
        <p className="text-xl text-gray-500">We don't do corporate speak. We just ship greatness.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        
        {/* Founder Card 1 */}
        <div className="bg-white border border-gray-200 p-4 rounded-[2rem] hover:rotate-1 transition-transform duration-300 shadow-sm hover:shadow-xl">
           <div className="w-full aspect-[4/5] bg-eddie-gray rounded-[1.5rem] mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center">
                 <span className="text-8xl grayscale opacity-50">👨‍💻</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                 <div className="flex justify-between items-end">
                    <div>
                       <h3 className="text-2xl font-bold leading-none">Alex Finesse</h3>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Tech Lead</p>
                    </div>
                    <div className="text-3xl">⚡️</div>
                 </div>
              </div>
           </div>
           
           {/* Stats Grid */}
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F9F9F9] p-4 rounded-2xl">
                 <p className="text-xs text-gray-400 font-bold uppercase mb-1">Coffee / Day</p>
                 <p className="text-2xl font-bold">5 Cups</p>
              </div>
              <div className="bg-eddie-purple-light p-4 rounded-2xl">
                 <p className="text-xs text-eddie-purple font-bold uppercase mb-1">Superpower</p>
                 <p className="text-2xl font-bold text-eddie-dark">WebGL</p>
              </div>
           </div>
        </div>

        {/* Founder Card 2 */}
        <div className="bg-white border border-gray-200 p-4 rounded-[2rem] hover:-rotate-1 transition-transform duration-300 shadow-sm hover:shadow-xl md:mt-12">
           <div className="w-full aspect-[4/5] bg-eddie-pink rounded-[1.5rem] mb-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-200 flex items-center justify-center">
                 <span className="text-8xl grayscale opacity-50">👩‍🎨</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                 <div className="flex justify-between items-end">
                    <div>
                       <h3 className="text-2xl font-bold leading-none">Sarah Logic</h3>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Design Lead</p>
                    </div>
                    <div className="text-3xl">🎨</div>
                 </div>
              </div>
           </div>
           
           {/* Stats Grid */}
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F9F9F9] p-4 rounded-2xl">
                 <p className="text-xs text-gray-400 font-bold uppercase mb-1">Figma Files</p>
                 <p className="text-2xl font-bold">999+</p>
              </div>
              <div className="bg-eddie-mint p-4 rounded-2xl">
                 <p className="text-xs text-teal-600 font-bold uppercase mb-1">Superpower</p>
                 <p className="text-2xl font-bold text-eddie-dark">Vibes</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};