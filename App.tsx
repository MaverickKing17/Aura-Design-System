import React, { useState, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { UploadSpecs } from './components/UploadSpecs';
import { ResultsView } from './components/ResultsView';
import { CommitmentView } from './components/CommitmentView';
import { SuccessView } from './components/SuccessView';
import { LoginView } from './components/LoginView';
import { Loading } from './components/Loading';
// Import New Dashboard Views
import { WalletView, AnalyticsView, OrdersView, SuppliersView, SettingsView } from './components/DashboardViews';
// Import Info/Footer Views
import { SecurityView, Web3PolicyView, PrivacyView, TermsView, HelpCenterView, SupportView, SettlementSwiftView, SettlementTreasuryView, SettlementLocView, SettlementEscrowView } from './components/InfoViews';

import { AppScreen, Material } from './types';
import { MessageCircle, Shield, HelpCircle, Lock, Landmark, Briefcase, Globe, FileCheck } from 'lucide-react';

const App: React.FC = () => {
  // Authentication & Loading State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.DASHBOARD);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  // Reference for scrolling the main content area
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (screen: AppScreen) => {
    // Trigger Branded Loading State
    setIsLoading(true);
    
    // Simulate data fetch / route transition delay
    setTimeout(() => {
        setCurrentScreen(screen);
        setIsLoading(false);
        
        // Scroll to top of the main content area
        if (mainContentRef.current) {
            mainContentRef.current.scrollTop = 0;
        }
    }, 800);
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
      // Main Flows
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
      
      // Secondary Dashboard Views
      case AppScreen.ORDERS:
        return <OrdersView />;
      case AppScreen.WALLET:
        return <WalletView onNavigate={handleNavigate} />;
      case AppScreen.ANALYTICS:
        return <AnalyticsView />;
      case AppScreen.SUPPLIERS:
        return <SuppliersView />;
      case AppScreen.SETTINGS:
        return <SettingsView />;
      
      // Footer / Info Pages
      case AppScreen.SECURITY_POLICY:
        return <SecurityView />;
      case AppScreen.WEB3_POLICY:
        return <Web3PolicyView />;
      case AppScreen.PRIVACY_POLICY:
        return <PrivacyView />;
      case AppScreen.TERMS_SERVICE:
        return <TermsView />;
      case AppScreen.HELP_CENTER:
        return <HelpCenterView />;
      case AppScreen.CONTACT_SUPPORT:
        return <SupportView />;

      // Settlement Detail Pages
      case AppScreen.SETTLEMENT_SWIFT:
        return <SettlementSwiftView onBack={() => handleNavigate(AppScreen.DASHBOARD)}/>;
      case AppScreen.SETTLEMENT_TREASURY:
        return <SettlementTreasuryView onBack={() => handleNavigate(AppScreen.DASHBOARD)}/>;
      case AppScreen.SETTLEMENT_LOC:
        return <SettlementLocView onBack={() => handleNavigate(AppScreen.DASHBOARD)}/>;
      case AppScreen.SETTLEMENT_ESCROW:
        return <SettlementEscrowView onBack={() => handleNavigate(AppScreen.DASHBOARD)}/>;
        
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  // Guard the application behind the LoginView
  if (!isAuthenticated) {
    return <LoginView onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-[#FAF8F5] font-sans text-primary">
      {isLoading && <Loading />}
      
      <Sidebar currentScreen={currentScreen} onNavigate={handleNavigate} />
      
      <main 
        ref={mainContentRef}
        className="ml-64 flex-1 h-screen overflow-y-auto flex flex-col scroll-smooth"
      >
        <div className="flex-1 p-12">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>
        
        {/* Global Footer - Present on ALL views */}
        <footer className="bg-primary border-t border-[#2C3E50] py-16 px-12 shrink-0 relative z-10 text-white mt-auto">
          {/* Top decorative glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>

          <div className="max-w-7xl mx-auto">
            
            {/* Top Row: Policies & Support */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10 mb-12">
               
               {/* Left: Branding & Legal */}
               <div className="flex flex-col gap-4 max-w-2xl">
                  <h2 className="font-serif text-2xl tracking-wide text-white">
                    Classic Homes <span className="text-accent font-light">Marketplace</span>
                  </h2>
                  
                  {/* Unified Legal Links Bar */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 font-medium">
                    <span className="text-gray-500">© 2025 All Rights Reserved</span>
                    <span className="text-gray-700 hidden sm:inline">|</span>
                    
                    <button onClick={() => handleNavigate(AppScreen.SECURITY_POLICY)} className="hover:text-accent transition-colors flex items-center gap-1.5 whitespace-nowrap">
                      <Shield size={14} className="text-accent/80" /> Security
                    </button>
                    <span className="text-gray-700 hidden sm:inline">|</span>
                    
                    <button onClick={() => handleNavigate(AppScreen.WEB3_POLICY)} className="hover:text-accent transition-colors flex items-center gap-1.5 whitespace-nowrap">
                      <Lock size={14} className="text-accent/80" /> Provenance
                    </button>
                    <span className="text-gray-700 hidden sm:inline">|</span>

                    <button onClick={() => handleNavigate(AppScreen.PRIVACY_POLICY)} className="hover:text-accent transition-colors whitespace-nowrap">Privacy Policy</button>
                    <span className="text-gray-700 hidden sm:inline">|</span>
                    
                    <button onClick={() => handleNavigate(AppScreen.TERMS_SERVICE)} className="hover:text-accent transition-colors whitespace-nowrap">Terms of Service</button>
                  </div>
               </div>

               {/* Right: Help & Context */}
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full xl:w-auto">
                  <div className="flex items-center gap-8 text-base text-gray-300 font-medium">
                     <button onClick={() => handleNavigate(AppScreen.HELP_CENTER)} className="hover:text-white transition-colors flex items-center gap-2 group">
                        <HelpCircle size={20} className="group-hover:text-accent transition-colors" /> Help Center
                     </button>
                  </div>
                  <button 
                    onClick={() => handleNavigate(AppScreen.CONTACT_SUPPORT)}
                    className="flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg text-base font-bold tracking-wide hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
                  >
                     <MessageCircle size={20} />
                     <span>Live Concierge</span>
                  </button>
               </div>
            </div>

            <div className="h-px bg-white/10 w-full mb-10"></div>

            {/* Bottom Row: Corporate Settlement Methods */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-widest font-bold font-sans">
                   <Lock size={14} className="text-accent" /> Institutional Settlement Channels
                </div>
                
                <div className="flex flex-wrap justify-center sm:justify-end gap-x-8 gap-y-4 font-sans">
                   <button 
                     onClick={() => handleNavigate(AppScreen.SETTLEMENT_SWIFT)}
                     className="flex items-center gap-2 text-gray-400 opacity-80 hover:opacity-100 hover:text-white transition-all group" 
                     title="View SWIFT Details"
                   >
                      <Globe size={16} className="text-accent group-hover:scale-110 transition-transform"/> 
                      <span className="text-sm font-medium tracking-tight">SWIFT / SEPA</span>
                   </button>

                   <button 
                     onClick={() => handleNavigate(AppScreen.SETTLEMENT_TREASURY)}
                     className="flex items-center gap-2 text-gray-400 opacity-80 hover:opacity-100 hover:text-white transition-all group" 
                     title="View Treasury Details"
                   >
                      <Landmark size={16} className="text-accent group-hover:scale-110 transition-transform"/> 
                      <span className="text-sm font-medium tracking-tight">Corporate Treasury</span>
                   </button>

                   <button 
                     onClick={() => handleNavigate(AppScreen.SETTLEMENT_LOC)}
                     className="flex items-center gap-2 text-gray-400 opacity-80 hover:opacity-100 hover:text-white transition-all group" 
                     title="View Letter of Credit Details"
                   >
                      <FileCheck size={16} className="text-accent group-hover:scale-110 transition-transform"/> 
                      <span className="text-sm font-medium tracking-tight">Letter of Credit</span>
                   </button>

                   <button 
                     onClick={() => handleNavigate(AppScreen.SETTLEMENT_ESCROW)}
                     className="flex items-center gap-2 text-gray-400 opacity-80 hover:opacity-100 hover:text-white transition-all group" 
                     title="View Escrow Details"
                   >
                      <Briefcase size={16} className="text-accent group-hover:scale-110 transition-transform"/> 
                      <span className="text-sm font-medium tracking-tight">Escrow & Smart Contract</span>
                   </button>
                </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;