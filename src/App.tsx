import React, { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden selection:bg-cyan-500/30">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col h-screen relative">
        {/* Subtle background glow */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 z-10 w-full relative">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'scans' && <div className="p-10 text-center text-slate-400">Scan History Implementation Pending</div>}
          {activeTab === 'settings' && <div className="p-10 text-center text-slate-400">Settings Implementation Pending</div>}
        </main>
      </div>
    </div>
  );
}

export default App;
