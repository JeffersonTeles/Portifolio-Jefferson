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
      case 'about': return 2.8;
      case 'projects': return 1.2;
      case 'lab': return 3.5;
      case 'contact': return 1.8;
      default: return 1.8;
    }
  };

  const getMorphDistort = () => {
    if (config.manual) return config.distort;
    switch(currentSection) {
      case 'hero': return 0.2;
      case 'services': return 0.6;
      case 'contact': return 0.1;
      default: return 0.4;
    }
  };

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();

    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * config.speed * 0.1;
      sphereRef.current.rotation.y = time * config.speed * 0.15;
      
      // Shift sphere to the right side on desktop, center on mobile
      const targetX = viewport.width > 5 ? viewport.width / 4 : 0;
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, targetX + mouse.x * 1, 0.05);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, mouse.y * 1, 0.05);
    }
    
    if (gridRef.current) {
      gridRef.current.rotation.z = time * 0.05;
      gridRef.current.position.z = -4 + Math.sin(time + mouse.x) * config.physics;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.1;
      particlesRef.current.position.x = mouse.x * 0.5;
    }
  });

  const particles = useMemo(() => {
    const count = 400;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} color={config.color} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#fff" intensity={0.5} />
      
      {/* Background Grid - Pushed even further back */}
      <group ref={gridRef} position={[0, 0, -4]}>
        <Grid
          infiniteGrid
          fadeDistance={40}
          fadeStrength={5}
          cellSize={0.6}
          sectionSize={3}
          sectionColor={config.color}
          cellColor={isDark ? "#222" : "#ddd"}
          sectionThickness={1.5}
          cellThickness={0.5}
        />
      </group>

      {/* Main Sphere - Pushed back and shifted to the right */}
      <Float speed={config.speed} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={getMorphScale()} position={[0, 0, -2]}>
          <MeshDistortMaterial
            color={config.color}
            distort={getMorphDistort()}
            speed={config.speed}
            roughness={0.1}
            metalness={0.8}
            transparent={true}
            opacity={config.opacity}
          />
        </Sphere>
      </Float>

      {/* Particles - Ambient layer */}
      <Points ref={particlesRef} positions={particles} position={[0, 0, -3]}>
        <PointMaterial
          transparent
          color={config.color}
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={config.opacity * 1.5}
        />
      </Points>
    </>
  );
};

const LusionBackground = ({ isDark, isStealth }) => {
  const [config] = useState({
    color: '#1A2FFB',
    speed: 1.5,
    distort: 0.3,
    scale: 2,
    opacity: 0.08, // Subtle by default
    physics: 0.15,
    manual: false
  });

  return (
    <div className={`fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-1000 ${isStealth ? 'opacity-10 grayscale' : 'opacity-100'}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Scene isDark={isDark} config={config} />
      </Canvas>
    </div>
  );
};

export default LusionBackground;
