import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './Icons';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl md:text-2xl font-bold text-eddie-dark group-hover:text-eddie-purple transition-colors duration-300 pr-8">{question}</span>
        <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-eddie-purple text-white rotate-180' : 'bg-[#F4F4F4] text-eddie-dark group-hover:bg-[#EAE8E4]'}`}>
          {isOpen ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-[#F9F9F9] p-6 rounded-2xl">
          <p className="text-lg text-gray-500 leading-relaxed font-medium">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Timeline varies based on scope. A typical branding and web project takes 4-8 weeks from discovery to launch. We prioritize quality but work in efficient sprints to ensure momentum."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Absolutely. We offer various retainer packages for maintenance, content updates, and ongoing growth optimization to ensure your digital asset keeps performing."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically require a 50% deposit to secure your slot in our calendar, with the remaining 50% due upon project completion and handover. For larger projects, we can structure milestone-based payments."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we are a remote-first agency working with partners globally. We adapt our communication to your timezone to ensure seamless collaboration."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="mb-12">
        <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm">Common Questions</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Frequently Asked</h2>
      </div>
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};