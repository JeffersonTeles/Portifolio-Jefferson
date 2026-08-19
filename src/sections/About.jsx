import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const timeline = t("about.timeline", { returnObjects: true });
  const tags = t("about.tags", { returnObjects: true });

  return (
    <section className="border-b border-slate-100">
      <div className="page-container py-24">
        <div className="grid md:grid-cols[1fr_0.8fr] gap-16">
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Sobre mim
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p className="text-slate-500">{t("about.p3")}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 text-slate-600 border border-slate-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Experiência
            </p>

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-1 h-4 bg-amber-400 rounded-full" />
                  <span className="text-xs font-mono text-slate-400 block mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
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
