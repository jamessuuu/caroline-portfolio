"use client";

import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import ParallaxImage from "./ParallaxImage";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ScrollReveal>
              <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
                PROVEN TRACK RECORD
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-4">
                4+ Years of Hands-On Experience You Can Trust
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-text-muted text-lg italic max-w-xl">
                Every role has shaped me into a detail-driven professional. Here&apos;s
                the foundation behind the work I&apos;ll do for you.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <ParallaxImage
              src="/images/case-studies.png"
              alt="Professional workspace"
              className="h-48 lg:h-56 rounded-2xl"
              speed={0.15}
              overlay={false}
            />
          </ScrollReveal>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px"
            style={{ background: `linear-gradient(to bottom, var(--color-gold), var(--color-violet), transparent)` }}
          />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <ScrollReveal key={job.company} delay={0.15 + i * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-[5px]">
                    <div className="w-3 h-3 bg-gold rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-gold rounded-full animate-ping opacity-30" />
                  </div>

                  <TiltCard intensity={3}>
                    <div className="bg-surface border border-border p-6 md:p-8 hover:border-gold-dim hover:shadow-[0_4px_20px_rgba(196,115,125,0.08)] transition-all duration-300 rounded-xl">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-[family-name:var(--font-display)] text-text text-lg md:text-xl tracking-wider">
                            {job.role.toUpperCase()}
                          </h3>
                          <p className="text-gold italic font-semibold">{job.company}</p>
                        </div>
                        <span className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[2px] bg-surface-light px-3 py-1 rounded-full shrink-0">
                          {job.period.toUpperCase()}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {job.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-text-muted italic text-sm leading-relaxed flex gap-3"
                          >
                            <span className="text-gold mt-1.5 shrink-0">&#9642;</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
