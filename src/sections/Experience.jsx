import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.list", { returnObjects: true });

  return (
    <section
      id="experience"
      className="py-24 bg-black text-white border-t border-white/5"
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
        <p className="text-white/60 leading-relaxed max-w-2xl mb-16">
          {t("experience.intro")}
        </p>

        <div className="space-y-12">
          {items.map((item) => (
            <article key={`${item.company}-${item.period}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-white/50">{item.company}</p>
                </div>
                <span className="text-xs text-white/40 font-mono">
                  {item.period}
                </span>
              </div>

              <p className="text-white/60 leading-relaxed my-4">
                {item.summary}
              </p>

              <ul className="space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-white/50 leading-relaxed flex items-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 mt-2 mr-3 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
