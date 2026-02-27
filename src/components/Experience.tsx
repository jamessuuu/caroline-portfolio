"use client";

import ScrollReveal from "./ScrollReveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
            EXPERIENCE
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-16">
            Where I&apos;ve Built My Foundation
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <ScrollReveal key={job.company} delay={0.15 + i * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 w-2 h-2 -translate-x-[3px] bg-gold" />

                  <div className="bg-surface border border-border p-6 md:p-8 hover:border-gold-dim transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-text text-lg md:text-xl tracking-wider">
                          {job.role.toUpperCase()}
                        </h3>
                        <p className="text-gold italic">{job.company}</p>
                      </div>
                      <span className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[2px] shrink-0">
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
