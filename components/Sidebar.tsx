import React from 'react';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Box, 
  Settings, 
  Bell, 
  LogOut,
  ShieldCheck,
  ShoppingBag,
  Wallet,
  BarChart3
} from 'lucide-react';
import { AppScreen } from '../types';

interface SidebarProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentScreen, onNavigate }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', screen: AppScreen.DASHBOARD },
    { icon: FolderOpen, label: 'Projects', screen: AppScreen.UPLOAD_SPECS },
    { icon: Box, label: 'Materials', screen: AppScreen.RESULTS },
    { icon: ShoppingBag, label: 'Orders', screen: AppScreen.ORDERS },
    { icon: Wallet, label: 'Wallet', screen: AppScreen.WALLET },
    { icon: BarChart3, label: 'Analytics', screen: AppScreen.ANALYTICS },
    { icon: ShieldCheck, label: 'Vetted Suppliers', screen: AppScreen.SUPPLIERS },
    { icon: Settings, label: 'Settings', screen: AppScreen.SETTINGS },
  ];

  return (
    <div className="w-64 h-screen bg-[#2C3E50] text-white flex flex-col fixed left-0 top-0 border-r border-[#1A2A44] shadow-2xl z-50">
      {/* Brand Logo Area */}
      <div className="p-8 border-b border-[#1A2A44] flex flex-col items-center shrink-0 bg-[#1A2A44]">
        <div className="w-12 h-12 mb-4 text-accent">
           {/* Abstract House Logo */}
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
             <path d="M3 10L12 2L21 10V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10Z" />
             <path d="M9 22V12H15V22" />
             <path d="M12 2L12 4" strokeWidth="2" stroke="#D4AF37" />
           </svg>
        </div>
        <h1 className="font-serif text-lg tracking-wider text-center leading-tight">
          CLASSIC HOMES<br/>
          <span className="text-xs font-sans text-gray-400 tracking-widest">MARKETPLACE</span>
        </h1>
      </div>

      {/* Navigation - Scrollable */}
      <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => item.screen && onNavigate(item.screen)}
            className={`w-full flex items-center px-4 py-3 text-sm tracking-wide transition-all duration-200 group rounded-lg font-medium
              ${currentScreen === item.screen 
                ? 'bg-[#1A2A44] text-white shadow-lg translate-x-1 border-l-4 border-accent' 
                : 'text-gray-300 hover:bg-[#1A2A44]/50 hover:text-white hover:translate-x-1'
              }`}
          >
            <item.icon size={18} className={`mr-3 transition-colors ${currentScreen === item.screen ? 'text-accent' : 'text-gray-400 group-hover:text-white'}`} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-6 border-t border-[#1A2A44] bg-[#243342] shrink-0">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-accent overflow-hidden shadow-md">
            <img src="https://picsum.photos/100/100" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">V. Sterling</p>
            <p className="text-xs text-gray-400">Chief Procurement</p>
          </div>
        </div>
        <div className="flex justify-between text-gray-400">
          <button className="hover:text-white transition-colors p-1 hover:bg-white/10 rounded"><Bell size={16} /></button>
          <button className="hover:text-white transition-colors p-1 hover:bg-white/10 rounded"><LogOut size={16} /></button>
        </div>
      </div>
    </div>
  );
};