import React from "react";
import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { copyEmail } from "../utils/copyEmail";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="slide min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Subtle amber glow */}
      <div className="absolute top-[15%] left-[-8%] w-[600px] h-[600px] bg-[#e2a63d]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#e2a63d]/[0.015] rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            {/* Role badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e2a63d]/20 bg-[#e2a63d]/5 text-[0.75rem] text-[#e2a63d] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e2a63d] animate-pulse" />
                {t("hero.role")}
              </span>
            </div>

            {/* Name — big heading */}
            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold text-white leading-[1.0] tracking-tight mb-8">
              {t("hero.title1")}
            </h1>

            {/* Subtitle + description merged */}
            <p className="text-[1.15rem] text-[#888] leading-relaxed mb-10 max-w-[600px]">
              {t("hero.subtitle")} {t("hero.description")}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-[0.9rem] font-medium rounded-full hover:bg-[#e2a63d] transition-colors duration-300"
              >
                {t("hero.btnWorks")}
              </a>
              <a
                href="/Curriculo_Jefferson_Teles.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-[#ccc] text-[0.9rem] font-medium rounded-full hover:border-[#e2a63d]/40 hover:text-white transition-colors duration-300"
              >
                {t("hero.btnResume")}
              </a>
            </div>

            {/* Email + Social */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={copyEmail}
                className="text-[0.9rem] text-[#666] border-b border-[#333] hover:border-[#e2a63d] hover:text-[#e2a63d] transition-colors duration-300 cursor-pointer"
                aria-label="Copiar email"
              >
                jeffersontelesdeoliveira@gmail.com
              </button>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/JeffersonTeles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#333] hover:text-[#e2a63d] transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FiGithub size={17} />
                </a>
                <a
                  href="https://linkedin.com/in/jeffersonteles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#333] hover:text-[#e2a63d] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Avatar + Stats */}
          <div className="hidden lg:flex flex-col items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-36 h-36 rounded-full bg-[#111] border-2 border-white/[0.06] flex items-center justify-center">
                <span className="text-5xl font-black text-[#e2a63d]/20 select-none">
                  JT
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#22c55e] border-[3px] border-[#0a0a0a]" />
            </div>

            {/* Stats */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="px-4 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <p className="text-[1.4rem] font-bold text-white">6+</p>
                <p className="text-[0.65rem] text-[#555] font-mono uppercase tracking-wider">anos em TI</p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <p className="text-[1.4rem] font-bold text-white">3</p>
                <p className="text-[0.65rem] text-[#555] font-mono uppercase tracking-wider">projetos</p>
              </div>
              <div className="flex items-center gap-1.5 text-[0.7rem] text-[#555]">
                <FiMapPin size={12} />
                Cascavel, PR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
