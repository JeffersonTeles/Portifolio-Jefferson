import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-12 bg-dark-bg border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] font-mono text-dark-muted uppercase tracking-widest">
              Jefferson Teles © 2026
            </p>
            <p className="text-[9px] font-mono text-white/20 uppercase tracking-tighter">
              Feito com React + Vite + Tailwind + Framer Motion
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/JeffersonTeles/Portifolio-Jefferson" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-dark-muted hover:text-white transition-colors"
            >
              <FiGithub /> Source Code
            </a>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dark-terminal animate-pulse" />
              <span className="text-[10px] font-mono text-dark-terminal uppercase tracking-widest">Vercel Status: Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
