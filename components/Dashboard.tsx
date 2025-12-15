import React, { useState, useMemo } from 'react';
import { AppScreen } from '../types';
import { MOCK_PROJECTS } from '../constants';
import { Button } from './Button';
import { Plus, TrendingUp, TrendingDown, ArrowUpRight, ShieldCheck, Clock, MapPin, AlertTriangle, Globe } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line, CartesianGrid } from 'recharts';

interface DashboardProps {
  onNavigate: (screen: AppScreen) => void;
}

// Mock Data for Sparklines
const spendData = [
  { month: 'May', value: 3.2 },
  { month: 'Jun', value: 3.5 },
  { month: 'Jul', value: 3.4 },
  { month: 'Aug', value: 3.8 },
  { month: 'Sep', value: 4.1 },
  { month: 'Oct', value: 4.5 },
];

const volumeData = [
  { month: 'May', value: 1.2 },
  { month: 'Jun', value: 1.5 },
  { month: 'Jul', value: 2.1 },
  { month: 'Aug', value: 3.2 },
  { month: 'Sep', value: 3.8 },
  { month: 'Oct', value: 4.2 },
];

const forecastData = [
  { name: 'May', actual: 400, predicted: 400 },
  { name: 'Jun', actual: 420, predicted: 420 },
  { name: 'Jul', actual: 410, predicted: 430 },
  { name: 'Aug', actual: 450, predicted: 460 },
  { name: 'Sep', actual: 480, predicted: 480 },
  { name: 'Oct', actual: 520, predicted: 510 },
  { name: 'Nov', actual: null, predicted: 540 },
  { name: 'Dec', actual: null, predicted: 580 },
];

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [statusFilter, setStatusFilter] = useState('All');
  
  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter(project => {
        return statusFilter === 'All' || project.status === statusFilter;
    });
  }, [statusFilter]);

  return (
    <div className="space-y-10 animate-fade-in relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none -z-10 h-full w-full"></div>

      {/* Header */}
      <div className="flex justify-between items-end border-b border-gray-200 pb-6">
        <div>
          <h2 className="text-4xl font-serif text-primary mb-2 tracking-tight">Executive Dashboard</h2>
          <p className="text-gray-500 font-sans text-sm tracking-wide">
            GLOBAL SOURCING INTELLIGENCE &bull; <span className="text-accent font-medium">REAL-TIME RISK ASSESSMENT</span>
          </p>
        </div>
        <div className="flex gap-4">
           <Button 
            variant="outline"
            className="hidden md:flex"
            onClick={() => onNavigate(AppScreen.ANALYTICS)}
          >
            Full Report
          </Button>
          <Button 
            variant="primary" 
            icon={<Plus size={18} />}
            onClick={() => onNavigate(AppScreen.UPLOAD_SPECS)}
          >
            New Sourcing Cycle
          </Button>
        </div>
      </div>

      {/* KPI Cards - The "Money View" */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Total Spend */}
        <div className="bg-surface p-0 shadow-luxury border border-tertiary relative overflow-hidden group">
          <div className="p-6 pb-2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Procurement Spend</h3>
              <span className="flex items-center text-[10px] font-bold bg-green-50 text-success px-2 py-1 rounded-full border border-green-100">
                <ArrowUpRight size={10} className="mr-1" /> 12% vs Market
              </span>
            </div>
            <div className="text-3xl font-serif text-primary mb-1">$4.52M</div>
            <p className="text-xs text-gray-500 font-mono">YTD Accumulated</p>
          </div>
          <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={spendData}>
                <defs>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1A2A44" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1A2A44" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip content={() => null} cursor={false} />
                <Area type="monotone" dataKey="value" stroke="#1A2A44" strokeWidth={2} fillOpacity={1} fill="url(#colorSpend)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 2: Tokenized Volume */}
        <div className="bg-surface p-0 shadow-luxury border border-tertiary relative overflow-hidden group">
          <div className="p-6 pb-2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tokenized Volume</h3>
              <span className="flex items-center text-[10px] font-bold bg-yellow-50 text-accent px-2 py-1 rounded-full border border-yellow-100">
                 <ShieldCheck size={10} className="mr-1" /> Provenance Secured
              </span>
            </div>
            <div className="text-3xl font-serif text-primary mb-1">$4.2M</div>
            <p className="text-xs text-gray-500 font-mono">Secured on Polygon</p>
          </div>
          <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={volumeData}>
                <defs>
                  <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip content={() => null} cursor={false} />
                <Area type="monotone" dataKey="value" stroke="#D4AF37" strokeWidth={2} fillOpacity={1} fill="url(#colorVol)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 3: Global Supply Risk Radar */}
        <div className="bg-surface p-6 shadow-luxury border border-tertiary relative flex flex-col justify-between">
           <div className="flex justify-between items-start mb-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Supply Risk Radar</h3>
              <Globe className="text-gray-300" size={16} />
           </div>
           
           {/* Visual Radar Mockup */}
           <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-dashed border-gray-100 pb-2">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(46,125,50,0.5)]"></div>
                    <span className="text-sm font-medium text-primary">Tuscany, Italy</span>
                 </div>
                 <span className="text-[10px] font-mono text-gray-400">LOGISTICS: SECURE</span>
              </div>
              <div className="flex items-center justify-between border-b border-dashed border-gray-100 pb-2">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(212,175,55,0.5)] animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">São Paulo, Brazil</span>
                 </div>
                 <span className="text-[10px] font-mono text-accent">DELAY RISK: +2 WKS</span>
              </div>
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(46,125,50,0.5)]"></div>
                    <span className="text-sm font-medium text-primary">Vermont, USA</span>
                 </div>
                 <span className="text-[10px] font-mono text-gray-400">PRODUCTION: ON TRACK</span>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Section: Sourcing Forecast & Intelligence */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* Forecast Chart */}
           <div className="bg-surface p-8 shadow-luxury border border-tertiary">
              <div className="flex justify-between items-center mb-6">
                 <div>
                    <h3 className="text-xl font-serif text-primary">Sourcing Cost Forecast</h3>
                    <p className="text-xs text-gray-500 font-sans mt-1">AI-Predicted Material Inflation (Next 2 Months)</p>
                 </div>
                 <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1"><div className="w-3 h-0.5 bg-primary"></div> Actual</span>
                    <span className="flex items-center gap-1"><div className="w-3 h-0.5 bg-accent border-dashed border-t border-accent"></div> Predicted</span>
                 </div>
              </div>
              <div className="h-64 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={forecastData}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} dy={10} />
                       <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                       <Tooltip 
                          contentStyle={{ backgroundColor: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}
                          itemStyle={{ fontSize: '12px', fontWeight: 500 }}
                       />
                       <Line type="monotone" dataKey="actual" stroke="#1A2A44" strokeWidth={2} dot={{r: 4, fill: '#1A2A44'}} />
                       <Line type="monotone" dataKey="predicted" stroke="#D4AF37" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                    </LineChart>
                 </ResponsiveContainer>
              </div>
           </div>

           {/* Projects Table - Architectural Structure */}
           <div className="bg-surface shadow-luxury border border-tertiary overflow-hidden">
               <div className="p-6 border-b border-tertiary flex justify-between items-center bg-gray-50/30">
                  <h3 className="text-xl font-serif text-primary">Active Procurement Cycles</h3>
                  <select 
                        className="bg-transparent border-none text-sm font-medium text-gray-500 focus:ring-0 cursor-pointer hover:text-primary"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">Filter: All Status</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Committed">Committed</option>
                    </select>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full">
                    <thead className="bg-gray-50 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                       <tr>
                          <th className="px-6 py-4 text-left font-sans">Project</th>
                          <th className="px-6 py-4 text-left font-sans">Location</th>
                          <th className="px-6 py-4 text-left font-sans">Risk Status</th>
                          <th className="px-6 py-4 text-left font-sans">Last Activity</th>
                          <th className="px-6 py-4 text-right font-sans">Action</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                       {filteredProjects.map((project) => (
                          <tr key={project.id} className="hover:bg-gray-50/50 transition-colors">
                             <td className="px-6 py-4">
                                <span className="text-primary font-bold font-serif text-lg">{project.name}</span>
                             </td>
                             <td className="px-6 py-4 text-sm text-gray-600 font-mono">{project.location}</td>
                             <td className="px-6 py-4">
                                {project.status === 'In Progress' ? (
                                   <div className="flex items-center text-accent text-xs font-bold uppercase tracking-wide">
                                      <AlertTriangle size={12} className="mr-1" /> Needs Review
                                   </div>
                                ) : (
                                   <div className="flex items-center text-success text-xs font-bold uppercase tracking-wide">
                                      <ShieldCheck size={12} className="mr-1" /> Secured
                                   </div>
                                )}
                             </td>
                             <td className="px-6 py-4 text-sm text-gray-400">{project.lastActivity}</td>
                             <td className="px-6 py-4 text-right">
                                <Button variant="text" size="sm" onClick={() => onNavigate(AppScreen.UPLOAD_SPECS)}>
                                   Manage &rarr;
                                </Button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
                 {filteredProjects.length === 0 && (
                    <div className="p-12 text-center text-gray-400">No projects found.</div>
                 )}
               </div>
           </div>
        </div>

        {/* Right Column: Alerts & Quick Actions */}
        <div className="space-y-8">
           <div className="bg-primary text-white p-8 shadow-luxury border border-primary relative overflow-hidden">
               <div className="absolute top-0 right-0 p-24 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
               <h3 className="text-lg font-serif mb-6 relative z-10">Executive Alerts</h3>
               <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                     <div className="p-2 bg-accent/20 rounded text-accent">
                        <AlertTriangle size={16} />
                     </div>
                     <div>
                        <p className="font-bold text-sm">Lead Time Increase</p>
                        <p className="text-xs text-gray-300 mt-1">Italian logistics strike may affect <span className="text-white font-medium">Sterling Residence</span> marble delivery by +2 weeks.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="p-2 bg-green-500/20 rounded text-green-400">
                        <TrendingDown size={16} />
                     </div>
                     <div>
                        <p className="font-bold text-sm">Price Opportunity</p>
                        <p className="text-xs text-gray-300 mt-1">Teak spot prices dropped 5%. Lock rate for <span className="text-white font-medium">Vanguard Estate</span> now.</p>
                     </div>
                  </div>
               </div>
               <div className="mt-8 pt-6 border-t border-white/10">
                  <Button variant="primary" className="w-full text-primary bg-white hover:bg-gray-100 border-none">
                     View All Alerts
                  </Button>
               </div>
           </div>

           <div className="bg-surface p-6 shadow-luxury border border-tertiary flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-gray-400">
                 <Clock size={24} />
              </div>
              <h4 className="font-serif text-primary text-lg mb-2">Fiscal Year Closing</h4>
              <p className="text-sm text-gray-500 mb-6">4 sourcing cycles pending finalization before Q4 close.</p>
              <Button variant="outline" className="w-full">Generate Q4 Report</Button>
           </div>
        </div>

      </div>
    </div>
  );
};