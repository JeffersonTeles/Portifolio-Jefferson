import React from "react";
import { motion } from "framer-motion";

const Skeleton = ({ className, variant = "default" }) => {
  const variants = {
    default: "bg-white/10",
    text: "bg-white/5",
    circular: "bg-white/10 rounded-full",
  };

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className={`${variants[variant]} ${className}`}
    />
  );
};

export const SkeletonCard = () => (
  <div className="glass-panel rounded-2xl p-6 space-y-4">
    <Skeleton className="h-6 w-3/4 rounded" />
    <Skeleton className="h-4 w-full rounded" />
    <Skeleton className="h-4 w-2/3 rounded" />
    <div className="flex gap-2 mt-4">
      <Skeleton className="h-8 w-24 rounded-full" />
      <Skeleton className="h-8 w-24 rounded-full" />
    </div>
  </div>
);

export const SkeletonAvatar = ({ size = "md" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return <Skeleton className={`${sizes[size]} circular`} />;
};

export const SkeletonText = ({ lines = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        className={`h-4 rounded ${i === lines - 1 ? "w-3/4" : "w-full"}`}
        variant="text"
      />
    ))}
  </div>
);

export default Skeleton;
