import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.list", { returnObjects: true });

  return (
    <section id="experience" className="border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
          03 — Experiência
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          {t("experience.heading")}
        </h2>
        <p className="text-slate-500 leading-relaxed max-w-2xl mb-14">
          {t("experience.intro")}
        </p>

        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.company}
              className="group border border-slate-100 rounded-2xl p-6 sm:p-8 hover:border-slate-200 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.role}
                  </h3>
                  <p className="text-sm text-slate-500">{item.company}</p>
                </div>
                <span className="text-xs font-mono text-slate-400 whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {item.summary}
              </p>

              <ul className="space-y-2.5">
                {item.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm text-slate-500 leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 mt-2.5 shrink-0" />
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
