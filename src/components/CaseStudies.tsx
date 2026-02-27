"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { caseStudies } from "@/data/content";

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
            CASE STUDIES
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-4">
            Real Problems, Real Solutions
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-text-muted text-lg italic max-w-xl mb-12">
            Sample projects demonstrating how I approach real-world VA challenges
            using my experience and AI tools.
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap gap-2 mb-8">
            {caseStudies.map((cs, i) => (
              <button
                key={cs.title}
                onClick={() => setActive(i)}
                className={`font-[family-name:var(--font-display)] text-sm tracking-[2px] px-5 py-2.5 transition-all duration-300 ${
                  active === i
                    ? "bg-gold text-bg"
                    : "border border-border text-text-muted hover:border-gold-dim hover:text-text"
                }`}
              >
                {cs.title.toUpperCase()}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active case study */}
        <ScrollReveal delay={0.4}>
          <div className="bg-surface border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[3px] mb-3">
                  THE PROBLEM
                </p>
                <p className="text-text-muted italic leading-relaxed mb-8">
                  {caseStudies[active].problem}
                </p>

                <p className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[3px] mb-3">
                  WHAT I DID
                </p>
                <p className="text-text-muted italic leading-relaxed">
                  {caseStudies[active].action}
                </p>
              </div>

              <div>
                <p className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[3px] mb-3">
                  TOOLS USED
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {caseStudies[active].tools.map((t) => (
                    <span
                      key={t}
                      className="font-[family-name:var(--font-display)] text-xs tracking-[2px] text-gold border border-gold-dim px-3 py-1.5"
                    >
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div>

                <p className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[3px] mb-3">
                  THE RESULT
                </p>
                <p className="text-text text-lg italic leading-relaxed border-l-2 border-gold pl-5">
                  {caseStudies[active].result}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
