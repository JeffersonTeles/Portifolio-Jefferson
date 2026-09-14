import React from 'react';
import { FiGithub, FiLinkedin, FiCheckCircle, FiTerminal, FiCpu } from 'react-icons/fi';

export default function ProfileCard3D() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      {/* Outer glowing neon aura */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-sky-500/20 to-accent/30 rounded-3xl blur-2xl opacity-70 animate-pulse pointer-events-none" />

      <div className="relative w-full rounded-3xl p-7 bg-[#0d0d0d]/90 border border-white/15 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Top status bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[0.75rem] font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponível para vaga Júnior
          </div>
          <span className="text-xs font-mono text-white/40">Cascavel, PR</span>
        </div>

        {/* Real Photo Portrait */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-accent via-white/40 to-accent p-[3px] shadow-2xl mb-4 group">
            <img
              src="/jefferson-avatar.jpg"
              alt="Jefferson Teles"
              className="w-full h-full rounded-[14px] object-cover"
            />
            <div className="absolute -bottom-2 -right-2 bg-black border border-accent/40 rounded-full p-1.5 text-accent shadow-lg">
              <FiCheckCircle size={16} />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight">Jefferson Teles</h3>
          <p className="text-xs text-accent font-mono mt-1 uppercase tracking-wider">Software Developer & Support N2</p>
        </div>

        {/* Tech Badges / Skills Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/80 font-mono">
            <FiTerminal className="text-accent" size={14} /> Linux & Docker
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/80 font-mono">
            <FiCpu className="text-accent" size={14} /> Python & Java
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/JeffersonTeles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-xs text-white transition-colors font-medium"
          >
            <FiGithub size={15} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/jeffersonteles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-xs text-white transition-colors font-medium"
          >
            <FiLinkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
