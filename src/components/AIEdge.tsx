"use client";

import { Sparkles, Zap, Brain, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const advantages = [
  {
    icon: Brain,
    title: "Prompt Engineering",
    description:
      "Crafting precise prompts to get high-quality, consistent outputs from Claude and ChatGPT \u2014 then refining with human judgment.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Building AI-assisted workflows for email drafting, content creation, data analysis, and SOP documentation.",
  },
  {
    icon: Clock,
    title: "10x Speed",
    description:
      "Tasks that take hours manually get done in minutes. 30 days of social media content in 4 hours. Research reports in under an hour.",
  },
  {
    icon: Sparkles,
    title: "Human + AI Judgment",
    description:
      "AI produces the first 80%. I review, refine, and ensure quality. You get the speed of AI with the reliability of human oversight.",
  },
];

export default function AIEdge() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-[#0F0D1A] to-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
              THE AI EDGE
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-4">
              Not Just a VA &mdash; An AI-Augmented One
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-muted text-lg italic max-w-2xl mx-auto">
              While most virtual assistants work manually, I leverage cutting-edge
              AI tools to deliver faster results with the same attention to detail.
              This is what the future of virtual assistance looks like.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {advantages.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.15 + i * 0.1}>
              <div className="bg-surface/60 backdrop-blur-sm border border-border p-8 group hover:border-violet/40 transition-all duration-300 hover:translate-y-[-2px]">
                <item.icon className="w-8 h-8 text-violet mb-5" />
                <h3 className="font-[family-name:var(--font-display)] text-text text-xl tracking-wider mb-3">
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-text-muted italic leading-relaxed">
                  {item.description}
                </p>
              </div>
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
                  className="font-[family-name:var(--font-display)] text-xs tracking-[2px] text-text-muted border border-border px-4 py-2 hover:border-violet/40 hover:text-violet transition-colors duration-300"
                >
                  {tool.toUpperCase()}
                </span>
              )
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
