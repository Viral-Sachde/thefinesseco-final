import React from 'react';
import { ArrowRightIcon, CheckIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-32 pb-20 animate-fade-in">
      <div className="text-center mb-12">
        <span className="bg-eddie-purple text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">Get in Touch</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Let's talk business.</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Tell us about your project. We'll build the team to build your dream.
        </p>
      </div>

      <div className="bg-[#F9F9F9] rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm uppercase text-gray-400 tracking-wider">Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-white p-4 rounded-xl border border-gray-200 focus:border-eddie-purple focus:ring-2 focus:ring-eddie-purple/20 outline-none transition-all font-medium"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm uppercase text-gray-400 tracking-wider">Email</label>
              <input 
                type="email" 
                placeholder="john@company.com" 
                className="w-full bg-white p-4 rounded-xl border border-gray-200 focus:border-eddie-purple focus:ring-2 focus:ring-eddie-purple/20 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm uppercase text-gray-400 tracking-wider">Company</label>
            <input 
              type="text" 
              placeholder="Acme Inc." 
              className="w-full bg-white p-4 rounded-xl border border-gray-200 focus:border-eddie-purple focus:ring-2 focus:ring-eddie-purple/20 outline-none transition-all font-medium"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm uppercase text-gray-400 tracking-wider">Project Type</label>
            <div className="flex flex-wrap gap-3">
              {['Web Dev', 'App Dev', 'Branding', 'Strategy', 'Other'].map((type) => (
                <label key={type} className="cursor-pointer group">
                  <input type="checkbox" className="peer hidden" />
                  <span className="px-5 py-2 rounded-full border border-gray-200 bg-white text-eddie-dark font-bold text-sm peer-checked:bg-eddie-dark peer-checked:text-white peer-checked:border-eddie-dark transition-all inline-block hover:border-gray-400">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm uppercase text-gray-400 tracking-wider">Message</label>
            <textarea 
              rows={5}
              placeholder="Tell us about your goals, timeline, and vision..." 
              className="w-full bg-white p-4 rounded-xl border border-gray-200 focus:border-eddie-purple focus:ring-2 focus:ring-eddie-purple/20 outline-none transition-all font-medium resize-none"
            ></textarea>
          </div>

          <button className="bg-eddie-dark text-white text-lg font-bold py-5 rounded-2xl hover:scale-[1.01] hover:shadow-lg transition-all flex items-center justify-center gap-3 mt-4">
            Send Inquiry <ArrowRightIcon className="w-5 h-5" />
          </button>
        </form>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">Email Us</h3>
          <p className="text-gray-500 font-medium">hello@thefinesse.co</p>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">Call Us</h3>
          <p className="text-gray-500 font-medium">+91 9484991399</p>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">Visit Us</h3>
          <p className="text-gray-500 font-medium">Ahmedabad, GJ (Remote First)</p>
        </div>
      </div>
    </div>
  );
};