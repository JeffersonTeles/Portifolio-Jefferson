import React from "react";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="section-gap border-t border-white/[0.04]">
      <div className="container-xl">
        <span className="section-label">06 — Formação</span>
        <h2 className="section-title mb-10">{t("certifications.heading")}</h2>

        <div className="glass p-8 md:p-10 max-w-2xl">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-accent">FAG</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {t("certifications.course")}
              </h3>
              <p className="text-sm text-white/30 mb-4">
                {t("certifications.institution")}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full border border-accent/20 text-xs text-accent/70 bg-accent/5">
                  {t("certifications.type")}
                </span>
                <span className="text-xs text-white/20 font-mono">
                  {t("certifications.year")}
                </span>
              </div>
              <p className="text-sm text-white/30 leading-relaxed">
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
