import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './FakeGlowMaterial'; // Import the extended material from Step 1

// Define the shape component
const TorusShape = () => {
  const meshRef = useRef();

  // Animate the rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Torus geometry args: [radius, tube, radialSegments, tubularSegments] */}
      <torusGeometry args={[1.5, 0.5, 64, 128]} />

      {/* Basic material for the solid inner wireframe appearance */}
      <meshBasicMaterial
        color="#00ffff" // Cyan blue color
        wireframe={true} // Enable wireframe mode
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
};

// The main canvas component for Next.js page
const AbstractWireframe = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#000000' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Set a black background */}
        <color attach="background" args={['black']} />

        {/* Add the shape */}
        <TorusShape />

        {/* Optional: Add orbit controls to move the camera with the mouse */}
        <OrbitControls enableDamping dampingFactor={0.05} />
      </Canvas>
    </div>
  );
};

export default AbstractWireframe;