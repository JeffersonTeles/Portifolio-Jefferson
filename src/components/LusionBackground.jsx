import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Plane = ({ isDark }) => {
  const mesh = useRef();
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(isDark ? "#050505" : "#F0F1FA") },
      uAccent: { value: new THREE.Color("#1A2FFB") },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [isDark]
  );

  useFrame((state) => {
    const { clock, mouse } = state;
    mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
    mesh.current.material.uniforms.uMouse.value.lerp(mouse, 0.05);
    mesh.current.material.uniforms.uColor.value.lerp(new THREE.Color(isDark ? "#050505" : "#F0F1FA"), 0.05);
  });

  const vertexShader = `
    varying vec2 vUv;
    varying float vZ;
    uniform float uTime;
    uniform vec2 uMouse;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      float dist = distance(uv, uMouse * 0.5 + 0.5);
      float wave = sin(dist * 10.0 - uTime * 2.0) * 0.1;
      pos.z += wave;
      vZ = wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying float vZ;
    uniform vec3 uColor;
    uniform vec3 uAccent;

    void main() {
      vec3 color = mix(uColor, uAccent, vZ * 2.0 + 0.05);
      gl_FragColor = vec4(color, 0.4);
    }
  `;

  return (
    <mesh ref={mesh} scale={[viewport.width * 1.5, viewport.height * 1.5, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
};

const LusionBackground = ({ isDark }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Plane isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default LusionBackground;
