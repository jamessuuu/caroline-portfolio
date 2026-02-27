"use client";

import { useState, useEffect } from "react";
import { Quote, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, var(--color-bg), var(--color-gradient-mid), var(--color-bg))` }} />
      {/* Decorative sparkle dots */}
      <div className="absolute top-16 right-16 w-40 h-40 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="70" cy="25" r="2.5" fill="var(--color-gold)" opacity="0.18" className="animate-pulse-glow" />
          <circle cx="85" cy="45" r="1.5" fill="var(--color-violet)" opacity="0.12" />
          <circle cx="55" cy="40" r="2" fill="var(--color-gold)" opacity="0.14" className="animate-pulse-glow" style={{ animationDelay: "1.2s" } as React.CSSProperties} />
          <circle cx="90" cy="70" r="1" fill="var(--color-gold)" opacity="0.1" />
          <line x1="70" y1="25" x2="55" y2="40" stroke="var(--color-gold)" strokeWidth="0.3" opacity="0.07" />
          <line x1="70" y1="25" x2="85" y2="45" stroke="var(--color-violet)" strokeWidth="0.3" opacity="0.06" />
          <path d="M78 15 L79 18 L80 15 L79 12 Z" fill="var(--color-gold)" opacity="0.18" />
          <path d="M78 15 L75 16 L78 17 L81 16 Z" fill="var(--color-gold)" opacity="0.18" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
            DON&apos;T JUST TAKE MY WORD FOR IT
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-16">
            Here&apos;s What People Who&apos;ve Worked With Me Say
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl">
            <Quote className="w-12 h-12 text-gold/20 mb-6" />
            <div
              className="min-h-[220px] transition-all duration-300"
              style={{ opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? "translateY(10px)" : "translateY(0)" }}
            >
              <p className="text-2xl md:text-3xl italic text-text leading-relaxed mb-8">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div>
                <p className="font-[family-name:var(--font-display)] text-gold tracking-wider text-lg">
                  {testimonials[active].author.toUpperCase()}
                </p>
                <p className="text-text-muted italic text-sm">
                  {testimonials[active].role}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setActive(i);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      active === i ? "w-12 bg-gold" : "w-6 bg-border hover:bg-gold/40"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-gold text-sm tracking-[2px] hover:gap-3 transition-all duration-300"
              >
                BECOME MY NEXT SUCCESS STORY
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
