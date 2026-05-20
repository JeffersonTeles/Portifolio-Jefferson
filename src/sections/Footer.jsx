import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-12 bg-dark-bg border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="font-mono text-[10px] text-dark-muted uppercase tracking-[0.2em]">
              Jefferson Teles © 2026
            </p>
            <p className="font-mono text-[8px] text-white/10 uppercase tracking-tighter">
              Desenvolvedor em Construção • Cascavel/PR
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-8">
              <a 
                href="https://github.com/JeffersonTeles/Portifolio-Jefferson" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-dark-muted hover:text-white transition-colors"
              >
                <FiGithub /> Source Code
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dark-terminal animate-pulse" />
              <span className="font-mono text-[9px] text-dark-terminal uppercase tracking-widest opacity-60">Status: Secure_Uplink_Online</span>
            </div>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-white/[0.02] text-center">
           <p className="font-mono text-[8px] text-white/5 uppercase tracking-[0.4em]">
             Built with React + Vite + Tailwind + Framer Motion
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
