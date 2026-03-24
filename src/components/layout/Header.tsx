import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-24 flex items-center justify-between px-8 bg-transparent z-20 shrink-0">
      <div>
        <h1 className="text-[28px] font-bold text-gray-900 tracking-tight">Hi, User!</h1>
        <p className="text-gray-500 font-medium">Welcome back to Aegis Scanner</p>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full text-[15px] font-semibold transition-all shadow-md flex items-center gap-2">
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          New Scan
        </button>
        
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors relative">
          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-black rounded-full ring-2 ring-white"></span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center ml-2">
            <svg className="w-8 h-8 text-gray-400 mt-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
