import React from 'react';

const HUDOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] hidden lg:block overflow-hidden">
      {/* Top Left - Location Coordinates */}
      <div className="absolute top-8 left-12 font-mono text-[8px] tracking-[0.2em] text-dark-accent/40 uppercase">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-dark-accent animate-pulse" />
            LOC: 24.9578° S, 53.4595° W
          </div>
          <div className="opacity-50">CASCAVEL // PR // BRASIL</div>
        </div>
      </div>

      {/* Top Right - Status Logs */}
      <div className="absolute top-8 right-12 font-mono text-[8px] tracking-[0.2em] text-dark-terminal/40 uppercase text-right">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-end gap-2">
            SYSTEM_STATUS: STABLE
            <span className="w-1 h-1 bg-dark-terminal animate-pulse" />
          </div>
          <div className="opacity-50 flex items-center justify-end gap-2">
            UPTIME: 99.9%
            <span className="w-1 h-1 bg-dark-terminal opacity-50" />
          </div>
        </div>
      </div>

      {/* Bottom Corners - Angular HUD lines */}
      <div className="absolute bottom-12 left-12 w-32 h-px bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      <div className="absolute bottom-12 left-12 h-32 w-px bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      
      <div className="absolute bottom-12 right-12 w-32 h-px bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      <div className="absolute bottom-12 right-12 h-32 w-px bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />

      {/* Grid Scan Line (Efeito 2) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-dark-accent/10 blur-sm animate-scanning" />
    </div>
  );
};

export default HUDOverlay;
