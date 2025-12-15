import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { UploadSpecs } from './components/UploadSpecs';
import { ResultsView } from './components/ResultsView';
import { CommitmentView } from './components/CommitmentView';
import { SuccessView } from './components/SuccessView';
import { AppScreen, Material } from './types';
import { MOCK_MATERIALS } from './constants';
import { MessageCircle, Shield, FileText, HelpCircle, Lock, Construction } from 'lucide-react';

// Placeholder Component for incomplete screens
const PlaceholderView: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-[70vh] animate-fade-in text-center border-2 border-dashed border-gray-200 rounded-lg bg-white/50">
    <div className="bg-gray-100 p-6 rounded-full mb-6">
       <Construction className="text-gray-400 w-12 h-12" />
    </div>
    <h2 className="text-3xl font-serif text-primary mb-2">{title}</h2>
    <p className="text-gray-500 max-w-md">
      This module is currently under development. Please check back later for full access to {title.toLowerCase()} features.
    </p>
  </div>
);

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.DASHBOARD);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  const handleNavigate = (screen: AppScreen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const handleProceedToResults = () => {
    handleNavigate(AppScreen.RESULTS);
  };

  const handleProceedToCommitment = (material: Material) => {
    setSelectedMaterial(material);
    handleNavigate(AppScreen.COMMITMENT);
  };

  const handleConfirmCommitment = () => {
    handleNavigate(AppScreen.SUCCESS);
  };

  const renderContent = () => {
    switch (currentScreen) {
      case AppScreen.DASHBOARD:
        return <Dashboard onNavigate={handleNavigate} />;
      case AppScreen.UPLOAD_SPECS:
        return <UploadSpecs onNext={handleProceedToResults} />;
      case AppScreen.RESULTS:
        return <ResultsView onBack={() => handleNavigate(AppScreen.UPLOAD_SPECS)} onProceed={handleProceedToCommitment} />;
      case AppScreen.COMMITMENT:
        return selectedMaterial ? (
          <CommitmentView 
            material={selectedMaterial} 
            onBack={() => handleNavigate(AppScreen.RESULTS)} 
            onConfirm={handleConfirmCommitment} 
          />
        ) : <Dashboard onNavigate={handleNavigate} />;
      case AppScreen.SUCCESS:
        return <SuccessView onReturn={handleNavigate} />;
      // New Routes
      case AppScreen.ORDERS:
        return <PlaceholderView title="Orders Management" />;
      case AppScreen.WALLET:
        return <PlaceholderView title="Digital Wallet" />;
      case AppScreen.ANALYTICS:
        return <PlaceholderView title="Advanced Analytics" />;
      case AppScreen.SUPPLIERS:
        return <PlaceholderView title="Vetted Suppliers" />;
      case AppScreen.SETTINGS:
        return <PlaceholderView title="System Settings" />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FAF8F5] font-sans text-primary">
      <Sidebar currentScreen={currentScreen} onNavigate={handleNavigate} />
      <main className="ml-64 flex-1 h-screen overflow-y-auto flex flex-col">
        <div className="flex-1 p-12">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>
        
        {/* Main Application Footer - Enhanced Visibility */}
        <footer className="bg-white border-t border-gray-200 py-10 px-12 shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Top Row: Policies & Support */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-8">
               
               {/* Left: Branding & Legal */}
               <div className="flex flex-col gap-3">
                  <span className="font-serif text-primary font-semibold text-lg">© 2025 Classic Homes Marketplace</span>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600 font-medium">
                    <a href="#" className="hover:text-accent transition-colors flex items-center gap-1.5 py-1">
                      <Shield size={14} className="text-gray-400" /> Security Policy
                    </a>
                    <a href="#" className="hover:text-accent transition-colors flex items-center gap-1.5 py-1">
                      <Lock size={14} className="text-gray-400" /> Web3 Provenance Policy
                    </a>
                    <span className="text-gray-300 hidden sm:inline self-center">|</span>
                    <a href="#" className="hover:text-accent transition-colors py-1">Privacy</a>
                    <a href="#" className="hover:text-accent transition-colors py-1">Terms</a>
                  </div>
               </div>

               {/* Right: Help & Context */}
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full xl:w-auto">
                  <div className="flex items-center gap-6 text-base text-gray-600 font-medium">
                     <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                        <HelpCircle size={18} /> Help Center
                     </a>
                     <a href="#" className="hover:text-primary transition-colors">
                        Contact Support
                     </a>
                  </div>
                  <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wide hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center">
                     <MessageCircle size={18} />
                     <span>Live Chat</span>
                  </button>
               </div>
            </div>

            <div className="h-px bg-gray-200 w-full mb-8"></div>

            {/* Bottom Row: Trust Signals (Payments) */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-bold">
                   <Lock size={12} /> Secured Transaction Methods
                </div>
                <div className="flex items-center gap-3">
                   {/* Visa */}
                   <div className="h-8 w-14 bg-white border border-gray-200 rounded flex items-center justify-center p-1 shadow-sm grayscale hover:grayscale-0 transition-all cursor-help" title="Visa">
                      <svg className="h-full w-auto" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.784 9.696L14.736 0.623998H12.288L10.336 9.696H12.784ZM21.376 3.168C21.408 2.304 22.176 1.888 23.36 1.888C22.688 1.632 21.824 1.504 20.928 1.504C18.496 1.504 16.768 2.784 16.768 4.704C16.768 6.08 18.016 6.848 18.944 7.296C19.904 7.776 20.224 8.064 20.224 8.608C20.224 9.44 19.232 9.792 18.272 9.792C17.216 9.792 16.48 9.536 15.68 9.184L15.136 11.664C15.936 12.016 17.344 12.336 18.688 12.336C21.28 12.336 22.976 11.056 22.976 9.072C22.976 7.504 21.984 6.704 20.896 6.192C19.968 5.744 19.52 5.456 19.52 4.976C19.52 4.304 20.256 3.984 21.376 3.168ZM28.608 9.696H30.912L28.896 0.623998H26.88C26.4 0.623998 26.016 0.911998 25.84 1.344L22.096 10.128H24.672L25.184 8.688H28.352L28.608 9.696ZM25.904 6.64L27.216 3.056L27.584 6.64H25.904ZM6.992 0.623998H4.656L2.928 5.456L1.232 1.488C1.072 1.056 0.88 0.623998 0 0.623998V0.975998C1.52 1.296 2.688 2.416 3.232 4.544L5.616 12.336H8.24L12.04 0.623998H9.376L6.992 0.623998Z" fill="#1A1F71"/>
                      </svg>
                   </div>
                   {/* Mastercard */}
                   <div className="h-8 w-14 bg-white border border-gray-200 rounded flex items-center justify-center p-1 shadow-sm grayscale hover:grayscale-0 transition-all cursor-help" title="Mastercard">
                      <svg className="h-full w-auto" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#EB001B" fillOpacity="0.8"/>
                        <circle cx="16.5" cy="7.5" r="7.5" fill="#F79E1B" fillOpacity="0.8"/>
                      </svg>
                   </div>
                   {/* Polygon */}
                   <div className="h-8 w-14 bg-white border border-gray-200 rounded flex items-center justify-center p-1 shadow-sm grayscale hover:grayscale-0 transition-all cursor-help" title="Polygon">
                      <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M16.5 21L7.5 21L3 12L7.5 3L16.5 3L21 12L16.5 21Z" stroke="#8247E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                   {/* USDC */}
                   <div className="h-8 w-14 bg-white border border-gray-200 rounded flex items-center justify-center p-1 shadow-sm grayscale hover:grayscale-0 transition-all cursor-help" title="USDC">
                      <div className="h-6 w-6 rounded-full border border-[#2775CA] flex items-center justify-center text-[11px] text-[#2775CA] font-bold tracking-tighter">
                         $
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;