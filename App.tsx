import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { UploadSpecs } from './components/UploadSpecs';
import { ResultsView } from './components/ResultsView';
import { CommitmentView } from './components/CommitmentView';
import { SuccessView } from './components/SuccessView';
import { AppScreen, Material } from './types';
import { MOCK_MATERIALS } from './constants';

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
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FAF8F5] font-sans text-primary">
      <Sidebar currentScreen={currentScreen} onNavigate={handleNavigate} />
      <main className="ml-64 flex-1 p-12 overflow-y-auto h-screen">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;