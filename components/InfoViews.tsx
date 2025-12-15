import React from 'react';
import { Shield, Lock, FileText, HelpCircle, Mail, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from './Button';

// --- SECURITY POLICY ---
export const SecurityView: React.FC = () => (
  <div className="animate-fade-in max-w-4xl mx-auto py-8">
    <div className="mb-8 border-b border-gray-200 pb-6">
      <div className="flex items-center gap-3 mb-2">
        <Shield className="text-success" size={32} />
        <h2 className="text-3xl font-serif text-primary">Security Policy</h2>
      </div>
      <p className="text-gray-500 text-lg">Last updated: October 1, 2025</p>
    </div>
    
    <div className="prose prose-lg text-gray-600 space-y-8">
      <section>
        <h3 className="text-xl font-bold text-primary mb-3">1. Data Encryption Standards</h3>
        <p>
          Classic Homes Marketplace utilizes military-grade AES-256 encryption for all data at rest and TLS 1.3 for data in transit. 
          Our commitment to security ensures that sensitive procurement specifications and financial details remain confidential.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-bold text-primary mb-3">2. Identity & Access Management</h3>
        <p>
          We employ strict Role-Based Access Control (RBAC). Multi-Factor Authentication (MFA) is mandatory for all executive accounts 
          capable of authorizing fund transfers or finalizing smart contracts.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-primary mb-3">3. Smart Contract Audits</h3>
        <p>
          All Web3 interactions are managed via contracts audited by CertiK and OpenZeppelin. We maintain a bug bounty program 
          to continuously test our infrastructure against emerging threats.
        </p>
      </section>
    </div>
  </div>
);

// --- WEB3 PROVENANCE POLICY ---
export const Web3PolicyView: React.FC = () => (
  <div className="animate-fade-in max-w-4xl mx-auto py-8">
    <div className="mb-8 border-b border-gray-200 pb-6">
      <div className="flex items-center gap-3 mb-2">
        <Lock className="text-accent" size={32} />
        <h2 className="text-3xl font-serif text-primary">Web3 Provenance Policy</h2>
      </div>
      <p className="text-gray-500 text-lg">Immutable supply chain tracking standards.</p>
    </div>
    
    <div className="prose prose-lg text-gray-600 space-y-8">
      <p className="lead text-xl">
        Our platform leverages the Polygon PoS network to create an unalterable history of every material's journey, 
        from extraction to installation.
      </p>

      <div className="bg-surface p-6 rounded-lg border border-gray-200 shadow-sm">
         <h4 className="font-bold text-primary mb-2">The Golden Thread</h4>
         <p className="text-sm">
           Every material batch is minted as a unique NFT (Non-Fungible Token) containing metadata about its origin, 
           quality certifications, and carbon footprint. This token is transferred between wallets of verified suppliers, 
           creating a transparent chain of custody.
         </p>
      </div>

      <section>
        <h3 className="text-xl font-bold text-primary mb-3">Verification Requirements</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Suppliers must sign transactions with verified wallet addresses.</li>
          <li>Physical checkpoints (quarries, ports) are validated via Oracle integration.</li>
          <li>Disputes are resolved via on-chain arbitration protocols.</li>
        </ul>
      </section>
    </div>
  </div>
);

// --- PRIVACY POLICY ---
export const PrivacyView: React.FC = () => (
  <div className="animate-fade-in max-w-4xl mx-auto py-8">
    <h2 className="text-3xl font-serif text-primary mb-6">Privacy Policy</h2>
    <div className="prose text-gray-600 space-y-6">
      <p>
        Classic Homes Marketplace ("we", "our") respects your privacy and is committed to protecting your personal data. 
        This privacy policy will inform you as to how we look after your personal data when you visit our website.
      </p>
      <p>
        <strong>Data Collection:</strong> We collect identity data (name, username), contact data (email, address), 
        financial data (wallet addresses, payment details), and technical data (IP address, browser type).
      </p>
      <p>
        <strong>Data Usage:</strong> Your data is used strictly for facilitating procurement transactions, verifying 
        provenance, and improving our AI matching algorithms. We do not sell data to third parties.
      </p>
      <p>
        <strong>Your Rights:</strong> Under GDPR and CCPA, you have the right to access, correct, or delete your personal data. 
        Contact our Data Protection Officer for requests.
      </p>
    </div>
  </div>
);

// --- TERMS OF SERVICE ---
export const TermsView: React.FC = () => (
  <div className="animate-fade-in max-w-4xl mx-auto py-8">
    <h2 className="text-3xl font-serif text-primary mb-6">Terms of Service</h2>
    <div className="prose text-gray-600 space-y-6">
      <p>Welcome to Classic Homes Marketplace. By accessing our platform, you agree to these terms.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Account Integrity:</strong> You are responsible for maintaining the confidentiality of your account credentials and wallet keys.</li>
        <li><strong>Procurement Commitments:</strong> Executing a commitment on our platform constitutes a legally binding agreement to purchase.</li>
        <li><strong>Platform Fees:</strong> We charge a service fee on successful transactions, detailed at the time of checkout.</li>
        <li><strong>Prohibited Conduct:</strong> Manipulation of provenance data or submitting false specifications will result in immediate ban.</li>
      </ul>
    </div>
  </div>
);

// --- HELP CENTER ---
export const HelpCenterView: React.FC = () => {
  const faqs = [
    { q: "How does the AI matching algorithm work?", a: "Our AI analyzes your technical specifications (PDF/CAD) and matches them against our global database of 50,000+ verified materials based on visual similarity, technical properties, and availability." },
    { q: "What is 'Procurement Certainty'?", a: "It is our proprietary metric that combines supplier reliability, logistics risk, and material verification status into a single score." },
    { q: "Do I need a crypto wallet to use this?", a: "While a wallet is created for you to track provenance, you can pay via standard wire transfer or credit card. We handle the blockchain complexity." },
  ];

  return (
    <div className="animate-fade-in max-w-4xl mx-auto py-8">
      <div className="text-center mb-12">
         <h2 className="text-3xl font-serif text-primary mb-4">How can we help?</h2>
         <div className="relative max-w-xl mx-auto">
            <input type="text" placeholder="Search for answers..." className="w-full px-6 py-4 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary outline-none" />
            <Button variant="primary" className="absolute right-2 top-2 bottom-2 rounded-full px-6">Search</Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
         <div className="bg-surface p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <FileText className="text-accent mb-4" size={32} />
            <h3 className="font-bold text-lg text-primary mb-2">Guides & Tutorials</h3>
            <p className="text-gray-500 text-sm mb-4">Step-by-step instructions for sourcing.</p>
            <a href="#" className="text-primary font-medium hover:underline">Browse Articles &rarr;</a>
         </div>
         <div className="bg-surface p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <MessageSquare className="text-accent mb-4" size={32} />
            <h3 className="font-bold text-lg text-primary mb-2">Community Forum</h3>
            <p className="text-gray-500 text-sm mb-4">Connect with other architects and builders.</p>
            <a href="#" className="text-primary font-medium hover:underline">Join Discussion &rarr;</a>
         </div>
      </div>

      <h3 className="text-xl font-bold text-primary mb-6">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-surface border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-primary mb-2 flex justify-between">
              {faq.q}
              <ChevronDown size={20} className="text-gray-400" />
            </h4>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- CONTACT SUPPORT ---
export const SupportView: React.FC = () => (
  <div className="animate-fade-in max-w-2xl mx-auto py-8">
    <h2 className="text-3xl font-serif text-primary mb-2">Contact Support</h2>
    <p className="text-gray-500 mb-8">Our executive support team is available 24/7 for our enterprise partners.</p>
    
    <div className="bg-surface p-8 rounded-xl shadow-luxury border border-gray-200">
       <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:border-primary outline-none" placeholder="Your name" />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Order ID (Optional)</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:border-primary outline-none" placeholder="e.g. ORD-123" />
             </div>
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
             <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:border-primary outline-none">
                <option>General Inquiry</option>
                <option>Technical Issue</option>
                <option>Billing / Invoice</option>
                <option>Provenance Dispute</option>
             </select>
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
             <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:border-primary outline-none h-32 resize-none" placeholder="How can we help you?"></textarea>
          </div>
          <Button variant="primary" className="w-full">Send Message</Button>
       </form>
       
       <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center gap-8 text-sm text-gray-500">
          <span className="flex items-center"><Mail size={16} className="mr-2"/> support@classichomes.com</span>
          <span className="flex items-center"><MessageSquare size={16} className="mr-2"/> Live Chat: Online</span>
       </div>
    </div>
  </div>
);