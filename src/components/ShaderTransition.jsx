import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSection } from '../context/SectionContext';

const TransitionShaderMesh = ({ trigger }) => {
  const mesh = useRef();
  const { scrollVelocity } = useSection();
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: 0 },
    uVelocity: { value: 0 }
  }), []);

  useEffect(() => {
    let startTime = Date.now();
    let duration = 1200;
    let frame;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Bell curve for progress (0 -> 1 -> 0)
      const ease = progress < 0.5 ? 2 * progress : 2 - 2 * progress;
      uniforms.uProgress.value = ease;
      
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    if (trigger > 0) animate();
    return () => cancelAnimationFrame(frame);
  }, [trigger, uniforms]);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
    // Smoothly interpolate velocity for gravity distortion
    uniforms.uVelocity.value = THREE.MathUtils.lerp(uniforms.uVelocity.value, scrollVelocity * 0.002, 0.1);
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          uniform float uVelocity;
          void main() {
            vUv = uv;
            vec3 pos = position;
            // Scroll Gravity Distortion
            pos.y += sin(pos.x * 3.14159) * uVelocity * 0.1;
            gl_Position = vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform float uProgress;
          
          float noise(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
          }

          void main() {
            vec2 uv = vUv;
            float n = noise(uv * 50.0 + uTime * 0.5);
            float alpha = smoothstep(uProgress - 0.2, uProgress, n);
            
            vec3 color = vec3(0.0); 
            gl_FragColor = vec4(color, alpha * uProgress * 0.8);
          }
        `}
      />
    </mesh>
  );
};

const ShaderTransition = () => {
  const { currentSection, currentYear } = useSection();
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (currentSection || currentYear) {
      setTrigger(prev => prev + 1);
    }
  }, [currentSection, currentYear]);

  return (
    <div className="fixed inset-0 z-[400] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <TransitionShaderMesh trigger={trigger} />
      </Canvas>
    </div>
  );
};

export default ShaderTransition;
