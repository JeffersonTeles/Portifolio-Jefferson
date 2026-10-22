'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type GlowButtonProps = HTMLMotionProps<'a'> & {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
};

export function GlowButton({ children, glow = true, className, ...rest }: GlowButtonProps) {
  return (
    <motion.a
      whileHover={glow ? { scale: 1.02 } : undefined}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn('btn btn--primary', className)}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
