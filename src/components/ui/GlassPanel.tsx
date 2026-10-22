import { cn } from '@/lib/utils';

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function GlassPanel({ children, className, as: Tag = 'div' }: GlassPanelProps) {
  return (
    <Tag className={cn('glass rounded-xl', className)}>
      {children}
    </Tag>
  );
}
