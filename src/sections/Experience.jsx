import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMonitor, FiCpu, FiServer, FiCheckCircle } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';

const Experience = () => {
  const { t } = useTranslation();
  const list = t('experience.list', { returnObjects: true });

  const roleIcons = [FiMonitor, FiCpu, FiServer];

  const roleTags = [
    ['JSON/XML', 'APIs', 'Linux', 'SaaS', 'NFS-e'],
    ['Arduino', 'ESP32', 'Sistemas Embarcados', 'Automação'],
    ['Redes LAN/WAN', 'Mikrotik', 'VPN', 'Hardware', 'Fibra Ótica'],
  ];

  return (
    <AnimatedSection id="experience" className="py-28">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.8rem] font-bold text-white mb-4">{t('experience.heading')}</h2>
        <p className="text-[0.95rem] text-[#777] leading-relaxed mb-16 max-w-[600px]">
          {t('experience.intro')}
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {list.map((item, i) => {
              const IconComponent = roleIcons[i % roleIcons.length];
              const tags = roleTags[i % roleTags.length];
              const isCurrent = i === 0; // FaturÁgil is first (current)

              return (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i}
                  className="relative sm:pl-14 group"
                >
                  {/* Timeline dot with icon */}
                  <div className="absolute left-0 top-1 w-[38px] h-[38px] rounded-xl border border-accent/40 bg-[#111] hidden sm:flex items-center justify-center text-accent shadow-[0_0_15px_rgba(226,166,61,0.2)] group-hover:border-accent group-hover:scale-110 transition-all">
                    <IconComponent size={18} />
                  </div>

                  {/* Glassmorphic Experience Card */}
                  <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-accent/40 backdrop-blur-md transition-all duration-300 spark-hover relative overflow-hidden">
                    
                    {/* Top Row: Role, Period, Current Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-[1.15rem] font-bold text-white group-hover:text-accent transition-colors">
                          {item.role}
                        </h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-[0.7rem] font-mono shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Atual
                          </span>
                        )}
                      </div>
                      <span className="text-[0.75rem] text-[#666] font-mono shrink-0">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-[0.9rem] text-accent/80 mb-3 font-mono font-medium">{item.company}</p>
                    <p className="text-[0.95rem] text-[#888] leading-relaxed mb-5">{item.summary}</p>

                    {/* Bullets */}
                    <ul className="space-y-2.5 mb-6">
                      {item.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-[0.9rem] text-[#777]">
                          <span className="text-accent mt-[6px] text-[8px] shrink-0">◆</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[0.75rem] font-mono text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
