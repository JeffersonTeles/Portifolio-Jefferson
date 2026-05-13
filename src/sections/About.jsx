import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiZap, FiCode, FiDatabase, FiServer, FiLink } from 'react-icons/fi';

const About = () => {
  const focuses = [
    { icon: FiZap, text: "Automações inteligentes" },
    { icon: FiCpu, text: "IA aplicada" },
    { icon: FiLink, text: "Integrações entre plataformas" },
    { icon: FiServer, text: "APIs escaláveis" },
    { icon: FiCode, text: "Sistemas web modernos" },
    { icon: FiDatabase, text: "Soluções SaaS" }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Sobre
          </h2>
          <div className="w-12 h-px bg-white/10 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 leading-relaxed mb-4">
              Desenvolvo sistemas web modernos, automações inteligentes e 
              soluções digitais focadas em performance e escalabilidade.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
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
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {focuses.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/60">
                  <item.icon size={16} className="text-white/40" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
