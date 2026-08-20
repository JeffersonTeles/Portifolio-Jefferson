import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const capabilities = t("about.capabilities", { returnObjects: true });

  return (
    <section className="slide py-28">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 lg:gap-20">
          {/* Left: Text */}
          <div>
            <h2 className="text-[1.8rem] font-bold text-white mb-8">
              {t("about.heading")}
            </h2>

            <ul className="stagger space-y-4 mb-12">
              {capabilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[1rem] text-[#777] leading-relaxed"
                >
                  <span className="text-[#e2a63d] mt-[6px] text-[10px]">●</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* GitHub stats */}
            <div className="pt-8 border-t border-white/[0.04]">
              <p className="text-[0.65rem] text-[#444] font-mono uppercase tracking-[0.2em] mb-4">
                GitHub
              </p>
              <img
                src="https://github-readme-stats.vercel.app/api?username=JeffersonTeles&show_icons=true&hide_border=true&bg_color=0a0a0a&title_color=e2a63d&text_color=666666&icon_color=444444&ring_color=222222&count_private=true"
                alt="GitHub Stats"
                className="w-full max-w-[420px] opacity-50 hover:opacity-80 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Info card */}
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.04]">
                <div className="w-12 h-12 rounded-full bg-[#111] border border-white/[0.08] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#e2a63d]/40">JT</span>
                </div>
                <div>
                  <p className="text-[0.9rem] font-semibold text-white">Jefferson Teles</p>
                  <p className="text-[0.7rem] text-[#555] font-mono">Cascavel, PR</p>
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
                    {i > 0 && <div className="h-px bg-white/[0.03]" />}
                    <div className="flex justify-between items-center py-3">
                      <span className="text-[0.7rem] text-[#444] font-mono uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="text-[0.8rem] text-[#666]">{value}</span>
                    </div>
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
