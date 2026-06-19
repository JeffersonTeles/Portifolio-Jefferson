import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiGithub, FiCloudDrizzle, FiClock } from 'react-icons/fi';

const AutomationDashboard = () => {
  const [stats, setStats] = useState({
    commits: 0,
    repos: 0,
    temp: '--',
    time: '--:--'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Real GitHub Stats
        const ghRes = await fetch('https://api.github.com/users/JeffersonTeles');
        const ghData = await ghRes.json();
        
        // Real Weather Stats (Cascavel, PR: -24.95, -53.45)
        const weatherRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-24.95&longitude=-53.45&current_weather=true');
        const weatherData = await weatherRes.json();

        setStats({
          commits: 154, // Placeholder for commits (requires complex auth for actual count), but repos are real
          repos: ghData.public_repos || 0,
          temp: Math.round(weatherData.current_weather.temperature) + '°C',
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        });
      } catch (e) {
        console.error("Uplink failed", e);
      }
    };

    fetchData();
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { id: 'GH_REPOS', label: 'Repos_Active', value: stats.repos, icon: FiGithub },
    { id: 'ENV_TEMP', label: 'Local_Temp', value: stats.temp, icon: FiCloudDrizzle },
    { id: 'SYS_TIME', label: 'Cascavel_PR', value: stats.time, icon: FiClock },
  ];

  return (
    <div className="w-full max-w-[240px] glass-panel p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6 border-b border-white/[0.05] pb-3">
        <div className="flex items-center gap-2">
           <FiActivity size={12} className="text-white/40" />
           <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40">Uplink_Live_Data</span>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-glow" />
      </div>
      
      <div className="space-y-5">
        {metrics.map((m) => (
          <div key={m.id} className="space-y-1">
            <div className="flex justify-between items-center px-1">
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">{m.label}</span>
              <span className="text-[10px] font-bold text-white/80 uppercase tabular-nums">{m.value}</span>
            </div>
            <div className="w-full h-[1px] bg-white/[0.03] rounded-full" />
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.05] flex justify-between items-center">
         <span className="text-[7px] font-mono text-white/10 uppercase tracking-[0.3em]">Status: Syncing_Realtime</span>
         <span className="text-[7px] font-mono text-white/10 italic">v4.0.2</span>
      </div>
    </div>
  );
};

export default AutomationDashboard;
