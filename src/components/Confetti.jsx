import React, { useCallback, useEffect, useRef } from 'react';

const Confetti = ({ children, options = {}, className = '' }) => {
  const containerRef = useRef(null);
  const {
    particleCount = 50,
    spread = 70,
    startVelocity = 30,
    decay = 0.9,
    gravity = 1.2,
    ticks = 150,
    colors = ['#e2a63d', '#f0b94f', '#d4952f', '#b87825', '#ffffff'],
  } = options;

  const createConfetti = useCallback(
    (x, y) => {
      for (let i = 0; i < particleCount; i++) {
        const el = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 8 + 4;
        const angle = (Math.random() * spread - spread / 2) * (Math.PI / 180);
        const velocity = startVelocity * (0.5 + Math.random() * 0.5);

        el.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size * (Math.random() > 0.5 ? 1 : 0.6)}px;
        background: ${color};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        opacity: 1;
      `;
        document.body.appendChild(el);

        let px = x;
        let py = y;
        let vx = Math.cos(angle) * velocity;
        let opacity = 1;
        let ticksRemaining = ticks;

        const animate = () => {
          px += vx;
          py += gravity;
          vx *= decay;
          opacity -= 1 / ticks;
          ticksRemaining--;

          if (ticksRemaining <= 0 || opacity <= 0) {
            el.remove();
            return;
          }

          el.style.left = `${px}px`;
          el.style.top = `${py}px`;
          el.style.opacity = opacity;
          el.style.transform = `rotate(${ticksRemaining * 5}deg)`;
          requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }
    },
    [particleCount, spread, startVelocity, decay, gravity, ticks, colors]
  );

  // Evento delegado no container: sem wrapper fake-interativo (a11y). O clique
  // do botão/link interno borbulha para cá e dispara o confete.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const onClick = () => {
      const rect = el.getBoundingClientRect();
      createConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    };
    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [createConfetti]);

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
};

export default Confetti;
