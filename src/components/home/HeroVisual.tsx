'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { PortfolioProject } from '@/config/projects';
import styles from './Home.module.css';

export function HeroVisual({ project }: { project: PortfolioProject }) {
  const visualRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ['start end', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -10]);

  return (
    <figure className={styles.heroFigure} ref={visualRef}>
      <div className={styles.figureMeta}>
        <span>projeto 001</span>
        <span>site real</span>
      </div>
      <div className={styles.figureImage}>
        <motion.div
          className={styles.figureImageMotion}
          style={reduceMotion ? undefined : { scale: imageScale, y: imageY }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 56vw"
          />
        </motion.div>
        <span className={styles.signalLine} aria-hidden />
        <span className={styles.signalLabel} aria-hidden>
          captura real
        </span>
      </div>
      <figcaption>
        <div>
          <span>{project.category}</span>
          <Link href={`/projetos/${project.slug}`}>
            <h2>{project.title}</h2>
          </Link>
        </div>
        <Link href={`/projetos/${project.slug}`} aria-label={`Abrir projeto ${project.title}`}>
          <ArrowUpRight size={18} aria-hidden />
        </Link>
      </figcaption>
    </figure>
  );
}
