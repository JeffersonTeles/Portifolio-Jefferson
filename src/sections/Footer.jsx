import React from "react";
import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-white/[0.04]">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container-xl py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Left: Brand + description */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white/50">
                JT<span className="text-accent/50">.</span>
              </span>
              <div className="w-px h-4 bg-white/[0.06]" />
              <span className="text-xs text-white/10 font-mono">
                © {new Date().getFullYear()}
              </span>
            </div>
            <p className="text-xs text-white/15 max-w-xs leading-relaxed">
              {t("hero.description")?.split(".")[0]}.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-white/15 hover:text-accent hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={15} />
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteles"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-white/15 hover:text-accent hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={15} />
            </a>
            <a
              href="mailto:jeffersontelesdeoliveira@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-white/15 hover:text-accent hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
              aria-label="Email"
            >
              <FiMail size={15} />
            </a>

            <div className="w-px h-6 bg-white/[0.06] mx-1" />

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-white/15 hover:text-accent hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <FiArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
