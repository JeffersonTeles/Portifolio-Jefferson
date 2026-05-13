// src/sections/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiMessageCircle, FiLink, FiBarChart2, FiLayout } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: "Desenvolvimento Web",
      description: "Sites institucionais, e-commerces e aplicações web modernas e responsivas."
    },
    {
      icon: FiZap,
      title: "Automações",
      description: "Automação de processos, tarefas repetitivas e fluxos de trabalho inteligentes."
    },
    {
      icon: FiMessageCircle,
      title: "Bots WhatsApp",
      description: "Chatbots inteligentes para atendimento, vendas e suporte automatizado."
    },
    {
      icon: FiLink,
      title: "APIs e Integrações",
      description: "Desenvolvimento e integração de APIs REST para conectar sistemas."
    },
    {
      icon: FiBarChart2,
      title: "Dashboards",
      description: "Painéis administrativos com gráficos, métricas e análises em tempo real."
    },
    {
      icon: FiLayout,
      title: "Landing Pages",
      description: "Páginas de alta conversão para produtos, serviços e campanhas."
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Soluções que ofereço para ajudar seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
                <service.icon className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;