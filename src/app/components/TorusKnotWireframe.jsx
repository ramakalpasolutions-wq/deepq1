"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TorusKnotWireframe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      1, // square canvas
      0.1,
      1000
    );
    camera.position.z = 40;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,    // transparent background
      antialias: true,
    });
    renderer.setSize(380, 380); // fits your 400px frame
    renderer.setPixelRatio(window.devicePixelRatio * 1.25);

    mount.appendChild(renderer.domElement);

    // Torus Knot
    const geometry = new THREE.TorusKnotGeometry(10, 3, 200, 32);

    const wireframe = new THREE.WireframeGeometry(geometry);

    const material = new THREE.LineBasicMaterial({
      color: 0x4f7aff,
      linewidth: 1.4,
      transparent: true,
      opacity: 0.9,
    });

    const mesh = new THREE.LineSegments(wireframe, material);

    // Add glow effect
    mesh.layers.enable(1);

    scene.add(mesh);

    // Animation
    function animate() {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.006;

      renderer.render(scene, camera);
    }

    animate();

    // Cleanup
    return () => mount.removeChild(renderer.domElement);
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "380px",
        height: "380px",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
