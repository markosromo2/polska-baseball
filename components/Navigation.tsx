"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#news", label: "News" },
  { href: "#about", label: "About" },
  { href: "#teams", label: "Teams" },
  { href: "#media", label: "Media" },
  { href: "#rankings", label: "Rankings" },
  { href: "#leadership", label: "Leadership" },
  { href: "#partnership", label: "Partnership" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-sm border-b border-[#1a1a1a]"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      {/* Top red stripe */}
      <div className="h-0.5 bg-[#DC143C]" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          {/* Polish flag icon */}
          <div className="w-7 h-5 flex flex-col overflow-hidden border border-white/10">
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#DC143C]" />
          </div>
          <span
            className="text-white font-bold text-base uppercase tracking-wider"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Polska <span className="text-[#DC143C]">Baseball</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#999] hover:text-white text-xs font-sans font-semibold uppercase tracking-widest transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#partnership"
            className="px-5 py-2 bg-[#DC143C] hover:bg-[#A50E2D] text-white text-xs font-sans font-bold uppercase tracking-widest transition-colors"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black border-t border-[#1a1a1a] px-4 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#999] hover:text-white text-sm font-sans font-semibold uppercase tracking-widest transition-colors py-2 border-b border-[#111] last:border-0"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#partnership"
            className="mt-4 px-5 py-3 bg-[#DC143C] text-white text-xs font-bold uppercase tracking-widest text-center"
            onClick={() => setOpen(false)}
          >
            Partner With Us
          </a>
        </div>
      )}
    </header>
  );
}
