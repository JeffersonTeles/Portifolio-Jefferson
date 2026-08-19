import React from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiEye } from "react-icons/fi";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="section-padding bg-black">
      <div className="page-container">
        <div className="grid lg:grid-cols[1fr_0.5fr] gap-16 items-center">
          <div className="space-y-8">
            <p className="text-sm font-medium text-amber-300/80 uppercase tracking-wider">
              {t("hero.role")}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-amber-400">Desenvolvedor Júnior</span> com experiência em <br />suporte técnico, automação e <br />sistemas reais.
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="btn-amber"
              >
                Ver projetos
                <FiArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="btn"
              >
                <FiEye size={14} />
                Falar comigo
              </a>
            </div>
          </div>

          <div className="hidden lg:block text-right">
            <code className="text-xs text-slate-500 font-mono">
              export default () =&gt; {""}
              <span className="text-amber-400">resolve(problems)</span>;
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
