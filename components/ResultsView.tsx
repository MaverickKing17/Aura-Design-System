import React, { useState } from 'react';
import { AppScreen, Material } from '../types';
import { MOCK_MATERIALS } from '../constants';
import { Button } from './Button';
import { ShieldCheck, Info, ArrowRight, Eye, SlidersHorizontal, ArrowLeft } from 'lucide-react';

interface ResultsViewProps {
  onBack: () => void;
  onProceed: (material: Material) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ onBack, onProceed }) => {
  const [filterType, setFilterType] = useState('All');

  return (
    <div className="animate-fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-gray-200 pb-6">
        <div>
          <button onClick={onBack} className="text-gray-400 hover:text-primary mb-2 flex items-center text-sm font-medium">
             <ArrowLeft size={16} className="mr-1"/> Back to Specs
          </button>
          <h2 className="text-3xl font-serif text-primary mb-1">AI-Matched Materials</h2>
          <p className="text-gray-500">3 verified matches found based on technical specifications.</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
           <Button variant="outline" size="sm" icon={<SlidersHorizontal size={16}/>}>Filter Results</Button>
           <Button variant="secondary" size="sm">Compare Selected (0)</Button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {MOCK_MATERIALS.map((material, idx) => (
          <div key={material.id} className="bg-surface shadow-luxury flex flex-col h-full border border-gray-100 group transition-all duration-300 hover:-translate-y-1">
            {/* Image Area */}
            <div className="relative h-56 bg-gray-200 overflow-hidden">
               <img src={material.imageUrl} alt={material.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute top-4 right-4">
                 <div className="bg-primary/90 backdrop-blur text-white px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center shadow-md">
                   {material.matchScore}% Match
                 </div>
               </div>
               {material.verified && (
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                    <div className="flex items-center text-accent">
                       <ShieldCheck size={16} className="mr-2 fill-current" />
                       <span className="text-xs font-bold tracking-widest uppercase">Provenance Verified</span>
                    </div>
                 </div>
               )}
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-xl font-serif text-primary">{material.name}</h3>
                 <span className="text-sm font-mono text-gray-500">{material.origin}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4 font-medium">{material.supplier}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-100">
                <div>
                   <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Price</p>
                   <p className="text-lg font-mono text-primary font-medium">${material.pricePerSqFt} <span className="text-xs text-gray-400">/sq ft</span></p>
                </div>
                <div>
                   <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Lead Time</p>
                   <p className="text-lg font-mono text-primary font-medium">{material.leadTimeWeeks} <span className="text-xs text-gray-400">weeks</span></p>
                </div>
              </div>

              <div className="mt-auto space-y-3">
                 <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => onProceed(material)}
                    icon={<ArrowRight size={18} />}
                 >
                    Select for Visualization
                 </Button>
                 <Button 
                    variant="text" 
                    className="w-full text-sm text-gray-500"
                    icon={<Eye size={16} />}
                 >
                    View Details & Chain
                 </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};