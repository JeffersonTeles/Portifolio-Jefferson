import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.list", { returnObjects: true });

  return (
    <section
      id="experience"
      className="section-padding border-b-section"
      aria-labelledby="experience-heading"
    >
      <div className="page-container">
        <p className="text-sm text-white/60 mb-3">{t("experience.label")}</p>
        <h2
          id="experience-heading"
          className="text-3xl md:text-4xl font-bold text-white mb-5"
        >
          {t("experience.heading")}
        </h2>
        <p className="text-slate-400 leading-relaxed max-w-2xl mb-16">
          {t("experience.intro")}
        </p>

        <div className="relative border-l border-white/5 pl-8 space-y-16">
          {items.map((item) => (
            <div key={`${item.company}-${item.period}`} className="relative">
              <div className="absolute -left-[19px] w-1 h-1 rounded-full bg-amber-400/50" />
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-400">{item.company}</p>
                  </div>
                  <span className="text-xs font-mono text-white/30">
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-400 leading-relaxed">
                  {item.summary}
                </p>

                <ul className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start text-sm text-slate-400 leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/30 mt-2 mr-3 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
