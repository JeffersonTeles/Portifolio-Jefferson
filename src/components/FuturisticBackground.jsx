import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedGrid = ({ isDark }) => {
  const gridRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (gridRef.current) {
      gridRef.current.position.z = (time * 0.5) % 2; // Endless movement
    }
  });

  return (
    <group ref={gridRef} rotation={[Math.PI / 2.5, 0, 0]} position={[0, -2, 0]}>
      <Grid
        args={[100, 100]}
        sectionSize={2.5}
        sectionColor="#00d4ff"
        sectionThickness={1.5}
        cellSize={0.5}
        cellColor="#0a0a0f"
        cellThickness={0.5}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />
    </group>
  );
};

const FuturisticBackground = ({ isDark }) => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-dark-bg overflow-hidden">
      {/* Base Grid Layer */}
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        <AnimatedGrid isDark={isDark} />
        <fog attach="fog" args={['#0a0a0f', 1, 40]} />
      </Canvas>

      {/* Film Grain Layer (Efeito 6) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay grain-overlay" />
      
      {/* HUD Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.8)_100%)]" />
    </div>
  );
};

export default FuturisticBackground;
