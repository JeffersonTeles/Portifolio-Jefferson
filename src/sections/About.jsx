import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const tags = t("about.tags", { returnObjects: true });

  return (
    <section id="about" className="section-gap border-t border-white/[0.04]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <span className="section-label">{t("about.label")}</span>
            <h2 className="section-title mb-10">{t("about.heading")}</h2>

            <div className="space-y-6 text-base md:text-lg text-white/40 font-light leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-mono text-white/40 border border-white/[0.06] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Quick facts */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">
              {/* Quick info card */}
              <div className="glass p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">JT</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Jefferson Teles</p>
                    <p className="text-xs text-white/30 font-mono">
                      Cascavel, PR
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/30">Formação</span>
                    <span className="text-white/60">
                      Eng. Software — FAG
                    </span>
                  </div>
                  <div className="w-full h-px bg-white/[0.04]" />
                  <div className="flex justify-between">
                    <span className="text-white/30">Conclusão</span>
                    <span className="text-white/60">Nov/2026</span>
                  </div>
                  <div className="w-full h-px bg-white/[0.04]" />
                  <div className="flex justify-between">
                    <span className="text-white/30">Experiência</span>
                    <span className="text-white/60">6+ anos em TI</span>
                  </div>
                  <div className="w-full h-px bg-white/[0.04]" />
                  <div className="flex justify-between">
                    <span className="text-white/30">Foco</span>
                    <span className="text-white/60">Automação & IA</span>
                  </div>
                </div>
              </div>

              {/* GitHub stats */}
              <div className="glass p-6">
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">
                  GitHub Activity
                </p>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=JeffersonTeles&show_icons=true&hide_border=true&bg_color=00000000&title_color=e2a63d&text_color=888888&icon_color=555555&ring_color=333333&count_private=true"
                  alt="GitHub Stats"
                  className="w-full rounded-lg opacity-60 hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
