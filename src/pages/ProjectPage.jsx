import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiLayers, FiTarget } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import Architecture3D from '../components/Architecture3D';

const getSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const ProjectPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true });
  const project = projects.find(p => getSlug(p.title) === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-white/40 mb-6">Projeto não encontrado.</p>
          <Link to="/" className="text-white underline">Voltar</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="premium-container">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors mb-16 group"
        >
          <FiArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Todos os Projetos
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Hero */}
          <div className="mb-20">
            {project.image && (
              <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
            )}
            <div className={`inline-block px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full border ${project.statusColor} bg-white/[0.02] mb-6`}>
              {project.status}
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white leading-none mb-8">
              {project.title}
            </h1>
            <p className="text-xl text-white/50 font-light max-w-2xl leading-relaxed">
              {project.longDesc}
            </p>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="glass-panel p-8 rounded-2xl">
              <div className="flex items-center gap-3 text-white/40 mb-6">
                <FiLayers size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] text-xs font-mono text-white/60 border border-white/[0.05]">{s}</span>
                ))}
              </div>
            </div>
            <div className="glass-panel p-8 rounded-2xl">
              <div className="flex items-center gap-3 text-white/40 mb-6">
                <FiTarget size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Desafio Principal</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed italic">{project.challenge}</p>
            </div>
          </div>

          {/* Technical */}
          {project.technicalDeepDive && (
            <div className="mb-20">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-4 mb-8">Detalhes Técnicos</h2>
              <p className="text-white/50 text-lg font-light leading-relaxed">{project.technicalDeepDive}</p>
            </div>
          )}

          {/* Code snippet */}
          {project.codeSnippet && (
            <div className="mb-20">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-4 mb-8">Implementação</h2>
              <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="w-2 h-2 rounded-full bg-red-500/30" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                  <div className="w-2 h-2 rounded-full bg-green-500/30" />
                  <span className="ml-2 text-[9px] font-mono text-white/20 uppercase">{project.codeLanguage}</span>
                </div>
                <pre className="p-8 overflow-x-auto text-[11px] font-mono leading-relaxed text-white/70">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* 3D */}
          <div className="mb-20">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-4 mb-8">Blueprint Arquitetural (3D)</h2>
            <Architecture3D />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-12 border-t border-white/5">
            {project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-full hover:scale-105 transition-all"
              >
                <FiExternalLink size={14} />
                Ver ao Vivo
              </a>
            )}
            <Link to="/" className="px-10 py-4 border border-white/10 text-white font-bold uppercase text-[10px] tracking-widest rounded-full hover:bg-white/5 transition-all">
              Voltar ao Portfólio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
