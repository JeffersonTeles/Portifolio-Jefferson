import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMapPin, FiCheckCircle } from 'react-icons/fi';

export default function ProfileCard3D() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: (-y / rect.height) * 20,
      y: (x / rect.width) * 20,
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
        className="w-full rounded-2xl p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Top badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[0.7rem] font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponível para vaga Júnior
          </div>
          <span className="text-xs font-mono text-white/40">ID: 2026.JT</span>
        </div>

        {/* Avatar / Photo Representation */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-[#111] p-[2px] shadow-lg">
            <div className="w-full h-full rounded-[14px] bg-[#0d0d0d] flex items-center justify-center font-bold text-xl text-accent">
              JT
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
              Jefferson Teles <FiCheckCircle className="text-accent" size={14} />
            </h3>
            <p className="text-xs text-white/60 font-mono">Software Developer & Support N2</p>
          </div>
        </div>

        {/* Details list */}
        <div className="space-y-3 mb-6 border-t border-b border-white/10 py-4 text-xs font-mono text-white/70">
          <div className="flex justify-between">
            <span className="text-white/40">Localização:</span>
            <span>Cascavel, Paraná</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Formação:</span>
            <span>Eng. Software (Jan/2027)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Core Stack:</span>
            <span>Linux · Docker · React · Python</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between">
          <a
            href="https://github.com/JeffersonTeles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-colors"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/jeffersonteles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-colors"
          >
            <FiLinkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
