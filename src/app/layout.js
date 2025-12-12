import "./globals.css";
import Link from "next/link";
import MobileNav from "./components/MobileNav";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "DeepQ — DeepCode Labs",
  description: "DeepQ — Next-gen queue & service flow systems. Building the future of real-time intelligent systems.",
  keywords: ["queue management", "DeepQ", "service flow", "real-time systems", "DeepCode Labs", "hybrid service sector"],
  authors: [{ name: "DeepCode Labs" }],
  creator: "DeepCode Labs",
  publisher: "DeepCode Labs",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DeepCode Labs",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepq1.vercel.app",
    title: "DeepQ — DeepCode Labs",
    description: "Building the future of real-time intelligent systems",
    siteName: "DeepCode Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepQ — DeepCode Labs",
    description: "Building the future of real-time intelligent systems",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05060a" },
    { media: "(prefers-color-scheme: light)", color: "#05060a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#05060a" />
        <meta name="msapplication-navbutton-color" content="#05060a" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <header className="site-nav z-30 relative w-full">
          <div className="nav-inner">
            <div className="brand">
              <Link href="/" className="brand-logo">
                <img 
                  src="/assets/Deep Code Logo.png" 
                  alt="DeepCode Labs Logo" 
                  className="logo-img" 
                  width={200}
                  height={50}
                />
              </Link>
            </div>

            <Navigation />

            <MobileNav />
          </div>
        </header>

        <main id="main-content" className="relative z-20 w-full">
          {children}
        </main>

        <footer className="site-footer">
          <div className="footer-container">
            <div className="footer-column">
              <h4 className="footer-title">Follow Us</h4>
              <div className="social-row">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-frame"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" fill="#4da3ff" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.764v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
                  </svg>
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-frame"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" fill="#4da3ff" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.119 20H4V9h3.119v11zM5.559 7.642c-.999 0-1.807-.823-1.807-1.837 0-1.015.808-1.838 1.807-1.838s1.807.823 1.807 1.838c0 1.014-.808 1.837-1.807 1.837zM20 20h-3.119v-5.604c0-1.336-.026-3.056-1.862-3.056-1.863 0-2.149 1.454-2.149 2.958V20h-3.119V9h2.993v1.507h.043c.417-.791 1.436-1.628 2.955-1.628 3.158 0 3.741 2.089 3.741 4.803V20z"/>
                  </svg>
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-frame"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" fill="#4da3ff" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <nav className="footer-links" aria-label="Footer navigation">
                <Link href="/">Home</Link>
                <Link href="/deepq">DeepQ</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </nav>
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
