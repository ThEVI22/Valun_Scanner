import React from 'react';

const OverviewCards: React.FC = () => {
  const stats = [
    { label: 'Files Scanned', value: '1,248', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'from-blue-500 to-cyan-400', bg: 'bg-blue-500/10' },
    { label: 'Critical Issues', value: '1', icon: 'M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-red-500 to-rose-600', bg: 'bg-red-500/10' },
    { label: 'High Severity', value: '4', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'from-orange-500 to-amber-500', bg: 'bg-orange-500/10' },
    { label: 'AI Fixes Available', value: '5', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', color: 'from-fuchsia-500 to-purple-600', bg: 'bg-fuchsia-500/10' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 top-0 mt-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              <h3 className="text-3xl font-bold text-white mt-1 tracking-tight">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${stat.bg} border border-slate-700/40`}>
                <svg className="w-8 h-8 opacity-80" style={{ fill: 'url(#gradient-' + index + ')' }} viewBox="0 0 24 24" stroke="currentColor">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className={stat.color.split(' ')[0].replace('from-', 'text-')} stopColor="currentColor" />
                        <stop offset="100%" className={stat.color.split(' ')[1].replace('to-', 'text-')} stopColor="currentColor" />
                      </linearGradient>
                    </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} className={`text-transparent bg-clip-text bg-gradient-to-br ${stat.color}`} />
                </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
