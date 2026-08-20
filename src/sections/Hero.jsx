import React from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-white/[0.008] rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-xl relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="reveal inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-emerald-400/90">
              {t("hero.role")}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="reveal text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.02] tracking-tight mb-8">
            {t("hero.title1")}
            <br />
            <span className="text-white/20">
              {t("hero.description")?.split(".")[0]}.
            </span>
          </h1>

          {/* Accent line */}
          <div className="reveal w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mb-8" />

          {/* Description */}
          <p className="reveal text-lg md:text-xl text-white/35 font-light max-w-xl leading-relaxed mb-14">
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              {t("hero.btnWorks")}
              <FiArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/60 font-medium rounded-full hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-300"
            >
              {t("hero.btnResume")}
            </a>
          </div>

          {/* Social links */}
          <div className="reveal flex items-center gap-5 mt-20">
            <a
              href="https://github.com/JeffersonTeles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/15 hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jeffersonteles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/15 hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <div className="w-px h-4 bg-white/10" />
            <a
              href="/Curriculo_Jefferson_Teles.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-white/15 hover:text-accent transition-colors uppercase tracking-wider"
            >
              CV.pdf
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] font-mono text-white/10 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/15 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
