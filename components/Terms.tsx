import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-32 pb-20 animate-fade-in">
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Terms of Service</h1>
        <p className="text-gray-500 text-lg mb-12 font-medium">Last Updated: October 2023</p>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:tracking-tight text-eddie-dark max-w-none prose-p:text-gray-600">
          <h3>1. Introduction</h3>
          <p>
            Welcome to The Finesse Co. ("we," "our," or "us"). By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.
          </p>

          <h3>2. Services</h3>
          <p>
            We provide digital agency services including but not limited to branding, web development, and digital strategy. Specific deliverables and timelines will be outlined in a separate Statement of Work (SOW) for each client project.
          </p>

          <h3>3. Intellectual Property</h3>
          <p>
            Upon full payment, all final deliverables created by The Finesse Co. for the client shall become the property of the client. We retain the right to showcase the work in our portfolio and marketing materials unless a specific Non-Disclosure Agreement (NDA) is signed.
          </p>

          <h3>4. Payments and Refunds</h3>
          <p>
            Payments are due as per the schedule outlined in your project agreement. Deposits are generally non-refundable as they secure your place in our production schedule.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            In no event shall The Finesse Co., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
};