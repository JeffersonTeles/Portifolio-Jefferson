import React, { useState, useEffect } from 'react';

const SpotlightCursor = () => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.04), transparent 70%)`,
        transition: 'background 0.1s ease',
      }}
    />
  );
};

export default SpotlightCursor;
