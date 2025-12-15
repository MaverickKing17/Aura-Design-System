import React, { useState, useMemo } from 'react';
import { AppScreen, Project } from '../types';
import { MOCK_PROJECTS } from '../constants';
import { Button } from './Button';
import { Plus, TrendingUp, ShieldCheck, Clock, Filter } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DashboardProps {
  onNavigate: (screen: AppScreen) => void;
}

const PCIData = [
  { name: 'Verified', value: 85 },
  { name: 'Pending', value: 10 },
  { name: 'Risk', value: 5 },
];

const COLORS = ['#2E7D32', '#D4AF37', '#C62828'];

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  const locations = useMemo(() => {
    return ['All', ...Array.from(new Set(MOCK_PROJECTS.map(p => p.location)))];
  }, []);

  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter(project => {
        const matchStatus = statusFilter === 'All' || project.status === statusFilter;
        const matchLocation = locationFilter === 'All' || project.location === locationFilter;
        return matchStatus && matchLocation;
    });
  }, [statusFilter, locationFilter]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-end border-b border-gray-200 pb-6">
        <div>
          <h2 className="text-3xl font-serif text-primary mb-2">Executive Dashboard</h2>
          <p className="text-gray-500 font-sans">Welcome back, Victoria. Your Procurement Certainty Index is <span className="text-success font-bold">94.2</span>.</p>
        </div>
        <Button 
          variant="primary" 
          icon={<Plus size={18} />}
          onClick={() => onNavigate(AppScreen.UPLOAD_SPECS)}
        >
          New Sourcing Project
        </Button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface p-6 shadow-luxury border-t-4 border-accent">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Active Sourcing</h3>
            <Clock className="text-accent" size={20} />
          </div>
          <div className="text-4xl font-serif text-primary mb-1">12</div>
          <p className="text-xs text-green-600 flex items-center"><TrendingUp size={12} className="mr-1"/> +2 from last week</p>
        </div>

        <div className="bg-surface p-6 shadow-luxury border-t-4 border-primary">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Tokenized Volume</h3>
            <ShieldCheck className="text-primary" size={20} />
          </div>
          <div className="text-4xl font-serif text-primary mb-1">$4.2M</div>
          <p className="text-xs text-gray-500">Secured via Polygon Network</p>
        </div>

        <div className="bg-surface p-6 shadow-luxury border-t-4 border-success">
           <div className="flex justify-between items-start mb-1">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Procurement Certainty</h3>
          </div>
          <div className="h-24 w-full flex items-center justify-between">
             <div className="text-4xl font-serif text-primary">94%</div>
             <div className="w-24 h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={PCIData}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={35}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {PCIData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-end mb-4 gap-4">
            <h3 className="text-xl font-serif text-primary">Recent Projects</h3>
            <div className="flex gap-3">
                 <div className="relative">
                    <select 
                        className="appearance-none bg-surface border border-gray-200 text-sm pl-4 pr-8 py-2 rounded shadow-sm focus:outline-none focus:border-accent text-primary cursor-pointer hover:border-gray-300 transition-colors"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All Statuses</option>
                        <option value="Draft">Draft</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Committed">Committed</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>

                 <div className="relative">
                    <select 
                        className="appearance-none bg-surface border border-gray-200 text-sm pl-4 pr-8 py-2 rounded shadow-sm focus:outline-none focus:border-accent text-primary cursor-pointer hover:border-gray-300 transition-colors"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    >
                         {locations.map(loc => (
                             <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>
                         ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
            <div key={project.id} className="bg-surface p-6 shadow-luxury group hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
               <div className="flex justify-between items-start">
                 <div>
                   <h4 className="text-lg font-bold text-primary mb-1">{project.name}</h4>
                   <p className="text-sm text-gray-500 font-mono mb-4">{project.location}</p>
                   <div className="flex gap-2">
                     <span className={`px-2 py-1 text-xs font-bold uppercase tracking-wide border ${
                       project.status === 'Committed' ? 'border-success text-success' : 
                       project.status === 'In Progress' ? 'border-accent text-yellow-700' : 'border-gray-300 text-gray-400'
                     }`}>
                       {project.status}
                     </span>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-xs text-gray-400 mb-2">Last Activity: {project.lastActivity}</p>
                   <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onNavigate(AppScreen.UPLOAD_SPECS)}
                   >
                     Manage
                   </Button>
                 </div>
               </div>
            </div>
          ))
          ) : (
             <div className="col-span-full py-12 flex flex-col items-center justify-center text-gray-400 bg-surface rounded border border-dashed border-gray-300">
                 <p className="mb-2 font-serif text-lg">No projects found</p>
                 <p className="text-sm">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};