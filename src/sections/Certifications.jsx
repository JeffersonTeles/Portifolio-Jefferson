import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="certifications" ref={sectionRef} className="py-24 bg-slate-950 border-t border-slate-800/80">
      <div className="premium-container">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          className="text-sm text-slate-400 mb-3 block"
        >
          {t("certifications.label")}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold text-slate-100 mb-10"
        >
          {t("certifications.heading")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 max-w-2xl"
        >
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
              <span className="text-emerald-300 text-sm font-bold">FAG</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-1">
                {t("certifications.course")}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                {t("certifications.institution")}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full border border-emerald-400/20 text-xs text-emerald-300 bg-emerald-400/5">
                  {t("certifications.type")}
                </span>
                <span className="text-xs text-slate-500">
                  {t("certifications.year")}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t("certifications.description")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
