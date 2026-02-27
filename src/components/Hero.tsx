"use client";

import AnimatedText from "./AnimatedText";
import Counter from "./Counter";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Data Accuracy" },
  { value: 100, suffix: "+", label: "Personnel Managed" },
  { value: 50, suffix: "+", label: "Daily Interactions" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] animate-float animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-[400px] h-[400px] rounded-full bg-violet/10 blur-[100px] animate-float pointer-events-none" style={{ animationDelay: "-7s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-10 py-20">
        {/* Badge */}
        <ScrollReveal>
          <div className="inline-block px-5 py-2 bg-surface border border-gold-dim font-[family-name:var(--font-display)] text-gold text-xs tracking-[6px]">
            AI-AUGMENTED VIRTUAL ASSISTANT
          </div>
        </ScrollReveal>

        {/* Headline */}
        <AnimatedText
          as="h1"
          text="Your Next Reliable Virtual Assistant"
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[0.92] tracking-tight text-text"
        />

        {/* Subtitle */}
        <ScrollReveal delay={0.3}>
          <p className="max-w-2xl text-lg italic text-text-muted leading-relaxed">
            Detail-driven administrative professional with 4+ years in HR,
            corporate, and hospitality operations &mdash; now helping overseas
            businesses scale with dependable, AI-powered virtual support.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={0.5}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="font-[family-name:var(--font-display)] bg-gold text-bg px-10 py-4 text-base tracking-[2px] hover:bg-gold/90 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(201,169,98,0.3)]"
            >
              LET&apos;S WORK TOGETHER
            </a>
            <a
              href="#about"
              className="font-[family-name:var(--font-display)] border border-text/20 text-text px-10 py-4 text-base tracking-[2px] hover:border-text/50 transition-all duration-300 hover:translate-y-[-2px]"
            >
              LEARN MORE
            </a>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.7}>
          <div className="flex flex-wrap justify-center gap-0 mt-8">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && (
                  <div className="w-px h-12 bg-border mx-4 sm:mx-8 hidden sm:block" />
                )}
                <div className="text-center px-4 sm:px-8">
                  <div className="font-[family-name:var(--font-display)] text-gold text-4xl md:text-5xl tracking-wider">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[3px] mt-1">
                    {s.label.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
