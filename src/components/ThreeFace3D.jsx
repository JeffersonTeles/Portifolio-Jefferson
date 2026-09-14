import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeFace3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for rotation
    const group = new THREE.Group();
    scene.add(group);

    // Central Torus / Holographic Ring
    const torusGeo = new THREE.TorusGeometry(1.4, 0.04, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xe2a63d,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0xe2a63d,
      emissiveIntensity: 0.4,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    group.add(torus);

    // Inner icosahedron (representing digital intelligence / face core)
    const icoGeo = new THREE.IcosahedronGeometry(0.9, 2);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.5,
      emissive: 0xe2a63d,
      emissiveIntensity: 0.2,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    group.add(ico);

    // Floating particles around the core
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.025,
      color: 0xe2a63d,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xe2a63d, 4, 50);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x38bdf8, 2, 50);
    pointLight2.position.set(-3, -3, 3);
    scene.add(pointLight2);

    // Mouse interactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / container.clientHeight) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse movement
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = elapsedTime * 0.3 + targetX * 0.8;
      group.rotation.x = elapsedTime * 0.2 + targetY * 0.8;

      torus.rotation.z = elapsedTime * 0.5;
      ico.rotation.y = -elapsedTime * 0.4;

      particles.rotation.y = elapsedTime * 0.08;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      torusGeo.dispose();
      torusMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[320px] sm:h-[400px] relative cursor-grab active:cursor-grabbing flex items-center justify-center"
      title="Jefferson Teles - 3D Holographic Core"
    />
  );
}
