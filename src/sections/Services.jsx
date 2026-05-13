import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiMessageCircle, FiLink, FiBarChart2, FiCpu } from 'react-icons/fi';

const Services = () => {
  const services = [
    { icon: FiCode, title: "Desenvolvimento Web", description: "Sites e aplicações web modernas e responsivas." },
    { icon: FiZap, title: "Automações", description: "Processos automatizados e fluxos de trabalho inteligentes." },
    { icon: FiMessageCircle, title: "Bots WhatsApp", description: "Chatbots para atendimento e vendas automatizadas." },
    { icon: FiLink, title: "APIs", description: "APIs REST escaláveis e integrações." },
    { icon: FiBarChart2, title: "Dashboards", description: "Painéis com métricas em tempo real." },
    { icon: FiCpu, title: "IA", description: "Integração de modelos de IA em aplicações." }
  ];

  return (
    <section className="section-premium bg-white/[0.01]">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Serviços</h2>
          <div className="section-divider" />
          <p className="section-subtitle text-sm">
            O que posso fazer pelo seu projeto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card-premium"
            >
              <service.icon size={24} className="text-white/40 mb-4" />
              <h3 className="text-base font-medium text-white mb-2">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
