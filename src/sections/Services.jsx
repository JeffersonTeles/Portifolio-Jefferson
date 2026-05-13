import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiMessageCircle, FiLink, FiBarChart2, FiCpu, FiShield, FiGlobe } from 'react-icons/fi';

const Services = () => {
  const services = [
    { icon: FiCode, title: "Desenvolvimento Full-Stack", description: "Sistemas web completos com arquitetura moderna e alta performance.", color: "cyan" },
    { icon: FiZap, title: "Automação Inteligente", description: "Processos automatizados com IA e fluxos de trabalho otimizados.", color: "purple" },
    { icon: FiMessageCircle, title: "Bots WhatsApp", description: "Chatbots inteligentes para atendimento e vendas automatizadas.", color: "green" },
    { icon: FiLink, title: "APIs & Integrações", description: "APIs REST escaláveis e integração entre plataformas.", color: "blue" },
    { icon: FiBarChart2, title: "Dashboards Analíticos", description: "Painéis com métricas em tempo real e visualizações avançadas.", color: "orange" },
    { icon: FiCpu, title: "Soluções com IA", description: "Integração de modelos de IA em aplicações reais.", color: "pink" }
  ];

  return (
    <section id="services" className="relative py-32 px-4 overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              SERVIÇOS //
            </span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto shadow-[0_0_20px_#0ff]" />
          <p className="text-gray-400 mt-8 font-mono text-sm">
            [ SOLUÇÕES TECNOLÓGICAS // SOB DEMANDA ]
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <service.icon className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                <div className="absolute bottom-4 right-4 text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors">
                  <FiGlobe size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
