import React, { useCallback, useEffect, useRef } from 'react';

const CoolMode = ({ children, options = {} }) => {
  const containerRef = useRef(null);
  const {
    particle = 'circle',
    particleCount = 15,
    speedHorz = 8,
    speedUp = 12,
    size = 10,
  } = options;

  const createParticle = useCallback(
    (x, y) => {
      const el = document.createElement('div');
      el.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: ${particle === 'circle' ? '50%' : '2px'};
      background: hsl(${Math.random() * 60 + 30}, 80%, 60%);
      transition: none;
    `;
      document.body.appendChild(el);

      const angle = Math.random() * Math.PI * 2;
      const velocity = speedHorz * (0.5 + Math.random());
      let vy = speedUp * (0.5 + Math.random());
      let px = x;
      let py = y;
      const vx = Math.cos(angle) * velocity;
      let opacity = 1;

      const animate = () => {
        px += vx;
        py -= vy;
        vy -= 0.5;
        opacity -= 0.02;

        if (opacity <= 0) {
          el.remove();
          return;
        }

        el.style.left = `${px}px`;
        el.style.top = `${py}px`;
        el.style.opacity = opacity;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    },
    [particle, speedHorz, speedUp, size]
  );

  // Evento delegado no container: sem wrapper fake-interativo (a11y). O clique
  // do botão/link interno borbulha para cá e dispara as partículas.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const onClick = () => {
      const rect = el.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      for (let i = 0; i < particleCount; i++) {
        setTimeout(() => createParticle(x, y), i * 20);
      }
    };
    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [createParticle, particleCount]);

  return (
    <div ref={containerRef} className="inline-block">
      {children}
    </div>
  );
};

export default CoolMode;
