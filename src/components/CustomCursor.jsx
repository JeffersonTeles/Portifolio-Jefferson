import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isMagnify, setIsMagnify] = useState(false);
  const [isXRay, setIsXRay] = useState(false);
  const [targetEl, setTargetEl] = useState(null);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const canvasRef = useRef(null);

  const springConfig = { damping: 30, stiffness: 800, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        if (isActive && targetEl && !isXRay) {
          const rect = targetEl.getBoundingClientRect();
          const targetX = rect.left + rect.width / 2;
          const targetY = rect.top + rect.height / 2;
          
          ctx.beginPath();
          ctx.moveTo(e.clientX, e.clientY);
          ctx.lineTo(targetX, targetY);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.setLineDash([2, 4]);
          ctx.stroke();
        }
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isProject = target.closest('[data-cursor="view"]');
      const isMagnifyTarget = target.closest('[data-cursor="magnify"]') || target.tagName === 'H1' || target.tagName === 'H2';
      const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');
      const isXRayTarget = target.closest('[data-xray="true"]');

      setIsXRay(!!isXRayTarget);

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
  }, [cursorX, cursorY, isActive, targetEl, isXRay]);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        width={windowSize.width} 
        height={windowSize.height} 
        className="fixed inset-0 pointer-events-none z-[9998]"
      />
      
      {/* X-Ray Lens Filter Mask */}
      <div 
        className="fixed inset-0 z-[9997] pointer-events-none mix-blend-difference"
        style={{
          clipPath: `circle(${isXRay ? '100px' : '0px'} at ${cursorX.get()}px ${cursorY.get()}px)`,
          transition: 'clip-path 0.3s ease-out'
        }}
      >
        <div className="w-full h-full bg-white opacity-10" />
      </div>

      <motion.div
        className={`cursor-dot ${isActive ? 'active' : ''} ${isView ? 'view-mode' : ''} ${isMagnify ? 'magnify-mode' : ''} ${isXRay ? 'xray-mode' : ''}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          width: isXRay ? 150 : isView ? 100 : isMagnify ? 120 : isActive ? 50 : 16,
          height: isXRay ? 150 : isView ? 100 : isMagnify ? 120 : isActive ? 50 : 16,
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
          {isXRay && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[8px] font-mono text-white/40 uppercase tracking-[0.3em]"
            >
              Scanning...
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;
