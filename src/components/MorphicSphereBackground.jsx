import { motion } from "framer-motion";

const MorphicSphereBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, #f59e0b, transparent 65%)",
          filter: "blur(90px)",
          opacity: 0.07,
        }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-[10%] bottom-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, #3b82f6, transparent 65%)",
          filter: "blur(90px)",
          opacity: 0.04,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
};

export default MorphicSphereBackground;
