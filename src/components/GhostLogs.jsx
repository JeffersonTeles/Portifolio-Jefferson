import React, { useState, useEffect } from 'react';

const GhostLogs = () => {
  const [logs, setLogs] = useState([]);
  
  const techStrings = [
    "MEM_ALLOC: 0x44af2", "CPU_LOAD: 12%", "UPLINK_SYNC: ACTIVE", 
    "FRAME_LATENCY: 2ms", "BUFFER_STREAM: OK", "TCP_HANDSHAKE: SECURE",
    "KERNEL_REV: 4.0.2", "XRAY_LENS: READY", "AI_CORE: ONLINE"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        id: Date.now(),
        text: techStrings[Math.floor(Math.random() * techStrings.length)],
        x: Math.random() * 90 + "%",
        y: 110,
        speed: 1 + Math.random() * 2
      };
      setLogs(prev => [...prev.slice(-10), newLog]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-[0.03]">
      {logs.map(log => (
        <div
          key={log.id}
          className="absolute font-mono text-[7px] text-white whitespace-nowrap animate-float-up"
          style={{ 
            left: log.x,
            bottom: "-10%",
            animationDuration: `${15 / log.speed}s`
          }}
        >
          {log.text}
        </div>
      ))}
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
        .animate-float-up {
          animation: float-up linear forwards;
        }
      `}</style>
    </div>
  );
};

export default GhostLogs;
