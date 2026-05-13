import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiZap,
  FiCpu,
  FiMessageCircle,
  FiLink,
  FiLayout,
  FiFileText,
  FiBriefcase,
} from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Desenvolvimento Web',
      description:
        'Aplicações web modernas, responsivas e high-performance usando React, Next.js e tecnologias cutting-edge.',
      color: 'from-neon-cyan to-neon-blue',
    },
    {
      icon: FiCpu,
      title: 'Sistemas Personalizados',
      description:
        'Soluções backend escaláveis com Node.js, Python e bancos de dados otimizados para sua necessidade específica.',
      color: 'from-neon-blue to-neon-purple',
    },
    {
      icon: FiZap,
      title: 'Automação com IA',
      description:
        'Processos automatizados inteligentes usando IA generativa, machine learning e APIs de última geração.',
      color: 'from-neon-purple to-neon-cyan',
    },
    {
      icon: FiMessageCircle,
      title: 'Bots WhatsApp & Chatbots',
      description:
        'Chatbots inteligentes, bots WhatsApp com IA para atendimento, vendas e automação de comunicação.',
      color: 'from-neon-cyan to-neon-blue',
    },
    {
      icon: FiLink,
      title: 'APIs e Integrações',
      description:
        'Design e desenvolvimento de APIs RESTful robustas, integrações com terceiros e sistemas legados.',
      color: 'from-neon-blue to-neon-purple',
    },
    {
      icon: FiLayout,
      title: 'Dashboards Inteligentes',
      description:
        'Painéis analíticos interativos com visualizações em tempo real e insights preditivos com IA.',
      color: 'from-neon-purple to-neon-cyan',
    },
    {
      icon: FiFileText,
      title: 'Landing Pages',
      description:
        'Landing pages de alta conversão otimizadas para SEO, mobile-first e com design moderno minimalista.',
      color: 'from-neon-cyan to-neon-blue',
    },
    {
      icon: FiBriefcase,
      title: 'Consultoria Tecnológica',
      description:
        'Orientação estratégica em arquitetura de software, escolha de tecnologias e roadmap de produto.',
      color: 'from-neon-blue to-neon-purple',
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Serviços Oferecidos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções completas e personalizadas para transformar suas ideias em realidade
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                className="group glass rounded-xl p-6 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 h-full flex flex-col cursor-pointer"
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 217, 255, 0.2)',
                }}
              >
                {/* Icon with gradient background */}
                <motion.div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm flex-1 mb-4">
                  {service.description}
                </p>

                {/* Bottom line animation */}
                <div className="w-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-300 text-lg mb-6">
            Não encontrou o que procura? Vamos conversar sobre soluções customizadas!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg font-bold text-dark-900 hover:shadow-neon-cyan transition-all duration-300 cursor-pointer"
          >
            Começar um Projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
