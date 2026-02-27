"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#cases" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-gold text-xl tracking-[3px] hover:opacity-80 transition-opacity"
        >
          CAROLINE EDUARDO
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-display)] text-text-muted text-sm tracking-[2px] hover:text-gold transition-colors duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="group font-[family-name:var(--font-display)] bg-gold text-cta-text text-sm tracking-[2px] px-6 py-2.5 rounded-full hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(196,115,125,0.3)] relative overflow-hidden"
          >
            <span className="relative z-10">LET&apos;S WORK TOGETHER</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-[family-name:var(--font-display)] text-text-muted text-sm tracking-[2px] hover:text-gold transition-colors"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 text-center font-[family-name:var(--font-display)] bg-gold text-cta-text text-sm tracking-[2px] px-6 py-3 rounded-full"
            >
              LET&apos;S WORK TOGETHER
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
