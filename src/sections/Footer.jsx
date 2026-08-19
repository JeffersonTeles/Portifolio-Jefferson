import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="page-container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Jefferson Teles
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/JeffersonTeles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jeffersonteless"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jeffersontelesdeoliveira@gmail.com"
            className="text-white/40 hover:text-white text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
