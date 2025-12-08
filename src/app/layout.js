// src/app/layout.js
import "./globals.css";
import Link from "next/link";
import MobileNav from "./components/MobileNav";

export const metadata = {
  title: "DeepQ — DeepCode Labs",
  description: "DeepQ — Next-gen queue & service flow systems",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* NAV */}
        <header className="site-nav z-30 relative w-full">
          <div className="nav-inner">
            <div className="brand">
              <Link href="/" className="brand-logo">
                <img src="/assets/Deep Code Logo.png" alt="DeepCode Labs Logo" className="logo-img" style={{ width: 200 }} />
              </Link>
            </div>

            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/deepq">DeepQ</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="btn ghost">Contact</Link>
            </nav>

            {/* Mobile client navigation */}
            <MobileNav />
          </div>
        </header>

        <main className="relative z-20 w-full">{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-container">
            <div className="footer-column">
              <h4 className="footer-title">Follow Us</h4>
              <div className="footer-column">
  
  <div className="social-row">

    {/* Facebook */}
    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-frame">
      <svg width="20" height="20" fill="#4da3ff" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 
        1.326 24h11.495v-9.294H9.691V11.01h3.13V8.414c0-3.1 1.893-4.788 
        4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 
        0-1.797.715-1.797 1.764v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 
        24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-frame">
      <svg width="20" height="20" fill="#4da3ff" viewBox="0 0 24 24">
        <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 
        2.239 5 5 5h14c2.761 0 5-2.239 
        5-5V5c0-2.761-2.239-5-5-5zM7.119 
        20H4V9h3.119v11zM5.559 7.642c-.999 
        0-1.807-.823-1.807-1.837 0-1.015.808-1.838 
        1.807-1.838s1.807.823 
        1.807 1.838c0 1.014-.808 1.837-1.807 1.837zM20 
        20h-3.119v-5.604c0-1.336-.026-3.056-1.862-3.056-1.863 
        0-2.149 1.454-2.149 2.958V20h-3.119V9h2.993v1.507h.043c.417-.791 
        1.436-1.628 2.955-1.628 3.158 0 3.741 2.089 
        3.741 4.803V20z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-frame">
      <svg width="20" height="20" fill="#4da3ff" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 
        4.85.07 1.17.056 1.97.24 2.427.413a4.92 
        4.92 0 011.75 1.145 4.92 4.92 0 
        011.145 1.75c.173.457.357 1.257.413 
        2.427.058 1.266.07 1.646.07 
        4.85s-.012 3.584-.07 4.85c-.056 
        1.17-.24 1.97-.413 2.427a4.92 4.92 
        0 01-1.145 1.75 4.92 4.92 0 
        01-1.75 1.145c-.457.173-1.257.357-2.427.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.413a4.92 
        4.92 0 01-1.75-1.145 4.92 4.92 0 
        01-1.145-1.75c-.173-.457-.357-1.257-.413-2.427C2.175 
        15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.413-2.427A4.92 
        4.92 0 013.791 2.97 4.92 4.92 0 
        015.541 1.825c.457-.173 1.257-.357 2.427-.413C9.234 
        2.175 9.614 2.163 12 2.163m0-2.163C8.741 
        0 8.332.014 7.053.072 5.775.13 4.897.304 4.155.555a7.09 7.09 
        0 00-2.57 1.664A7.09 7.09 0 
        00-.08 4.789C-.33 5.531-.504 6.409-.562 7.687-.62 
        8.966-.634 9.376-.634 12c0 2.624.014 3.034.072 
        4.313.058 1.278.232 2.156.483 2.898a7.09 7.09 
        0 001.664 2.57 7.09 7.09 0 
        002.57 1.664c.742.251 1.62.425 2.898.483C8.334 
        23.986 8.744 24 12 24s3.666-.014 4.944-.072c1.278-.058 
        2.156-.232 2.898-.483a7.09 7.09 
        0 002.57-1.664 7.09 7.09 0 
        001.664-2.57c.251-.742.425-1.62.483-2.898.058-1.279.072-1.689.072-4.313 
        0-2.624-.014-3.034-.072-4.313-.058-1.278-.232-2.156-.483-2.898a7.09 
        7.09 0 00-1.664-2.57A7.09 7.09 0 
        0019.842.555c-.742-.251-1.62-.425-2.898-.483C15.666.014 
        15.256 0 12 0z"/>
      </svg>
    </a>

  </div>
</div>

            </div>

            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/deepq">DeepQ</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div className="footer-column">
              <p className="footer-copy">© {new Date().getFullYear()} DeepCode Labs</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
