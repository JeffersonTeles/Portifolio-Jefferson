import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Grid, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useSection } from '../context/SectionContext';

const Scene = ({ isDark, config }) => {
  const { viewport } = useThree();
  const { currentSection } = useSection();
  const sphereRef = useRef();
  const gridRef = useRef();
  const particlesRef = useRef();

  const getMorphScale = () => {
    if (config.manual) return config.scale;
    switch(currentSection) {
      case 'about': return 2.5;
      case 'projects': return 1.5;
      case 'lab': return 3;
      default: return 2;
    }
  };

  const getMorphDistort = () => {
    if (config.manual) return config.distort;
    switch(currentSection) {
      case 'hero': return 0.3;
      case 'services': return 0.6;
      case 'contact': return 0.2;
      default: return 0.4;
    }
  };

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();

    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * config.speed * 0.1;
      sphereRef.current.rotation.y = time * config.speed * 0.15;
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, mouse.x * 2, 0.05);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, mouse.y * 2, 0.05);
    }
    
    if (gridRef.current) {
      gridRef.current.rotation.z = time * 0.05;
      gridRef.current.position.z = -3 + Math.sin(time + mouse.x) * config.physics;
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
      <pointLight position={[-10, -10, -5]} color={config.color} intensity={2} />
      
      {/* Background Grid - Pushed back */}
      <group ref={gridRef} position={[0, 0, -3]}>
        <Grid
          infiniteGrid
          fadeDistance={50}
          fadeStrength={5}
          cellSize={0.5}
          sectionSize={2.5}
          sectionColor={config.color}
          cellColor={isDark ? "#333" : "#ccc"}
          sectionThickness={1}
          cellThickness={0.5}
        />
      </group>

      {/* Main Sphere - Pushed back slightly to not overlap content */}
      <Float speed={config.speed} rotationIntensity={1} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={getMorphScale()} position={[0, 0, -1]}>
          <MeshDistortMaterial
            color={config.color}
            distort={getMorphDistort()}
            speed={config.speed}
            roughness={0}
            metalness={1}
            transparent={true}
            opacity={config.opacity}
          />
        </Sphere>
      </Float>

      {/* Particles - Pushed back */}
      <Points ref={particlesRef} positions={particles} position={[0, 0, -2]}>
        <PointMaterial
          transparent
          color={config.color}
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={config.opacity * 2}
        />
      </Points>
    </>
  );
};

const LusionBackground = ({ isDark, isStealth }) => {
  const [config, setConfig] = useState({
    color: '#1A2FFB',
    speed: 2,
    distort: 0.4,
    scale: 2.5,
    opacity: 0.1, // Reduced default opacity
    physics: 0.2,
    manual: false
  });

  return (
    <div className={`fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-1000 ${isStealth ? 'opacity-20 grayscale' : 'opacity-100'}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene isDark={isDark} config={config} />
      </Canvas>
    </div>
  );
};

export default LusionBackground;
