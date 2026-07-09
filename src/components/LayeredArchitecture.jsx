import { motion } from "framer-motion";
import { useState } from "react";

const Layer = ({ position, color, label, index, totalLayers }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateX: isHovered ? 10 : 0,
      }}
      transition={{ 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      style={{ transformStyle: "preserve-3d" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Layer Card */}
      <motion.div
        className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
        whileHover={{ 
          scale: 1.02,
          boxShadow: `0 0 30px ${color}40`,
        }}
        style={{
          borderColor: color + "40",
        }}
      >
        {/* Glass Effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-50"
          style={{
            background: `linear-gradient(135deg, ${color}20, transparent)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.h3 
            className="text-lg font-mono font-bold"
            style={{ color }}
          >
            {label}
          </motion.h3>
          
          {/* Animated Line */}
          <motion.div
            className="h-[2px] mt-2 rounded-full"
            style={{ background: color }}
            animate={{ width: ["20%", "100%", "20%"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Reflection */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `linear-gradient(to top, ${color}10, transparent)`,
            transform: "scaleY(-1)",
          }}
        />
      </motion.div>

      {/* Connecting Line */}
      {index < totalLayers - 1 && (
        <motion.div 
          className="absolute left-1/2 -bottom-8 w-[2px] h-8"
          style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}
        />
      )}
    </motion.div>
  );
};

const LayeredArchitecture = () => {
  const layers = [
    { label: "UI_INTERFACE", color: "#ffffff" },
    { label: "ENGINE_RUNTIME", color: "#aaaaaa" },
    { label: "DATA_CORE", color: "#444444" },
  ];

  return (
    <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center gap-8 perspective-1000">
      {layers.map((layer, index) => (
        <Layer
          key={layer.label}
          index={index}
          totalLayers={layers.length}
          {...layer}
        />
      ))}
    </div>
  );
};

export default LayeredArchitecture;