import React, { useState } from 'react';
import { 
  CreditCard, Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft, 
  Package, Truck, CheckCircle2, AlertCircle, Search, Star, ShieldCheck, 
  User, Lock, Bell, Link as LinkIcon, BarChart3, Leaf, Factory, AlertTriangle, Activity,
  Filter, MoreHorizontal, Clock, FileText, CheckCircle, Landmark, Coins
} from 'lucide-react';
import { Button } from './Button';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Line, ComposedChart, Legend, Area, AreaChart 
} from 'recharts';
import { AppScreen } from '../types';

// --- WALLET VIEW ---
interface WalletViewProps {
  onNavigate: (screen: AppScreen) => void;
}

export const WalletView: React.FC<WalletViewProps> = ({ onNavigate }) => {
  const transactions = [
    { id: 1, type: 'Payment', to: 'Tuscany Stoneworks', amount: '-$42,500.00', date: 'Today, 10:23 AM', status: 'Completed', method: 'USDC' },
    { id: 2, type: 'Deposit', from: 'Sterling Main Account', amount: '+$150,000.00', date: 'Yesterday', status: 'Completed', method: 'Wire' },
    { id: 3, type: 'Escrow', to: 'Apex Materials', amount: '-$12,450.00', date: 'Oct 24, 2025', status: 'Locked', method: 'Smart Contract' },
  ];

  return (
    <div className="animate-fade-in space-y-8 relative pb-12">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none -z-10 h-full w-full"></div>

      <h2 className="text-4xl font-serif text-primary">Digital Liquidity & Escrow</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Balance Card */}
        <div className="bg-primary text-white p-10 rounded-2xl shadow-luxury relative overflow-hidden border border-[#2C3E50]">
           <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Total Liquidity Position</p>
           <h3 className="text-5xl font-mono font-bold mb-8 tracking-tighter">$2,450,890.00</h3>
           
           <div className="flex gap-4 relative z-10">
             <div className="bg-white/10 backdrop-blur px-4 py-2 rounded border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                <span className="text-sm font-medium">USDC: $1.2M</span>
             </div>
             <div className="bg-white/10 backdrop-blur px-4 py-2 rounded border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.5)]"></div>
                <span className="text-sm font-medium">USD: $1.25M</span>
             </div>
           </div>
        </div>

        {/* Quick Actions - Enhanced Visuals */}
        <div className="grid grid-cols-2 gap-6">
           {/* Deposit Capital Card */}
           <div 
             onClick={() => onNavigate(AppScreen.SETTLEMENT_SWIFT)}
             className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-primary/20 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center group relative overflow-hidden"
           >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-6 p-5 rounded-full bg-green-50 text-green-600 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300 ring-4 ring-green-50/50">
                 <ArrowDownLeft size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-2 group-hover:text-green-800 transition-colors">Deposit Capital</h3>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Wire / ACH / Crypto</p>
           </div>

           {/* Smart Contracts Card */}
           <div 
             onClick={() => onNavigate(AppScreen.SETTLEMENT_ESCROW)}
             className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-accent/30 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center group relative overflow-hidden"
           >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-6 p-5 rounded-full bg-amber-50 text-accent group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300 ring-4 ring-amber-50/50">
                 <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-2 group-hover:text-accent transition-colors">Smart Contracts</h3>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Manage Escrow</p>
           </div>
        </div>
      </div>

      {/* Available Payment Instruments - Rectangular Cards */}
      <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mt-8 mb-4">Payment Methods</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Corporate Treasury */}
         <div 
            onClick={() => onNavigate(AppScreen.SETTLEMENT_TREASURY)}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex items-center gap-5 relative overflow-hidden"
         >
            <div className="p-4 bg-gray-50 rounded-lg text-gray-600 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Landmark size={24} />
            </div>
            <div>
               <h4 className="font-bold text-primary text-lg group-hover:text-primary/80 transition-colors">Corporate Treasury</h4>
               <p className="text-xs text-gray-500 mt-1">Connected: JPMorgan Chase</p>
            </div>
         </div>

         {/* AI Escrow Vault */}
         <div 
            onClick={() => onNavigate(AppScreen.SETTLEMENT_ESCROW)}
            className="bg-white p-6 rounded-xl border border-accent/30 shadow-sm hover:shadow-xl hover:border-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex items-center gap-5 relative overflow-hidden"
         >
             <div className="absolute right-0 top-0 bg-accent text-primary text-[10px] font-bold px-3 py-1 rounded-bl shadow-sm z-10">RECOMMENDED</div>
            <div className="p-4 bg-amber-50 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={24} />
            </div>
            <div>
               <h4 className="font-bold text-primary text-lg group-hover:text-accent transition-colors">AI Escrow Vault</h4>
               <p className="text-xs text-gray-500 mt-1">0.5% Fee • Instant Release</p>
            </div>
         </div>

         {/* USDC Settlement */}
         <div 
            onClick={() => onNavigate(AppScreen.SETTLEMENT_ESCROW)}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex items-center gap-5 relative overflow-hidden"
         >
            <div className="p-4 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Coins size={24} />
            </div>
            <div>
               <h4 className="font-bold text-primary text-lg group-hover:text-blue-600 transition-colors">USDC Settlement</h4>
               <p className="text-xs text-gray-500 mt-1">0% FX Fee • Global</p>
            </div>
         </div>
      </div>

      {/* Transactions */}
      <div className="bg-surface rounded-xl shadow-luxury border border-[#F5F5F5] overflow-hidden mt-8">
        <div className="p-6 border-b border-[#F5F5F5] flex justify-between items-center bg-gray-50/50">
           <h3 className="font-serif font-bold text-primary text-xl">Recent Ledger Activity</h3>
           <Button variant="text" size="sm">View Full Ledger</Button>
        </div>
        <table className="w-full">
          <thead className="bg-white text-xs text-gray-400 uppercase tracking-widest font-bold border-b border-gray-100">
            <tr>
              <th className="px-8 py-4 text-left">Type</th>
              <th className="px-8 py-4 text-left">Counterparty</th>
              <th className="px-8 py-4 text-left">Method</th>
              <th className="px-8 py-4 text-left">Status</th>
              <th className="px-8 py-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactions.map(tx => (
              <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-5">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide ${tx.type === 'Deposit' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-8 py-5 font-serif font-medium text-primary text-lg">{tx.to || tx.from}</td>
                <td className="px-8 py-5 text-gray-500 text-sm font-sans flex items-center gap-2">
                   {tx.method === 'USDC' && <Coins size={14} className="text-blue-500"/>}
                   {tx.method === 'Smart Contract' && <ShieldCheck size={14} className="text-accent"/>}
                   {tx.method}
                </td>
                <td className="px-8 py-5">
                   <div className="flex items-center gap-2">
                     <div className={`w-2 h-2 rounded-full ${tx.status === 'Completed' ? 'bg-success shadow-[0_0_6px_rgba(46,125,50,0.4)]' : 'bg-accent shadow-[0_0_6px_rgba(212,175,55,0.4)]'}`}></div>
                     <span className="text-sm font-medium text-gray-700">{tx.status}</span>
                   </div>
                </td>
                <td className={`px-8 py-5 text-right font-mono font-bold text-lg ${tx.amount.startsWith('+') ? 'text-success' : 'text-primary'}`}>
                  {tx.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- ANALYTICS VIEW ---
export const AnalyticsView: React.FC = () => {
  // Enhanced data for Budget vs Actual visualization
  const data = [
    { name: 'Jan', actual: 4000, budget: 4200, variance: -200 },
    { name: 'Feb', actual: 3000, budget: 3500, variance: -500 },
    { name: 'Mar', actual: 2000, budget: 2100, variance: -100 },
    { name: 'Apr', actual: 2780, budget: 2600, variance: 180 },
    { name: 'May', actual: 1890, budget: 2200, variance: -310 },
    { name: 'Jun', actual: 2390, budget: 2400, variance: -10 },
    { name: 'Jul', actual: 3490, budget: 3200, variance: 290 },
  ];

  const pieData = [
    { name: 'Natural Stone', value: 45, color: '#1A2A44' },
    { name: 'Hardwoods', value: 25, color: '#D4AF37' },
    { name: 'Steel', value: 20, color: '#2C3E50' },
    { name: 'Glass', value: 10, color: '#9CA3AF' },
  ];

  return (
    <div className="animate-fade-in space-y-8 relative">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none -z-10 h-full w-full"></div>

      <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-6">
        <div>
           <h2 className="text-4xl font-serif text-primary mb-2">Financial Performance</h2>
           <p className="text-gray-500 font-sans text-sm tracking-wide">
             STRATEGIC SOURCING INTELLIGENCE &bull; <span className="text-success font-medium">4.2% UNDER BUDGET YTD</span>
           </p>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" size="sm" icon={<BarChart3 size={16}/>}>Download PDF</Button>
           <div className="bg-white border border-gray-300 rounded px-3 py-2 flex items-center">
              <span className="text-xs text-gray-400 mr-2 uppercase font-bold">Timeframe:</span>
              <select className="bg-transparent text-sm font-medium text-primary outline-none cursor-pointer">
                 <option>Fiscal Year 2025</option>
                 <option>Q3 2025</option>
              </select>
           </div>
        </div>
      </div>

      {/* KPI Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-primary text-white p-6 rounded-lg shadow-luxury relative overflow-hidden">
            <div className="relative z-10">
               <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Realized Savings</p>
               <h3 className="text-3xl font-mono font-bold text-white mb-2">$842,500</h3>
               <p className="text-xs text-green-400 flex items-center bg-white/10 w-fit px-2 py-1 rounded">
                  <ArrowUpRight size={12} className="mr-1" /> 12% vs Market Index
               </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
               <Wallet size={120} />
            </div>
         </div>
         
         <div className="bg-surface p-6 rounded-lg shadow-luxury border border-gray-100">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Budget Variance (YTD)</p>
            <h3 className="text-3xl font-mono font-bold text-success mb-2">-4.2%</h3>
            <p className="text-xs text-gray-500">
               Under budget due to bulk procurement in Q2.
            </p>
         </div>

         <div className="bg-surface p-6 rounded-lg shadow-luxury border border-gray-100">
            <div className="flex justify-between items-start">
               <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">ESG Impact</p>
                  <h3 className="text-3xl font-mono font-bold text-primary mb-2">124 tons</h3>
               </div>
               <Leaf className="text-success" size={24} />
            </div>
            <p className="text-xs text-gray-500">
               CO2e offset via sustainable timber sourcing.
            </p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Variance Chart */}
        <div className="lg:col-span-2 bg-surface p-8 rounded-xl shadow-luxury border border-[#F5F5F5]">
           <div className="flex justify-between items-start mb-8">
              <div>
                 <h3 className="text-xl font-serif text-primary font-bold">Budget vs. Actual Spend</h3>
                 <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Millions USD</p>
              </div>
              <div className="flex gap-4">
                 <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <div className="w-3 h-3 bg-primary mr-2"></div> Actual
                 </div>
                 <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <div className="w-3 h-0.5 bg-accent mr-2"></div> Budget
                 </div>
              </div>
           </div>
           
           <div className="h-80">
             <ResponsiveContainer width="100%" height="100%">
               <ComposedChart data={data}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                 <Tooltip 
                    cursor={{fill: '#f3f4f6'}}
                    contentStyle={{ borderRadius: '0px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                 />
                 <Bar dataKey="actual" fill="#1A2A44" barSize={32} radius={[2, 2, 0, 0]} />
                 <Line type="monotone" dataKey="budget" stroke="#D4AF37" strokeWidth={3} dot={{r: 4, fill: '#D4AF37', strokeWidth: 2, stroke: '#fff'}} />
               </ComposedChart>
             </ResponsiveContainer>
           </div>
           
           <div className="mt-6 p-4 bg-gray-50 border-l-4 border-accent text-sm text-gray-600 italic">
              "Strategic bulk purchasing in May resulted in a <span className="font-bold text-primary">14% positive variance</span>, effectively offsetting the minor logistics cost overrun in April."
           </div>
        </div>

        {/* Category Split */}
        <div className="bg-surface p-8 rounded-xl shadow-luxury border border-[#F5F5F5] flex flex-col">
           <h3 className="text-xl font-serif text-primary font-bold mb-6">Capital Allocation</h3>
           <div className="flex-1 min-h-[250px] relative">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={pieData}
                   innerRadius={80}
                   outerRadius={100}
                   paddingAngle={2}
                   dataKey="value"
                 >
                   {pieData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                   ))}
                 </Pie>
                 <Tooltip />
               </PieChart>
             </ResponsiveContainer>
             {/* Center Text */}
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-serif font-bold text-primary">45%</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Natural Stone</span>
             </div>
           </div>
           <div className="space-y-3 mt-4">
              {pieData.map((entry, index) => (
                <div key={index} className="flex justify-between items-center text-sm border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                   <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: entry.color }}></div>
                      <span className="text-gray-600 font-medium">{entry.name}</span>
                   </div>
                   <span className="font-mono font-bold text-primary">{entry.value}%</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

// --- ORDERS VIEW ---
export const OrdersView: React.FC = () => {
  // Enhanced C-Suite data structure
  const orders = [
    {
      id: 'ORD-2025-8921',
      project: 'Sterling Residence',
      supplier: 'Tuscany Stoneworks',
      items: 'Calacatta Oro Marble (Bookmatched)',
      qty: '120 sq ft',
      date: 'Oct 24, 2025',
      stage: 'Fabrication',
      progress: 65,
      paymentStatus: 'Escrow Locked',
      risk: 'Low',
      total: '$48,250.00',
      nextMilestone: 'Quality Audit (Nov 02)'
    },
    {
      id: 'ORD-2025-8920',
      project: 'Apex Tower Penthouse',
      supplier: 'Nordic Glass Solutions',
      items: 'Structural Glazing Units',
      qty: '4 Panes',
      date: 'Oct 20, 2025',
      stage: 'Intl. Logistics',
      progress: 80,
      paymentStatus: 'LC Released',
      risk: 'Medium', // Customs delay
      total: '$12,400.00',
      nextMilestone: 'Customs Clearance (Oct 30)'
    },
    {
      id: 'ORD-2025-8815',
      project: 'Vanguard Estate',
      supplier: 'Kyoto Timber Co.',
      items: 'Reclaimed Teak Flooring',
      qty: '500 sq ft',
      date: 'Oct 15, 2025',
      stage: 'Delivered',
      progress: 100,
      paymentStatus: 'Paid',
      risk: 'None',
      total: '$35,000.00',
      nextMilestone: 'Installation'
    },
    {
      id: 'ORD-2025-8742',
      project: 'Sterling Residence',
      supplier: 'Global Steel Works',
      items: 'Architectural Bronze Trim',
      qty: '200 linear ft',
      date: 'Oct 12, 2025',
      stage: 'Production Queue',
      progress: 15,
      paymentStatus: 'Deposit Paid',
      risk: 'High', // Raw material shortage
      total: '$18,500.00',
      nextMilestone: 'Production Start (Nov 05)'
    }
  ];

  return (
    <div className="animate-fade-in space-y-8 relative">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none -z-10 h-full w-full"></div>

       <div className="flex justify-between items-end border-b border-gray-200 pb-6">
         <div>
           <h2 className="text-4xl font-serif text-primary mb-2">Order Management</h2>
           <p className="text-gray-500 font-sans text-sm tracking-wide">
             ACTIVE PIPELINE &bull; <span className="text-accent font-medium">LIFECYCLE TRACKING</span>
           </p>
         </div>
         <div className="flex gap-4">
            <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               <input type="text" placeholder="Search orders, contracts..." className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary outline-none font-sans min-w-[250px]" />
            </div>
            <Button variant="outline" size="sm" icon={<Filter size={16}/>}>Filter View</Button>
            <Button variant="primary" size="sm" icon={<FileText size={16}/>}>Export Report</Button>
         </div>
       </div>

       {/* Executive Summary Metrics */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface p-6 rounded-lg shadow-luxury border border-[#F5F5F5] flex items-center justify-between">
             <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Active Volume</p>
                <h3 className="text-2xl font-mono font-bold text-primary">$114,150.00</h3>
                <p className="text-xs text-gray-500 mt-1">Across 4 active pipelines</p>
             </div>
             <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                <Package size={24} />
             </div>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-luxury border border-[#F5F5F5] flex items-center justify-between">
             <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Supply Chain Health</p>
                <h3 className="text-2xl font-mono font-bold text-success">92%</h3>
                <p className="text-xs text-gray-500 mt-1">On-time delivery rate</p>
             </div>
             <div className="p-3 bg-green-50 rounded-full text-success">
                <Activity size={24} />
             </div>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-luxury border border-[#F5F5F5] flex items-center justify-between">
             <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Critical Actions</p>
                <h3 className="text-2xl font-mono font-bold text-accent">2 Pending</h3>
                <p className="text-xs text-gray-500 mt-1">1 Risk Flag, 1 Quality Audit</p>
             </div>
             <div className="p-3 bg-yellow-50 rounded-full text-accent">
                <AlertTriangle size={24} />
             </div>
          </div>
       </div>
      
      <div className="bg-surface rounded-xl shadow-luxury border border-gray-200 overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead className="bg-gray-50 text-[11px] text-gray-500 uppercase tracking-widest font-bold border-b border-gray-200">
               <tr>
                 <th className="px-6 py-4 text-left">Order & Project</th>
                 <th className="px-6 py-4 text-left">Supplier & Items</th>
                 <th className="px-6 py-4 text-left">Lifecycle Stage</th>
                 <th className="px-6 py-4 text-left">Financial Status</th>
                 <th className="px-6 py-4 text-left">Risk Assessment</th>
                 <th className="px-6 py-4 text-right">Total Value</th>
                 <th className="px-6 py-4 text-center">Action</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-100">
               {orders.map(order => (
                 <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group">
                   <td className="px-6 py-5">
                      <div className="font-mono text-primary font-bold text-sm mb-1">{order.id}</div>
                      <div className="text-xs text-gray-500 font-medium">{order.project}</div>
                   </td>
                   <td className="px-6 py-5">
                      <div className="flex items-center gap-2 mb-1">
                         <Factory size={12} className="text-gray-400" />
                         <span className="text-sm font-bold text-gray-700">{order.supplier}</span>
                      </div>
                      <div className="text-xs text-gray-500">{order.items}</div>
                   </td>
                   <td className="px-6 py-5 min-w-[200px]">
                      <div className="flex justify-between items-end mb-1">
                         <span className="text-xs font-bold text-primary">{order.stage}</span>
                         <span className="text-[10px] text-gray-400">{order.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                         <div 
                            className={`h-full rounded-full ${order.progress === 100 ? 'bg-success' : 'bg-primary'}`} 
                            style={{width: `${order.progress}%`}}
                         ></div>
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-400">
                         <Clock size={10} /> Next: {order.nextMilestone}
                      </div>
                   </td>
                   <td className="px-6 py-5">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold uppercase tracking-wide border
                        ${order.paymentStatus.includes('Paid') ? 'bg-green-50 text-green-700 border-green-100' : 
                          order.paymentStatus.includes('Escrow') ? 'bg-blue-50 text-blue-700 border-blue-100' :
                          'bg-gray-50 text-gray-600 border-gray-200'}`}>
                         {order.paymentStatus}
                      </span>
                   </td>
                   <td className="px-6 py-5">
                      {order.risk === 'High' && (
                         <div className="flex items-center text-error text-xs font-bold uppercase tracking-wide">
                            <AlertTriangle size={14} className="mr-1" /> High Risk
                         </div>
                      )}
                      {order.risk === 'Medium' && (
                         <div className="flex items-center text-accent text-xs font-bold uppercase tracking-wide">
                            <AlertCircle size={14} className="mr-1" /> Medium Risk
                         </div>
                      )}
                      {order.risk === 'Low' && (
                         <div className="flex items-center text-blue-600 text-xs font-bold uppercase tracking-wide">
                            <Activity size={14} className="mr-1" /> Low Risk
                         </div>
                      )}
                      {(order.risk === 'None' || !order.risk) && (
                         <div className="flex items-center text-gray-400 text-xs font-bold uppercase tracking-wide">
                            <CheckCircle size={14} className="mr-1" /> Stable
                         </div>
                      )}
                   </td>
                   <td className="px-6 py-5 text-right font-mono font-bold text-primary text-base">{order.total}</td>
                   <td className="px-6 py-5 text-center">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                         <MoreHorizontal size={20} />
                      </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
         <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 4 of 12 active orders</span>
            <div className="flex gap-2">
               <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Previous</button>
               <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50">Next</button>
            </div>
         </div>
      </div>
    </div>
  );
};

// --- SUPPLIERS VIEW ---
export const SuppliersView: React.FC = () => {
  // Enhanced data with C-Suite metrics: Risk, Capacity, Certifications
  const suppliers = [
    { 
      name: 'Tuscany Stoneworks', 
      location: 'Carrara, Italy', 
      rating: 4.9, 
      specialty: 'Marble & Travertine', 
      verified: true, 
      risk: 'Low',
      capacity: 85, // %
      certs: ['ISO 9001', 'Fair Trade'],
      image: 'https://picsum.photos/100/100?random=1' 
    },
    { 
      name: 'Apex Materials', 
      location: 'New York, USA', 
      rating: 4.8, 
      specialty: 'Steel & Glass', 
      verified: true, 
      risk: 'Low',
      capacity: 40, 
      certs: ['LEED Gold', 'Made in USA'],
      image: 'https://picsum.photos/100/100?random=2' 
    },
    { 
      name: 'Kyoto Timber Co.', 
      location: 'Kyoto, Japan', 
      rating: 5.0, 
      specialty: 'Sustainable Wood', 
      verified: true, 
      risk: 'Medium',
      capacity: 92, // High capacity load = risk
      certs: ['FSC Certified', 'Carb Compliant'],
      image: 'https://picsum.photos/100/100?random=3' 
    },
    { 
      name: 'Nordic Slate', 
      location: 'Oslo, Norway', 
      rating: 4.7, 
      specialty: 'Roofing Slate', 
      verified: true, 
      risk: 'Low',
      capacity: 60,
      certs: ['Nordic Swan', 'ISO 14001'],
      image: 'https://picsum.photos/100/100?random=4' 
    },
  ];

  return (
     <div className="animate-fade-in space-y-8 relative">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none -z-10 h-full w-full"></div>

       <div className="flex justify-between items-end border-b border-gray-200 pb-6">
         <div>
           <h2 className="text-4xl font-serif text-primary mb-2">Vetted Global Network</h2>
           <p className="text-gray-500 font-sans text-sm tracking-wide">
             STRATEGIC PARTNERS &bull; <span className="text-accent font-medium">RISK-ADJUSTED PORTFOLIO</span>
           </p>
         </div>
         <div className="flex gap-4">
            <Button variant="outline" size="sm" icon={<Activity size={16}/>}>Risk Map</Button>
            <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               <input type="text" placeholder="Search suppliers..." className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary outline-none font-sans min-w-[250px]" />
            </div>
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
         {suppliers.map((s, i) => (
           <div key={i} className="bg-surface p-0 shadow-luxury border border-[#F5F5F5] hover:-translate-y-1 transition-transform cursor-pointer group relative overflow-hidden flex flex-col">
              
              {/* Header / Image */}
              <div className="p-6 pb-4 flex items-start justify-between relative bg-gray-50/50 border-b border-gray-100">
                 <div className="flex items-center gap-4">
                    <img src={s.image} alt={s.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                        <h3 className="font-serif font-bold text-lg text-primary leading-tight">{s.name}</h3>
                        <p className="text-xs text-gray-500 font-sans mt-0.5">{s.location}</p>
                    </div>
                 </div>
                 {s.verified && (
                    <div className="bg-white border border-accent/20 p-1.5 rounded-full shadow-sm text-accent" title="Verified on Chain">
                       <LinkIcon size={14} />
                    </div>
                 )}
              </div>

              {/* Stats Grid */}
              <div className="p-6 space-y-5">
                 {/* Specialty & Rating */}
                 <div className="flex justify-between items-center text-sm">
                     <span className="font-medium text-gray-600">{s.specialty}</span>
                     <div className="flex items-center text-primary font-bold bg-accent/10 px-2 py-0.5 rounded">
                        <Star size={12} className="fill-accent text-accent mr-1" /> {s.rating}
                     </div>
                 </div>

                 {/* Risk & Capacity Indicators */}
                 <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-50">
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Risk Profile</p>
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${s.risk === 'Low' ? 'bg-success' : s.risk === 'Medium' ? 'bg-accent' : 'bg-error'}`}></div>
                            <span className="text-sm font-medium text-primary">{s.risk} Risk</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Capacity Load</p>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1.5">
                            <div 
                                className={`h-full rounded-full ${s.capacity > 90 ? 'bg-error' : s.capacity > 70 ? 'bg-accent' : 'bg-success'}`} 
                                style={{width: `${s.capacity}%`}}
                            ></div>
                        </div>
                        <p className="text-[10px] text-right text-gray-400 mt-1">{s.capacity}% Utilized</p>
                    </div>
                 </div>

                 {/* Certifications */}
                 <div className="flex flex-wrap gap-2">
                    {s.certs.map((cert, idx) => (
                        <span key={idx} className="text-[10px] bg-gray-50 border border-gray-100 text-gray-500 px-2 py-1 rounded">
                            {cert}
                        </span>
                    ))}
                 </div>
              </div>
           </div>
         ))}
       </div>
     </div>
  );
};

// --- SETTINGS VIEW ---
export const SettingsView: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-3xl">
      <h2 className="text-3xl font-serif text-primary mb-8">Account Settings</h2>
      
      <div className="space-y-6">
        {/* Profile */}
        <div className="bg-surface p-8 rounded-xl shadow-sm border border-gray-200">
           <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
             <User size={20} className="text-gray-400" /> Profile Information
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                 <input type="text" defaultValue="Victoria Sterling" className="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary outline-none" />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                 <input type="email" defaultValue="v.sterling@classichomes.com" className="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary outline-none" />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                 <input type="text" defaultValue="Chief Procurement Officer" disabled className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded text-gray-500" />
              </div>
           </div>
        </div>

        {/* Security */}
        <div className="bg-surface p-8 rounded-xl shadow-sm border border-gray-200">
           <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
             <Lock size={20} className="text-gray-400" /> Security & Privacy
           </h3>
           <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                 <div>
                    <p className="font-medium text-primary">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Secure your account with 2FA.</p>
                 </div>
                 <div className="w-12 h-6 bg-success rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                 </div>
              </div>
              <div className="flex items-center justify-between py-2">
                 <div>
                    <p className="font-medium text-primary">Login Notifications</p>
                    <p className="text-sm text-gray-500">Alerts when accessed from new IP.</p>
                 </div>
                 <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex justify-end gap-4">
           <Button variant="outline">Cancel</Button>
           <Button variant="primary">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};