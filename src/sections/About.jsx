import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiZap, FiCode, FiDatabase, FiServer, FiLink, FiAward, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const stats = [
    { value: "3+", label: "ANOS DE EXPERIÊNCIA", icon: FiAward },
    { value: "15+", label: "PROJETOS CONCLUÍDOS", icon: FiCode },
    { value: "10+", label: "TECNOLOGIAS", icon: FiCpu }
  ];

  const focuses = [
    { icon: FiZap, text: "Automações inteligentes" },
    { icon: FiCpu, text: "IA aplicada" },
    { icon: FiLink, text: "Integrações entre plataformas" },
    { icon: FiServer, text: "APIs escaláveis" },
    { icon: FiCode, text: "Sistemas web modernos" },
    { icon: FiDatabase, text: "Soluções SaaS" }
  ];

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              SOBRE //
            </span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto shadow-[0_0_20px_#0ff]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor full-stack focado em automações inteligentes, APIs escaláveis 
              e sistemas web modernos. Transformo ideias em soluções digitais de alto impacto.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Com perfil autodidata e aprendizado contínuo, construo projetos práticos 
              que resolvem problemas reais através de tecnologia de ponta.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Meu trabalho combina backend moderno, APIs bem estruturadas e interfaces 
              funcionais para entregar produtos digitais de qualidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800">
                  <stat.icon className="text-cyan-400 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-4 font-mono">[ FOCOS ]</h3>
              <div className="grid grid-cols-2 gap-3">
                {focuses.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-400">
                    <item.icon size={14} className="text-cyan-400" />
                    <span className="text-xs">{item.text}</span>
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
