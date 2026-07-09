import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSection } from "../context/SectionContext";

const GradientWarpTransition = () => {
  const { currentSection, currentYear } = useSection() || {};
  const [trigger, setTrigger] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (currentSection || currentYear) {
      setTrigger((prev) => prev + 1);
      
      // Sequência de animação
      controls.start({
        opacity: [0, 0.8, 0],
        scaleX: [0, 1.2, 0],
        filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
      });
    }
  }, [currentSection, currentYear, controls]);

  return (
    <motion.div
      className="fixed inset-0 z-[400] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{
        background: `
          linear-gradient(90deg, 
            transparent 0%, 
            rgba(96, 165, 250, 0.15) 25%, 
            rgba(96, 165, 250, 0.25) 50%, 
            rgba(96, 165, 250, 0.15) 75%, 
            transparent 100%
          )
        `,
        transform: "scaleX(var(--scale-x, 1))",
      }}
    />
  );
};

export default GradientWarpTransition;