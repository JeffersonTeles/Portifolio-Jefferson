import React from "react";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="slide py-24 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.6rem] font-bold text-white mb-10">
          {t("certifications.heading")}
        </h2>

        <div className="space-y-2">
          <p className="text-[1rem] text-white font-medium">
            {t("certifications.course")}
          </p>
          <p className="text-[0.9rem] text-[#666]">
            {t("certifications.institution")}
          </p>
          <p className="text-[0.85rem] text-[#555] font-mono">
            {t("certifications.year")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
