import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const capabilities = [
    "Build web systems with React, Node.js and Python",
    "Automate repetitive tasks with scripts and AI integration",
    "Work with Linux servers, networking and infrastructure",
    "Solve real problems from actual users, not theoretical ones",
    "Write simple code that works today",
  ];

  return (
    <section className="slide py-24 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.6rem] font-bold text-white mb-8">
          {t("about.heading")}
        </h2>

        <ul className="space-y-4">
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
      </div>
    </section>
  );
};

export default About;
