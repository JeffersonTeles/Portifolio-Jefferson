import React from "react";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section
      id="certifications"
      className="section-padding border-b-section"
    >
      <div className="page-container">
        <p className="text-sm text-white/60 mb-3">{t("certifications.label")}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {t("certifications.heading")}
        </h2>

        <div className="border border-white/5 rounded-xl p-8 max-w-2xl">
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-lg border border-emerald-400/20 flex items-center justify-center shrink-0">
              <span className="text-emerald-300 text-sm font-bold">FAG</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {t("certifications.course")}
              </h3>
              <p className="text-sm text-white/50 mb-4">
                {t("certifications.institution")}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="tag-amber">
                  {t("certifications.type")}
                </span>
                <span className="text-xs text-white/30">
                  {t("certifications.year")}
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
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
