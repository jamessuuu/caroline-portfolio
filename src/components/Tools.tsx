"use client";

import ScrollReveal from "./ScrollReveal";
import { tools } from "@/data/content";

const categories = [...new Set(tools.map((t) => t.category))];

export default function Tools() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
            TOOLKIT
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-12">
            Tools I Work With
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat} delay={0.15 + ci * 0.1}>
              <div>
                <p className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[3px] mb-3">
                  {cat.toUpperCase()}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools
                    .filter((t) => t.category === cat)
                    .map((t) => (
                      <span
                        key={t.name}
                        className={`font-[family-name:var(--font-display)] text-sm tracking-[1px] px-4 py-2.5 border transition-colors duration-300 hover:translate-y-[-1px] ${
                          cat === "AI Tools"
                            ? "border-violet/30 text-violet hover:border-violet/60 hover:bg-violet/5"
                            : "border-border text-text-muted hover:border-gold-dim hover:text-text"
                        }`}
                      >
                        {t.name.toUpperCase()}
                      </span>
                    ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
