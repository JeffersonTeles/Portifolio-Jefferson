import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiGit,
  SiLinux,
  SiFlutter,
  SiArduino,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const skillGroups = [
  {
    title: "Frontend",
    icon: SiReact,
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Vite", "Zustand"],
  },
  {
    title: "Backend e dados",
    icon: SiNodedotjs,
    items: ["Node.js", "Express", "Python", "API REST", "PostgreSQL", "Supabase", "SQL"],
  },
  {
    title: "Automação",
    icon: SiFlutter,
    items: ["n8n", "Webhooks", "Gemini AI", "JSON", "Selenium", "Playwright", "Puppeteer"],
  },
  {
    title: "Infra e suporte",
    icon: SiLinux,
    items: ["Linux", "Windows", "TCP/IP", "DNS", "VPN", "Mikrotik", "Ubiquiti"],
  },
  {
    title: "Ferramentas",
    icon: SiGit,
    items: ["Git/GitHub", "Docker", "VS Code", "Trello", "AnyDesk", "TeamViewer"],
  },
  {
    title: "Eletrônica e IoT",
    icon: SiArduino,
    items: ["Arduino", "ESP32", "C++", "Sensores", "Solda", "Chicotes elétricos"],
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 bg-slate-950 border-t border-slate-800/80">
      <div className="premium-container">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-slate-400 mb-3 block"
        >
          {t("skills.label")}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-100 mb-10"
        >
          {t("skills.heading")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {skillGroups.map(({ title, icon: Icon, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="p-5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-sky-400/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-xl text-sky-300/80" />
                <h3 className="text-slate-100 font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
