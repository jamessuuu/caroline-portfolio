"use client";

import {
  Mail,
  Users,
  Headphones,
  Database,
  Calendar,
  Share2,
  Sparkles,
  Search,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import ParallaxImage from "./ParallaxImage";
import { services } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail, Users, Headphones, Database, Calendar, Share2, Sparkles, Search,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ScrollReveal>
              <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
                WHAT I CAN DO FOR YOU
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-4">
                Delegate the Busywork. Reclaim Your Time.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-muted text-lg italic max-w-xl">
                Tell me what&apos;s eating up your hours. I&apos;ll turn your chaos into
                systems and your to-do list into done.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <ParallaxImage
              src="/images/services-hero.png"
              alt="Professional workspace illustration"
              className="h-64 lg:h-80 rounded-2xl"
              speed={0.2}
              overlay={false}
            />
          </ScrollReveal>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:row-span-2">
            <ServiceCard service={services[0]} delay={0.1} tall />
          </div>
          <ServiceCard service={services[1]} delay={0.15} />
          <ServiceCard service={services[2]} delay={0.2} />
          <ServiceCard service={services[3]} delay={0.25} />
          <ServiceCard service={services[4]} delay={0.3} />
          <div className="lg:col-span-2">
            <ServiceCard service={services[6]} delay={0.35} wide />
          </div>
          <ServiceCard service={services[7]} delay={0.4} />
          <div className="lg:col-span-3">
            <ServiceCard service={services[5]} delay={0.45} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
  tall,
  wide,
}: {
  service: (typeof services)[0];
  delay: number;
  tall?: boolean;
  wide?: boolean;
}) {
  const Icon = iconMap[service.icon];
  const isFeatured = service.featured;

  return (
    <ScrollReveal delay={delay} className="h-full">
      <TiltCard className="h-full" intensity={isFeatured ? 5 : 4}>
        <div
          className={`h-full p-7 flex flex-col gap-5 border transition-all duration-300 group hover:translate-y-[-2px] rounded-xl ${
            tall ? "min-h-[320px]" : wide ? "min-h-[180px]" : "min-h-[180px]"
          } ${
            isFeatured
              ? "bg-gradient-to-b from-surface to-surface-light border-gold-dim hover:border-gold/60 hover:shadow-[0_8px_40px_rgba(196,115,125,0.15)]"
              : "bg-surface border-border hover:border-gold-dim hover:shadow-[0_4px_20px_rgba(196,115,125,0.08)]"
          }`}
        >
          <div className="flex items-start justify-between">
            {Icon && (
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isFeatured ? "bg-gold/15" : "bg-gold/10"} group-hover:bg-gold/20 transition-colors`}>
                <Icon className="w-5 h-5 text-gold" />
              </div>
            )}
            {isFeatured && (
              <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[3px] text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full animate-pulse-glow">
                KEY DIFFERENTIATOR
              </span>
            )}
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <h3
              className={`font-[family-name:var(--font-display)] tracking-wider mb-2 ${
                isFeatured ? "text-xl md:text-2xl" : "text-lg"
              } text-text`}
            >
              {service.title.toUpperCase()}
            </h3>
            <p className="text-text-muted italic text-sm leading-relaxed">
              {service.description}
            </p>
            {tall && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                {["Inbox Zero", "Email Drafting", "Priority Triage", "Calendar Sync", "Follow-ups"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] text-[11px] tracking-[1px] text-gold/80 bg-gold/8 border border-gold/15 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}
