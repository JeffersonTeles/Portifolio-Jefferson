import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const list = t("experience.list", { returnObjects: true });

  return (
    <section id="experience" className="section-gap border-t border-white/[0.04]">
      <div className="container-xl">
        <span className="section-label">02 — Experiência</span>
        <h2 className="section-title mb-6">{t("experience.heading")}</h2>
        <p className="text-base text-white/25 max-w-2xl mb-16">
          {t("experience.intro")}
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-[100px] top-0 bottom-0 w-px bg-white/[0.04]" />

          <div className="space-y-0">
            {list.map((item, i) => (
              <div
                key={i}
                className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-white/[0.04] hover:border-white/[0.08] transition-all duration-500"
              >
                {/* Period + dot */}
                <div className="md:pt-0.5 flex items-center gap-4">
                  {/* Timeline dot */}
                  <div className="hidden md:flex relative z-10 w-3 h-3 rounded-full border-2 border-white/10 bg-surface group-hover:border-accent/50 group-hover:bg-accent/20 transition-all duration-300" />
                  <span className="text-xs font-mono text-white/15 group-hover:text-white/25 transition-colors">
                    {item.period}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent/90 transition-colors duration-300">
                      {item.role}
                    </h3>
                    <p className="text-sm text-accent/60 mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-sm text-white/25 mb-5 leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="space-y-2.5">
                    {item.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-white/25 leading-relaxed"
                      >
                        <span className="text-accent/40 mt-1.5 text-[8px] shrink-0">
                          ◆
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
