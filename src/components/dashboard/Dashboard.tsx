import React from 'react';
import OverviewCards from './OverviewCards';
import VulnerabilityList from './VulnerabilityList';

const Dashboard: React.FC = () => {
  // Placeholder data for UI demonstration
  const vulnerabilities = [
    {
      id: "VULN-001",
      severity: "critical",
      type: "SQL Injection",
      file: "api/controllers/auth.js",
      line: 42,
      aifix: true,
    },
    {
      id: "VULN-002",
      severity: "high",
      type: "Cross-Site Scripting (XSS)",
      file: "src/components/UserProfile.jsx",
      line: 115,
      aifix: true,
    },
    {
      id: "VULN-003",
      severity: "medium",
      type: "Hardcoded Secret",
      file: "config/database.json",
      line: 5,
      aifix: false,
    }
  ];

  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto pb-10">
      <OverviewCards />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="col-span-2">
          <VulnerabilityList vulnerabilities={vulnerabilities} />
        </div>
        
        <div className="col-span-1">
          {/* AI Copilot Side panel placeholder */}
          <div className="bg-slate-800/30 border border-slate-700/50 backdrop-blur-md rounded-2xl p-6 h-[600px] flex flex-col shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-lg border border-purple-500/30 text-purple-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">AI Security Copilot</h3>
            </div>
            
            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-slate-700/50 rounded-xl bg-slate-800/20 text-slate-500">
              <div className="text-center px-4">
                <p className="text-sm">Click a vulnerability on the left to view the AI analysis and suggested remediation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
