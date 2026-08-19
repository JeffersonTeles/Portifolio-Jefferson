import React from "react";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section className="border-b border-slate-100">
      <div className="page-container py-24">
        <p className="text-sm text-slate-500 mb-3">{t("certifications.label")}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          {t("certifications.heading")}
        </h2>

        <div className="border border-slate-100 rounded-xl p-8 max-w-2xl bg-slate-50/50">
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-lg border border-emerald-200 flex items-center justify-center shrink-0">
              <span className="text-emerald-700 text-sm font-bold">FAG</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {t("certifications.course")}
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                {t("certifications.institution")}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-3 py-1 border border-emerald-200 text-emerald-700 rounded-full">
                  {t("certifications.type")}
                </span>
                <span className="text-xs text-slate-400">
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
