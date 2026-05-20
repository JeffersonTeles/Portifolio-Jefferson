import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Grid, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Pane } from 'tweakpane';
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
      case 'about': return 3.5;
      case 'projects': return 2;
      case 'lab': return 4;
      default: return 2.5;
    }
  };

  const getMorphDistort = () => {
    if (config.manual) return config.distort;
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
      sphereRef.current.rotation.x = time * config.speed * 0.1;
      sphereRef.current.rotation.y = time * config.speed * 0.15;
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, mouse.x * 2, 0.05);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, mouse.y * 2, 0.05);
    }
    
    if (gridRef.current) {
      gridRef.current.rotation.z = time * 0.05;
      gridRef.current.position.z = -2 + Math.sin(time + mouse.x) * config.physics;
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
      
      <group ref={gridRef} position={[0, 0, -2]}>
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

      <Float speed={config.speed} rotationIntensity={1} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={getMorphScale()}>
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

      <Points ref={particlesRef} positions={particles}>
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
    opacity: 0.15,
    physics: 0.2,
    manual: false
  });

  useEffect(() => {
    if (isStealth) return; // Disable panel in stealth mode

    const pane = new Pane({
      title: 'JT Core Engine Parameters',
      expanded: false,
    });

    pane.containerElem_.style.zIndex = '1000';
    pane.containerElem_.style.top = '100px';

    pane.addInput(config, 'color', { label: 'Engine Accent' });
    pane.addInput(config, 'speed', { min: 0, max: 10, label: 'Core Velocity' });
    pane.addInput(config, 'distort', { min: 0, max: 2, label: 'Morph Intensity' });
    pane.addInput(config, 'scale', { min: 1, max: 5, label: 'Geometric Scale' });
    pane.addInput(config, 'opacity', { min: 0, max: 1, label: 'Aether Density' });
    pane.addInput(config, 'physics', { min: 0, max: 1, label: 'Grid Gravity' });
    pane.addInput(config, 'manual', { label: 'Manual Override' });

    pane.on('change', (ev) => {
      setConfig((prev) => ({ ...prev, [ev.presetKey]: ev.value }));
    });

    return () => pane.dispose();
  }, [isStealth]);

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${isStealth ? 'opacity-20 grayscale' : 'opacity-100'}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene isDark={isDark} config={config} />
      </Canvas>
    </div>
  );
};

export default LusionBackground;
