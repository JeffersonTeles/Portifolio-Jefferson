import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-white/40">
              JT<span className="text-accent/40">.</span>
            </span>
            <div className="w-px h-4 bg-white/[0.06]" />
            <span className="text-xs text-white/15 font-mono">
              © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/15 hover:text-white/50 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/15 hover:text-white/50 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
