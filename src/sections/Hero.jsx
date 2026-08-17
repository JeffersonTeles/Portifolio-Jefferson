import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiEye } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 bg-black"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.01] rounded-full blur-[120px]" />
      </div>

      <div className="premium-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
            >
              <span className="text-[11px] font-medium tracking-widest text-white/70 uppercase">
                {t("hero.role")}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[7vw] font-extrabold leading-[1] tracking-tight mb-8 text-white"
            >
              {t("hero.title1")}
              <br />
              <span className="text-white/60">{t("hero.title2")}</span>
              <br />
              {t("hero.title3")}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 font-light max-w-2xl mb-12 leading-relaxed"
            >
              {t("hero.description").split(t("hero.descriptionHighlight"))[0]}
              <span className="text-white font-medium">
                {t("hero.descriptionHighlight")}
              </span>
              {t("hero.description").split(t("hero.descriptionHighlight"))[1]}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-102 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                {t("hero.btnWorks")}
                <FiArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <FiEye size={16} />
                {t("hero.btnResume")}
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-right"
            >
              <code className="text-xs text-white/30 font-mono leading-relaxed">
                export default () => <span className="text-white">resolve(problems);</span>
              </code>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;