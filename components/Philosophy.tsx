import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <div id="philosophy" className="w-full max-w-6xl mx-auto px-4">
      <div className="w-full bg-eddie-dark text-white rounded-[2.5rem] p-8 md:p-16 border border-gray-800 text-center relative overflow-hidden group">
        
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-eddie-purple/20 blur-[100px] rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-eddie-lime/10 blur-[80px] rounded-full opacity-50"></div>

        <div className="relative z-10">
            <span className="text-eddie-purple font-bold tracking-widest uppercase text-xs md:text-sm mb-6 block">The Philosophy</span>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter">
            We don't build software.<br/>
            We engineer <span className="italic font-serif text-eddie-purple">obsession.</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Bridging the gap between art and engineering.
            We exist to create digital experiences that feel like magic and perform like machines.
            </p>
        </div>
      </div>
    </div>
  );
};

