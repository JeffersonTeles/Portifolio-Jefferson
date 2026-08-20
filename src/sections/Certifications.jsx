import React from "react";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="slide py-28">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.8rem] font-bold text-white mb-10">
          {t("certifications.heading")}
        </h2>

        <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] max-w-[500px]">
          <p className="text-[1.05rem] text-white font-medium mb-2">
            {t("certifications.course")}
          </p>
          <p className="text-[0.9rem] text-[#666] mb-1">
            {t("certifications.institution")}
          </p>
          <p className="text-[0.8rem] text-[#444] font-mono">
            {t("certifications.year")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
