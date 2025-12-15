import React, { useState } from 'react';
import { PROVENANCE_STEPS } from '../constants';
import { Material } from '../types';
import { Button } from './Button';
import { ShieldCheck, Lock, Check, ChevronRight, FileCheck, ArrowLeft, Landmark, Coins, ArrowUpRight, RefreshCw } from 'lucide-react';

interface CommitmentViewProps {
  material: Material;
  onBack: () => void;
  onConfirm: () => void;
}

type PaymentMethod = 'ach' | 'escrow' | 'usdc';

export const CommitmentView: React.FC<CommitmentViewProps> = ({ material, onBack, onConfirm }) => {
  const [agreed, setAgreed] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('escrow');

  const handleExecute = () => {
    setProcessing(true);
    setTimeout(() => {
      onConfirm();
    }, 2000);
  };

  // Financial Calculations
  const quantity = 120; // Example fixed quantity
  const logisticsCost = 2450;
  const materialCost = material.pricePerSqFt * quantity;
  const subtotal = materialCost + logisticsCost;
  
  // Fees
  const escrowFeeRate = 0.005; // 0.5%
  const escrowFee = paymentMethod === 'escrow' ? subtotal * escrowFeeRate : 0;
  
  const total = subtotal + escrowFee;

  return (
    <div className="animate-fade-in max-w-6xl mx-auto pb-12">
      <button onClick={onBack} className="text-gray-400 hover:text-primary mb-6 flex items-center text-sm font-medium">
         <ArrowLeft size={16} className="mr-1"/> Back to Results
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Contract & Chain (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Header */}
          <div className="bg-surface p-8 shadow-luxury border-t-4 border-primary relative overflow-hidden">
            <div className="flex items-center mb-6 relative z-10">
               <Lock className="text-primary mr-3" size={24} />
               <h2 className="text-2xl font-serif text-primary">Finalizing Immutable Contract</h2>
            </div>
            
            <div className="flex justify-between items-center py-4 border-b border-gray-100 relative z-10">
               <span className="text-gray-500 font-medium">Contract ID</span>
               <span className="font-mono text-primary bg-gray-100 px-2 py-1 rounded">CT-2025-8X92</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-gray-100 relative z-10">
               <span className="text-gray-500 font-medium">Project</span>
               <span className="font-serif text-primary font-medium">Sterling Residence</span>
            </div>
            <div className="flex justify-between items-center py-4 relative z-10">
               <span className="text-gray-500 font-medium">Beneficiary</span>
               <span className="font-sans text-primary">Sterling & Associates (Wallet: 0x8a...4b)</span>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0"></div>
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
                       w-12 h-12 rounded-full flex items-center justify-center border-4 z-10 bg-surface shrink-0 transition-colors duration-300
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

        {/* Right Column: Payment & Action (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
           
           {/* Payment Method Selector */}
           <div className="bg-surface p-6 shadow-luxury border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Select Payment Method</h3>
              
              <div className="space-y-3">
                 {/* Tier 1: Standard Liquidity */}
                 <div 
                    onClick={() => setPaymentMethod('ach')}
                    className={`
                       relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-start gap-3
                       ${paymentMethod === 'ach' 
                         ? 'border-primary bg-primary/5' 
                         : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'}
                    `}
                 >
                    <div className={`p-2 rounded ${paymentMethod === 'ach' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                       <Landmark size={20} />
                    </div>
                    <div>
                       <div className="flex items-center gap-2">
                          <p className={`font-bold text-sm ${paymentMethod === 'ach' ? 'text-primary' : 'text-gray-700'}`}>ACH / Swift Transfer</p>
                       </div>
                       <p className="text-xs text-gray-500 mt-0.5">Settlement in 1-3 Business Days.</p>
                    </div>
                    {paymentMethod === 'ach' && <div className="absolute top-4 right-4 text-primary"><CheckCircleIcon /></div>}
                 </div>

                 {/* Tier 2: Digital Certainty (Recommended) */}
                 <div 
                    onClick={() => setPaymentMethod('escrow')}
                    className={`
                       relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-start gap-3
                       ${paymentMethod === 'escrow' 
                         ? 'border-primary bg-[#1A2A44] text-white shadow-lg' 
                         : 'border-accent/30 hover:border-accent hover:bg-accent/5'}
                    `}
                 >
                    <div className={`p-2 rounded ${paymentMethod === 'escrow' ? 'bg-accent text-primary' : 'bg-accent/20 text-accent'}`}>
                       <ShieldCheck size={20} />
                    </div>
                    <div className="flex-1">
                       <div className="flex items-center justify-between">
                          <p className={`font-bold text-sm ${paymentMethod === 'escrow' ? 'text-white' : 'text-primary'}`}>Smart Contract Escrow</p>
                          <span className="bg-accent text-primary text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Recommended</span>
                       </div>
                       <p className={`text-xs mt-0.5 ${paymentMethod === 'escrow' ? 'text-gray-300' : 'text-gray-500'}`}>Funds released upon AI Provenance Verification.</p>
                       <p className={`text-[10px] mt-1 font-mono ${paymentMethod === 'escrow' ? 'text-accent' : 'text-accent/80'}`}>0.5% Security Fee</p>
                    </div>
                 </div>

                 {/* Tier 3: Instant Global */}
                 <div 
                    onClick={() => setPaymentMethod('usdc')}
                    className={`
                       relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-start gap-3
                       ${paymentMethod === 'usdc' 
                         ? 'border-primary bg-primary/5' 
                         : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'}
                    `}
                 >
                    <div className={`p-2 rounded ${paymentMethod === 'usdc' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                       <Coins size={20} />
                    </div>
                    <div className="w-full">
                       <div className="flex items-center justify-between">
                          <p className={`font-bold text-sm ${paymentMethod === 'usdc' ? 'text-primary' : 'text-gray-700'}`}>USDC Stablecoin</p>
                          <span className="flex items-center gap-1 text-[10px] font-mono text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-100">
                             <RefreshCw size={8} /> 1 USDC = $1.00 USD
                          </span>
                       </div>
                       <p className="text-xs text-gray-500 mt-0.5">Instant Cross-Border Settlement (0% FX Fee).</p>
                    </div>
                    {paymentMethod === 'usdc' && <div className="absolute top-4 right-4 text-primary"><CheckCircleIcon /></div>}
                 </div>
              </div>
           </div>

           {/* Order Summary Box */}
           <div className="bg-primary text-white p-6 shadow-luxury relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              
              <h3 className="text-lg font-serif mb-4 relative z-10">Order Summary</h3>
              
              <div className="space-y-3 mb-6 relative z-10 text-sm">
                 <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">{material.name}</p>
                      <p className="text-gray-400 text-xs">{material.origin}</p>
                    </div>
                 </div>
                 <div className="border-t border-white/10 my-3"></div>
                 <div className="flex justify-between">
                    <span className="text-gray-300">Material Cost ({quantity} sq ft)</span>
                    <span className="font-mono text-right">${materialCost.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-gray-300">Global Logistics</span>
                    <span className="font-mono text-right">${logisticsCost.toLocaleString()}</span>
                 </div>
                 
                 {/* Dynamic Fee Row */}
                 {paymentMethod === 'escrow' && (
                    <div className="flex justify-between text-accent animate-fade-in">
                       <span className="flex items-center gap-1"><ShieldCheck size={12} /> Escrow Security Fee (0.5%)</span>
                       <span className="font-mono text-right">${escrowFee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                 )}

                 <div className="border-t border-white/10 my-3"></div>
                 <div className="flex justify-between items-end">
                    <span className="text-accent font-bold uppercase tracking-wider text-xs">Total Estimate</span>
                    <span className="font-mono text-2xl font-bold">${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                 </div>
              </div>
           </div>

           {/* Confirmation Action */}
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
                    I acknowledge the terms of this <strong className="text-primary">immutable commitment</strong> and authorize Web3 tokenization of the assets.
                 </label>
              </div>

              <Button 
                variant="primary" 
                className="w-full h-14 text-lg shadow-lg" 
                disabled={!agreed || processing}
                onClick={handleExecute}
                icon={processing ? undefined : <Lock size={20} />}
              >
                {processing ? "Securing on Chain..." : "Commence Immutable Settlement"}
              </Button>
              
              <div className="mt-4 flex items-center justify-center text-xs text-gray-400">
                 <ShieldCheck size={12} className="mr-1" /> Secured by 2FA + Digital Signature
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircleIcon = () => (
   <div className="bg-primary text-white rounded-full p-0.5">
      <Check size={12} strokeWidth={3} />
   </div>
);