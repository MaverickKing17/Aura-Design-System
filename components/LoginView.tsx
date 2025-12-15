import React, { useState, useEffect } from 'react';
import { Shield, Lock, CheckCircle, Globe, Key, Building2, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from './Button';

interface LoginViewProps {
  onLogin: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Verifying Credentials against Whitelist...');

  const handleAuth = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    
    // Simulate complex verification steps
    setTimeout(() => {
        setLoadingText('Querying Immutable Ledger for Access Rights...');
    }, 1500);

    setTimeout(() => {
        setLoadingText('Decryption Key Handshake Successful...');
    }, 2800);

    setTimeout(() => {
      onLogin();
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#1A2A44] relative flex items-center justify-center overflow-hidden font-sans text-white">
      {/* Background: Animated Geometric Mesh */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2A44] via-transparent to-[#1A2A44]"></div>
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-[500px] p-10 mx-4 bg-[#1A2A44]/40 backdrop-blur-xl border border-accent/40 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.5)] flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-16 mb-6 text-accent">
             {/* Abstract House Logo */}
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
               <path d="M3 10L12 2L21 10V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10Z" />
               <path d="M9 22V12H15V22" />
               <path d="M12 2L12 4" strokeWidth="2" stroke="#D4AF37" />
             </svg>
          </div>
          <h1 className="font-serif text-3xl tracking-wide mb-2 text-white">
            CLASSIC HOMES <span className="font-light text-accent">MARKETPLACE</span>
          </h1>
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase">Verified Provenance. Digital Certainty.</p>
        </div>

        {/* Auth Options */}
        <div className="w-full space-y-6">
            
            {loading ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-gray-600 border-t-accent rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Shield size={20} className="text-accent/50" />
                        </div>
                    </div>
                    <p className="text-accent font-mono text-sm animate-pulse">{loadingText}</p>
                </div>
            ) : (
                <>
                    {/* Primary SSO */}
                    <button 
                        onClick={() => handleAuth()}
                        className="group w-full bg-accent hover:bg-white text-[#1A2A44] font-bold py-4 px-6 rounded transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 relative overflow-hidden"
                    >
                        <Building2 size={20} />
                        <span>Authenticate via SSO (Microsoft/Okta)</span>
                        <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                            <ArrowRight size={20} />
                        </div>
                    </button>

                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-600"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-widest">or secure link</span>
                        <div className="flex-grow border-t border-gray-600"></div>
                    </div>

                    {/* Secondary Magic Link */}
                    <form onSubmit={handleAuth} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Business Email</label>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@organization.com"
                                    className="w-full bg-[#0F1C2E] border border-gray-600 text-white px-5 py-3 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600 font-mono text-sm"
                                />
                                <Lock size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-white font-medium py-3 px-6 rounded transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                        >
                            Request Secure Magic Link
                        </button>
                    </form>
                </>
            )}
        </div>

        {/* Footer Trust Signals */}
        <div className="mt-10 pt-6 border-t border-gray-700/50 w-full">
            <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono mb-4">
                <div className="flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-success" /> SOC2 Encrypted
                </div>
                <div className="flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-success" /> ISO 27001 Verified
                </div>
                <div className="flex items-center gap-1.5">
                    <Lock size={12} className="text-success" /> 256-bit SSL
                </div>
            </div>
            <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">
                Authorized Personnel Only. All access attempts are logged on the immutable ledger.
            </p>
        </div>
      </div>
    </div>
  );
};