import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiZap, FiCpu, FiEye } from "react-icons/fi";
import TypewriterBlock from "../components/TypewriterBlock";
import MagneticButton from "../components/MagneticButton";
import AutomationDashboard from "../components/AutomationDashboard";
import { useTranslation } from "react-i18next";
import { useTrackEvent } from "../hooks/useAnalytics";

const Hero = () => {
  const { t } = useTranslation();
  const trackEvent = useTrackEvent();

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  };

  const heroContent = (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-black"
    >
      {/* Premium Deep Background with subtle gradient glow */}
      <div className="absolute inset-0 bg-premium-gradient z-0 opacity-50" />
      <div className="absolute inset-0 z-0 bg-grid-pattern [background-size:40px_40px] opacity-[0.03]" />

      {/* Central glow to highlight the hero text */}
      <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="premium-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Sophisticated Branding */}
          <div className="lg:col-span-7">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-glow" />
              <span className="text-[11px] font-medium tracking-widest text-white/80 uppercase">
                {t("hero.role")}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[10px] font-semibold text-green-400 uppercase tracking-widest">
                Disponível para oportunidades
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[7vw] font-extrabold leading-[1] tracking-tight mb-8"
            >
              {t("hero.title1")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                {t("hero.title2")}
              </span>
              <br />
              {t("hero.title3")}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="text-lg md:text-xl text-white/50 font-light max-w-2xl mb-12 leading-relaxed"
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
              <MagneticButton>
                <a
                  href="#projects"
                  onClick={() => trackEvent("click", { element: "view_projects", section: "hero" })}
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold text-sm rounded-full hover:scale-105 transition-all duration-300 shadow-glass"
                >
                  {t("hero.btnWorks")}
                </a>
              </MagneticButton>
              <MagneticButton>
                <button
                  onClick={() => trackEvent("click", { element: "view_cv", section: "hero" })}
                  className="flex items-center justify-center gap-2 px-8 py-4 glass-panel text-white font-medium text-sm rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  <FiEye size={14} />
                  {t("hero.btnResume")}
                </button>
              </MagneticButton>
            </motion.div>

            {/* Mobile: mostrar TypewriterBlock abaixo dos botões */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.5 }}
              className="mt-12 lg:hidden"
            >
              <TypewriterBlock />
            </motion.div>
          </div>

          {/* Right Column: Refined Code visual & Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:flex flex-col items-end gap-8"
          >
            <div className="relative group w-full flex justify-end">
              <div className="absolute inset-0 bg-white/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
              <TypewriterBlock />
            </div>

            <div className="w-full flex justify-end">
              <AutomationDashboard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {heroContent}
    </>
  );
};

export default Hero;
