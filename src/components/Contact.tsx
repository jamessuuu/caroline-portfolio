"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <div>
            <ScrollReveal>
              <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
                GET IN TOUCH
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-6">
                Let&apos;s Work Together
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-muted text-lg italic leading-relaxed mb-10">
                Ready for a reliable, AI-augmented virtual assistant who brings
                real experience and genuine care to every task? I&apos;d love to hear
                about your needs.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "santoscaroline123@yahoo.com" },
                { icon: Phone, label: "Phone", value: "(+63) 927-973-1850" },
                { icon: MapPin, label: "Location", value: "Nueva Ecija, Philippines" },
                { icon: Clock, label: "Availability", value: "Full-time / Part-time / Contract" },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={0.2 + i * 0.1}>
                  <div className="flex gap-4 items-center">
                    <item.icon className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[2px]">
                        {item.label.toUpperCase()}
                      </p>
                      <p className="text-text">{item.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <ScrollReveal delay={0.3}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get("name");
                const email = data.get("email");
                const message = data.get("message");
                window.location.href = `mailto:santoscaroline123@yahoo.com?subject=Portfolio Inquiry from ${name}&body=${message}%0A%0AFrom: ${name} (${email})`;
              }}
              className="bg-surface border border-border p-8"
            >
              <div className="space-y-5">
                <div>
                  <label className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[2px] block mb-2">
                    YOUR NAME
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-bg border border-border text-text px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[2px] block mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-bg border border-border text-text px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[2px] block mb-2">
                    COMPANY (OPTIONAL)
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="w-full bg-bg border border-border text-text px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[2px] block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-bg border border-border text-text px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about the tasks you need help with..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-[family-name:var(--font-display)] bg-gold text-bg py-4 text-base tracking-[2px] hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,169,98,0.3)]"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
