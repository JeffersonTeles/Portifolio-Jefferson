import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[0.8rem] text-[#333] font-mono">
            © {new Date().getFullYear()} Jefferson Teles
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8rem] text-[#444] hover:text-[#e2a63d] transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8rem] text-[#444] hover:text-[#e2a63d] transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
