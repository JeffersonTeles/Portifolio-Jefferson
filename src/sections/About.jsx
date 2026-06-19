import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const timeline = t('about.timeline', { returnObjects: true });
  const tags = t('about.tags', { returnObjects: true });

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="about" className="py-40 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="premium-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7">
            <motion.span 
              {...fadeUp}
              className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30 mb-10 block"
            >
              {t('about.label')}
            </motion.span>
            
            <motion.h2 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-12 tracking-tight"
            >
              {t('about.heading1')}<span className="text-white/50">{t('about.heading2')}</span>{t('about.heading3')}<span className="italic font-light">{t('about.heading4')}</span>
            </motion.h2>
            
            <div className="space-y-8 text-xl text-white/40 font-light leading-relaxed max-w-2xl">
              <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
                {t('about.p1')}<span className="text-white font-medium">{t('about.p1Highlight')}</span>{t('about.p1End')}
              </motion.p>
              <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
                {t('about.p2')}<span className="text-white font-medium">{t('about.p2Highlight')}</span>{t('about.p2End')}
              </motion.p>
              <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
                {t('about.p3')}<span className="text-white font-medium">{t('about.p3Highlight')}</span>{t('about.p3End')}
              </motion.p>
            </div>

            <motion.div 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-16"
            >
              {tags.map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-medium text-white/60 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual Timeline */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-10 md:p-12 rounded-3xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.02] blur-[80px]" />
               
               <div className="space-y-12 relative z-10">
                 {timeline.map((item, i) => (
                   <div key={i} className="flex gap-8 group/item">
                     <div className="flex flex-col items-center pt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-white transition-colors duration-500 shadow-glow" />
                        {i !== timeline.length - 1 && <div className="w-px h-full bg-white/5 mt-4" />}
                     </div>
                     <div className="pb-2">
                        <span className="text-[10px] font-mono text-white/20 block mb-2 tracking-widest">{item.year}</span>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2 group-hover/item:text-white/80 transition-colors">{item.title}</h4>
                        <p className="text-xs text-white/40 leading-relaxed font-medium">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
