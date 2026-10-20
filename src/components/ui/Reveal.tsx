'use client';

import { forwardRef, type CSSProperties, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
  x?: number;
  once?: boolean;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  role?: string;
};

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(function Reveal(
  { children, className, style, id, role, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy },
  ref,
) {
  return (
    <div
      ref={ref}
      id={id}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
});
