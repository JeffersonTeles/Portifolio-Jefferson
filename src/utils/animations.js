import { motion } from 'framer-motion';

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1 },
  viewport: { once: true, amount: 0.3 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  whileInView: { opacity: 1, rotate: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};
