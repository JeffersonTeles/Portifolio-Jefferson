import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Grid, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useSection } from '../context/SectionContext';

const Scene = ({ isDark }) => {
  const { viewport } = useThree();
  const { currentSection } = useSection();
  const sphereRef = useRef();
  const gridRef = useRef();
  const particlesRef = useRef();

  // Define geometry based on section
  const getMorphScale = () => {
    switch(currentSection) {
      case 'about': return 3.5;
      case 'projects': return 2;
      case 'lab': return 4;
      default: return 2.5;
    }
  };

  const getMorphDistort = () => {
    switch(currentSection) {
      case 'hero': return 0.4;
      case 'services': return 0.8;
      case 'contact': return 0.2;
      default: return 0.5;
    }
  };

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();

    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.y = time * 0.3;
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, mouse.x * 2, 0.05);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, mouse.y * 2, 0.05);
    }
    
    if (gridRef.current) {
      gridRef.current.rotation.z = time * 0.05;
      // Physics-like deformation simulated via position
      gridRef.current.position.z = -2 + Math.sin(time + mouse.x) * 0.2;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.1;
      particlesRef.current.position.x = mouse.x * 0.5;
    }
  });

  const particles = useMemo(() => {
    const count = 500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, -10, -5]} color="#1A2FFB" intensity={2} />
      
      <group ref={gridRef} position={[0, 0, -2]}>
        <Grid
          infiniteGrid
          fadeDistance={50}
          fadeStrength={5}
          cellSize={0.5}
          sectionSize={2.5}
          sectionColor="#1A2FFB"
          cellColor={isDark ? "#333" : "#ccc"}
          sectionThickness={1}
          cellThickness={0.5}
        />
      </group>

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={getMorphScale()}>
          <MeshDistortMaterial
            color="#1A2FFB"
            distort={getMorphDistort()}
            speed={2}
            roughness={0}
            metalness={1}
            transparent={true}
            opacity={0.15}
          />
        </Sphere>
      </Float>

      <Points ref={particlesRef} positions={particles}>
        <PointMaterial
          transparent
          color="#1A2FFB"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
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
