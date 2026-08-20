import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <span className="text-[0.8rem] text-[#333] font-mono block mb-2">
              © {new Date().getFullYear()} Jefferson Teles
            </span>
            <a
              href="mailto:jeffersontelesdeoliveira@gmail.com"
              className="text-[0.85rem] text-[#555] hover:text-[#e2a63d] transition-colors duration-300"
            >
              jeffersontelesdeoliveira@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#444] hover:text-[#e2a63d] hover:border-[#e2a63d]/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={15} />
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteles"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#444] hover:text-[#e2a63d] hover:border-[#e2a63d]/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={15} />
            </a>
            <a
              href="mailto:jeffersontelesdeoliveira@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#444] hover:text-[#e2a63d] hover:border-[#e2a63d]/20 transition-all duration-300"
              aria-label="Email"
            >
              <FiMail size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
