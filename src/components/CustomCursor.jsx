import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isMagnify, setIsMagnify] = useState(false);
  const [targetEl, setTargetEl] = useState(null);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const canvasRef = useRef(null);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Draw connection line (Efeito 3: Data Link)
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        if (isActive && targetEl) {
          const rect = targetEl.getBoundingClientRect();
          const targetX = rect.left + rect.width / 2;
          const targetY = rect.top + rect.height / 2;
          
          ctx.beginPath();
          ctx.moveTo(e.clientX, e.clientY);
          ctx.lineTo(targetX, targetY);
          ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
          ctx.setLineDash([5, 5]);
          ctx.stroke();
        }
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isProject = target.closest('[data-cursor="view"]');
      const isMagnifyTarget = target.closest('[data-cursor="magnify"]') || target.tagName === 'H1' || target.tagName === 'H2';
      const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');

      if (isProject) {
        setIsView(true);
        setIsMagnify(false);
        setIsActive(true);
        setTargetEl(target.closest('[data-cursor="view"]'));
      } else if (isMagnifyTarget) {
        setIsMagnify(true);
        setIsView(false);
        setIsActive(true);
        setTargetEl(target);
      } else if (isLink) {
        setIsView(false);
        setIsMagnify(false);
        setIsActive(true);
        setTargetEl(isLink === true ? target : target.closest('a, button'));
      } else {
        setIsView(false);
        setIsMagnify(false);
        setIsActive(false);
        setTargetEl(null);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isActive, targetEl]);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        width={window.innerWidth} 
        height={window.innerHeight} 
        className="fixed inset-0 pointer-events-none z-[9998]"
      />
      <motion.div
        className={`cursor-dot ${isActive ? 'active' : ''} ${isView ? 'view-mode' : ''} ${isMagnify ? 'magnify-mode' : ''}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          width: isView ? 100 : isMagnify ? 120 : isActive ? 50 : 16,
          height: isView ? 100 : isMagnify ? 120 : isActive ? 50 : 16,
        }}
      >
        <AnimatePresence>
          {isView && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-bold tracking-widest text-white uppercase"
            >
              Ver Obra
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;
