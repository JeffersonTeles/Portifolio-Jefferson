import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const Experience = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Início da Jornada',
      description: 'Começou estudando desenvolvimento web e programação',
      icon: '🚀',
      side: 'left',
    },
    {
      year: '2021',
      title: 'Domínio em JavaScript & React',
      description: 'Aperfeiçoado em React, Node.js e desenvolvimento fullstack',
      icon: '⚛️',
      side: 'right',
    },
    {
      year: '2022',
      title: 'Especialização em IA',
      description: 'Imersão em inteligência artificial, machine learning e APIs generativas',
      icon: '🤖',
      side: 'left',
    },
    {
      year: '2023',
      title: 'Criação de SaaS',
      description: 'Desenvolveu primeira plataforma SaaS com automação e IA integrada',
      icon: '💼',
      side: 'right',
    },
    {
      year: '2024',
      title: 'Especialista em Automação',
      description: 'Tornou-se referência em automação com IA e sistemas inteligentes',
      icon: '⚡',
      side: 'left',
    },
    {
      year: '2025',
      title: 'Inovação Contínua',
      description: 'Desenvolvendo soluções cutting-edge com tecnologia de ponta',
      icon: '🌟',
      side: 'right',
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Jornada & Experiência
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma trajetória de aprendizado contínuo e inovação tecnológica
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-20">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-6 lg:gap-12 ${
                  item.side === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: item.side === 'left' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Content - Desktop (visible on lg) */}
                <div className="hidden lg:flex-1 lg:flex lg:flex-col">
                  {item.side === 'left' && (
                    <motion.div
                      className="glass rounded-xl p-6 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 text-right group"
                      whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                    >
                      <div className="text-neon-cyan font-mono text-sm mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Center Dot */}
                <motion.div
                  className="relative z-10 flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-16 h-16 rounded-full glass border-2 border-neon-cyan flex items-center justify-center text-3xl glow-cyan">
                    {item.icon}
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-neon-cyan"
                    animate={{ scale: [1, 1.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ opacity: 0.5 }}
                  ></motion.div>
                </motion.div>

                {/* Content - Desktop (visible on lg) */}
                <div className="hidden lg:flex-1 lg:flex lg:flex-col">
                  {item.side === 'right' && (
                    <motion.div
                      className="glass rounded-xl p-6 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 group"
                      whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                    >
                      <div className="text-neon-cyan font-mono text-sm mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Mobile Content */}
                <div className="flex-1 lg:hidden">
                  <motion.div
                    className="glass rounded-xl p-4 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-neon-cyan font-mono text-xs mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { number: '50+', label: 'Projetos Completados' },
            { number: '20+', label: 'Clientes Satisfeitos' },
            { number: '5+', label: 'Anos de Experiência' },
            { number: '100%', label: 'Dedicação' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-6 text-center border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 group"
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
            >
              <motion.div
                className="text-3xl sm:text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
