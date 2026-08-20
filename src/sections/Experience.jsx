import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const list = t("experience.list", { returnObjects: true });

  return (
    <section className="slide py-28">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.8rem] font-bold text-white mb-4">
          {t("experience.heading")}
        </h2>
        <p className="text-[0.95rem] text-[#555] leading-relaxed mb-16 max-w-[600px]">
          {t("experience.intro")}
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#e2a63d]/20 via-white/[0.06] to-transparent hidden sm:block" />

          <div className="stagger space-y-0">
            {list.map((item, i) => (
              <div
                key={i}
                className="relative sm:pl-10 py-8 border-t border-white/[0.04] first:border-t-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-[38px] w-[15px] h-[15px] rounded-full border-2 border-[#e2a63d]/30 bg-[#0a0a0a] hidden sm:flex items-center justify-center">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#e2a63d]/60" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-[1.05rem] font-semibold text-white">
                    {item.role}
                  </h3>
                  <span className="text-[0.75rem] text-[#444] font-mono shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-[0.85rem] text-[#e2a63d]/60 mb-3 font-medium">
                  {item.company}
                </p>
                <p className="text-[0.9rem] text-[#666] leading-relaxed mb-4">
                  {item.summary}
                </p>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[0.85rem] text-[#555]"
                    >
                      <span className="text-[#e2a63d]/30 mt-[5px] text-[8px] shrink-0">◆</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
