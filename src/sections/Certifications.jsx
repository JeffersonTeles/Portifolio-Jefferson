import React from "react";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section
      id="certifications"
      className="py-24 bg-black text-white border-t border-white/5"
    >
      <div className="page-container">
        <p className="text-sm text-white/60 mb-3">{t("certifications.label")}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {t("certifications.heading")}
        </h2>

        <div className="max-w-2xl">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {t("certifications.course")}
            </h3>
            <p className="text-sm text-white/50 mb-3">
              {t("certifications.institution")}
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 border border-emerald-400/20 text-emerald-300 rounded-full">
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
    </section>
  );
};

export default Certifications;
