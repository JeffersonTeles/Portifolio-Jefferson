import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="fixed inset-0 z-[100] bg-lusion-bg flex flex-col items-center justify-center"
    >
      <div className="container-lusion flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[15rem] md:text-[25rem] font-bold tracking-lusion-tighter text-white/5 leading-none select-none"
        >
          {counter}%
        </motion.div>

        <div className="absolute bottom-20 left-12 md:left-20 overflow-hidden">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-px bg-lusion-primary animate-pulse" />
            <span className="text-xs font-bold tracking-lusion-wide uppercase text-lusion-text">
              Jefferson Teles // Inicializando...
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
