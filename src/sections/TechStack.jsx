import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const stackGrid = [
  { icon: "⚛️", name: "React" },
  { icon: "🟢", name: "Node.js" },
  { icon: "📘", name: "TypeScript" },
  { icon: "🐳", name: "Docker" },
  { icon: "🔄", name: "CI/CD" },
  { icon: "📦", name: "NPM" },
  { icon: "🎨", name: "Tailwind CSS" },
  { icon: "🤖", name: "AI Automation" },
  { icon: "⚛️", name: "Framer Motion" },
  { icon: "🟢", name: "Express" },
  { icon: "📘", name: "JavaScript" },
  { icon: "🐳", name: "Containers" },
  { icon: "🔄", name: "Webhooks" },
  { icon: "📦", name: "Vite" },
  { icon: "🎨", name: "UI Systems" },
  { icon: "🤖", name: "LLM Integrations" },
];

const Skills = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-slate-950 border-t border-slate-800/80"
    >
      <div className="premium-container">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          className="text-sm text-slate-400 mb-3 block"
        >
          {t("skills.label")}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold text-slate-100 mb-10"
        >
          {t("skills.heading")}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {stackGrid.map(({ icon, name }, i) => (
            <motion.div
              key={`${name}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-sky-400/40 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="text-slate-100 font-semibold text-sm">{name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
