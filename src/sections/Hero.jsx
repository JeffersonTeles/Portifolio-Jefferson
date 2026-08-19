import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 bg-black text-white"
    >
      <div className="page-container relative z-10 w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-white/70 mb-4">
            {t("hero.role")}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            {t("hero.title1")}
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {t("hero.btnWorks")}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              {t("hero.btnResume")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
