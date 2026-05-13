import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm">
            © {currentYear} Jefferson Teles
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/40 transition-colors"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/40 transition-colors"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/40 transition-colors"
            >
              <SiWhatsapp size={16} />
            </a>
            <a
              href="mailto:jefferson@teles.dev"
              className="text-white/20 hover:text-white/40 transition-colors"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
