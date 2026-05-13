import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHexagon } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/20 py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <FiHexagon className="text-cyan-500/50" size={20} />
            <span className="text-gray-500 font-mono text-sm">
              JEFFERSON TELES // {currentYear}
            </span>
          </div>

          <div className="flex gap-8">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <SiWhatsapp size={18} />
            </a>
            <a
              href="mailto:jefferson@teles.dev"
              className="text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <FiMail size={18} />
            </a>
          </div>
          
          <div className="text-gray-600 font-mono text-xs">
            [ SISTEMA ONLINE // 2025 ]
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
