"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ParallaxImage from "./ParallaxImage";
import { caseStudies } from "@/data/content";

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section id="cases" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <ScrollReveal>
              <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
                PROOF IT WORKS
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-4">
                See How I&apos;ve Solved Real Business Problems
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-muted text-lg italic max-w-xl">
                These aren&apos;t hypotheticals. Here&apos;s exactly how I approach
                challenges and deliver results you can measure.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <ParallaxImage
              src="/images/case-studies.png"
              alt="Professional workspace illustration"
              className="h-56 lg:h-64 rounded-2xl"
              speed={0.2}
              overlay={false}
            />
          </ScrollReveal>
        </div>

        {/* Tabs */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap gap-2 mb-8">
            {caseStudies.map((cs, i) => (
              <button
                key={cs.title}
                onClick={() => setActive(i)}
                className={`font-[family-name:var(--font-display)] text-sm tracking-[2px] px-5 py-2.5 rounded-full transition-all duration-300 ${
                  active === i
                    ? "bg-gold text-cta-text shadow-[0_4px_20px_rgba(196,115,125,0.3)]"
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
          <div className="bg-surface border border-border p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-[family-name:var(--font-display)] text-gold text-xs tracking-[3px] mb-3">
                  THE CHALLENGE
                </p>
                <p className="text-text-muted italic leading-relaxed mb-8">
                  {caseStudies[active].problem}
                </p>

                <p className="font-[family-name:var(--font-display)] text-gold text-xs tracking-[3px] mb-3">
                  MY APPROACH
                </p>
                <p className="text-text-muted italic leading-relaxed">
                  {caseStudies[active].action}
                </p>
              </div>

              <div>
                <p className="font-[family-name:var(--font-display)] text-gold text-xs tracking-[3px] mb-3">
                  TOOLS I USED
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {caseStudies[active].tools.map((t) => (
                    <span
                      key={t}
                      className="font-[family-name:var(--font-display)] text-xs tracking-[2px] text-gold border border-gold-dim px-3 py-1.5 rounded-full"
                    >
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div>

                <p className="font-[family-name:var(--font-display)] text-gold text-xs tracking-[3px] mb-3">
                  THE RESULT
                </p>
                <p className="text-text text-lg italic leading-relaxed border-l-3 border-gold pl-5">
                  {caseStudies[active].result}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-8 font-[family-name:var(--font-display)] text-gold text-sm tracking-[2px] hover:gap-3 transition-all duration-300"
                >
                  WANT RESULTS LIKE THESE?
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
