import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const list = t("experience.list", { returnObjects: true });

  return (
    <section className="slide py-24 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.6rem] font-bold text-white mb-4">
          {t("experience.heading")}
        </h2>
        <p className="text-[0.95rem] text-[#666] leading-relaxed mb-14">
          {t("experience.intro")}
        </p>

        <div className="stagger space-y-0">
          {list.map((item, i) => (
            <div
              key={i}
              className="py-8 border-t border-white/[0.04]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-[1rem] font-semibold text-white">
                  {item.role}
                </h3>
                <span className="text-[0.8rem] text-[#555] font-mono shrink-0">
                  {item.period}
                </span>
              </div>
              <p className="text-[0.85rem] text-[#e2a63d]/70 mb-3">
                {item.company}
              </p>
              <p className="text-[0.9rem] text-[#666] leading-relaxed mb-3">
                {item.summary}
              </p>
              <ul className="space-y-1.5">
                {item.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[0.85rem] text-[#555]"
                  >
                    <span className="text-[#e2a63d]/40 mt-[5px] text-[8px]">
                      ◆
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
