import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800/80">
      <div className="premium-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Jefferson Teles</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteless"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-100 transition-colors"
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
