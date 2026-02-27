"use client";

import { Sparkles, Zap, Brain, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import ParallaxImage from "./ParallaxImage";

const advantages = [
  {
    icon: Brain,
    title: "Prompt Engineering",
    description:
      "I craft precise prompts to get high-quality, consistent outputs from Claude and ChatGPT \u2014 then refine everything with human judgment. You get polished results, not raw AI output.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "I build AI-assisted workflows for your email drafting, content creation, data analysis, and SOP documentation \u2014 so repetitive tasks run on autopilot.",
  },
  {
    icon: Clock,
    title: "10x Faster Delivery",
    description:
      "Tasks that take hours manually? I get them done in minutes. A full month of social media content in 4 hours. Research reports in under an hour. Your deadlines will love me.",
  },
  {
    icon: Sparkles,
    title: "Human + AI Quality",
    description:
      "AI produces the first 80%. I review, refine, and ensure quality. You get the speed of AI with the reliability of human oversight \u2014 the best of both worlds.",
  },
];

export default function AIEdge() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, var(--color-bg), var(--color-gradient-mid), var(--color-bg))` }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet/8 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
                YOUR UNFAIR ADVANTAGE
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-4">
                Get AI-Powered Support Without the Learning Curve
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-muted text-lg italic max-w-2xl">
                Most VAs work manually. I leverage cutting-edge AI tools to deliver
                faster results with the same attention to detail. Hire me and you
                instantly upgrade to the future of virtual assistance.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3} className="lg:col-span-2">
            <ParallaxImage
              src="/images/ai-edge.png"
              alt="AI and human collaboration illustration"
              className="h-56 lg:h-72 rounded-2xl"
              speed={0.15}
              overlay={false}
            />
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {advantages.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.15 + i * 0.1}>
              <TiltCard className="h-full" intensity={5}>
                <div className="h-full glass-card border border-border p-8 group hover:border-violet/40 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(107,143,113,0.1)] rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center mb-5 group-hover:bg-violet/20 transition-colors">
                    <item.icon className="w-6 h-6 text-violet" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-text text-xl tracking-wider mb-3">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="text-text-muted italic leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Tool badges */}
        <ScrollReveal delay={0.6}>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {["Claude AI (Max Plan)", "ChatGPT", "Canva AI", "Notion AI", "Google Workspace", "Automation Tools"].map(
              (tool) => (
                <span
                  key={tool}
                  className="font-[family-name:var(--font-display)] text-xs tracking-[2px] text-text-muted border border-border px-4 py-2 rounded-full hover:border-violet/40 hover:text-violet hover:bg-violet/5 transition-all duration-300"
                >
                  {tool.toUpperCase()}
                </span>
              )
            )}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.7}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-gold text-sm tracking-[2px] border-2 border-gold/40 px-8 py-3 rounded-full hover:bg-gold hover:text-cta-text transition-all duration-300 hover:shadow-[0_8px_30px_rgba(196,115,125,0.3)]"
            >
              <Sparkles size={16} />
              SEE WHAT AI CAN DO FOR YOUR BUSINESS
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
