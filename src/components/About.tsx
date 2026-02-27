"use client";

import { Award, MapPin, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
            ABOUT ME
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-12">
            The Person Behind the Portfolio
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Story */}
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

          {/* Info cards */}
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: "Location",
                value: "Sta. Rosa, Nueva Ecija, Philippines",
                sub: "Available for any timezone",
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
                <div className="bg-surface border border-border p-6 flex gap-5 items-start group hover:border-gold-dim transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-gold mt-1 shrink-0" />
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
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.5}>
              <div className="bg-surface border border-gold-dim p-6 mt-2">
                <p className="font-[family-name:var(--font-display)] text-gold text-xs tracking-[3px] mb-2">
                  MENTORED BY
                </p>
                <p className="text-text italic">
                  A full-stack software engineer and AI enthusiast with extensive
                  experience in development, freelance work, and overseas client
                  collaboration.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
