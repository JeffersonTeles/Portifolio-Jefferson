import React from 'react';

const HolographicOverlay = () => {
  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none overflow-hidden opacity-[0.03]">
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] [background-size:100%_4px,3px_100%]" />
      
      {/* Static Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay animate-pulse" />

      {/* Screen Flicker */}
      <div className="absolute inset-0 bg-white opacity-[0.01] animate-flicker pointer-events-none" />
      
      <style>{`
        @keyframes flicker {
          0% { opacity: 0.01; }
          5% { opacity: 0.02; }
          10% { opacity: 0.01; }
          15% { opacity: 0.03; }
          25% { opacity: 0.01; }
          30% { opacity: 0.04; }
          100% { opacity: 0.01; }
        }
        .animate-flicker {
          animation: flicker 0.15s infinite;
        }
      `}</style>
    </div>
  );
};

export default HolographicOverlay;
