import React, { useState, useCallback } from 'react';
import { AppScreen } from '../types';
import { Button } from './Button';
import { Upload, FileText, CheckCircle2, AlertCircle, X, Loader2, Lock } from 'lucide-react';
import { MOCK_PROJECTS } from '../constants';

interface UploadSpecsProps {
  onNext: () => void;
}

export const UploadSpecs: React.FC<UploadSpecsProps> = ({ onNext }) => {
  const [selectedProject, setSelectedProject] = useState(MOCK_PROJECTS[0].id);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [parsing, setParsing] = useState(false);
  const [parsed, setParsed] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setFile(file);
    setParsing(true);
    // Simulate AI Parsing
    setTimeout(() => {
      setParsing(false);
      setParsed(true);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none -z-10 h-full w-full"></div>

      <div className="mb-8 border-b border-gray-200 pb-6">
        <h2 className="text-4xl font-serif text-primary mb-2">Initiate Sourcing Cycle</h2>
        <p className="text-gray-500">Upload technical specifications to begin AI-driven matchmaking.</p>
      </div>

      {/* Step 1: Context */}
      <div className="bg-surface p-8 shadow-luxury border border-[#F5F5F5]">
        <h3 className="text-lg font-bold text-primary mb-4 flex items-center font-serif">
          <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 font-sans">1</span>
          Project Context
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Active Project</label>
            <div className="relative">
              <select 
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none font-medium text-primary font-serif"
              >
                {MOCK_PROJECTS.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          <div>
             <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Material Category</label>
             <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:border-primary outline-none font-medium text-primary font-serif">
                <option>Natural Stone</option>
                <option>Architectural Steel</option>
                <option>Exotic Hardwoods</option>
             </select>
          </div>
        </div>
      </div>

      {/* Step 2: Upload */}
      <div className="bg-surface p-8 shadow-luxury border border-[#F5F5F5]">
        <h3 className="text-lg font-bold text-primary mb-4 flex items-center font-serif">
          <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 font-sans">2</span>
          Specification Upload
        </h3>
        
        {!file ? (
          <div 
            className={`relative border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
              ${dragActive ? 'border-accent bg-yellow-50' : 'border-gray-300 hover:border-primary bg-gray-50'}`}
            onDragEnter={handleDrag} 
            onDragLeave={handleDrag} 
            onDragOver={handleDrag} 
            onDrop={handleDrop}
          >
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleChange}
              accept=".pdf,.dwg,.rvt,.ifc"
            />
            <div className="bg-primary/5 p-4 rounded-full mb-4">
              <Upload className="text-primary" size={32} />
            </div>
            <p className="text-lg font-medium text-primary mb-2 font-serif">Drag & Drop Specifications</p>
            <p className="text-sm text-gray-500 mb-6 font-sans">Supports PDF, CAD (.dwg), Revit (.rvt), IFC</p>
            <Button variant="outline" size="sm">Browse Files</Button>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
             <div className="flex items-center justify-between mb-4">
               <div className="flex items-center">
                 <div className="bg-primary text-white p-3 rounded mr-4">
                    <FileText size={24} />
                 </div>
                 <div>
                   <p className="font-medium text-primary font-serif">{file.name}</p>
                   <p className="text-xs text-gray-500 font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                 </div>
               </div>
               <button onClick={() => { setFile(null); setParsed(false); }} className="text-gray-400 hover:text-error">
                 <X size={20} />
               </button>
             </div>

             {/* AI Parsing Status */}
             <div className="space-y-3">
               <div className="flex justify-between text-sm">
                 <span className="font-medium text-gray-600">AI Analysis Status</span>
                 <span className={parsed ? "text-success font-bold" : "text-accent"}>
                   {parsing ? "Parsing Dimensions..." : parsed ? "Analysis Complete" : "Waiting"}
                 </span>
               </div>
               <div className="h-1 bg-gray-200 overflow-hidden">
                 <div 
                    className={`h-full transition-all duration-1000 ${parsed ? 'bg-success w-full' : parsing ? 'bg-accent w-2/3 animate-pulse' : 'w-0'}`}
                 ></div>
               </div>
               
               {parsed && (
                 <div className="mt-4 bg-green-50 border border-green-200 p-4 flex items-start">
                   <CheckCircle2 className="text-success mr-2 mt-0.5" size={16} />
                   <div className="text-sm text-green-800">
                     <p className="font-bold">Extraction Successful</p>
                     <p>Identified: 120 sq ft Calacatta Marble, Bookmatched, 2cm thickness.</p>
                   </div>
                 </div>
               )}
             </div>
          </div>
        )}
      </div>

      <div className="flex justify-end pt-4">
        <Button 
          variant="primary" 
          size="lg" 
          disabled={!parsed} 
          onClick={onNext}
          className="w-full md:w-auto shadow-xl"
        >
          {parsing ? (
            <><Loader2 className="animate-spin mr-2" size={20} /> Processing</>
          ) : (
            <span className="flex items-center gap-2">
               <Lock size={16} /> Secure Artisan Access
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};