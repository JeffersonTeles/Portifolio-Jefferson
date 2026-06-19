import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PresentationControls, ContactShadows, Text } from '@react-three/drei';

const Layer = ({ position, color, label }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <mesh>
        <boxGeometry args={[4, 0.1, 2.5]} />
        <MeshDistortMaterial 
          color={color} 
          speed={2} 
          distort={0.1} 
          opacity={0.4} 
          transparent 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <Text
        position={[0, 0.3, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFufMZg.ttf"
      >
        {label}
      </Text>
    </Float>
  );
};

const Architecture3D = () => {
  return (
    <div className="w-full h-full min-h-[400px] bg-white/[0.01] border border-white/[0.05] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0.2, 0.3, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <group position={[0, 0, 0]}>
            <Layer position={[0, 1.2, 0]} color="#ffffff" label="UI_INTERFACE" />
            <Layer position={[0, 0, 0]} color="#aaaaaa" label="ENGINE_RUNTIME" />
            <Layer position={[0, -1.2, 0]} color="#444444" label="DATA_CORE" />
          </group>
        </PresentationControls>

        <ContactShadows position={[0, -3.5, 0]} scale={15} blur={2} far={4} opacity={0.2} />
      </Canvas>
    </div>
  );
};

export default Architecture3D;
