'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { portfolioProjects } from '@/config/projects';
import { useRef } from 'react';
import styles from './PortfolioIntro.module.css';

export function PortfolioIntro() {
  const introRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start start', 'end start'],
  });
  const frameWidth = useTransform(scrollYProgress, [0, 0.25, 0.5], ['68%', '100%', '100%']);
  const frameHeight = useTransform(scrollYProgress, [0, 0.25, 0.5], ['74%', '100%', '100%']);
  const frameRadius = useTransform(scrollYProgress, [0, 0.25, 0.5], [18, 0, 0]);
  const compactOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const expandedOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const compactY = useTransform(scrollYProgress, [0, 0.15], [0, -18]);
  const expandedY = useTransform(scrollYProgress, [0.1, 0.3], [18, 0]);

  return (
    <div className={styles.intro} ref={introRef}>
      <div className={styles.frameArea}>
        <motion.div
          className={styles.frame}
          style={reduceMotion ? { width: '100%', height: '100%', borderRadius: 0 } : { width: frameWidth, height: frameHeight, borderRadius: frameRadius }}
        >
          <div className={styles.frameGrid} aria-hidden />
          <motion.div
            className={styles.compact}
            style={reduceMotion ? undefined : { opacity: compactOpacity, y: compactY }}
          >
            <div>
              <span>Jefferson Teles</span>
              <strong>Suporte técnico → Frontend</strong>
            </div>
          </motion.div>
          <motion.div
            className={styles.expanded}
            style={reduceMotion ? undefined : { opacity: expandedOpacity, y: expandedY }}
          >
            <span className={styles.expandedLabel}>PORTFÓLIO / 2026</span>
            <p>O contexto vem antes do código.</p>
            <div className={styles.signalLine} aria-hidden />
            <div className={styles.expandedMeta}>
              <span>Suporte N2 · SaaS fiscal</span>
              <span>Automação industrial</span>
              <span>Frontend · projetos</span>
            </div>
            <div className={styles.proofStrip} aria-label="Registros visuais do portfólio">
              {portfolioProjects.map((project, index) => (
                <div className={styles.proofItem} key={project.slug}>
                  <Image src={project.image} alt="" fill sizes="120px" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
            <span className={styles.proofLabel}>provas reais / 04 registros</span>
          </motion.div>
          <span className={styles.frameIndex} aria-hidden>IDENTIDADE / 01</span>
        </motion.div>
      </div>
      <span className={styles.scrollCue} aria-hidden>role para expandir</span>
    </div>
  );
}
