import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const [isView, setIsView] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isProject = target.closest('[data-cursor="view"]');
      const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');

      if (isProject) {
        setIsView(true);
        setIsActive(true);
      } else if (isLink) {
        setIsView(false);
        setIsActive(true);
      } else {
        setIsView(false);
        setIsActive(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={`cursor-dot ${isActive ? 'active' : ''} ${isView ? 'view-mode' : ''}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          width: isView ? 80 : isActive ? 48 : 16,
          height: isView ? 80 : isActive ? 48 : 16,
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
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;
