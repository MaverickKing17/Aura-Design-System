import React from 'react';
import { Material } from '../types';
import { PROVENANCE_STEPS } from '../constants';
import { Button } from './Button';
import { X, ShieldCheck, MapPin, DollarSign, Clock, Factory, Check, Pickaxe, ClipboardCheck, Truck, Circle } from 'lucide-react';

interface MaterialDetailsModalProps {
  material: Material;
  onClose: () => void;
  onSelect: (material: Material) => void;
}

const getStepIcon = (label: string) => {
  switch (label) {
    case 'Extraction': return <Pickaxe size={14} className="text-gray-600" />;
    case 'Fabrication': return <Factory size={14} className="text-gray-600" />;
    case 'Quality Audit': return <ClipboardCheck size={14} className="text-gray-600" />;
    case 'Logistics': return <Truck size={14} className="text-gray-600" />;
    default: return <Circle size={14} className="text-gray-600" />;
  }
};

export const MaterialDetailsModal: React.FC<MaterialDetailsModalProps> = ({ material, onClose, onSelect }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-surface rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fade-in flex flex-col md:flex-row border border-gray-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
        >
          <X size={20} className="text-primary" />
        </button>

        {/* Left / Top Image Section */}
        <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full bg-gray-100">
           <img 
             src={material.imageUrl} 
             alt={material.name} 
             className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="absolute top-6 left-6">
              <span className="bg-accent text-primary px-3 py-1 text-sm font-bold uppercase tracking-wider shadow-md">
                {material.matchScore}% Match
              </span>
           </div>
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent p-6 pt-24 text-white">
              <div className="flex items-center gap-2 mb-2">
                 <ShieldCheck className="text-accent" size={20} />
                 <span className="font-mono text-sm tracking-widest uppercase text-accent">Verified Source</span>
              </div>
              <p className="font-mono text-xs opacity-70">ID: {material.id.toUpperCase()}</p>
           </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-3/5 p-8 flex flex-col">
          <div className="mb-6">
            <h2 className="text-3xl font-serif text-primary mb-2">{material.name}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
               <span className="flex items-center"><MapPin size={16} className="mr-1 text-accent"/> {material.origin}</span>
               <span className="flex items-center"><Factory size={16} className="mr-1 text-accent"/> {material.supplier}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded border border-gray-100">
             <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Price / Sq Ft</p>
                <div className="flex items-center text-primary font-mono font-bold text-xl">
                   <DollarSign size={18} className="text-gray-400 mr-1" />
                   {material.pricePerSqFt} <span className="text-xs font-normal text-gray-400 ml-1">{material.currency}</span>
                </div>
             </div>
             <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Lead Time</p>
                <div className="flex items-center text-primary font-mono font-bold text-xl">
                   <Clock size={18} className="text-gray-400 mr-1" />
                   {material.leadTimeWeeks} <span className="text-xs font-normal text-gray-400 ml-1">Weeks</span>
                </div>
             </div>
          </div>

          <div className="mb-8">
             <h3 className="text-lg font-bold text-primary mb-4 border-b border-gray-100 pb-2">Provenance History</h3>
             <div className="space-y-4 pl-2 border-l-2 border-gray-200 ml-2">
                {PROVENANCE_STEPS.map((step) => (
                  <div key={step.id} className="relative pl-8 pb-4">
                     {/* Timeline connector and status dot */}
                     <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 bg-surface z-10 flex items-center justify-center ${step.verified ? 'border-success' : 'border-gray-300'}`}>
                        {step.verified && <Check size={10} className="text-success" />}
                     </div>
                     
                     {/* Step content with Icon */}
                     <div className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div className="mr-3 mt-1 p-1.5 bg-white rounded shadow-sm border border-gray-100 text-gray-500">
                           {getStepIcon(step.label)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary">{step.label}</p>
                          <p className="text-xs text-gray-500 font-medium">{step.entity}</p>
                          <div className="flex gap-2 text-[10px] text-gray-400 mt-1">
                            <span>{step.date}</span>
                            <span>•</span>
                            <span>{step.location}</span>
                          </div>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
             <div className="mt-2 pt-2 border-t border-gray-100">
               <p className="text-xs font-mono text-gray-400 flex items-center">
                 <ShieldCheck size={12} className="mr-1" />
                 Chain ID: {material.provenanceId}
               </p>
             </div>
          </div>

          <div className="mt-auto flex gap-4">
             <Button variant="outline" onClick={onClose} className="flex-1">Close</Button>
             <Button variant="primary" onClick={() => onSelect(material)} className="flex-1">Select Material</Button>
          </div>
        </div>
      </div>
    </div>
  );
};