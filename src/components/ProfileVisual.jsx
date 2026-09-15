import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheckCircle, FiTerminal, FiCpu, FiShield, FiCode } from 'react-icons/fi';

export default function ProfileVisual() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-[380px] lg:max-w-[420px] mx-auto">
      {/* Background ambient neon glow aura */}
      <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 via-cyan-500/20 to-accent/30 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-700 animate-pulse pointer-events-none" />

      {/* Glassmorphic Container */}
      <div className="relative w-full rounded-3xl p-6 sm:p-7 bg-[#0a0a0c]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
        
        {/* Cyberpunk grid overlay background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '25px 25px'
          }}
        />

        {/* Real Photo Portrait with Neon Cyberpunk Frame */}
        <div className="flex flex-col items-center text-center mb-5 relative z-10">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-accent via-cyan-400 to-accent p-[3px] shadow-2xl mb-4 group-hover:scale-[1.02] transition-transform duration-500">
            <img
              src="/jefferson-avatar.jpg"
              alt="Jefferson Teles"
              className="w-full h-full rounded-[14px] object-cover filter contrast-105 saturate-105"
            />
            {/* Verified badge */}
            <div className="absolute -bottom-2 -right-2 bg-black border-2 border-accent rounded-full p-1.5 text-accent shadow-2xl">
              <FiCheckCircle size={16} />
            </div>
            {/* HUD Corner markers */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
          </div>

          <p className="text-[0.8rem] text-accent font-mono uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/30 shadow-[0_0_10px_rgba(226,166,61,0.15)]">
            Software Developer & Support N2
          </p>
          <p className="text-[0.7rem] text-[#777] font-mono mt-1">Cascavel, Paraná</p>
        </div>

        {/* Floating Technical Badges */}
        <div className="grid grid-cols-2 gap-2.5 mb-4 relative z-10">
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-cyan-500/20 text-xs text-white/90 font-mono shadow-inner hover:border-cyan-500/50 transition-colors">
            <FiTerminal className="text-cyan-400 flex-shrink-0" size={14} />
            <span>Linux & Docker</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-accent/20 text-xs text-white/90 font-mono shadow-inner hover:border-accent/50 transition-colors">
            <FiCpu className="text-accent flex-shrink-0" size={14} />
            <span>Python & Java</span>
          </div>
        </div>

        {/* Mini Terminal Status Footer */}
        <div className="px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-[0.7rem] font-mono text-white/60 flex items-center justify-between relative z-10">
          <span className="text-accent flex items-center gap-1.5">
            <FiCode size={12} /> status:
          </span>
          <span className="text-green-400">ready_for_hire.sh</span>
        </div>
      </div>
    </div>
  );
}
