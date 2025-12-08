// src/app/components/TwistedSpiralBackground.jsx
"use client";

import { useEffect, useRef } from "react";

export default function TwistedSpiralBackground({
  layers = 3,          // number of spiral lines
  turns = 6,           // how many revolutions the spiral makes
  points = 900,        // points per spiral (lower for perf)
  baseRadius = 160,    // base radius in px
  hueStart = 200,      // starting hue (blue)
}) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale drawing operations for dpr
    }
    resize();

    let t = 0;             // animation time
    const speed = 0.0025;  // rotation speed
    const wobble = 0.9;    // how much wavy distortion

    function drawSpiralLayer(layerIndex) {
      // layer color (hue shifting)
      const hue = (hueStart + layerIndex * 36) % 360;
      ctx.strokeStyle = `hsla(${hue}, 90%, ${22 - layerIndex * 2}%, 0.95)`;
      ctx.lineWidth = 1.2 + layerIndex * 0.5;
      ctx.beginPath();

      const layerOffset = (layerIndex - (layers - 1) / 2) * 18; // offset rings

      for (let i = 0; i <= points; i++) {
        const u = i / points;                 // 0..1 along the spiral
        const angle = u * turns * Math.PI * 2 + t * speed * (1 + layerIndex * 0.06);
        const radius = baseRadius * (1 + u * 2.6) + layerOffset;
        // twisted / wireframe look using sinusoidal distortion + phase offsets
        const noise = Math.sin(u * 18 + t * 0.02 * (1 + layerIndex * 0.2)) * (6 + layerIndex * 2)
                    + Math.cos(u * 6 + t * 0.01 * (1 - layerIndex * 0.1)) * (3 + layerIndex);

        const x = Math.cos(angle) * (radius + noise * wobble);
        const y = Math.sin(angle) * (radius + noise * wobble * 0.6);

        const px = x + width / 2;
        const py = y + height / 2;

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    function render() {
      // clear (with very slight dark translucent fill for trailing glow)
      ctx.clearRect(0, 0, width, height);

      // optional background subtle vignette (comment out if undesired)
      ctx.save();
      const grd = ctx.createLinearGradient(0, 0, 0, height);
      grd.addColorStop(0, "rgba(2,4,8,0.0)");
      grd.addColorStop(1, "rgba(2,4,8,0.25)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // additive glow layer: draw soft blurred strokes onto separate offscreen then composite,
      // here we emulate by setting shadow and drawing twice for glow
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      // Draw layers (back-to-front)
      for (let layer = 0; layer < layers; layer++) {
        // glow pass
        ctx.shadowColor = `rgba(14,165,255,${0.09 + layer * 0.02})`;
        ctx.shadowBlur = 18 + layer * 6;
        drawSpiralLayer(layer);

        // crisp pass (no shadow)
        ctx.shadowBlur = 0;
        ctx.lineWidth = 1.0 + layer * 0.35;
        drawSpiralLayer(layer);
      }

      ctx.restore();

      // subtle rotating vignette highlight (optional)
      ctx.save();
      ctx.globalAlpha = 0.03;
      ctx.translate(width / 2, height / 2);
      ctx.rotate(t * 0.0008);
      ctx.translate(-width / 2, -height / 2);
      ctx.fillStyle = "rgba(8,18,35,0.04)";
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      t += 1;
      rafRef.current = requestAnimationFrame(render);
    }

    // start rendering
    rafRef.current = requestAnimationFrame(render);

    // handle resize
    const onResize = () => {
      resize();
    };
    window.addEventListener("resize", onResize);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [layers, turns, points, baseRadius, hueStart]);

  // full-screen canvas positioned behind content
  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
}
