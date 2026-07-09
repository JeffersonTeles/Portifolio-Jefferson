import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useSection } from "../context/SectionContext";

const MorphicSphereBackground = ({ isDark = true, isStealth = false }) => {
  const { currentSection } = useSection();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [particles, setParticles] = useState([]);

  // Generate particles once
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  // Track mouse for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Color based on section
  const getSectionColor = () => {
    if (currentSection === "about") return "#8b5cf6";
    if (currentSection === "projects") return "#10b981";
    if (currentSection === "lab") return "#f43f5e";
    if (currentSection === "contact") return "#3b82f6";
    return "#1A2FFB";
  };

  return (
    <motion.div
      className={`fixed inset-0 z-[-1] pointer-events-none transition-all duration-1000 ${
        isStealth ? "opacity-10 grayscale" : "opacity-100"
      }`}
      style={{ background: "#0a0a0f" }}
    >
      {/* Background Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100,100,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,100,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          x: useTransform(mouseX, [-1, 1], [10, -10]),
          y: useTransform(mouseY, [-1, 1], [10, -10]),
        }}
      />

      {/* Morphing Sphere (CSS equivalent) */}
      <motion.div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${getSectionColor()}, transparent 70%)`,
          filter: "blur(40px)",
          opacity: 0.15,
          x: useTransform(mouseX, [-1, 1], [30, -30]),
          y: useTransform(mouseY, [-1, 1], [30, -30]),
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: getSectionColor(),
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      {/* Glow Spot */}
      <motion.div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${getSectionColor()}40, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default MorphicSphereBackground;