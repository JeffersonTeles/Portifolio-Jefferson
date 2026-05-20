import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

const FloatingObject = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.position.y = Math.sin(time) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[1, 15]} position={[5, 0, -5]} scale={2}>
        <MeshDistortMaterial
          color="#00d4ff"
          speed={2}
          distort={0.3}
          radius={1}
          emissive="#00d4ff"
          emissiveIntensity={2}
        />
      </Icosahedron>
    </Float>
  );
};

const AnimatedGrid = () => {
  const gridRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (gridRef.current) {
      gridRef.current.position.z = (time * 0.5) % 2;
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

const FuturisticBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-dark-bg overflow-hidden">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        <color attach="background" args={['#0a0a0f']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} color="#00ff88" intensity={1} />
        
        <AnimatedGrid />
        <FloatingObject />
        
        <fog attach="fog" args={['#0a0a0f', 5, 30]} />

        {/* Post-processing (Efeito 2: Bloom Real) */}
        <EffectComposer disableNormalPass>
          <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur 
            intensity={1.5} 
            radius={0.4} 
          />
          <Noise opacity={0.05} />
          <ChromaticAberration offset={[0.001, 0.001]} />
        </EffectComposer>
      </Canvas>

      {/* HUD Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.8)_100%)]" />
    </div>
  );
};

export default FuturisticBackground;
