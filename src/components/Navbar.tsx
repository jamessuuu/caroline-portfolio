"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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
          className="font-[family-name:var(--font-display)] text-gold text-xl tracking-[3px]"
        >
          CAROLINE EDUARDO
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-display)] text-text-muted text-sm tracking-[2px] hover:text-gold transition-colors duration-300"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            className="font-[family-name:var(--font-display)] bg-gold text-bg text-sm tracking-[2px] px-6 py-2.5 hover:bg-gold/90 transition-colors duration-300"
          >
            LET&apos;S WORK TOGETHER
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
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center font-[family-name:var(--font-display)] bg-gold text-bg text-sm tracking-[2px] px-6 py-3"
          >
            LET&apos;S WORK TOGETHER
          </a>
        </div>
      )}
    </nav>
  );
}
