import React from "react";
import { motion } from "framer-motion";

const SkeletonLoader = ({ className = "", variant = "default" }) => {
  const variants = {
    default: "h-4 w-full",
    text: "h-4 w-3/4",
    title: "h-8 w-1/2",
    avatar: "h-12 w-12 rounded-full",
    card: "h-32 w-full",
    button: "h-10 w-24",
  };

  return (
    <motion.div
      className={`bg-white/5 rounded animate-pulse ${variants[variant]} ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    />
  );
};

export const CardSkeleton = () => (
  <div className="glass-panel p-6 rounded-2xl space-y-4">
    <SkeletonLoader variant="avatar" className="w-16 h-16" />
    <SkeletonLoader variant="title" />
    <SkeletonLoader variant="text" />
    <SkeletonLoader variant="text" className="w-1/2" />
  </div>
);

export const ListSkeleton = ({ count = 3 }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="flex items-center gap-4">
        <SkeletonLoader variant="avatar" />
        <div className="flex-1 space-y-2">
          <SkeletonLoader variant="text" />
          <SkeletonLoader variant="text" className="w-2/3" />
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;
