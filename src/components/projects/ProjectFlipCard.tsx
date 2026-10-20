'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import type { PortfolioProject } from '@/config/projects';
import styles from './ProjectFlipCard.module.css';

type ProjectFlipCardProps = {
  project: PortfolioProject;
};

export function ProjectFlipCard({ project }: ProjectFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();
  const isTool = project.kind === 'tool';
  const targetUrl = isTool ? (project.repository ?? project.url) : project.url;
  const externalLabel = isTool ? 'Ver repositório' : 'Abrir projeto';

  return (
    <div className={styles.wrapper}>
      <div className={styles.scene} aria-label={`Preview do projeto ${project.title}`}>
        <motion.div
          className={styles.card}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 180, damping: 24 }}
        >
          <div className={`${styles.face} ${styles.front}`} aria-hidden={flipped}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1160px"
            />
            <span className={styles.frontLabel}>Screenshot real</span>
          </div>
          <div className={`${styles.face} ${styles.back}`} aria-hidden={!flipped}>
            <span className={styles.backLabel}>Stack e papel</span>
            <h2>{project.role}</h2>
            <ul>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <span className={styles.backIndex}>{project.category}</span>
          </div>
        </motion.div>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className="btn btn--ghost"
          aria-pressed={flipped}
          onClick={() => setFlipped((current) => !current)}
        >
          <RotateCcw size={15} aria-hidden />
          {flipped ? 'Ver tela' : 'Ver contexto'}
        </button>
        <a
          href={targetUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.externalLink}
        >
          {externalLabel} <ExternalLink size={14} aria-hidden />
        </a>
      </div>
      <Link href="/projetos" className={styles.backLink}>
        <ArrowUpRight size={14} aria-hidden /> Ver outros projetos
      </Link>
    </div>
  );
}
