"use client";

import { useEffect, useRef } from "react";

export default function AIVoicePulseBackground() {
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

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const baseRadius = 40;   // small inner dot
      const ringCount = 8;     // number of pulses
      const maxRadius = 360;   // how far waves expand
      const spread = maxRadius / ringCount;

      for (let i = 0; i < ringCount; i++) {
        const age = (t * 0.02 + i / ringCount) % 1; // 0 → 1 looping

        // ease-out pulse motion
        const eased = 1 - Math.pow(1 - age, 3);

        const r = baseRadius + eased * maxRadius;

        // fade-out as ring grows
        const alpha = (1 - eased) * 0.45;

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);

        ctx.strokeStyle = `rgba(0,150,255,${alpha})`;
        ctx.lineWidth = 2 + eased * 2;

        ctx.shadowBlur = 25;
        ctx.shadowColor = `rgba(0,150,255,${alpha})`;

        ctx.stroke();
      }

      // Inner AI core glow
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,150,255,0.40)";
      ctx.shadowBlur = 35;
      ctx.shadowColor = "rgba(0,150,255,0.7)";
      ctx.fill();

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
        opacity: 0.55,
        mixBlendMode: "screen",
      }}
    />
  );
}
