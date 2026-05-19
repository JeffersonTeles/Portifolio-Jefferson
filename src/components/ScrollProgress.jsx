import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
      <div className="text-[10px] font-bold tracking-widest text-lusion-text/20 rotate-180 [writing-mode:vertical-lr] uppercase">
        Scroll Progress
      </div>
      
      <div className="w-px h-32 bg-lusion-text/5 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-lusion-primary origin-top"
          style={{ scaleY }}
        />
      </div>
      
      <div className="text-[10px] font-bold tracking-widest text-lusion-primary font-mono">
        {percent < 10 ? `0${percent}` : percent}%
      </div>
    </div>
  );
};

export default ScrollProgress;
