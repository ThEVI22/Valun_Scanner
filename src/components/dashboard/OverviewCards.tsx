import React from 'react';

const OverviewCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Dark Theme Card (Like "Over all information" in reference) */}
      <div className="bg-black text-white rounded-[32px] p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-semibold text-[17px] text-gray-200">Security Overview</h3>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center justify-between mb-8 px-1">
          <div className="flex items-center gap-3">
            <span className="text-[64px] font-normal leading-none tracking-tighter">43</span>
            <span className="text-gray-400 text-[13px] leading-[1.3] font-medium tracking-wide">Issues Found<br/>for all time</span>
          </div>
          <div className="w-[1px] h-12 bg-gray-800/80"></div>
          <div className="flex items-center gap-3">
            <span className="text-[64px] font-normal leading-none tracking-tighter">2</span>
            <span className="text-gray-400 text-[13px] leading-[1.3] font-medium tracking-wide">Critical<br/>Threats</span>
          </div>
        </div>
        
        <div className="w-full bg-gray-800 rounded-full h-1.5 mb-6">
          <div className="bg-white h-1.5 rounded-full" style={{ width: '60%' }}></div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white text-black rounded-[28px] py-6 px-2 flex flex-col items-center justify-between text-center min-h-[140px] shadow-sm">
            <div className="w-7 h-7 border-[2.5px] border-black rounded-full flex items-center justify-center"><div className="w-2.5 h-2.5 bg-black rounded-full"></div></div>
            <div className="flex flex-col mt-2">
              <span className="font-extrabold text-[22px] leading-none mb-1.5">32</span>
              <span className="text-[12px] font-semibold text-gray-500 leading-tight tracking-wide">Files<br/>Scanned</span>
            </div>
          </div>
          <div className="bg-white text-black rounded-[28px] py-6 px-2 flex flex-col items-center justify-between text-center min-h-[140px] shadow-sm">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="flex flex-col mt-2">
              <span className="font-extrabold text-[22px] leading-none mb-1.5">5</span>
              <span className="text-[12px] font-semibold text-gray-500 leading-tight tracking-wide">AI<br/>Fixes</span>
            </div>
          </div>
          <div className="bg-white text-black rounded-[28px] py-6 px-2 flex flex-col items-center justify-between text-center min-h-[140px] shadow-sm">
            <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex flex-col mt-2">
              <span className="font-extrabold text-[22px] leading-none mb-1.5">25</span>
              <span className="text-[12px] font-semibold text-gray-500 leading-tight tracking-wide">Total<br/>Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Line Chart Card (White) */}
      <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
         <div className="flex justify-between items-start mb-6">
          <h3 className="font-semibold text-[17px]">Weekly Threat Log</h3>
          <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
             <div className="flex items-center gap-1"><div className="w-2 h-2 bg-black rounded-full"></div> Critical</div>
             <div className="flex items-center gap-1"><div className="w-2 h-2 bg-gray-300 rounded-full"></div> Warning</div>
          </div>
        </div>
        
        {/* Fake decorative chart based on reference */}
        <div className="flex-1 relative mt-4">
           <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
             <defs>
               <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#000" stopOpacity="0.1" />
                 <stop offset="100%" stopColor="#fff" stopOpacity="0" />
               </linearGradient>
             </defs>
             {/* Background wave */}
             <path d="M0 40 L20 20 L40 45 L60 10 L80 35 L100 25 V50 H0 Z" fill="url(#fade)" />
             <path d="M0 40 L20 20 L40 45 L60 10 L80 35 L100 25" fill="none" stroke="#e5e7eb" strokeWidth="2" />
             {/* Foreground wave */}
             <path d="M0 30 L15 35 L35 15 L50 40 L70 5 L85 20 L100 10" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
             
             {/* Data point dot */}
             <circle cx="70" cy="5" r="3" fill="#000" />
             <rect x="65" y="-5" width="10" height="6" rx="1" fill="#000" />
             <text x="70" y="-1" fill="#fff" fontSize="3" textAnchor="middle" fontWeight="bold">5</text>
           </svg>
        </div>
        <div className="flex justify-between text-xs font-bold text-gray-400 mt-4 px-2 tracking-widest uppercase">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center">S</span>
        </div>
      </div>

      {/* Progress Circle Card */}
      <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-[17px]">Security Score</h3>
          <button className="text-gray-400 hover:text-black">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
        
        <div className="mt-2 mb-6">
          <span className="font-extrabold text-2xl">85%</span> <span className="text-gray-500 text-sm font-medium">secured codebase*</span>
        </div>

        <div className="flex justify-between items-center mb-6">
           <div className="space-y-3 shrink-0">
             <div className="text-[10px] font-bold text-gray-400 tracking-wider">OVERVIEW</div>
             <div className="flex items-center gap-2 text-sm font-semibold"><div className="w-2 h-2 rounded-full bg-black"></div> Authenticated</div>
             <div className="flex items-center gap-2 text-sm font-semibold text-gray-500"><div className="w-2 h-2 rounded-full bg-gray-400"></div> Sanitized</div>
             <div className="flex items-center gap-2 text-sm font-semibold text-gray-400"><div className="w-2 h-2 rounded-full bg-gray-200"></div> Encrypted</div>
           </div>
           
           <div className="relative w-28 h-28 mr-4">
              {/* Fake progress circles */}
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f3f4f6" strokeWidth="4" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#000" strokeWidth="4" strokeDasharray="85, 100" />
                
                <path d="M18 6 a 12 12 0 0 1 0 24 a 12 12 0 0 1 0 -24" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                <path d="M18 6 a 12 12 0 0 1 0 24 a 12 12 0 0 1 0 -24" fill="none" stroke="#9ca3af" strokeWidth="3" strokeDasharray="60, 100" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-sm">85%</div>
           </div>
        </div>

        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          <button className="flex-1 rounded-full border-2 border-black font-semibold text-sm hover:bg-gray-50 transition-colors">
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
