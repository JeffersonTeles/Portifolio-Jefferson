import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-premium-bg py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-premium-accent/30 to-transparent" />
      
      <div className="premium-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-white font-bold tracking-tighter text-xl uppercase">Jefferson Teles</span>
            <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.4em]">
              Software Architecture • Product Design
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-10">
              <a 
                href="https://github.com/JeffersonTeles" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors"
              >
                GitHub Profile
              </a>
              <div className="w-px h-4 bg-white/10 hidden md:block" />
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-dark-terminal animate-pulse shadow-[0_0_10px_#00ff88]" />
                <span className="font-mono text-[9px] text-dark-terminal uppercase tracking-widest">Core_Uplink: Online</span>
              </div>
            </div>

            <p className="text-[9px] font-mono text-white/10 uppercase tracking-[0.2em]">
              © 2026 Jefferson Teles • Cascavel, PR • South America / Earth
            </p>
          </div>
        </div>

        {/* Technical Attribution */}
        <div className="mt-20 pt-10 border-t border-white/[0.02] text-center">
           <span className="font-mono text-[8px] text-white/5 uppercase tracking-[0.6em]">
             Built with React • Vite • Tailwind • Framer Motion
           </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
