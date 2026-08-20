import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const timeline = t("about.timeline", { returnObjects: true });
  const tags = t("about.tags", { returnObjects: true });

  return (
    <section id="sobre" className="border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20">
          {/* Left: About text */}
          <div>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
              01 — Sobre mim
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-8">
              {t("about.heading")}
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p className="text-slate-500">{t("about.p3")}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 text-slate-600 bg-slate-50 border border-slate-100 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
              02 — Experiência
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-10">
              Trajetória
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-slate-900 bg-white" />
                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      {item.year}
                    </span>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-1">
                      {item.desc}
                    </p>
                    <p className="text-xs text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
