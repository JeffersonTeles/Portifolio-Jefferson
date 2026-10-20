'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { Heart, Share2, ThumbsUp, Frown, Meh, Sparkles } from 'lucide-react';

type Reaction = {
  key: 'love' | 'like' | 'sparkle' | 'neutral' | 'sad';
  Icon: typeof Heart;
  color: string;
  label: string;
};

const REACTIONS: Reaction[] = [
  { key: 'love', Icon: Heart, color: 'var(--color-accent)', label: 'Amei' },
  { key: 'like', Icon: ThumbsUp, color: 'var(--color-accent)', label: 'Curti' },
  { key: 'sparkle', Icon: Sparkles, color: 'var(--color-accent)', label: 'Inspirador' },
  { key: 'neutral', Icon: Meh, color: 'var(--color-text-muted)', label: 'Neutro' },
  { key: 'sad', Icon: Frown, color: 'var(--color-text-muted)', label: 'Não me ajudou' },
];

type CounterDemoProps = {
  title?: string;
};

export function CounterDemo({ title = 'Widget Interativo: Contador com Reações' }: CounterDemoProps) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [reactionCounts, setReactionCounts] = useState<Record<Reaction['key'], number>>({
    love: 3, like: 7, sparkle: 2, neutral: 1, sad: 0,
  });
  const [lastReaction, setLastReaction] = useState<Reaction['key'] | null>(null);

  function increment() {
    setCount((c) => c + 1);
  }
  function decrement() {
    setCount((c) => Math.max(0, c - 1));
  }
  function reset() {
    setCount(0);
  }

  function react(key: Reaction['key']) {
    setReactionCounts((r) => ({ ...r, [key]: r[key] + 1 }));
    setLastReaction(key);
    setTimeout(() => setLastReaction(null), 1200);
  }

  return (
    <div
      className="bento-card bento-card--accent-pink"
      style={{
        padding: 'var(--space-6)',
        margin: 'var(--space-7) 0',
      }}
      aria-label={title}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 'var(--space-5)',
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-md)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-surface-2)',
            color: 'var(--color-accent)',
          }}
        >
          <Sparkles size={20} />
        </div>
        <div>
          <h3 className="h4">{title}</h3>
          <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-text-muted)' }}>
            Isso é um componente React embutido direto no MDX! Interaja à vontade.
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-6)',
        }}
        className="md:grid-cols-2"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-4)',
            padding: 'var(--space-6)',
            background: 'var(--color-bg-sunken)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
          }}
        >
          <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-text-muted)' }}>
            Contador atual
          </p>
          <motion.div
            key={count}
            initial={reduceMotion ? false : { scale: 0.8, opacity: 0, rotate: -6 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 16 }}
            style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
               fontWeight: 800,
               letterSpacing: '-0.04em',
               lineHeight: 1,
               color: 'var(--color-accent)',
            }}
          >
            {count}
          </motion.div>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.button
              whileHover={reduceMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={reduceMotion ? {} : { scale: 0.94 }}
              onClick={decrement}
              className="btn btn--ghost"
              aria-label="Decrementar contador"
              style={{ padding: '0.7rem 1.1rem' }}
            >
              − Diminuir
            </motion.button>
            <motion.button
              whileHover={reduceMotion ? {} : { scale: 1.08, y: -2 }}
              whileTap={reduceMotion ? {} : { scale: 0.94 }}
              onClick={increment}
              className="btn btn--primary"
              aria-label="Incrementar contador"
              style={{ padding: '0.7rem 1.1rem' }}
            >
              + Aumentar
            </motion.button>
            <button onClick={reset} className="btn btn--ghost" style={{ padding: '0.7rem 1rem' }}>
              Reset
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
          }}
        >
          <p style={{ fontWeight: 600, fontSize: 'var(--fs-sm)', color: 'var(--color-text-muted)' }}>
            Como você se sentiu sobre este exemplo?
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(96px, 1fr))', gap: 'var(--space-2)' }}>
            {REACTIONS.map(({ key, Icon, color, label }) => {
              const isLast = lastReaction === key;
              return (
                <motion.button
                  key={key}
                  whileHover={reduceMotion ? {} : { y: -3 }}
                  whileTap={reduceMotion ? {} : { scale: 0.9 }}
                  onClick={() => react(key)}
                  animate={isLast && !reduceMotion ? { y: [0, -8, 0], rotate: [0, -10, 10, 0] } : {}}
                  transition={isLast ? { duration: 0.5, type: 'spring', stiffness: 300 } : {}}
                  aria-label={label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                    padding: 'var(--space-3)',
                     borderRadius: 'var(--radius-md)',
                     border: '1px solid var(--color-border)',
                    background: 'var(--color-surface-1)',
                    transition: 'all var(--transition-fast)',
                    outline: isLast ? `2px solid ${color}` : 'none',
                    outlineOffset: 2,
                  }}
                >
                  <Icon size={22} style={{ color }} />
                  <span style={{ fontSize: 'var(--fs-xs)', fontWeight: 600 }}>{label}</span>
                  <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-subtle)' }}>
                    {reactionCounts[key]}
                  </span>
                </motion.button>
              );
            })}
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: 'var(--space-2) var(--space-3)',
               borderRadius: 'var(--radius-sm)',
               background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
               color: 'var(--color-accent)',
               border: '1px solid color-mix(in srgb, var(--color-accent) 25%, transparent)',
              fontSize: 'var(--fs-xs)',
              fontWeight: 600,
              width: 'fit-content',
            }}
          >
            <Share2 size={12} /> Todo estado é do React — nenhum dado sai daqui.
          </div>
        </div>
      </div>
    </div>
  );
}
