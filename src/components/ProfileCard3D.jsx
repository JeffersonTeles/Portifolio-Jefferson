import React from 'react';
import { FiGithub, FiLinkedin, FiCheckCircle, FiTerminal, FiCpu, FiShield } from 'react-icons/fi';

export default function ProfileCard3D() {
  return (
    <div className="relative w-full max-w-[390px] mx-auto group">
      {/* Outer futuristic neon aura with amber & cyan gradient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 via-cyan-500/30 to-accent/40 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none" />

      <div className="relative w-full rounded-3xl p-7 bg-[#0a0a0c]/95 border border-white/20 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Top industrial tech status bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent text-[0.75rem] font-mono shadow-[0_0_10px_rgba(226,166,61,0.25)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            20 anos · Disponível Júnior
          </div>
          <span className="text-[0.7rem] font-mono text-white/50 tracking-widest">CASCAVEL, PR</span>
        </div>

        {/* Real Photo Portrait with Techwear / Smart Casual Framing */}
        <div className="flex flex-col items-center text-center mb-6 relative">
          <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-tr from-accent via-cyan-400 to-accent p-[3px] shadow-2xl mb-4">
            <img
              src="/jefferson-avatar.jpg"
              alt="Jefferson Teles"
              className="w-full h-full rounded-[14px] object-cover filter contrast-105"
            />
            {/* Verified tech badge */}
            <div className="absolute -bottom-2 -right-2 bg-black border-2 border-accent rounded-full p-1.5 text-accent shadow-xl">
              <FiCheckCircle size={16} />
            </div>
            {/* Cyberpunk HUD Corner Accents */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-accent" />
            <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-accent" />
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
            Jefferson Teles
          </h3>
          <p className="text-[0.8rem] text-accent font-mono mt-1 uppercase tracking-widest bg-accent/10 px-3 py-0.5 rounded-md border border-accent/20">
            Software Developer & Support N2
          </p>
        </div>

        {/* Professional Specs Grid (Smart Casual / Techwear vibe) */}
        <div className="grid grid-cols-2 gap-2.5 mb-6 text-left">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/90 font-mono">
            <FiTerminal className="text-accent flex-shrink-0" size={15} />
            <span>Linux & Docker</span>
          </div>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/90 font-mono">
            <FiCpu className="text-accent flex-shrink-0" size={15} />
            <span>Python & Java</span>
          </div>
        </div>

        {/* Social Links with Spark Hover */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/JeffersonTeles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-xs text-white transition-all duration-300 font-medium spark-hover"
          >
            <FiGithub size={15} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/jeffersonteles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-xs text-white transition-all duration-300 font-medium spark-hover"
          >
            <FiLinkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
