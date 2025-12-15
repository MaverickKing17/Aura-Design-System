import React from 'react';
import { Button } from './Button';
import { CheckCircle, FileText, Download, ArrowRight } from 'lucide-react';
import { AppScreen } from '../types';

interface SuccessViewProps {
  onReturn: (screen: AppScreen) => void;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ onReturn }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] animate-fade-in text-center max-w-2xl mx-auto">
       <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mb-8 animate-bounce-slow">
          <CheckCircle className="text-success w-12 h-12" />
       </div>
       
       <h2 className="text-4xl font-serif text-primary mb-4">Project Procurement Certainty Secured</h2>
       <p className="text-gray-500 text-lg mb-8">
         Your commitment for <span className="font-bold text-primary">Sterling Residence</span> has been tokenized on the Polygon network. 
         Supply chain tracking is now active.
       </p>

       <div className="bg-surface p-6 rounded-lg shadow-luxury w-full mb-8 border border-gray-100 text-left">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">Immutable Provenance Record</p>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded border border-gray-200">
             <div>
                <p className="font-mono text-sm text-primary font-bold">Token ID: 0x892...2b1</p>
                <p className="text-xs text-gray-500 mt-1">Minted: Just now</p>
             </div>
             <a href="#" className="text-accent hover:underline text-sm font-medium">View on Explorer</a>
          </div>
       </div>

       <div className="flex gap-4">
          <Button 
            variant="outline" 
            icon={<Download size={18} />}
            onClick={() => {}}
          >
            Download Audit Report
          </Button>
          <Button 
             variant="primary" 
             icon={<ArrowRight size={18} />}
             onClick={() => onReturn(AppScreen.DASHBOARD)}
          >
             Return to Dashboard
          </Button>
       </div>
    </div>
  );
};