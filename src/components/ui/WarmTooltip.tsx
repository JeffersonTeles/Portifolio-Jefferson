'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cloneElement, useEffect, useId, useRef, useState, type ReactElement, type ReactNode } from 'react';
import styles from './WarmTooltip.module.css';

type WarmTooltipProps = {
  content: ReactNode;
  children: ReactElement<Record<string, unknown>>;
  side?: 'top' | 'bottom';
  openDelay?: number;
  closeDelay?: number;
};

export function WarmTooltip({
  content,
  children,
  side = 'bottom',
  openDelay = 220,
  closeDelay = 180,
}: WarmTooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  const reduceMotion = useReducedMotion();
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const scheduleOpen = (delay = openDelay) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = setTimeout(() => setOpen(true), delay);
  };

  const scheduleClose = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = null;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), closeDelay);
  };

  const closeNow = () => {
    clearTimers();
    setOpen(false);
  };

  useEffect(() => clearTimers, []);

  const trigger = cloneElement(children, {
    'aria-describedby': open ? tooltipId : undefined,
    'aria-expanded': open,
  });

  return (
    <span
      className={styles.root}
      onPointerEnter={() => scheduleOpen()}
      onPointerLeave={scheduleClose}
      onFocusCapture={() => scheduleOpen(0)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) scheduleClose();
      }}
      onPointerCancel={closeNow}
      onClick={() => {
        clearTimers();
        setOpen(true);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') closeNow();
      }}
    >
      {trigger}
      <AnimatePresence>
        {open && (
          <motion.span
            id={tooltipId}
            role="tooltip"
            className={`${styles.tooltip} ${side === 'top' ? styles.top : styles.bottom}`}
            initial={reduceMotion ? false : { opacity: 0, y: side === 'top' ? 3 : -3, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 28 }}
          >
            {content}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
