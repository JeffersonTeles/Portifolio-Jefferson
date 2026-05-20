import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedGrid = () => {
  const gridRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (gridRef.current) {
      // Very smooth, subtle movement
      gridRef.current.position.z = (time * 0.2) % 2.5;
    }
  });

  return (
    <group ref={gridRef} rotation={[Math.PI / 2.5, 0, 0]} position={[0, -2.5, 0]}>
      <Grid
        args={[80, 80]}
        sectionSize={2.5}
        sectionColor="#00d4ff"
        sectionThickness={1}
        cellSize={0.5}
        cellColor="#0a0a0f"
        cellThickness={0.5}
        infiniteGrid
        fadeDistance={40}
        fadeStrength={5}
      />
    </group>
  );
};

const FuturisticBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#0a0a0f] overflow-hidden">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#0a0a0f']} />
        <ambientLight intensity={0.4} />
        <AnimatedGrid />
        <fog attach="fog" args={['#0a0a0f', 5, 25]} />
      </Canvas>

      {/* Subtle HUD Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(10,10,15,0.9)_100%)]" />
      
      {/* HUD Scan Line Effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-dark-accent/5 blur-sm animate-scanning pointer-events-none" />
    </div>
  );
};

export default FuturisticBackground;
