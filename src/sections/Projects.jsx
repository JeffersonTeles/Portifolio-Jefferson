import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Plataforma de Automação WhatsApp',
      description: 'Sistema inteligente de automação para WhatsApp com IA generativa, suportando chatbots, agendamentos e integração com APIs.',
      image: '🤖',
      technologies: ['Node.js', 'WhatsApp API', 'IA', 'Firebase'],
      category: 'automacao',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Dashboard Financeiro Inteligente',
      description: 'Dashboard analítico com visualizações em tempo real, previsões com IA e relatórios automáticos de dados financeiros.',
      image: '📊',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Chart.js'],
      category: 'dashboard',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Sistema de Afiliados com IA',
      description: 'Plataforma SaaS completa para gerenciar afiliados, comissões automáticas e análise inteligente de performance com machine learning.',
      image: '💼',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'Stripe'],
      category: 'saas',
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Gerador de Landing Pages com IA',
      description: 'Ferramenta SaaS que gera landing pages profissionais usando IA, com templates responsivos e otimização SEO automática.',
      image: '🎨',
      technologies: ['React', 'Next.js', 'OpenAI', 'TailwindCSS'],
      category: 'ia',
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'CRM Automatizado',
      description: 'Sistema CRM completo com automação de workflows, integração com email, WhatsApp e análise inteligente de clientes.',
      image: '📱',
      technologies: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
      category: 'automacao',
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Painel Analytics Avançado',
      description: 'Plataforma de analytics moderna com visualizações customizáveis, previsões preditivas e exportação de dados em múltiplos formatos.',
      image: '📈',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
      category: 'dashboard',
      github: '#',
      demo: '#',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'ia', label: 'IA' },
    { id: 'automacao', label: 'Automação' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'saas', label: 'SaaS' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projetos inovadores e escaláveis que transformam ideias em soluções reais
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          {...fadeInUp}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 shadow-neon-cyan'
                  : 'border border-neon-cyan/30 text-gray-300 hover:border-neon-cyan/60'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeInUp}
              className="group relative h-96 rounded-xl overflow-hidden"
            >
              {/* Card Background */}
              <div className="absolute inset-0 glass border border-neon-cyan/20 group-hover:border-neon-cyan/60 transition-all duration-300 rounded-xl"></div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between z-10">
                {/* Icon/Image Area */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Title and Description */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 border border-neon-cyan/50 rounded-lg text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 text-sm font-medium"
                  >
                    <FiGithub /> GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg text-dark-900 hover:shadow-neon-cyan transition-all duration-300 text-sm font-medium"
                  >
                    <FiExternalLink /> Demo
                  </motion.a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-400 text-lg">
              Nenhum projeto encontrado nesta categoria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
