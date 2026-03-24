import React, { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen text-gray-900 font-sans overflow-hidden selection:bg-black selection:text-white p-4 gap-6">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col h-full relative overflow-hidden rounded-3xl">
        <Header />
        
        <main className="flex-1 overflow-y-auto pb-6 w-full relative custom-scrollbar">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'scans' && <div className="p-10 text-center text-gray-500 font-medium bg-white rounded-3xl m-2 shadow-sm">Scan History Implementation Pending</div>}
          {activeTab === 'settings' && <div className="p-10 text-center text-gray-500 font-medium bg-white rounded-3xl m-2 shadow-sm">Settings Implementation Pending</div>}
        </main>
      </div>
    </div>
  );
}

export default App;
