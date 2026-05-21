import React from 'react';
import { useSection } from '../context/SectionContext';

const HUDOverlay = () => {
  const { currentSection } = useSection();

  const getModuleInfo = () => {
    switch(currentSection) {
      case 'hero': return 'SYS_INIT // CORE_LINK';
      case 'about': return 'DATA_VAULT // IDENTITY';
      case 'skills': return 'MATRIX_SYNC // CAPABILITIES';
      case 'projects': return 'ARCHIVE_ACCESS // WORKS';
      case 'lab': return 'RESEARCH_LAB // EXPERIMENTS';
      case 'services': return 'UPLINK // SERVICES';
      case 'contact': return 'READY_FOR_COMM // UPLINK';
      default: return 'SYSTEM_IDLE';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] hidden lg:block overflow-hidden">
      {/* Top Left - Location Coordinates */}
      <div className="absolute top-8 left-12 font-mono text-[8px] tracking-[0.2em] text-dark-accent/40 uppercase">
        <div className="flex flex-col gap-1 text-dark-accent">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-dark-accent animate-pulse" />
            LOC: 24.9578° S, 53.4595° W
          </div>
          <div className="opacity-50">CASCAVEL // PR // BRASIL</div>
        </div>
      </div>

      {/* Top Right - Contextual Module Info */}
      <div className="absolute top-8 right-12 font-mono text-[8px] tracking-[0.2em] text-dark-terminal/40 uppercase text-right">
        <div className="flex flex-col gap-1 text-dark-terminal">
          <div className="flex items-center justify-end gap-2">
            CURRENT_MODULE: {getModuleInfo()}
            <span className="w-1 h-1 bg-dark-terminal animate-pulse" />
          </div>
          <div className="opacity-50 flex items-center justify-end gap-2 text-dark-accent">
            SECURITY_CLEARANCE: LVL_GOD
            <span className="w-1 h-1 bg-dark-accent opacity-50" />
          </div>
        </div>
      </div>

      {/* Angular HUD lines */}
      <div className="absolute bottom-12 left-12 w-32 h-px bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      <div className="absolute bottom-12 left-12 h-32 w-px bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      <div className="absolute bottom-12 right-12 w-32 h-px bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      <div className="absolute bottom-12 right-12 h-32 w-px bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />

      {/* Grid Scan Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-dark-accent/10 blur-[2px] animate-scanning" />
    </div>
  );
};

export default HUDOverlay;
