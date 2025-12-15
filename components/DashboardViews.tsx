import React, { useState } from 'react';
import { 
  CreditCard, Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft, 
  Package, Truck, CheckCircle2, AlertCircle, Search, Star, ShieldCheck, 
  User, Lock, Bell
} from 'lucide-react';
import { Button } from './Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// --- WALLET VIEW ---
export const WalletView: React.FC = () => {
  const transactions = [
    { id: 1, type: 'Payment', to: 'Tuscany Stoneworks', amount: '-$42,500.00', date: 'Today, 10:23 AM', status: 'Completed' },
    { id: 2, type: 'Deposit', from: 'Sterling Main Account', amount: '+$150,000.00', date: 'Yesterday', status: 'Completed' },
    { id: 3, type: 'Escrow', to: 'Apex Materials', amount: '-$12,450.00', date: 'Oct 24, 2025', status: 'Locked' },
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <h2 className="text-3xl font-serif text-primary">Digital Wallet & Escrow</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Balance Card */}
        <div className="bg-primary text-white p-8 rounded-xl shadow-luxury relative overflow-hidden">
           <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-1">Total Liquidity</p>
           <h3 className="text-4xl font-mono font-bold mb-8">$2,450,890.00</h3>
           
           <div className="flex gap-4">
             <div className="bg-white/10 px-4 py-2 rounded flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">USDC: $1.2M</span>
             </div>
             <div className="bg-white/10 px-4 py-2 rounded flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">USD: $1.25M</span>
             </div>
           </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
           <button className="bg-surface border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all flex flex-col items-center justify-center gap-3 group">
              <div className="bg-green-50 p-4 rounded-full group-hover:bg-green-100 transition-colors">
                 <ArrowDownLeft className="text-success" size={24} />
              </div>
              <span className="font-bold text-primary">Deposit Funds</span>
           </button>
           <button className="bg-surface border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all flex flex-col items-center justify-center gap-3 group">
              <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
                 <ArrowUpRight className="text-blue-600" size={24} />
              </div>
              <span className="font-bold text-primary">Withdraw / Pay</span>
           </button>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-surface rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
           <h3 className="font-bold text-primary text-lg">Recent Transactions</h3>
           <Button variant="text" size="sm">View All</Button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Entity</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map(tx => (
              <tr key={tx.id} className="hover:bg-gray-50/50">
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tx.type === 'Deposit' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-primary">{tx.to || tx.from}</td>
                <td className="px-6 py-4 text-gray-500 text-sm">{tx.date}</td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-1.5">
                     <div className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Completed' ? 'bg-success' : 'bg-accent'}`}></div>
                     <span className="text-sm text-gray-600">{tx.status}</span>
                   </div>
                </td>
                <td className={`px-6 py-4 text-right font-mono font-medium ${tx.amount.startsWith('+') ? 'text-success' : 'text-primary'}`}>
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
  const data = [
    { name: 'Jan', spend: 4000 },
    { name: 'Feb', spend: 3000 },
    { name: 'Mar', spend: 2000 },
    { name: 'Apr', spend: 2780 },
    { name: 'May', spend: 1890 },
    { name: 'Jun', spend: 2390 },
    { name: 'Jul', spend: 3490 },
  ];

  const pieData = [
    { name: 'Natural Stone', value: 400 },
    { name: 'Hardwoods', value: 300 },
    { name: 'Steel', value: 300 },
    { name: 'Glass', value: 200 },
  ];
  const COLORS = ['#1A2A44', '#D4AF37', '#2C3E50', '#9CA3AF'];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex justify-between items-end">
        <h2 className="text-3xl font-serif text-primary">Procurement Analytics</h2>
        <div className="flex gap-2">
           <select className="bg-white border border-gray-300 rounded px-3 py-1 text-sm">
             <option>Last 6 Months</option>
             <option>YTD</option>
           </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface p-6 rounded-xl shadow-sm border border-gray-200">
           <h3 className="font-bold text-primary mb-6">Monthly Procurement Spend (k$)</h3>
           <div className="h-64">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                 <Bar dataKey="spend" fill="#1A2A44" radius={[4, 4, 0, 0]} barSize={40} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-surface p-6 rounded-xl shadow-sm border border-gray-200">
           <h3 className="font-bold text-primary mb-6">Material Category Split</h3>
           <div className="h-64">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={pieData}
                   innerRadius={60}
                   outerRadius={80}
                   paddingAngle={5}
                   dataKey="value"
                 >
                   {pieData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}
                 </Pie>
                 <Tooltip />
               </PieChart>
             </ResponsiveContainer>
           </div>
           <div className="flex flex-wrap gap-2 justify-center mt-4">
              {pieData.map((entry, index) => (
                <div key={index} className="flex items-center text-xs text-gray-600">
                   <div className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                   {entry.name}
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
  const orders = [
     { id: 'ORD-8921', project: 'Sterling Residence', items: 'Calacatta Oro (120 sq ft)', date: 'Oct 24, 2025', status: 'Processing', total: '$48,250' },
     { id: 'ORD-8920', project: 'Apex Tower', items: 'Structural Glass (4 Panes)', date: 'Oct 20, 2025', status: 'Shipped', total: '$12,400' },
     { id: 'ORD-8815', project: 'Vanguard Estate', items: 'Teak Flooring (500 sq ft)', date: 'Oct 15, 2025', status: 'Delivered', total: '$35,000' },
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <h2 className="text-3xl font-serif text-primary">Order Management</h2>
      
      <div className="bg-surface rounded-xl shadow-sm border border-gray-200">
         <div className="p-6 border-b border-gray-200">
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Active Orders</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">History</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">Issues</button>
            </div>
         </div>
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
               <tr>
                 <th className="px-6 py-4 text-left">Order ID</th>
                 <th className="px-6 py-4 text-left">Project</th>
                 <th className="px-6 py-4 text-left">Items</th>
                 <th className="px-6 py-4 text-left">Date</th>
                 <th className="px-6 py-4 text-left">Status</th>
                 <th className="px-6 py-4 text-right">Total</th>
                 <th className="px-6 py-4 text-center">Action</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-100">
               {orders.map(order => (
                 <tr key={order.id} className="hover:bg-gray-50/50">
                   <td className="px-6 py-4 font-mono text-primary font-medium">{order.id}</td>
                   <td className="px-6 py-4 text-gray-700">{order.project}</td>
                   <td className="px-6 py-4 text-sm text-gray-500">{order.items}</td>
                   <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                   <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                        ${order.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                          order.status === 'Shipped' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                          'bg-green-50 text-green-700 border-green-100'}`}>
                         {order.status === 'Processing' && <Package size={12} className="mr-1"/>}
                         {order.status === 'Shipped' && <Truck size={12} className="mr-1"/>}
                         {order.status === 'Delivered' && <CheckCircle2 size={12} className="mr-1"/>}
                         {order.status}
                      </span>
                   </td>
                   <td className="px-6 py-4 text-right font-medium text-primary">{order.total}</td>
                   <td className="px-6 py-4 text-center">
                      <Button variant="text" size="sm">Details</Button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      </div>
    </div>
  );
};

// --- SUPPLIERS VIEW ---
export const SuppliersView: React.FC = () => {
  const suppliers = [
    { name: 'Tuscany Stoneworks', location: 'Carrara, Italy', rating: 4.9, specialty: 'Marble & Travertine', verified: true, image: 'https://picsum.photos/100/100?random=1' },
    { name: 'Apex Materials', location: 'New York, USA', rating: 4.8, specialty: 'Steel & Glass', verified: true, image: 'https://picsum.photos/100/100?random=2' },
    { name: 'Kyoto Timber Co.', location: 'Kyoto, Japan', rating: 5.0, specialty: 'Sustainable Wood', verified: true, image: 'https://picsum.photos/100/100?random=3' },
    { name: 'Nordic Slate', location: 'Oslo, Norway', rating: 4.7, specialty: 'Roofing Slate', verified: true, image: 'https://picsum.photos/100/100?random=4' },
  ];

  return (
     <div className="animate-fade-in space-y-8">
       <div className="flex justify-between items-end">
         <div>
           <h2 className="text-3xl font-serif text-primary mb-2">Vetted Global Network</h2>
           <p className="text-gray-500">Only top 1% of suppliers meet our provenance standards.</p>
         </div>
         <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search suppliers..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary outline-none" />
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {suppliers.map((s, i) => (
           <div key={i} className="bg-surface p-6 rounded-xl shadow-luxury border border-gray-100 hover:-translate-y-1 transition-transform cursor-pointer group">
              <div className="flex items-start justify-between mb-4">
                 <img src={s.image} alt={s.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 group-hover:border-accent transition-colors" />
                 {s.verified && <ShieldCheck className="text-accent" size={20} />}
              </div>
              <h3 className="font-bold text-lg text-primary mb-1">{s.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{s.location}</p>
              
              <div className="flex items-center justify-between text-sm">
                 <span className="bg-gray-100 px-2 py-1 rounded text-gray-600 text-xs font-medium">{s.specialty}</span>
                 <div className="flex items-center text-accent font-bold">
                    <Star size={12} className="fill-current mr-1" /> {s.rating}
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