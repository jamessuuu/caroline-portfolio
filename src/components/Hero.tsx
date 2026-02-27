"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Mouse-tracking gradient orbs */}
      <div
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-gold/15 blur-[120px] animate-float animate-pulse-glow pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div
        className="absolute bottom-40 left-10 w-[400px] h-[400px] rounded-full bg-violet/15 blur-[100px] animate-float pointer-events-none"
        style={{ animationDelay: "-7s", transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)` }}
      />
      {/* Decorative rotating rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/5 animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-violet/5 animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "45s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">
            <ScrollReveal>
              <div className="inline-block px-5 py-2 bg-surface border border-gold-dim font-[family-name:var(--font-display)] text-gold text-xs tracking-[6px] shimmer rounded-full">
                AI-AUGMENTED VIRTUAL ASSISTANT
              </div>
            </ScrollReveal>

            <AnimatedText
              as="h1"
              text="Let Me Handle the Work So You Can Grow."
              className="font-[family-name:var(--font-display)] text-[40px] sm:text-6xl md:text-7xl lg:text-[68px] leading-[0.92] tracking-tight text-text"
            />

            <ScrollReveal delay={0.3}>
              <p className="max-w-xl text-xl italic text-text-muted leading-relaxed">
                Stop drowning in admin work. With 4+ years of experience and
                AI-powered tools, I&apos;ll handle your emails, documents, and operations
                &mdash; so you can focus on what you do best.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="group font-[family-name:var(--font-display)] bg-gold text-cta-text px-10 py-4 text-base tracking-[2px] hover:bg-gold/90 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(196,115,125,0.4)] relative overflow-hidden rounded-full"
                >
                  <span className="relative z-10">HIRE ME TODAY</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
                <a
                  href="/CAROLINE%20EDUARDO%202026%20(1).pdf"
                  download="Caroline Eduardo - Resume.pdf"
                  className="group font-[family-name:var(--font-display)] border-2 border-gold/40 text-gold px-8 py-4 text-base tracking-[2px] hover:border-gold hover:bg-gold/5 transition-all duration-300 hover:translate-y-[-2px] flex items-center gap-2 rounded-full"
                >
                  <Download size={16} className="group-hover:animate-bounce" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Photo with creative hover effects */}
          <ScrollReveal delay={0.2} className="order-1 lg:order-2">
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
                style={{ transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)` }}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gold/25 blur-[80px] animate-pulse-glow" />
                {/* Dashed ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-gold/20 animate-spin-slow" />
                {/* Photo container with hover effects */}
                <div className="photo-container relative w-full h-full rounded-full">
                  <div className="photo-inner relative w-full h-full rounded-full overflow-hidden border-4 border-gold/40 shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/caroline.jpg"
                      alt="Caroline Eduardo - AI-Augmented Virtual Assistant"
                      className="w-full h-full object-cover"
                    />
                    {/* Pink overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Sparkles that appear on hover */}
                  <div className="photo-sparkle">
                    <span style={{ top: "5%", left: "15%", animationDelay: "0s" }} />
                    <span style={{ top: "10%", right: "10%", animationDelay: "0.3s", width: 10, height: 10 }} />
                    <span style={{ bottom: "15%", left: "5%", animationDelay: "0.6s", width: 6, height: 6 }} />
                    <span style={{ bottom: "10%", right: "15%", animationDelay: "0.9s" }} />
                    <span style={{ top: "50%", left: "-5%", animationDelay: "0.4s", width: 10, height: 10 }} />
                    <span style={{ top: "30%", right: "-3%", animationDelay: "1.2s", width: 6, height: 6 }} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.7}>
          <div className="flex flex-wrap justify-center gap-0 mt-16">
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
