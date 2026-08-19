import React from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiEye } from "react-icons/fi";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="border-b border-slate-100">
      <div className="page-container py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
            {t("hero.role")}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Desenvolvedor júnior com{" "}
            <span className="text-amber-700">experiência real</span> em suporte técnico e automação Python.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-slate-900 font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Ver projetos
              <FiArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              <FiEye size={14} />
              Falar comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
