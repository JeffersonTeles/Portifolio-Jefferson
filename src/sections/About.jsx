import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiZap, FiCode, FiDatabase } from 'react-icons/fi';

const About = () => {
  const stats = [
    { number: "3+", label: "Anos de Experiência" },
    { number: "15+", label: "Projetos Concluídos" },
    { number: "8+", label: "Tecnologias Dominadas" }
  ];

  const interests = [
    { icon: FiCpu, text: "IA Aplicada" },
    { icon: FiZap, text: "Automações Inteligentes" },
    { icon: FiCode, text: "Sistemas Escaláveis" },
    { icon: FiDatabase, text: "Produtos SaaS" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 mb-4 leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e automação, com foco em construir 
              soluções práticas que resolvem problemas reais.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Com perfil autodidata e aprendizado rápido, estou sempre explorando novas tecnologias 
              e formas de automatizar processos. Meu trabalho combina desenvolvimento web moderno 
              com inteligência artificial e automações.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Atualmente me dedico a criar sistemas escaláveis, bots inteligentes e integrações 
              que conectam diferentes plataformas, sempre buscando eficiência e qualidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Áreas de Interesse</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <item.icon className="text-blue-400" size={18} />
                    <span className="text-sm">{item.text}</span>
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
