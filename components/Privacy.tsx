import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-32 pb-20 animate-fade-in">
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Privacy Policy</h1>
        <p className="text-gray-500 text-lg mb-12 font-medium">Last Updated: October 2023</p>

        <div className="prose prose-lg prose-headings:font-bold prose-headings:tracking-tight text-eddie-dark max-w-none prose-p:text-gray-600 prose-li:text-gray-600">
          <h3>1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and company details.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Provide, maintain, and improve our services.</li>
            <li>Respond to your comments, questions, and requests.</li>
            <li>Send you technical notices, updates, security alerts, and support messages.</li>
            <li>Communicate with you about products, services, offers, and events.</li>
          </ul>

          <h3>3. Sharing of Information</h3>
          <p>
            We do not share your personal information with third parties except as described in this policy (e.g., with vendors who need access to such information to carry out work on our behalf) or as required by law.
          </p>

          <h3>4. Security</h3>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>

          <h3>5. Cookies</h3>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at hello@finesse.co.
          </p>
        </div>
      </div>
    </div>
  );
};