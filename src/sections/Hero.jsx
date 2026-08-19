import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center pt-24 md:pt-32">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-white/60 mb-6">
            {t("hero.role")}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Desenvolvedor júnior com{" "}
            <span className="text-amber-400">experiência real</span> em suporte técnico e automação.
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-12 max-w-2xl">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-amber-400 text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Ver projetos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              Falar comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
