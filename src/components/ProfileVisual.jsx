import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheckCircle } from 'react-icons/fi';

export default function ProfileVisual() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-[340px] lg:max-w-[380px] mx-auto">
      {/* Glow sutil ao redor da foto */}
      <div className="absolute -inset-3 bg-gradient-to-r from-accent/20 via-cyan-500/15 to-accent/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-700 animate-pulse pointer-events-none" />

      {/* Container minimalista */}
      <div className="relative w-full rounded-3xl p-6 sm:p-7 bg-[#0a0a0c]/90 border border-cyan-500/25 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
        
        {/* Grid sutil */}
        <div 
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '22px 22px'
          }}
        />

        {/* Foto */}
        <div className="flex flex-col items-center text-center mb-5 relative z-10">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-accent via-cyan-400 to-accent p-[3px] shadow-2xl mb-4 group-hover:scale-[1.02] transition-transform duration-500">
            <img
              src="/jefferson-avatar.jpg"
              alt="Jefferson Teles"
              className="w-full h-full rounded-[14px] object-cover filter contrast-105 saturate-105"
            />
            <div className="absolute -bottom-2 -right-2 bg-black border-2 border-accent rounded-full p-1.5 text-accent shadow-2xl">
              <FiCheckCircle size={16} />
            </div>
          </div>

          <p className="text-[0.85rem] text-accent font-mono uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/25 shadow-[0_0_10px_rgba(226,166,61,0.12)]">
            {t('hero.role')}
          </p>
          <p className="text-[0.7rem] text-[#777] font-mono mt-1">Cascavel, Paraná</p>
        </div>
      </div>
    </div>
  );
}
