"use client";

import { useEffect, useRef } from "react";

export default function SplineCircularWaves() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    function drawSplineCircle(layerIndex, pulseScale, helixSpeed, helixHeight, helixShear) {
      const points = 120;
      const baseR = (130 + layerIndex * 14) * pulseScale;
      const amp = (12 + layerIndex * 1.4) * pulseScale;
      const freq = 2.6 + layerIndex * 0.22;

      const pts = [];
      const rotateSpeed = 0.0007;

      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;

        // base wave distortion
        const wave =
          Math.sin(angle * freq + t * 0.08 + layerIndex * 0.3) * amp +
          Math.cos(angle * freq * 0.5 + t * 0.015 + layerIndex) *
            amp *
            0.42;

        const r = baseR + wave;

        // normal circular pos
        let x = Math.cos(angle + t * rotateSpeed) * r;
        let y = Math.sin(angle + t * rotateSpeed) * r;

        // 🌪️ HELICAL MOTION ADDED
        const xOffset = Math.cos(angle * 2 + t * helixSpeed) * helixShear;
        const yOffset = Math.sin(angle + t * helixSpeed) * helixHeight;

        x += xOffset;
        y += yOffset;

        pts.push({ x, y });
      }

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);

      // spline smoothing
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i === 0 ? pts.length - 1 : i - 1];
        const p1 = pts[i];
        const p2 = pts[(i + 1) % pts.length];
        const p3 = pts[(i + 2) % pts.length];

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;

        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
      }

      ctx.stroke();
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Existing smooth zoom
      const zoom = 1 + Math.sin(t * 0.004) * 0.08;
      ctx.scale(zoom, zoom);

      // Existing breathing pulse
      const pulseScale = 1 + Math.sin(t * 0.008) * 0.05;

      const layers = 20;

      // Helical motion parameters (adjustable)
      const helixSpeed = 0.02;    // twist speed
      const helixHeight = 18;     // vertical wave height
      const helixShear = 10;      // horizontal twist

      for (let i = 0; i < layers; i++) {
        const hue = 200 + i * 4;
        const alpha = 0.16 + i * 0.015;

        const glowPulse = alpha + Math.sin(t * 0.01) * 0.07;

        ctx.lineWidth = 1 + i * 0.09;
        ctx.strokeStyle = `hsla(${hue}, 90%, 60%, ${alpha})`;

        ctx.shadowBlur = 12 + i * 3 + glowPulse * 10;
        ctx.shadowColor = `hsla(${hue}, 100%, 70%, ${glowPulse})`;

        drawSplineCircle(i, pulseScale, helixSpeed, helixHeight, helixShear);
      }

      ctx.restore();
      t += 1;
      requestAnimationFrame(render);
    }

    render();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        mixBlendMode: "screen",
        opacity: 0.5,
      }}
    />
  );
}
