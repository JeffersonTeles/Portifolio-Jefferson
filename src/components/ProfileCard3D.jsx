import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiCheckCircle } from 'react-icons/fi';

export default function ProfileCard3D() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: (-y / rect.height) * 15,
      y: (x / rect.width) * 15,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-full max-w-[380px] mx-auto perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full rounded-2xl p-6 bg-gradient-to-br from-white/[0.1] to-white/[0.03] border border-white/20 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-transform duration-200 ease-out relative overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Holographic light reflection sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-50" />

        {/* Top badge */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent text-[0.75rem] font-mono shadow-[0_0_10px_rgba(226,166,61,0.3)]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponível para vaga Júnior
          </div>
          <span className="text-xs font-mono text-white/50">ID: 2026.JT</span>
        </div>

        {/* Real Photo Avatar */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent via-white/30 to-accent p-[2px] shadow-2xl flex-shrink-0">
            <img
              src="/jefferson-avatar.jpg"
              alt="Jefferson Teles"
              className="w-full h-full rounded-[14px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
              Jefferson Teles <FiCheckCircle className="text-accent" size={16} />
            </h3>
            <p className="text-xs text-white/70 font-mono mt-1">Software Developer & Support N2</p>
            <p className="text-[11px] text-accent/90 font-mono mt-0.5">Cascavel, Paraná</p>
          </div>
        </div>

        {/* Details list */}
        <div className="space-y-2.5 mb-6 border-t border-b border-white/10 py-4 text-xs font-mono text-white/80 relative z-10">
          <div className="flex justify-between">
            <span className="text-white/45">Formação:</span>
            <span>Eng. Software (Jan/2027)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/45">Core Stack:</span>
            <span>Linux · Docker · React · Python</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/45">Experiência:</span>
            <span>6+ anos em TI e Suporte</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between relative z-10">
          <a
            href="https://github.com/JeffersonTeles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-xs text-white transition-colors font-medium"
          >
            <FiGithub size={15} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/jeffersonteles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-xs text-white transition-colors font-medium"
          >
            <FiLinkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
