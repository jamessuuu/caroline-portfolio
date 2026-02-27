"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/30 to-bg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
            TESTIMONIALS
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-16">
            What People Say
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl">
            <div className="min-h-[200px]">
              <p className="text-2xl md:text-3xl italic text-text leading-relaxed mb-8 transition-opacity duration-500">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div>
                <p className="font-[family-name:var(--font-display)] text-gold tracking-wider">
                  {testimonials[active].author.toUpperCase()}
                </p>
                <p className="text-text-muted italic text-sm">
                  {testimonials[active].role}
                </p>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-0.5 transition-all duration-500 ${
                    active === i ? "w-12 bg-gold" : "w-6 bg-border hover:bg-text-dim"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
