import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const capabilities = t("about.capabilities", { returnObjects: true });

  return (
    <section className="slide py-24 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.6rem] font-bold text-white mb-8">
          {t("about.heading")}
        </h2>

        <ul className="stagger space-y-4 mb-14">
          {capabilities.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-[1rem] text-[#888] leading-relaxed"
            >
              <span className="text-[#e2a63d] mt-[6px] text-[10px]">●</span>
              {item}
            </li>
          ))}
        </ul>

        {/* GitHub stats */}
        <div className="border-t border-white/[0.04] pt-10">
          <p className="text-[0.7rem] text-[#444] font-mono uppercase tracking-widest mb-4">
            GitHub
          </p>
          <img
            src="https://github-readme-stats.vercel.app/api?username=JeffersonTeles&show_icons=true&hide_border=true&bg_color=0a0a0a&title_color=e2a63d&text_color=666666&icon_color=444444&ring_color=222222&count_private=true"
            alt="GitHub Stats"
            className="w-full max-w-[400px] opacity-60 hover:opacity-90 transition-opacity duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
