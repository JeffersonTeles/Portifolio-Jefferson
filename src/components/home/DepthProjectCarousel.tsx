'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import type { PortfolioProject } from '@/config/projects';
import styles from './DepthProjectCarousel.module.css';

type DepthProjectCarouselProps = {
  projects: PortfolioProject[];
};

type CardStyle = CSSProperties & {
  '--card-offset': number;
};

function getRelativeIndex(index: number, activeIndex: number, count: number): number {
  if (count < 2) return 0;
  let offset = index - activeIndex;
  const halfway = count / 2;
  if (offset > halfway) offset -= count;
  if (offset < -halfway) offset += count;
  return offset;
}

export function DepthProjectCarousel({ projects }: DepthProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const dragStart = useRef<number | null>(null);
  const dragMoved = useRef(false);
  const activeProject = projects[activeIndex];

  if (!activeProject) return null;

  const goTo = (index: number) => {
    const count = projects.length;
    if (count < 2) return;
    setActiveIndex((index + count) % count);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      goTo(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      goTo(projects.length - 1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    dragMoved.current = false;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(distance) < 40) return;
    dragMoved.current = true;
    goTo(activeIndex + (distance < 0 ? 1 : -1));
  };

  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    if (dragMoved.current) {
      event.preventDefault();
      dragMoved.current = false;
      return;
    }
    goTo(index);
  };

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Projetos em destaque"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { dragStart.current = null; }}
    >
      <div className={styles.stage} aria-live="polite">
        {projects.map((project, index) => {
          const offset = getRelativeIndex(index, activeIndex, projects.length);
          const distance = Math.abs(offset);
          const isActive = index === activeIndex;
          const isVisible = distance <= 2;
          const style = { '--card-offset': offset } as CardStyle;

          return (
            <div
              className={styles.cardPositioner}
              key={project.slug}
              style={{ ...style, zIndex: isActive ? 100 : 50 - distance }}
            >
              <motion.button
                type="button"
                className={styles.card}
                aria-label={`Mostrar ${project.title}`}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={(event) => handleCardClick(event, index)}
                initial={false}
                animate={{
                  x: offset * (reduceMotion ? 0 : 108),
                  rotateY: reduceMotion ? 0 : offset * -7,
                  z: reduceMotion ? 0 : -distance * 90,
                  scale: reduceMotion ? 1 : Math.max(0.84, 1 - distance * 0.07),
                  opacity: isVisible ? Math.max(0.18, 1 - distance * 0.23) : 0,
                  filter: reduceMotion ? 'none' : `brightness(${Math.max(0.45, 1 - distance * 0.2)})`,
                  zIndex: isActive ? 100 : 50 - distance,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.cardImage}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 900px) 68vw, 720px"
                    priority={index === 0}
                  />
                </span>
                <span className={styles.cardShade} aria-hidden />
                <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.cardCategory}>{project.category}</span>
              </motion.button>
            </div>
          );
        })}
      </div>

      <div className={styles.caption}>
        <div>
          <span className={styles.captionMeta}>{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} · {activeProject.category}</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeProject.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
            >
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.captionActions}>
          <Link href={`/projetos/${activeProject.slug}`} className="btn btn--primary btn--specular">
            Ver projeto <ArrowUpRight size={15} aria-hidden />
          </Link>
          <a
            href={activeProject.url}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.externalLink}
          >
            Abrir ao vivo <ExternalLink size={14} aria-hidden />
          </a>
        </div>
      </div>

      {projects.length > 1 && (
        <div className={styles.controls}>
          <div className={styles.arrows}>
            <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Projeto anterior">
              <ArrowLeft size={17} aria-hidden />
            </button>
            <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Próximo projeto">
              <ArrowRight size={17} aria-hidden />
            </button>
          </div>
          <div className={styles.dots} role="tablist" aria-label="Selecionar projeto">
            {projects.map((project, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Selecionar ${project.title}`}
                className={index === activeIndex ? styles.activeDot : styles.dot}
                key={project.slug}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <span className={styles.hint}>arraste ou use as setas</span>
        </div>
      )}
    </div>
  );
}
