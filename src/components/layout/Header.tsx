import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-20 border-b border-slate-800/60 bg-slate-900/50 backdrop-blur-xl flex items-center justify-between px-8 z-20 sticky top-0">
      <div>
        <h1 className="text-xl font-semibold text-white tracking-tight">Vulnerability Dashboard</h1>
        <p className="text-xs text-slate-400 mt-0.5">Overview of source code security</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Model Selector */}
        <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-1.5 shadow-inner">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <span className="text-sm text-slate-300 font-medium">AI Model: Gemini Pro (Cloud)</span>
        </div>
        
        {/* Run Scan Button */}
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium shadow-lg shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Select Folder & Scan
        </button>
      </div>
    </header>
  );
};

export default Header;
