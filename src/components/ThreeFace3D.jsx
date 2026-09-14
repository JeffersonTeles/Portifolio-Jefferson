import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeFace3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.1, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Main Avatar Group
    const avatarGroup = new THREE.Group();
    scene.add(avatarGroup);

    // 1. Head (Realistic skin tone material)
    const headGeo = new THREE.SphereGeometry(0.85, 32, 32);
    // Slight oval scaling for natural youthful face shape
    headGeo.scale(1, 1.15, 1.05);
    const skinMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4a373,
      roughness: 0.5,
      metalness: 0.1,
    });
    const headMesh = new THREE.Mesh(headGeo, skinMaterial);
    headMesh.position.y = 0.35;
    avatarGroup.add(headMesh);

    // 2. Modern Short Haircut (Dark textured hair geometry on top)
    const hairGroup = new THREE.Group();
    const hairMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.8,
      metalness: 0.2,
    });

    // Main top crop
    const topHairGeo = new THREE.SphereGeometry(0.88, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const topHair = new THREE.Mesh(topHairGeo, hairMaterial);
    topHair.position.set(0, 0.55, -0.05);
    topHair.rotation.x = -0.1;
    hairGroup.add(topHair);

    // Textured hair crop details (modern short fade sides & textured top)
    for (let i = 0; i < 8; i++) {
      const strandGeo = new THREE.BoxGeometry(0.2, 0.15, 0.4);
      const strand = new THREE.Mesh(strandGeo, hairMaterial);
      const angle = (i / 8) * Math.PI * 2;
      const radius = 0.75;
      strand.position.set(Math.cos(angle) * radius, 0.6, Math.sin(angle) * radius - 0.1);
      strand.rotation.y = -angle;
      hairGroup.add(strand);
    }
    avatarGroup.add(hairGroup);

    // 3. Hoodie / Minimalist Black Cotton T-Shirt (Smart casual techwear bust)
    const hoodieGeo = new THREE.CylinderGeometry(0.7, 1.3, 1.4, 32);
    const hoodieMat = new THREE.MeshStandardMaterial({
      color: 0x0f0f0f,
      roughness: 0.6,
      metalness: 0.3,
    });
    const hoodie = new THREE.Mesh(hoodieGeo, hoodieMat);
    hoodie.position.y = -0.95;
    avatarGroup.add(hoodie);

    // Hoodie collar / neck band
    const collarGeo = new THREE.TorusGeometry(0.65, 0.08, 16, 32);
    const collarMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f1f,
      roughness: 0.5,
    });
    const collar = new THREE.Mesh(collarGeo, collarMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.y = -0.32;
    avatarGroup.add(collar);

    // 4. Focused Friendly Eyes & Eyebrows (Smart developer look)
    const eyeGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1 });
    
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.28, 0.42, 0.72);
    avatarGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.28, 0.42, 0.72);
    avatarGroup.add(rightEye);

    // Eyebrows (focused expression)
    const browGeo = new THREE.BoxGeometry(0.25, 0.04, 0.05);
    const browMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    
    const leftBrow = new THREE.Mesh(browGeo, browMat);
    leftBrow.position.set(-0.28, 0.58, 0.74);
    leftBrow.rotation.z = 0.15;
    avatarGroup.add(leftBrow);

    const rightBrow = new THREE.Mesh(browGeo, browMat);
    rightBrow.position.set(0.28, 0.58, 0.74);
    rightBrow.rotation.z = -0.15;
    avatarGroup.add(rightBrow);

    // 5. Cinematic Lighting Studio (Key light + Cyan/Amber Rim Lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Warm main key light
    const keyLight = new THREE.DirectionalLight(0xffedd8, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Amber Rim Light (Right side)
    const amberRim = new THREE.PointLight(0xe2a63d, 3.5, 10);
    amberRim.position.set(3, 1, -2);
    scene.add(amberRim);

    // Cyan Rim Light (Left side - cyberpunk industrial vibe)
    const cyanRim = new THREE.PointLight(0x38bdf8, 3.0, 10);
    cyanRim.position.set(-3, 1, -2);
    scene.add(cyanRim);

    // Mouse interactive rotation
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

    // Animation Loop
    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for head tracking
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      avatarGroup.rotation.y = targetX * 0.5;
      avatarGroup.rotation.x = -targetY * 0.3;

      // Subtle breathing / idle motion
      avatarGroup.position.y = Math.sin(elapsedTime * 2) * 0.03;

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
      headGeo.dispose();
      skinMaterial.dispose();
      hairMaterial.dispose();
      hoodieGeo.dispose();
      hoodieMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] sm:min-h-[440px] relative cursor-grab active:cursor-grabbing flex items-center justify-center"
      title="Jefferson Teles - 3D Developer Avatar"
    />
  );
}
