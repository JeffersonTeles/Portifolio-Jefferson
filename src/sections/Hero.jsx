import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "react-i18next";
import MorphicSphereBackground from "../components/MorphicSphereBackground";

const Hero = () => {
  const { t } = useTranslation();

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  const socialLinks = [
    {
      icon: FiGithub,
      url: "https://github.com/JeffersonTeles",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      url: "https://linkedin.com/in/jeffersonteless",
      label: "LinkedIn",
    },
    {
      icon: FiMail,
      url: "mailto:jeffersontelesdeoliveira@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-slate-950"
    >
        <MorphicSphereBackground isDark />
        <div className="premium-container relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="text-sm text-slate-400 mb-4"
            >
              {t("hero.role")}
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-slate-100"
            >
              {t("hero.greeting")}{" "}
              <span className="text-sky-300">Jefferson Teles</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl"
            >
              {t("hero.description")}
            </motion.p>

            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto mb-10">
              <div className="text-center">
                <motion.span
                  className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  6+
                </motion.span>
                <p className="text-sm text-gray-400 mt-1">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <motion.span
                  className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  15+
                </motion.span>
                <p className="text-sm text-gray-400 mt-1">Projetos Entregues</p>
              </div>
              <div className="text-center">
                <motion.span
                  className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  40%
                </motion.span>
                <p className="text-sm text-gray-400 mt-1">Melhoria de Performance</p>
              </div>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-400 text-slate-950 font-medium text-sm rounded-lg hover:bg-sky-300 transition-colors"
              >
                {t("hero.btnWorks")}
                <FiArrowRight size={16} />
              </a>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-100 font-medium text-sm rounded-lg hover:bg-slate-800/70 transition-colors"
              >
                <FiFileText size={16} />
                {t("hero.btnResume")}
              </a>
              <a
                href="https://github.com/JeffersonTeles"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-800 text-slate-300 font-medium text-sm rounded-lg hover:text-slate-100 hover:border-slate-600 transition-colors"
              >
                <FiGithub size={16} />
                {t("hero.btnGithub")}
              </a>
              <a
                href="https://wa.me/5544999277915"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-800 text-slate-300 font-medium text-sm rounded-lg hover:text-slate-100 hover:border-slate-600 transition-colors"
              >
                <SiWhatsapp size={16} />
                {t("hero.btnWhatsapp")}
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.45 }}
              className="flex items-center gap-5"
            >
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target={url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
