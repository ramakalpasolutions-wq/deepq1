"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="nav-links" aria-label="Main navigation">
      <Link 
        href="/" 
        className={isActive("/") ? "active" : ""}
      >
        Home
      </Link>
      <Link 
        href="/deepq" 
        className={isActive("/deepq") ? "active" : ""}
      >
        DeepQ
      </Link>
      <Link 
        href="/about" 
        className={isActive("/about") ? "active" : ""}
      >
        About Us
      </Link>
      <Link 
        href="/contact" 
        className={isActive("/contact") ? "active" : ""}
      >
        Contact Us
      </Link>
    </nav>
  );
}
