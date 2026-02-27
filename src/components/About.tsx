"use client";

import { Award, MapPin, GraduationCap, Download } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import ParallaxImage from "./ParallaxImage";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative sparkle constellation — top right */}
      <div className="absolute top-8 right-8 w-48 h-48 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Scattered dots with varying sizes and opacities */}
          <circle cx="95" cy="20" r="3" fill="var(--color-gold)" opacity="0.2" className="animate-pulse-glow" />
          <circle cx="75" cy="35" r="1.5" fill="var(--color-gold)" opacity="0.15" />
          <circle cx="105" cy="50" r="2" fill="var(--color-violet)" opacity="0.18" className="animate-pulse-glow" style={{ animationDelay: "1s" } as React.CSSProperties} />
          <circle cx="60" cy="15" r="1" fill="var(--color-gold)" opacity="0.12" />
          <circle cx="85" cy="60" r="2.5" fill="var(--color-gold)" opacity="0.15" className="animate-pulse-glow" style={{ animationDelay: "2s" } as React.CSSProperties} />
          <circle cx="100" cy="80" r="1.5" fill="var(--color-violet)" opacity="0.1" />
          <circle cx="70" cy="55" r="1" fill="var(--color-violet)" opacity="0.12" />
          {/* Thin connecting lines */}
          <line x1="95" y1="20" x2="75" y2="35" stroke="var(--color-gold)" strokeWidth="0.3" opacity="0.08" />
          <line x1="75" y1="35" x2="85" y2="60" stroke="var(--color-gold)" strokeWidth="0.3" opacity="0.06" />
          <line x1="105" y1="50" x2="85" y2="60" stroke="var(--color-violet)" strokeWidth="0.3" opacity="0.08" />
          {/* Tiny 4-point sparkle */}
          <path d="M88 8 L89 12 L90 8 L89 4 Z" fill="var(--color-gold)" opacity="0.2" />
          <path d="M88 8 L84 9 L88 10 L92 9 Z" fill="var(--color-gold)" opacity="0.2" />
        </svg>
      </div>
      {/* Decorative sparkle constellation — bottom left */}
      <div className="absolute bottom-12 left-8 w-36 h-36 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="20" cy="70" r="2.5" fill="var(--color-gold)" opacity="0.15" className="animate-pulse-glow" style={{ animationDelay: "0.5s" } as React.CSSProperties} />
          <circle cx="35" cy="55" r="1.5" fill="var(--color-violet)" opacity="0.12" />
          <circle cx="15" cy="45" r="1" fill="var(--color-gold)" opacity="0.1" />
          <circle cx="40" cy="80" r="2" fill="var(--color-violet)" opacity="0.15" className="animate-pulse-glow" style={{ animationDelay: "1.5s" } as React.CSSProperties} />
          <circle cx="25" cy="90" r="1" fill="var(--color-gold)" opacity="0.1" />
          <line x1="20" y1="70" x2="35" y2="55" stroke="var(--color-violet)" strokeWidth="0.3" opacity="0.06" />
          <line x1="20" y1="70" x2="40" y2="80" stroke="var(--color-gold)" strokeWidth="0.3" opacity="0.06" />
          {/* Tiny sparkle */}
          <path d="M10 60 L11 63 L12 60 L11 57 Z" fill="var(--color-violet)" opacity="0.15" />
          <path d="M10 60 L7 61 L10 62 L13 61 Z" fill="var(--color-violet)" opacity="0.15" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
            GET TO KNOW ME
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-4">
            The Person You&apos;ll Be Working With
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-text-muted text-lg italic max-w-2xl mb-12">
            When you hire me, you&apos;re not just getting a VA &mdash; you&apos;re
            getting someone who genuinely cares about your success.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Story + image */}
          <div className="lg:col-span-3 space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-text-muted text-lg italic leading-relaxed">
                <p>
                  I&apos;m Caroline, based in Nueva Ecija, Philippines. I spent the
                  last four years working across government offices, corporate front
                  desks, and fine-dining restaurants &mdash; and every role taught me
                  the same thing: the people who thrive are the ones who show up
                  prepared, stay organized, and genuinely care about doing the work
                  right.
                </p>
                <p>
                  I managed HR records for over a hundred government employees with
                  near-perfect accuracy. I greeted and assisted fifty-plus visitors a
                  day while keeping five departments running smoothly. I turned
                  chaotic reservation books into systems that increased seating by
                  fifteen percent.
                </p>
                <p>
                  Now I&apos;m bringing that same energy to virtual assistance &mdash;
                  with a new edge. I&apos;m actively learning AI tools like Claude
                  and ChatGPT under the guidance of a mentor who&apos;s a full-stack
                  engineer and AI enthusiast with years of overseas client experience.
                  I&apos;m not just keeping up with the future of work &mdash; I&apos;m
                  building toward it.
                </p>
              </div>
            </ScrollReveal>

            {/* About section image */}
            <ScrollReveal delay={0.3}>
              <ParallaxImage
                src="/images/ai-edge.png"
                alt="AI-powered collaboration"
                className="h-48 md:h-56 rounded-2xl"
                speed={0.15}
                overlay={false}
              />
            </ScrollReveal>

            {/* Resume download CTA */}
            <ScrollReveal delay={0.35}>
              <a
                href="/CAROLINE%20EDUARDO%202026%20(1).pdf"
                download="Caroline Eduardo - Resume.pdf"
                className="group inline-flex items-center gap-3 font-[family-name:var(--font-display)] bg-gold/10 text-gold border border-gold/30 px-6 py-3 text-sm tracking-[2px] rounded-full hover:bg-gold hover:text-cta-text transition-all duration-300 hover:shadow-[0_8px_30px_rgba(196,115,125,0.3)]"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                DOWNLOAD MY FULL RESUME
              </a>
            </ScrollReveal>
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: MapPin,
                title: "Location",
                value: "Sta. Rosa, Nueva Ecija, Philippines",
                sub: "Ready to work in your timezone",
              },
              {
                icon: GraduationCap,
                title: "Education",
                value: "BS Hotel & Restaurant Management",
                sub: "NEUST, 2009\u20132013",
              },
              {
                icon: Award,
                title: "Certification",
                value: "Civil Service Eligible",
                sub: "Sub-Professional Level, 2019",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={0.2 + i * 0.1}>
                <TiltCard intensity={4}>
                  <div className="bg-surface border border-border p-6 flex gap-5 items-start group hover:border-gold-dim hover:shadow-[0_4px_20px_rgba(196,115,125,0.08)] transition-all duration-300 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[3px] mb-1">
                        {item.title.toUpperCase()}
                      </p>
                      <p className="text-text text-lg font-semibold">
                        {item.value}
                      </p>
                      <p className="text-text-muted text-sm italic">{item.sub}</p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.5}>
              <div className="bg-surface border border-gold-dim p-6 mt-2 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 shimmer pointer-events-none" />
                <p className="font-[family-name:var(--font-display)] text-gold text-xs tracking-[3px] mb-2 relative z-10">
                  MENTORED BY
                </p>
                <p className="text-text italic relative z-10">
                  A full-stack software engineer and AI enthusiast with extensive
                  experience in development, freelance work, and overseas client
                  collaboration.
                </p>
              </div>
            </ScrollReveal>

            {/* CTA card */}
            <ScrollReveal delay={0.6}>
              <a
                href="#contact"
                className="block bg-gold text-cta-text p-6 rounded-xl text-center group hover:shadow-[0_8px_30px_rgba(196,115,125,0.3)] transition-all duration-300 hover:translate-y-[-2px] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <p className="font-[family-name:var(--font-display)] text-lg tracking-[3px] relative z-10">
                  READY TO GET STARTED?
                </p>
                <p className="text-sm italic opacity-90 mt-1 relative z-10">
                  Let&apos;s talk about your needs
                </p>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
