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
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail, Users, Headphones, Database, Calendar, Share2, Sparkles, Search,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
            SERVICES
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-4">
            How I Can Help You
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-text-muted text-lg italic max-w-xl mb-12">
            From inbox management to AI-powered research, I bring precision and
            reliability to every task.
          </p>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1: Large card + 2 stacked */}
          <div className="lg:row-span-2">
            <ServiceCard service={services[0]} delay={0.1} tall />
          </div>
          <ServiceCard service={services[1]} delay={0.15} />
          <ServiceCard service={services[2]} delay={0.2} />

          {/* Row 2 fills in */}
          <ServiceCard service={services[3]} delay={0.25} />
          <ServiceCard service={services[4]} delay={0.3} />

          {/* Row 3: Featured AI card spans 2 */}
          <div className="lg:col-span-2">
            <ServiceCard service={services[6]} delay={0.35} wide />
          </div>
          <ServiceCard service={services[7]} delay={0.4} />

          {/* Remaining */}
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
      <div
        className={`h-full p-7 flex flex-col justify-between gap-5 border transition-all duration-300 group hover:translate-y-[-2px] ${
          tall ? "min-h-[320px]" : wide ? "min-h-[180px]" : "min-h-[180px]"
        } ${
          isFeatured
            ? "bg-gradient-to-b from-surface to-[#1A1714] border-gold-dim hover:border-gold/60 hover:shadow-[0_4px_40px_rgba(201,169,98,0.1)]"
            : "bg-surface border-border hover:border-gold-dim"
        }`}
      >
        <div className="flex items-start justify-between">
          {Icon && (
            <Icon
              className={`w-6 h-6 ${isFeatured ? "text-gold" : "text-gold"}`}
            />
          )}
          {isFeatured && (
            <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[3px] text-gold bg-gold/10 border border-gold/20 px-3 py-1">
              KEY DIFFERENTIATOR
            </span>
          )}
        </div>
        <div>
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
        </div>
      </div>
    </ScrollReveal>
  );
}
