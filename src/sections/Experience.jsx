import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const list = t("experience.list", { returnObjects: true });

  return (
    <section id="experience" className="section-gap border-t border-white/[0.04]">
      <div className="container-xl">
        <span className="section-label">{t("experience.label")}</span>
        <h2 className="section-title mb-6">{t("experience.heading")}</h2>
        <p className="text-base text-white/30 max-w-2xl mb-16">
          {t("experience.intro")}
        </p>

        <div className="space-y-0">
          {list.map((item, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-white/[0.04] hover:border-white/[0.08] transition-colors"
            >
              {/* Period */}
              <div className="md:pt-0.5">
                <span className="text-xs font-mono text-white/20">
                  {item.period}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-accent/80">{item.company}</p>
                </div>

                <p className="text-sm text-white/35 mb-4">{item.summary}</p>

                <ul className="space-y-2">
                  {item.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-white/30"
                    >
                      <span className="text-accent/50 mt-1.5 text-[10px]">
                        ●
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
    </section>
  );
};

export default Experience;
