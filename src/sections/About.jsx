import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const timeline = t("about.timeline", { returnObjects: true });
  const tags = t("about.tags", { returnObjects: true });

  return (
    <section id="about" className="section-padding border-b-section">
      <div className="page-container">
        <div className="grid lg:grid-cols[1fr_1fr] gap-16">
          <div className="space-y-8">
            <p className="text-sm text-white/60">{t("about.label")}</p>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("about.heading")}
            </h2>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p className="text-slate-400">{t("about.p3")}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-0">
            <p className="text-xs font-mono text-white/20 uppercase tracking-wider mb-8">
              Experiência
            </p>

            <div className="relative border-l border-white/5 pl-8 space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[19px] w-1 h-1 rounded-full bg-amber-400/50" />
                  <span className="text-xs font-mono text-white/30 block mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
