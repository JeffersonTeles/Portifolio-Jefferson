import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const timeline = t("about.timeline", { returnObjects: true });
  const tags = t("about.tags", { returnObjects: true });

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="page-container">
        <div>
          <p className="text-sm text-white/60 mb-3">{t("about.label")}</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t("about.heading")}
          </h2>

          <p className="text-white/70 leading-relaxed max-w-2xl mb-8">
            {t("about.p1")}
          </p>
          <p className="text-white/70 leading-relaxed max-w-2xl mb-8">
            {t("about.p2")}
          </p>
          <p className="text-white/70 leading-relaxed max-w-2xl mb-12">
            {t("about.p3")}
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-sm font-medium text-white/60 mb-6">
            Jornada
          </h3>

          <div className="border-l border-white/10 pl-6 space-y-10">
            {timeline.map((item, i) => (
              <div key={i}>
                <span className="text-xs text-white/30 font-mono block mb-2">
                  {item.year}
                </span>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-sm text-white/50 leading-relaxed mt-2">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
