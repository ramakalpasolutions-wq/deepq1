"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Helper function to check if link is active
  const isActive = (path) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // Close when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape key
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

  // Handle click - reload if same page
  const handleLinkClick = (e, path) => {
    if (pathname === path) {
      e.preventDefault();
      setOpen(false);
      router.refresh(); // Refresh the current page
    }
  };

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
          <Link 
            href="/" 
            className={isActive("/") ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "/")}
          >
            Home
          </Link>
          <Link 
            href="/deepq" 
            className={isActive("/deepq") ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "/deepq")}
          >
            DeepQ
          </Link>
          <Link 
            href="/about" 
            className={isActive("/about") ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "/about")}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className={isActive("/contact") ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "/contact")}
          >
            Contact Us
          </Link>
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
