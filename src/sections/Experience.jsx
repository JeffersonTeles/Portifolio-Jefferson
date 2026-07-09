import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.list", { returnObjects: true });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-black border-t border-white/5"
      aria-labelledby="experience-heading"
    >
      <div className="premium-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              className="text-sm text-white/40 mb-3 block"
            >
              {t("experience.label")}
            </motion.span>
            <motion.h2
              id="experience-heading"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              className="text-3xl md:text-4xl font-bold text-white mb-5"
            >
              {t("experience.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: 0.05 }}
              className="text-white/55 leading-relaxed"
            >
              {t("experience.intro")}
            </motion.p>
          </div>

          <div className="relative pl-8">
            <motion.div
              className="absolute left-3 top-1 bottom-1 w-px bg-white/15"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8 }}
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-5">
              {items.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.period}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ delay: index * 0.06 }}
                  className="relative rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-6"
                >
                  <motion.div
                    className="absolute -left-[30px] top-7 h-3.5 w-3.5 rounded-full border border-cyan-300/40 bg-cyan-300/30"
                    animate={isInView ? { scale: [0.9, 1.15, 1] } : { scale: 0.9 }}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
                  />
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-white/45">{item.company}</p>
                    </div>
                    <span className="text-xs text-white/40 font-mono md:text-right">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm text-white/50 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
