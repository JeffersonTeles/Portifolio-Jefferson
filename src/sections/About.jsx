import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const timeline = t("about.timeline", { returnObjects: true });
  const tags = t("about.tags", { returnObjects: true });

  return (
    <section className="border-b border-white/5">
      <div className="page-container py-24">
        <div className="grid md:grid-cols[1fr_0.8fr] gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sobre mim
            </h2>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p className="text-slate-400">{t("about.p3")}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 text-white/50 border border-white/5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i}>
                  <span className="text-xs font-mono text-white/30 block mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    {item.detail}
                  </p>
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
