import React from "react";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section className="border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
          07 — Formação
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-10">
          {t("certifications.heading")}
        </h2>

        <div className="border border-slate-100 rounded-2xl p-6 sm:p-8 max-w-2xl hover:border-slate-200 transition-colors">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
              <span className="text-white text-sm font-bold">FAG</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {t("certifications.course")}
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                {t("certifications.institution")}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded">
                  {t("certifications.type")}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {t("certifications.year")}
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t("certifications.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
