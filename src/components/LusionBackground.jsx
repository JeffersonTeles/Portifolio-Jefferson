import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Grid } from '@react-three/drei';
import * as THREE from 'three';

const Scene = ({ isDark }) => {
  const { viewport } = useThree();
  const sphereRef = useRef();
  const gridRef = useRef();

  useFrame((state) => {
    const { clock, mouse } = state;
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, mouse.x * 2, 0.05);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, mouse.y * 2, 0.05);
    }
    if (gridRef.current) {
      gridRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#1A2FFB" intensity={2} />
      
      {/* Background Grid */}
      <group ref={gridRef} position={[0, 0, -2]}>
        <Grid
          infiniteGrid
          fadeDistance={50}
          fadeStrength={5}
          cellSize={0.5}
          sectionSize={2.5}
          sectionColor={isDark ? "#1A2FFB" : "#1A2FFB"}
          cellColor={isDark ? "#333" : "#ccc"}
          sectionThickness={1}
          cellThickness={0.5}
        />
      </group>

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={viewport.width > 5 ? 2.5 : 1.5}>
          <MeshDistortMaterial
            color="#1A2FFB"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={1}
            transparent={true}
            opacity={0.15}
          />
        </Sphere>
      </Float>
    </>
  );
};

const LusionBackground = ({ isDark }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default LusionBackground;
