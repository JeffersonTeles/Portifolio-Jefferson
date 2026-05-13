import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiTrendingUp, FiMessageCircle, FiDatabase, FiTarget } from 'react-icons/fi';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'IA Generativa', level: 88 },
  ];

  const services = [
    {
      icon: FiCode,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e escaláveis',
      color: 'text-neon-cyan',
    },
    {
      icon: FiZap,
      title: 'Automação',
      description: 'Processos automatizados com IA',
      color: 'text-neon-blue',
    },
    {
      icon: FiMessageCircle,
      title: 'Bots & APIs',
      description: 'Chatbots, bots WhatsApp e APIs REST',
      color: 'text-neon-purple',
    },
    {
      icon: FiDatabase,
      title: 'Sistemas Inteligentes',
      description: 'Soluções com machine learning',
      color: 'text-neon-cyan',
    },
    {
      icon: FiTrendingUp,
      title: 'SaaS',
      description: 'Plataformas SaaS escaláveis',
      color: 'text-neon-blue',
    },
    {
      icon: FiTarget,
      title: 'Consultoria',
      description: 'Orientação em tecnologia e inovação',
      color: 'text-neon-purple',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Sobre Mim
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desenvolvedor focado em criar soluções inovadoras e escaláveis
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Avatar/Image */}
          <motion.div {...fadeInLeft} className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-2xl opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-neon-cyan/30 glass flex items-center justify-center overflow-hidden group">
                <div className="text-center">
                  <div className="text-8xl font-bold gradient-text mb-4">JT</div>
                  <p className="text-neon-cyan font-mono text-sm">Developer • Innovator</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div {...fadeInRight} className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Jefferson Teles
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sou um desenvolvedor full-stack apaixonado por tecnologia, com foco especial em inteligência artificial, automação inteligente e desenvolvimento de sistemas escaláveis.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Com experiência em arquitetura de software, tenho a habilidade de transformar ideias complexas em soluções práticas e inovadoras que geram impacto real nos negócios.
            </p>

            {/* Skills */}
            <div className="space-y-4 pt-6">
              <h4 className="text-lg font-bold text-neon-cyan">Competências Principais</h4>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-neon-cyan text-sm">{skill.level}%</span>
                  </div>
                  <motion.div
                    className="h-2 bg-dark-700 rounded-full overflow-hidden border border-neon-cyan/20"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                {...fadeInUp}
                className="group glass rounded-xl p-6 border border-neon-cyan/10 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-neon-cyan cursor-pointer"
              >
                <motion.div
                  className={`text-4xl ${service.color} mb-4 transition-transform duration-300 group-hover:scale-110`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon />
                </motion.div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {service.description}
                </p>
                <div className="mt-4 w-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
