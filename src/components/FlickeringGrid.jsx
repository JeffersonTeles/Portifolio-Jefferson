import React, { useMemo } from 'react';

const FlickeringGrid = ({ className = '' }) => {
  const squares = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      opacity: Math.random() * 0.3 + 0.05,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    }));
  }, []);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      <div className="absolute inset-[-50%] grid grid-cols-[repeat(20,1fr)] gap-2 rotate-[22deg] opacity-30">
        {squares.map((square) => (
          <div
            key={square.id}
            className="flickering-square rounded-[1px]"
            style={{
              opacity: square.opacity,
              animationDelay: square.animationDelay,
              animationDuration: square.animationDuration,
              backgroundColor: 'var(--color-text-dim)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FlickeringGrid;
