import React from 'react';
import OverviewCards from './OverviewCards';
import VulnerabilityList from './VulnerabilityList';

const Dashboard: React.FC = () => {
  const vulnerabilities = [
    {
      id: "VULN-001",
      severity: "critical",
      type: "Meet HR For Project",
      file: "SQL Injection found",
    },
    {
      id: "VULN-002",
      severity: "high",
      type: "Boss Appointment",
      file: "XSS vulnerable code",
    }
  ];

  return (
    <div className="space-y-8 w-full max-w-[1400px] mx-auto px-2">
      <OverviewCards />
      
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
        <div>
           <VulnerabilityList vulnerabilities={vulnerabilities} />
        </div>
        
        {/* Right side panel like "Month Goal's" from user image */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-[18px]">Weekly Goals</h3>
             <div className="text-xs font-bold bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full flex items-center gap-2">
               1/4 
               <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
             </div>
          </div>
          
          <div className="space-y-5 flex-1">
            {['Fix Auth Service SQLi', 'Update NPM dependencies', 'Review login flow logic', 'Read security report'].map((goal, i) => (
              <div key={i} className="flex items-center gap-4 text-gray-500 font-bold group cursor-pointer hover:text-black transition-colors text-[15px]">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${i === 0 ? 'bg-black text-white' : 'bg-gray-100 text-transparent group-hover:bg-gray-300'}`}>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom section matching "Last project's" from user image */}
      <div className="pt-2">
        <h3 className="font-bold text-gray-500 mb-5 tracking-wide text-[15px]">Recent Scans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Auth Service API', 'Payment Gateway UI', 'Backend Engine'].map((proj, i) => (
            <div key={i} className="bg-black text-white rounded-[32px] p-7 shadow-md flex justify-between items-center hover:-translate-y-1 transition-transform cursor-pointer border border-gray-800">
               <div>
                  <h4 className="font-bold text-lg tracking-tight mb-2">{proj}</h4>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                    {i === 0 ? 'In Progress' : 'Completed'}
                  </div>
                  {i === 0 && <p className="text-[10px] text-gray-500 font-medium mt-2 leading-tight max-w-[150px]">Done: Create a new and unique abstract AST parser</p>}
               </div>
               <div className="w-[50px] h-[50px] rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-bold shrink-0">
                 {i === 0 ? '95%' : '100%'}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
