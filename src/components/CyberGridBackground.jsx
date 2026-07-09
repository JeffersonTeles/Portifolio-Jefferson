import { motion } from "framer-motion";

const CyberGridBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#0a0a0f] overflow-hidden">
      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Perspective Grid Lines */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[60vh]"
        style={{
          background: `
            linear-gradient(to top, 
              rgba(0, 212, 255, 0.1) 0%, 
              transparent 50%
            )
          `,
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(10,10,15,0.9)_100%)]" />
      
      {/* Scan Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/20"
        animate={{ top: ['0%', '100%'] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Subtle Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default CyberGridBackground;