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
            <span className="section-label">01 — Sobre</span>
            <h2 className="section-title mb-10">{t("about.heading")}</h2>

            <div className="space-y-6 text-base md:text-lg text-white/35 font-light leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-mono text-white/35 border border-white/[0.06] rounded-full hover:border-accent/30 hover:text-accent/70 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Quick facts */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              {/* Avatar + info card */}
              <div className="glass p-8 group hover:border-white/[0.1] transition-all duration-500">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                      <span className="text-2xl font-black text-accent/80">
                        JT
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-surface" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">
                      Jefferson Teles
                    </p>
                    <p className="text-xs text-white/25 font-mono">
                      Cascavel, PR — Brasil
                    </p>
                  </div>
                </div>

                {/* Info rows */}
                <div className="space-y-0">
                  {[
                    ["Formação", "Eng. Software — FAG"],
                    ["Conclusão", "Nov/2026"],
                    ["Experiência", "6+ anos em TI"],
                    ["Foco", "Automação & IA"],
                  ].map(([label, value], i) => (
                    <div key={i}>
                      {i > 0 && <div className="h-px bg-white/[0.04]" />}
                      <div className="flex justify-between items-center py-3.5">
                        <span className="text-xs text-white/20 font-mono uppercase tracking-wider">
                          {label}
                        </span>
                        <span className="text-sm text-white/50">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub stats */}
              <div className="glass p-6 group hover:border-white/[0.1] transition-all duration-500">
                <p className="text-[10px] font-mono text-white/15 uppercase tracking-[0.25em] mb-4">
                  GitHub Activity
                </p>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=JeffersonTeles&show_icons=true&hide_border=true&bg_color=00000000&title_color=e2a63d&text_color=666666&icon_color=444444&ring_color=222222&count_private=true"
                  alt="GitHub Stats"
                  className="w-full rounded-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"
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
