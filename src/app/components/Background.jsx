// src/app/components/Background.jsx
"use client";

import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    let vantaInstance = null;
    let threeScript, vantaScript;

    const loadScript = (src) =>
      new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => res(s);
        s.onerror = rej;
        document.head.appendChild(s);
      });

    // Load THREE and VANTA from reliable CDNs (UMD builds)
    Promise.resolve()
      .then(() => loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"))
      .then((s) => { threeScript = s; return loadScript("https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js"); })
      .then((s) => { vantaScript = s; })
      .then(() => {
        // init when both are available
        try {
          if (window.VANTA && window.THREE && !document.querySelector("#bg").__vanta) {
            vantaInstance = window.VANTA.NET({
              el: "#bg",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,

              // ⭐ Medium brightness — balanced blue glow
              color: 0x1b4a7a,          // soft medium blue
              color2: 0x2d6fb2,         // secondary medium glow

              backgroundColor: 0x05060a,

              // ⭐ Medium visibility (not too bright)
              backgroundAlpha: 0.55,    // 55% → enhances network without overpowering
              points: 12.0,             // medium density
              maxDistance: 20.0,        // medium-length lines
              spacing: 18.0,            // original depth feeling
            });




            // store ref so we can destroy later
            document.querySelector("#bg").__vanta = vantaInstance;
          }
        } catch (err) {
          // silent fail — console for debugging only
          // eslint-disable-next-line no-console
          console.error("[VANTA] Init error", err);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("[VANTA] Load error", err);
      });

    return () => {
      const el = document.querySelector("#bg");
      if (el && el.__vanta) {
        try {
          el.__vanta.destroy();
          delete el.__vanta;
        } catch (e) {
          // ignore
        }
      }
      // Optionally remove loaded scripts to keep DOM clean
      if (threeScript && threeScript.parentNode) threeScript.parentNode.removeChild(threeScript);
      if (vantaScript && vantaScript.parentNode) vantaScript.parentNode.removeChild(vantaScript);
    };
  }, []);

  return (
    <div
      id="bg"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
