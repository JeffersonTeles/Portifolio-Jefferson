import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const tags = t("about.tags", { returnObjects: true });

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-800/80">
      <div className="premium-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16">
          <div>
            <motion.span {...fadeUp} className="text-sm text-slate-400 mb-3 block">
              {t("about.label")}
            </motion.span>

            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-slate-100 mb-8"
            >
              {t("about.heading")}
            </motion.h2>

            <div className="space-y-5 text-slate-300 leading-relaxed">
              <motion.p {...fadeUp} transition={{ delay: 0.1 }}>
                {t("about.p1")}
                <span className="text-slate-100 font-medium">
                  {t("about.p1Highlight")}
                </span>
                {t("about.p1End")}
              </motion.p>
              <motion.p {...fadeUp} transition={{ delay: 0.15 }}>
                {t("about.p2")}
                <span className="text-slate-100 font-medium">
                  {t("about.p2Highlight")}
                </span>
                {t("about.p2End")}
              </motion.p>
              <motion.p {...fadeUp} transition={{ delay: 0.2 }}>
                {t("about.p3")}
                <span className="text-slate-100 font-medium">
                  {t("about.p3Highlight")}
                </span>
                {t("about.p3End")}
              </motion.p>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.25 }}
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
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 self-start"
          >
            <h3 className="text-slate-100 font-semibold mb-4">
              O que eu levo para um time
            </h3>
            <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
              <li>Base prática em suporte, redes, Linux e diagnóstico.</li>
              <li>Facilidade para conversar com usuário e traduzir problema em tarefa técnica.</li>
              <li>Projetos reais com frontend, backend, banco de dados e automação.</li>
              <li>Vontade de aprender com revisão, rotina de time e código em produção.</li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;
