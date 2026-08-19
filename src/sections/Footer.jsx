import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="page-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Jefferson Teles
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteless"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jeffersontelesdeoliveira@gmail.com"
              className="text-sm text-white/40 hover:text-white transition-colors"
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
