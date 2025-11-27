import React from 'react';
import { CheckIcon } from './Icons';
import { HeadlessVisual } from './HeadlessVisual';

export const WebDevCMSControl: React.FC = () => {
  return (
    <div className="mb-16 sm:mb-20 md:mb-24">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Total Control. No Code Required.</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
            We build complex engines but give you the keys. Manage your content, products, and landing pages with a drag-and-drop headless CMS.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Visual Component */}
            <div className="order-2 md:order-1">
              <HeadlessVisual />
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-3 sm:gap-4 order-1 md:order-2">
                {[
                { title: "Live Previews", desc: "See changes before you publish." },
                { title: "Visual Editor", desc: "Drag, drop, done. No dev needed." },
                { title: "Global CDN", desc: "Content delivered from the edge." }
                ].map((item, i) => (
                <div key={i} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex gap-3 sm:gap-4 items-start">
                    <div className="bg-eddie-purple/10 p-2 rounded-lg shrink-0">
                        <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-eddie-purple" />
                    </div>
                    <div>
                        <h4 className="font-bold text-base sm:text-lg">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

