"use client";

import { useRef, useEffect, useState } from "react";

export default function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = "",
  overlay = true,
}: {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = rect.top < windowHeight && rect.bottom > 0;
      if (visible) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((progress - 0.5) * speed * 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${offset}px) scale(1.15)` }}
      />
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, var(--color-bg) 30%, transparent), color-mix(in srgb, var(--color-bg) 60%, transparent))`,
          }}
        />
      )}
    </div>
  );
}
