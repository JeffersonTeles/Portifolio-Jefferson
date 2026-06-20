import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiExternalLink } from 'react-icons/fi';

const certs = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    type: 'Cloud',
    icon: FiAward,
    url: 'https://aws.amazon.com/certification/',
  },
  {
    title: 'Google Cloud Associate',
    issuer: 'Google Cloud',
    year: '2023',
    type: 'Cloud',
    icon: FiAward,
    url: 'https://cloud.google.com/certification',
  },
  {
    title: 'React Advanced',
    issuer: 'Meta',
    year: '2023',
    type: 'Frontend',
    icon: FiBook,
    url: 'https://www.meta.com/',
  },
  {
    title: 'Engenharia de Software',
    issuer: 'Universidade — Em Andamento',
    year: '2026',
    type: 'Graduação',
    icon: FiAward,
    url: '#',
  },
  {
    title: 'Técnico em Informática',
    issuer: 'Instituto Federal',
    year: '2022',
    type: 'Técnico',
    icon: FiAward,
    url: '#',
  },
  {
    title: 'Linux System Administration',
    issuer: 'Linux Foundation',
    year: '2023',
    type: 'DevOps',
    icon: FiBook,
    url: 'https://www.linuxfoundation.org/',
  },
  {
    title: 'Node.js Microservices',
    issuer: 'Udemy',
    year: '2024',
    type: 'Backend',
    icon: FiBook,
    url: 'https://www.udemy.com/',
  },
  {
    title: 'TypeScript Masterclass',
    issuer: 'Udemy',
    year: '2024',
    type: 'Frontend',
    icon: FiBook,
    url: 'https://www.udemy.com/',
  },
];

const Certifications = () => (
  <section id="certifications" className="py-32 bg-black relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    <div className="premium-container">
      <div className="mb-16">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-6 block"
        >
          05 / Formação
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight"
        >
          Cursos &<br />
          <span className="text-white/30 italic font-light">Certificações.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.15)' }}
            className="group flex items-start gap-5 p-6 glass-panel rounded-2xl border border-white/[0.05] transition-all duration-300 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/30 group-hover:bg-white group-hover:text-black transition-all duration-400 shrink-0">
              <cert.icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-bold text-white/80 group-hover:text-white transition-colors leading-tight">
                  {cert.title}
                </h4>
                <FiExternalLink size={12} className="text-white/20 group-hover:text-white/50 transition-colors shrink-0 mt-0.5" />
              </div>
              <p className="text-[11px] text-white/30 mt-1">{cert.issuer}</p>
              <div className="flex items-center gap-3 mt-3">
                <span className="px-2 py-0.5 rounded-full border border-white/[0.08] text-[9px] font-mono text-white/30 uppercase tracking-wider">
                  {cert.type}
                </span>
                <span className="text-[9px] font-mono text-white/20">{cert.year}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
