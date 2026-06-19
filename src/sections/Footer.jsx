import React from "react";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/[0.03] relative overflow-hidden">
      <div className="premium-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-white font-bold tracking-tight text-2xl uppercase">
              Jefferson Teles
            </span>
            <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.4em]">
              Technical Architecture • Digital Craftsmanship
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex items-center gap-12">
              <a
                href="https://github.com/JeffersonTeles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-medium tracking-widest uppercase text-white/30 hover:text-white transition-colors"
              >
                GitHub Profile
              </a>
              <div className="w-px h-4 bg-white/5 hidden md:block" />
              <a
                href="https://linkedin.com/in/jeffersonteles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-medium tracking-widest uppercase text-white/30 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <div className="w-px h-4 bg-white/5 hidden md:block" />
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-white/40 animate-pulse shadow-glow" />
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
                  System_Active: Q3_2026
                </span>
              </div>
            </div>

            <p className="text-[9px] font-mono text-white/10 uppercase tracking-[0.2em]">
              © 2026 Jefferson Teles • Cascavel, PR • Brazil
            </p>
          </div>
        </div>

        {/* Technical Attribution */}
        <div className="mt-24 pt-12 border-t border-white/[0.02] text-center">
          <span className="font-mono text-[8px] text-white/5 uppercase tracking-[0.6em]">
            Engineered with React • Framer Motion • Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
