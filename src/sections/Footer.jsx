import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100">
      <div className="page-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Jefferson Teles
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteless"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jeffersontelesdeoliveira@gmail.com"
              className="text-sm text-slate-400 hover:text-slate-900 transition-colors"
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
