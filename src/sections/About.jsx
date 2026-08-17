import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [openTimeline, setOpenTimeline] = useState(null);
  const timeline = t("about.timeline", { returnObjects: true });
  const tags = t("about.tags", { returnObjects: true });

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section id="about" className="py-40 bg-black">
      <div className="premium-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7">
            <motion.span
              {...fadeUp}
              className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-10 block"
            >
              {t("about.label")}
            </motion.span>

            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-12 tracking-tight"
            >
              {t("about.heading1")}
            </motion.h2>

            <div className="space-y-8 text-xl text-white/50 font-light leading-relaxed max-w-2xl">
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
              >
                {t("about.p1")}
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.3 }}
              >
                {t("about.p2")}
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.4 }}
              >
                {t("about.p3")}
              </motion.p>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-16"
            >
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-medium text-white/60 uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l border-white/5 pl-8"
            >
              <span className="text-[9px] text-white/20 font-mono uppercase tracking-wider block mb-8">
                Jornada
              </span>

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={i}>
                    <button
                      className="text-left w-full"
                      onClick={() => setOpenTimeline(openTimeline === i ? null : i)}
                    >
                      <span className="text-[10px] text-white/20 font-mono block mb-1">
                        {item.year}
                      </span>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/30 font-light">
                        {item.desc}
                      </p>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;