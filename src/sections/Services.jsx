import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiMessageCircle, FiLink, FiBarChart2, FiCpu } from 'react-icons/fi';

const Services = () => {
  const services = [
    { icon: FiCode, title: "Desenvolvimento Full-Stack", description: "Sistemas web completos com backend moderno e interfaces funcionais." },
    { icon: FiZap, title: "Automações", description: "Processos automatizados e fluxos de trabalho inteligentes." },
    { icon: FiLink, title: "Integração de APIs", description: "Conexão entre plataformas e serviços via APIs REST." },
    { icon: FiBarChart2, title: "Dashboards", description: "Painéis administrativos com métricas em tempo real." },
    { icon: FiMessageCircle, title: "Bots Inteligentes", description: "Chatbots para WhatsApp e automação de atendimento." },
    { icon: FiCpu, title: "Soluções com IA", description: "Integração de modelos de IA em aplicações reais." }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Serviços
          </h2>
          <div className="w-12 h-px bg-white/10 mx-auto mb-8" />
          <p className="text-white/40">
            O que posso fazer pelo seu projeto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -2 }}
            >
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-6 hover:border-white/[0.1] transition-all duration-300">
                <service.icon size={24} className="text-white/40 mb-4" />
                <h3 className="text-base font-medium text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
