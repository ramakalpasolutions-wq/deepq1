"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function WaveDistortedTorus() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // === RENDERER ===
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(600, 600);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // === SCENE & CAMERA ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.set(0, 0, 7);

    // === BASE TORUS ===
    const baseGeo = new THREE.TorusGeometry(0.95, 0.32, 12, 28);
    const pos = baseGeo.attributes.position;
    const temp = new THREE.Vector3();

    let maxY = 0;
    for (let i = 0; i < pos.count; i++) {
      maxY = Math.max(maxY, Math.abs(pos.getY(i)));
    }

    // === DEFORMATION + 90° FOLD ===
    for (let i = 0; i < pos.count; i++) {
      temp.fromBufferAttribute(pos, i);

      const angle = Math.atan2(temp.y, temp.x);
      const lobe = Math.sin(angle * 6) * 0.22;

      const wave =
        Math.sin(temp.x * 1.8) * 0.06 +
        Math.cos(temp.y * 1.5) * 0.05 +
        Math.sin(temp.z * 2.2) * 0.05;

      const offset = lobe + wave;

      const bend = (temp.y / maxY) * (Math.PI / 2);
      const cosA = Math.cos(bend);
      const sinA = Math.sin(bend);

      const yNew = temp.y * cosA - temp.z * sinA;
      const zNew = temp.y * sinA + temp.z * cosA;

      temp.y = yNew;
      temp.z = zNew;

      temp.normalize().multiplyScalar(offset * 0.42);

      pos.setXYZ(
        i,
        pos.getX(i) + temp.x,
        pos.getY(i) + temp.y,
        pos.getZ(i) + temp.z
      );
    }

    baseGeo.computeVertexNormals();

    // === WIREFRAME ===
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(baseGeo),
      new THREE.LineBasicMaterial({
        color: 0x2e7bff,
        transparent: true,
        opacity: 0.32,
      })
    );
    scene.add(wire);

    // OUTER GLOW
    const glow = new THREE.LineSegments(
      new THREE.WireframeGeometry(baseGeo),
      new THREE.LineBasicMaterial({
        color: 0x2e7bff,
        transparent: true,
        opacity: 0.05,
        depthWrite:false
      })
    );
    glow.scale.set(1.03, 1.03, 1.03);
    scene.add(glow);

    // === ZOOM IN/OUT ONLY ===
    let t = 0;

    function animate() {
      requestAnimationFrame(animate);

      t += 0.015;

      // wheel rotation (steady)
      wire.rotation.y -= 0.0035;
      glow.rotation.copy(wire.rotation);

      // SMOOTH ZOOM (perfect breathing)
      const zoom = 1 + Math.sin(t * 1.2) * 0.08; // 8% zoom pulse

      wire.scale.set(zoom, zoom, zoom);
      glow.scale.set(zoom * 1.03, zoom * 1.03, zoom * 1.03);

      renderer.render(scene, camera);
    }

    animate();

    return () => mount.removeChild(renderer.domElement);
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "600px",
        height: "600px",
        position: "absolute",
        top: "0",
        right: "0",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
