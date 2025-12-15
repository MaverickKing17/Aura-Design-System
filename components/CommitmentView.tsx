import React, { useState } from 'react';
import { PROVENANCE_STEPS } from '../constants';
import { Material } from '../types';
import { Button } from './Button';
import { ShieldCheck, Lock, Check, ChevronRight, FileCheck, ArrowLeft } from 'lucide-react';

interface CommitmentViewProps {
  material: Material;
  onBack: () => void;
  onConfirm: () => void;
}

export const CommitmentView: React.FC<CommitmentViewProps> = ({ material, onBack, onConfirm }) => {
  const [agreed, setAgreed] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleExecute = () => {
    setProcessing(true);
    setTimeout(() => {
      onConfirm();
    }, 2000);
  };

  return (
    <div className="animate-fade-in max-w-5xl mx-auto pb-12">
      <button onClick={onBack} className="text-gray-400 hover:text-primary mb-6 flex items-center text-sm font-medium">
         <ArrowLeft size={16} className="mr-1"/> Back to Results
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Contract & Chain */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Header */}
          <div className="bg-surface p-8 shadow-luxury border-t-4 border-primary">
            <div className="flex items-center mb-6">
               <Lock className="text-primary mr-3" size={24} />
               <h2 className="text-2xl font-serif text-primary">Finalizing Immutable Contract</h2>
            </div>
            
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
               <span className="text-gray-500 font-medium">Contract ID</span>
               <span className="font-mono text-primary bg-gray-100 px-2 py-1 rounded">CT-2025-8X92</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
               <span className="text-gray-500 font-medium">Project</span>
               <span className="font-serif text-primary font-medium">Sterling Residence</span>
            </div>
            <div className="flex justify-between items-center py-4">
               <span className="text-gray-500 font-medium">Beneficiary</span>
               <span className="font-sans text-primary">Sterling & Associates (Wallet: 0x8a...4b)</span>
            </div>
          </div>

          {/* Provenance Chain Viz */}
          <div className="bg-surface p-8 shadow-luxury">
            <h3 className="text-lg font-bold text-primary mb-6">Verified Provenance Chain</h3>
            <div className="relative">
               {/* Line */}
               <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200"></div>
               
               {/* Steps */}
               <div className="space-y-8 relative">
                 {PROVENANCE_STEPS.map((step) => (
                   <div key={step.id} className="flex items-start group">
                     <div className={`
                       w-12 h-12 rounded-full flex items-center justify-center border-4 z-10 bg-surface shrink-0
                       ${step.verified ? 'border-success text-success' : 'border-gray-200 text-gray-300'}
                     `}>
                       {step.verified ? <Check size={20} /> : <div className="w-2 h-2 rounded-full bg-gray-300"/>}
                     </div>
                     <div className="ml-6 pt-1">
                       <h4 className={`text-lg font-bold ${step.verified ? 'text-primary' : 'text-gray-400'}`}>{step.label}</h4>
                       <div className="text-sm text-gray-600 mt-1 grid grid-cols-2 gap-x-8 gap-y-1">
                          <span className="font-medium text-gray-900">{step.entity}</span>
                          <span className="text-gray-500 font-mono text-xs">{step.date}</span>
                          <span className="text-gray-500">{step.location}</span>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
             <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Blockchain Verification</p>
                <a href="#" className="text-accent text-sm font-medium hover:underline flex items-center">
                  View on Polygon Scan <ChevronRight size={14} />
                </a>
             </div>
          </div>

        </div>

        {/* Right Column: Order Summary & Action */}
        <div className="space-y-6">
           <div className="bg-primary text-white p-8 shadow-luxury relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              <h3 className="text-lg font-serif mb-6 relative z-10">Order Summary</h3>
              
              <div className="space-y-4 mb-8 relative z-10">
                 <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-lg">{material.name}</p>
                      <p className="text-gray-400 text-sm">{material.origin}</p>
                    </div>
                 </div>
                 <div className="border-t border-white/10 my-4"></div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Quantity</span>
                    <span className="font-mono">120 sq ft</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Unit Price</span>
                    <span className="font-mono">${material.pricePerSqFt}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Est. Logistics</span>
                    <span className="font-mono">$2,450</span>
                 </div>
                 <div className="border-t border-white/10 my-4"></div>
                 <div className="flex justify-between items-end">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm">Total Estimate</span>
                    <span className="font-mono text-2xl font-bold">${(material.pricePerSqFt * 120 + 2450).toLocaleString()}</span>
                 </div>
              </div>
           </div>

           <div className="bg-surface p-6 shadow-luxury border-t-4 border-accent">
              <div className="flex items-start mb-6">
                 <input 
                   type="checkbox" 
                   id="terms" 
                   className="mt-1 w-5 h-5 text-accent border-gray-300 rounded focus:ring-accent cursor-pointer"
                   checked={agreed}
                   onChange={(e) => setAgreed(e.target.checked)}
                 />
                 <label htmlFor="terms" className="ml-3 text-sm text-gray-600 leading-relaxed cursor-pointer select-none">
                    I acknowledge the terms of this <strong className="text-primary">immutable commitment</strong> and authorize Web3 tokenization of the assets. I understand this action utilizes 2FA security.
                 </label>
              </div>

              <Button 
                variant="primary" 
                className="w-full h-14 text-lg shadow-lg" 
                disabled={!agreed || processing}
                onClick={handleExecute}
                icon={processing ? undefined : <ShieldCheck size={20} />}
              >
                {processing ? "Securing on Chain..." : "Execute Commitment"}
              </Button>
              
              <div className="mt-4 flex items-center justify-center text-xs text-gray-400">
                 <Lock size={12} className="mr-1" /> Secured by 2FA + Digital Signature
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};