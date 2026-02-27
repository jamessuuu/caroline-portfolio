"use client";

import ScrollReveal from "./ScrollReveal";
import ParallaxImage from "./ParallaxImage";
import { tools } from "@/data/content";

const categories = [...new Set(tools.map((t) => t.category))];

const categoryColors: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  Productivity: { border: "border-gold/30", text: "text-gold", bg: "bg-gold", glow: "shadow-[0_0_20px_rgba(196,115,125,0.3)]" },
  Communication: { border: "border-violet/30", text: "text-violet", bg: "bg-violet", glow: "shadow-[0_0_20px_rgba(107,143,113,0.3)]" },
  "AI Tools": { border: "border-violet/40", text: "text-violet", bg: "bg-violet", glow: "shadow-[0_0_20px_rgba(107,143,113,0.3)]" },
  Design: { border: "border-gold/30", text: "text-gold", bg: "bg-gold", glow: "shadow-[0_0_20px_rgba(196,115,125,0.3)]" },
};

export default function Tools() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, var(--color-bg), var(--color-gradient-mid), var(--color-bg))` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <ScrollReveal>
              <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
                MY TOOLKIT
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-4">
                Battle-Tested Tools at Your Service
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-muted text-lg italic max-w-xl">
                I&apos;m proficient in the tools your business already uses &mdash; so
                there&apos;s zero learning curve when you bring me on board.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <ParallaxImage
              src="/images/services-hero.png"
              alt="Productivity tools workspace"
              className="h-48 lg:h-56 rounded-2xl"
              speed={0.15}
              overlay={false}
            />
          </ScrollReveal>
        </div>

        <div className="space-y-10">
          {categories.map((cat, ci) => {
            const colors = categoryColors[cat] || categoryColors.Productivity;
            return (
              <ScrollReveal key={cat} delay={0.15 + ci * 0.1}>
                <div>
                  <p className={`font-[family-name:var(--font-display)] text-xs tracking-[3px] mb-4 ${colors.text}`}>
                    {cat.toUpperCase()}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {tools
                      .filter((t) => t.category === cat)
                      .map((t) => (
                        <div
                          key={t.name}
                          className={`tool-pill relative font-[family-name:var(--font-display)] text-sm tracking-[1px] px-5 py-3 border rounded-xl cursor-default overflow-hidden ${colors.border} ${colors.text}`}
                        >
                          <span className="relative z-10 tool-pill-text transition-colors duration-300">{t.name.toUpperCase()}</span>
                          <div className={`absolute inset-0 ${colors.bg} opacity-0 tool-pill-fill transition-all duration-400 rounded-xl`} />
                        </div>
                      ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
