import { cn } from '@/lib/utils';

type HudLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function HudLabel({ children, className }: HudLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent',
        className,
      )}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  );
}
