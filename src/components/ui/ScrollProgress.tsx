'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 90,
        height: 2,
        transformOrigin: '0%',
        scaleX,
        background: 'var(--color-accent)',
      }}
    />
  );
}
