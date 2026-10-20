'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { flushSync } from 'react-dom';
import { useTheme } from './ThemeProvider';
import styles from './ThemeToggle.module.css';

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => unknown;
};

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const isDark = theme === 'dark';

  function handleToggle() {
    const viewTransition = (document as ViewTransitionDocument).startViewTransition;
    if (reduceMotion || typeof viewTransition !== 'function') {
      toggleTheme();
      return;
    }

    viewTransition.call(document, () => {
      flushSync(toggleTheme);
    });
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={styles.button}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className={styles.icon}
          initial={reduceMotion ? false : { opacity: 0, rotate: -35, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, rotate: 35, scale: 0.7 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          aria-hidden
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
