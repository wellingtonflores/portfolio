"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 border-b border-white/5 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-premium-display text-lg tracking-wider"
            >
              {/* Database Icon SVG */}
              <svg
                className="w-6 h-6 text-cyan-neon animate-pulse-glow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"
                />
              </svg>
              <span className="text-white hover:text-cyan-neon transition-colors duration-200">
                WELLINGTON<span className="text-cyan-neon font-light">.FLORES</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline gap-6">
              <Link
                href="/"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-graphite-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium"
              >
                Início
              </Link>
              <Link
                href={isHome ? "#projetos" : "/#projetos"}
                onClick={(e) => handleNavClick(e, "projetos")}
                className="text-graphite-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium"
              >
                Projetos
              </Link>
              <Link
                href={isHome ? "#habilidades" : "/#habilidades"}
                onClick={(e) => handleNavClick(e, "habilidades")}
                className="text-graphite-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium"
              >
                Habilidades
              </Link>
              <Link
                href={isHome ? "#sobre" : "/#sobre"}
                onClick={(e) => handleNavClick(e, "sobre")}
                className="text-graphite-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium"
              >
                Sobre Mim
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <a
                href="https://github.com/wellingtonflores"
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite-300 hover:text-cyan-neon transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/wellington-flores"
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite-300 hover:text-cyan-neon transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-graphite-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? (
                /* Close Icon X */
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Menu */
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-graphite-950/95 border-b border-white/5 backdrop-blur-lg">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "home")}
            className="block text-graphite-200 hover:text-white px-3 py-3 rounded-md text-base font-medium"
          >
            Início
          </Link>
          <Link
            href={isHome ? "#projetos" : "/#projetos"}
            onClick={(e) => handleNavClick(e, "projetos")}
            className="block text-graphite-200 hover:text-white px-3 py-3 rounded-md text-base font-medium"
          >
            Projetos
          </Link>
          <Link
            href={isHome ? "#habilidades" : "/#habilidades"}
            onClick={(e) => handleNavClick(e, "habilidades")}
            className="block text-graphite-200 hover:text-white px-3 py-3 rounded-md text-base font-medium"
          >
            Habilidades
          </Link>
          <Link
            href={isHome ? "#sobre" : "/#sobre"}
            onClick={(e) => handleNavClick(e, "sobre")}
            className="block text-graphite-200 hover:text-white px-3 py-3 rounded-md text-base font-medium"
          >
            Sobre Mim
          </Link>

          <div className="flex items-center gap-6 pt-4 pb-2 px-3 border-t border-white/10">
            <a
              href="https://github.com/wellingtonflores"
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite-300 hover:text-cyan-neon transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/wellington-flores"
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite-300 hover:text-cyan-neon transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
