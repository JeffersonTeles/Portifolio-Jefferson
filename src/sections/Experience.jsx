import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.list", { returnObjects: true });

  return (
    <section className="border-b border-white/5">
      <div className="page-container py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Experiência
        </h2>
        <p className="text-slate-300 leading-relaxed max-w-2xl mb-16">
          {t("experience.intro")}
        </p>

        <div className="space-y-12">
          {items.map((item) => (
            <div key={item.company} className="border border-white/5 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
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

              <p className="text-slate-300 leading-relaxed mb-6">
                {item.summary}
              </p>

              <ul className="space-y-3">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
