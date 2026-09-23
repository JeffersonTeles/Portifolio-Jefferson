import React, { useRef, useEffect, useState } from 'react';

const TextScrollAnimation = ({ text, className = '' }) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = viewportCenter - elementCenter;
      const maxDistance = windowHeight / 2;
      const progress = Math.min(Math.max(distance / maxDistance, 0), 1);
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = text.split(' ');

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const wordProgress = Math.min(Math.max((progress - i * 0.05) / 0.3, 0), 1);
        return (
          <span
            key={i}
            className="inline-block transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            style={{
              opacity: wordProgress,
              transform: `translateY(${(1 - wordProgress) * 15}px)`,
              color: wordProgress > 0.5 ? 'var(--color-text)' : 'var(--color-text-dim)',
              marginRight: i < words.length - 1 ? '0.28em' : 0,
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
};

export default TextScrollAnimation;
