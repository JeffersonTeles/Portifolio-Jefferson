'use client';

import { useEffect, useState } from 'react';
import { List, ChevronRight } from 'lucide-react';
import type { TocHeading } from '@/types/post';
import { cn } from '@/lib/utils';

type TableOfContentsProps = {
  headings: TocHeading[];
  className?: string;
};

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;
    const ids = headings.map((heading) => heading.id).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0.01 },
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Índice do artigo"
      className={cn(className)}
      style={{
        position: 'sticky',
        top: 96,
        alignSelf: 'flex-start',
        maxHeight: 'calc(100vh - 140px)',
        overflowY: 'auto',
      }}
    >
      <div style={{ padding: 'var(--space-5)', borderTop: '1px solid var(--color-border-strong)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 'var(--space-4)',
            color: 'var(--color-text-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          <List size={16} aria-hidden /> Índice
        </div>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {headings.map((heading, index) => {
            const active = activeId === heading.id;
            return (
              <li key={`${heading.id}-${index}`}>
                <a
                  href={`#${heading.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    document.getElementById(heading.id)?.scrollIntoView({
                      behavior: reduceMotion ? 'auto' : 'smooth',
                      block: 'start',
                    });
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginLeft: heading.depth === 4 ? 16 : heading.depth === 3 ? 8 : 0,
                    padding: '0.5rem 0.7rem',
                    borderLeft: `2px solid ${active ? 'var(--color-accent)' : 'transparent'}`,
                    color: active ? 'var(--color-accent)' : 'var(--color-text-muted)',
                    fontSize: 'var(--fs-sm)',
                    fontWeight: active ? 600 : 400,
                    lineHeight: 1.4,
                    transition: 'color var(--transition-fast), border-color var(--transition-fast)',
                  }}
                >
                  <ChevronRight size={12} style={{ opacity: active ? 1 : 0.3, flexShrink: 0 }} aria-hidden />
                  <span>{heading.value}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
