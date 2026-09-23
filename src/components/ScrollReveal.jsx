import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const directionMap = {
  up: { y: 80, x: 0 },
  down: { y: -80, x: 0 },
  left: { y: 0, x: 80 },
  right: { y: 0, x: -80 },
};

const ScrollReveal = ({ children, direction = 'up', delay = 0, duration = 1, className = '' }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const { x, y } = directionMap[direction] || directionMap.up;

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: 'cubic-bezier(0.32,0.72,0,1)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
