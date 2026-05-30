"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center gap-3 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded-sm overflow-hidden flex flex-col">
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#DC143C]" />
          </div>
          <span className="font-bold text-base tracking-tight text-white">
            POLSKA <span className="text-[#DC143C]">BASEBALL</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#partnership"
            className="ml-2 px-4 py-2 bg-[#DC143C] hover:bg-[#A50E2D] text-white text-sm font-semibold rounded-sm transition-colors"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#2A2A2A] px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-[#9CA3AF] hover:text-white transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#partnership"
            className="mt-2 px-4 py-3 bg-[#DC143C] text-white font-semibold rounded-sm text-center"
            onClick={() => setOpen(false)}
          >
            Partner With Us
          </a>
        </div>
      )}
    </header>
  );
}
