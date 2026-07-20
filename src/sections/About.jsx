import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const tags = t("about.tags", { returnObjects: true });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-slate-950 border-t border-slate-800/80"
    >
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-slate-400 mb-3 block"
            >
              {t("about.label")}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-slate-100 mb-8"
            >
              {t("about.heading")}
            </motion.h2>

            <div className="space-y-5 text-slate-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t("about.p1")}
                <span className="text-slate-100 font-medium">
                  {t("about.p1Highlight")}
                </span>
                {t("about.p1End")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {t("about.p2")}
                <span className="text-slate-100 font-medium">
                  {t("about.p2Highlight")}
                </span>
                {t("about.p2End")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t("about.p3")}
                <span className="text-slate-100 font-medium">
                  {t("about.p3Highlight")}
                </span>
                {t("about.p3End")}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-slate-700 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/5 p-5 text-amber-100"
            >
              <p className="text-sm md:text-base leading-relaxed">
                Código não é só tecnologia — é resolver problemas de gente. 
                É o que aprendi em 6 anos de suporte e levo para cada projeto.
              </p>
            </motion.blockquote>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 self-start"
          >
            {/* Coloque sua foto em public/photo.jpg para aparecer aqui */}
            <div className="rounded-xl overflow-hidden border border-slate-800">
              <img
                              src="/photo.jpg"
                              alt="Jefferson Teles"
                              className="w-full aspect-square object-cover object-top"
                              onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                            />
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-slate-100 font-semibold mb-4">
                O que eu levo para um time
              </h3>
              <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
                <li>Base prática em suporte, redes, Linux e diagnóstico.</li>
                <li>Facilidade para conversar com usuário e traduzir problema em tarefa técnica.</li>
                <li>Projetos reais com frontend, backend, banco de dados e automação.</li>
                <li>Vontade de aprender com revisão, rotina de time e código em produção.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-slate-100 font-semibold mb-4">
                Formação acadêmica
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <span className="text-amber-300 text-xs font-bold">FAG</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-100">Engenharia de Software</p>
                  <p className="text-xs text-slate-500 mt-0.5">Centro Universitário FAG</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded-full border border-amber-400/20 text-[10px] text-amber-300 bg-amber-400/5">Bacharelado</span>
                    <span className="text-[10px] text-slate-500">Previsão: Nov/2026</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;
