import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1A2A44] text-white animate-fade-in">
      <div className="w-24 h-24 mb-8 text-[#D4AF37] relative">
         {/* Animated Glow behind logo */}
         <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-xl animate-pulse"></div>
         
         {/* Abstract House Logo */}
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] animate-pulse">
           <path d="M3 10L12 2L21 10V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10Z" />
           <path d="M9 22V12H15V22" />
           <path d="M12 2L12 4" strokeWidth="2" stroke="#D4AF37" />
         </svg>
      </div>
      
      <h2 className="font-serif text-3xl tracking-[0.1em] text-[#D4AF37] mb-2">CLASSIC HOMES</h2>
      
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-gray-600"></div>
        <p className="font-sans text-xs tracking-[0.25em] text-gray-300 uppercase animate-pulse">
            Establishing Digital Certainty...
        </p>
        <div className="h-px w-8 bg-gray-600"></div>
      </div>
    </div>
  );
};