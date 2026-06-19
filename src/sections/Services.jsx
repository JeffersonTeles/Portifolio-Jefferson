import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiPlus, FiMinus } from "react-icons/fi";
import { useTranslation } from "react-i18next";

// Detalhes extras para cada serviço (hardcoded pois são extras não traduzidos)
const serviceDetails = [
  {
    bullets: [
      "React / Next.js com foco em performance",
      "Design Systems escaláveis",
      "Animações premium com Framer Motion",
      "Otimização de Core Web Vitals",
    ],
    cta: "Ver Projetos",
  },
  {
    bullets: [
      "Integração com OpenAI, Claude e modelos locais",
      "Automações de processos com Node.js",
      "Scraping e coleta inteligente de dados",
      "Pipelines de processamento com filas (BullMQ)",
    ],
    cta: "Explorar Stack",
  },
  {
    bullets: [
      "APIs REST e GraphQL com Node.js / Java",
      "Bancos de dados com Supabase / PostgreSQL",
      "Deploy em Vercel, Railway e AWS",
      "Infraestrutura Linux e containerização Docker",
    ],
    cta: "Ver Arquitetura",
  },
];

const Services = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const services = t("services.list", { returnObjects: true });

  return (
    <section id="services" className="py-40 bg-black relative overflow-hidden">
      <div className="premium-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-8 block"
            >
              {t("services.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-extrabold text-white tracking-tight uppercase leading-[0.9]"
            >
              {t("services.heading1")}
              <br />
              {t("services.heading2")}
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col border-t border-white/[0.05]">
          {services.map((service, idx) => {
            const isOpen = openIndex === idx;
            const details = serviceDetails[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative border-b border-white/[0.05] group overflow-hidden"
              >
                {/* Clickable header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-12 md:py-16 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex items-center gap-8 md:gap-16">
                      <span className="font-mono text-xs text-white/20 group-hover:text-white transition-colors duration-500 shrink-0">
                        0{idx + 1}
                      </span>
                      <h3
                        className={`text-3xl md:text-5xl font-bold tracking-tight transition-all duration-500 ${isOpen ? "text-white" : "text-white/70 group-hover:text-white group-hover:translate-x-2"}`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-8 ml-14 md:ml-0">
                      <p className="text-sm text-white/30 font-light max-w-xs leading-relaxed hidden md:block group-hover:text-white/50 transition-colors duration-500">
                        {service.desc}
                      </p>
                      <div
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ${
                          isOpen
                            ? "bg-white text-black border-white"
                            : "border-white/10 text-white/30 group-hover:border-white group-hover:text-white"
                        }`}
                      >
                        {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expandable content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 ml-14 md:ml-24">
                        <p className="text-white/40 text-base mb-8 md:hidden">
                          {service.desc}
                        </p>
                        <ul className="space-y-3 mb-10">
                          {details.bullets.map((b, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.07 }}
                              className="flex items-center gap-4 text-sm text-white/60"
                            >
                              <div className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                              {b}
                            </motion.li>
                          ))}
                        </ul>
                        <a
                          href="#projects"
                          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors group/cta"
                        >
                          <FiArrowRight
                            size={14}
                            className="group-hover/cta:translate-x-1 transition-transform"
                          />
                          {details.cta}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className={`absolute bottom-0 left-0 h-[1px] bg-white/20 transition-all duration-1000 ${isOpen ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
