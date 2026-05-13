import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiZap, FiCode, FiDatabase, FiServer, FiLink } from 'react-icons/fi';

const About = () => {
  const stats = [
    { value: "3+", label: "anos de experiência" },
    { value: "15+", label: "projetos concluídos" },
    { value: "10+", label: "tecnologias" }
  ];

  const focuses = [
    { icon: FiZap, text: "Automações inteligentes" },
    { icon: FiCpu, text: "IA aplicada" },
    { icon: FiLink, text: "Integrações" },
    { icon: FiServer, text: "APIs escaláveis" },
    { icon: FiCode, text: "Sistemas web" },
    { icon: FiDatabase, text: "Soluções SaaS" }
  ];

  return (
    <section className="section-premium">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sobre</h2>
          <div className="section-divider" />
          <p className="section-subtitle text-sm">
            Desenvolvedor full-stack focado em soluções inteligentes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-white/60 leading-relaxed">
              Desenvolvo sistemas web modernos, automações inteligentes e 
              soluções digitais focadas em performance e escalabilidade.
            </p>
            <p className="text-white/60 leading-relaxed">
              Com perfil autodidata e aprendizado contínuo, construo projetos 
              práticos que resolvem problemas reais através de tecnologia.
            </p>
            <p className="text-white/60 leading-relaxed">
              Meu trabalho combina backend moderno, APIs bem estruturadas e 
              interfaces funcionais para entregar produtos digitais de qualidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-white/[0.02] rounded-xl border border-white/[0.05]">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.02] rounded-xl p-6 border border-white/[0.05]">
              <h3 className="text-sm font-medium text-white/60 mb-4">Foco principal</h3>
              <div className="grid grid-cols-2 gap-3">
                {focuses.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/40 text-sm">
                    <item.icon size={14} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
