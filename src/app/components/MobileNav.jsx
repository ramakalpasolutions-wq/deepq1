// src/app/components/MobileNav.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // optional: close on Escape
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        className="mobile-menu-btn"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((s) => !s)}
      >
        <span className={`bar ${open ? "open" : ""}`} />
        <span className={`bar ${open ? "open" : ""}`} />
        <span className={`bar ${open ? "open" : ""}`} />
      </button>

      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <Link href="/">Home</Link>
          <Link href="/deepq">DeepQ</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <button
            className="btn primary"
            onClick={() => setOpen(false)}
            style={{ marginTop: 10 }}
          >
            Close
          </button>
        </nav>
      )}
    </>
  );
}
