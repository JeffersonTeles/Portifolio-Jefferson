import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiPause } from "react-icons/fi";

const AnimationToggle = ({ isReduced, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
        isReduced
          ? "bg-white/5 border border-white/10 text-white/60"
          : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isReduced ? "Ativar animações" : "Desativar animações"}
    >
      {isReduced ? <FiPause size={16} /> : <FiZap size={16} />}
      <span>{isReduced ? "Animações Off" : "Animações On"}</span>
    </motion.button>
  );
};

export default AnimationToggle;
