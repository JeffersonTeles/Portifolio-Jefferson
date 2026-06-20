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
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="font-mono text-[8px] text-white/10 uppercase tracking-[0.3em]">
              Engineered with
            </span>
            {[
              { name: "React", url: "https://react.dev", version: "18" },
              {
                name: "Framer Motion",
                url: "https://framer.com/motion",
                version: "10",
              },
              {
                name: "Tailwind",
                url: "https://tailwindcss.com",
                version: "3",
              },
              { name: "Vite", url: "https://vitejs.dev", version: "5" },
            ].map((tech, i) => (
              <a
                key={i}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${tech.name} v${tech.version}`}
                className="font-mono text-[8px] text-white/10 uppercase tracking-[0.3em] hover:text-white/40 transition-colors border-b border-white/5 hover:border-white/20 pb-px"
              >
                {tech.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
