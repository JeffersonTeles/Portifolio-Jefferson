import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <p className="text-sm font-medium text-slate-900 mb-1">
              Jefferson Teles
            </p>
            <p className="text-xs text-slate-400">
              Desenvolvedor Júnior — Cascavel, PR
            </p>
          </div>
          <div className="flex gap-5">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteless"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jeffersontelesdeoliveira@gmail.com"
              className="text-xs text-slate-400 hover:text-slate-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
