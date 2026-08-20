import React from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-xl relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-emerald-400/80">
              {t("hero.role")}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
            {t("hero.title1")}
            <br />
            <span className="text-white/30">{t("hero.description")?.split(".")[0]}.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/40 font-light max-w-xl leading-relaxed mb-12">
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all"
            >
              {t("hero.btnWorks")}
              <FiArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 font-medium rounded-full hover:bg-white/5 hover:border-white/20 hover:text-white transition-all"
            >
              {t("hero.btnResume")}
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-16">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/60 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/60 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <div className="w-px h-4 bg-white/10 mx-2" />
            <a
              href="/Curriculo_Jefferson_Teles.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-white/20 hover:text-accent transition-colors uppercase tracking-wider"
            >
              CV.pdf
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-white/15 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
