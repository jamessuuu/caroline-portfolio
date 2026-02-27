"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

      if (!accessKey || accessKey === "YOUR_KEY_HERE") {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} — Caroline Eduardo`);
        const body = encodeURIComponent(
          `${formData.message}\n\nFrom: ${formData.name} (${formData.email})${formData.company ? `\nCompany: ${formData.company}` : ""}`
        );
        window.location.href = `mailto:santoscaroline123@yahoo.com?subject=${subject}&body=${body}`;
        setStatus("idle");
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio Inquiry from ${formData.name} — Caroline Eduardo`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Decorative gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at bottom, color-mix(in srgb, var(--color-gold) 5%, transparent), transparent 70%)` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <div>
            <ScrollReveal>
              <p className="font-[family-name:var(--font-display)] text-gold text-sm tracking-[6px] mb-4">
                LET&apos;S START
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-text leading-tight mb-6">
                Your Inbox Is Waiting. So Am I.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-muted text-lg italic leading-relaxed mb-10">
                Tell me what&apos;s taking up too much of your time. Whether it&apos;s
                emails, scheduling, or documentation &mdash; I&apos;ll take it off
                your plate so you can focus on growing your business.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "santoscaroline123@yahoo.com" },
                { icon: Phone, label: "Phone", value: "(+63) 927-973-1850" },
                { icon: MapPin, label: "Location", value: "Nueva Ecija, Philippines" },
                { icon: Clock, label: "Availability", value: "Full-time / Part-time / Contract" },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={0.2 + i * 0.1}>
                  <div className="flex gap-4 items-center group">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[2px]">
                        {item.label.toUpperCase()}
                      </p>
                      <p className="text-text font-medium">{item.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <ScrollReveal delay={0.3}>
            {status === "success" ? (
              <div className="bg-surface border border-gold p-8 flex flex-col items-center justify-center min-h-[400px] text-center gap-4 rounded-2xl">
                <div className="relative">
                  <CheckCircle className="w-14 h-14 text-gold" />
                  <Heart className="w-5 h-5 text-gold absolute -top-1 -right-1 animate-bounce" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-text tracking-wider">
                  MESSAGE SENT
                </h3>
                <p className="text-text-muted italic max-w-sm">
                  Thank you for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 font-[family-name:var(--font-display)] text-gold text-sm tracking-[2px] border border-gold px-6 py-2 rounded-full hover:bg-gold hover:text-cta-text transition-all duration-300"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-surface border border-border p-8 rounded-2xl">
                <div className="space-y-5">
                  <div>
                    <label className="font-[family-name:var(--font-display)] text-text-dim text-xs tracking-[2px] block mb-2">
                      YOUR NAME
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-bg border border-border text-text px-4 py-3 text-sm rounded-lg focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,115,125,0.15)] transition-all"
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-bg border border-border text-text px-4 py-3 text-sm rounded-lg focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,115,125,0.15)] transition-all"
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
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-bg border border-border text-text px-4 py-3 text-sm rounded-lg focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,115,125,0.15)] transition-all"
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
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-bg border border-border text-text px-4 py-3 text-sm rounded-lg focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(196,115,125,0.15)] transition-all resize-none"
                      placeholder="Tell me about the tasks you need help with..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span className="italic">Something went wrong. Please try again or email me directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full font-[family-name:var(--font-display)] bg-gold text-cta-text py-4 text-base tracking-[2px] rounded-lg hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(196,115,125,0.3)] disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    <span className="relative z-10">
                      {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
