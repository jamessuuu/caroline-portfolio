"use client";

import { useEffect, useRef, useCallback } from "react";

const LEAF_COLORS = [
  "#E8A0B0",
  "#C4737D",
  "#F5C6D0",
  "#D4919B",
  "#9CC5A0",
  "#F0B4BE",
];

const PARTICLE_COUNT = 18;
const CURSOR_RADIUS = 120;
const CURSOR_FORCE = 3;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseSpeed: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  shape: number; // 0=petal, 1=flower, 2=heart
  drift: number;
  driftPhase: number;
  opacity: number;
}

function drawPetal(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number,
  color: string,
  opacity: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.bezierCurveTo(size * 0.6, -size * 0.6, size * 0.5, size * 0.4, 0, size);
  ctx.bezierCurveTo(-size * 0.5, size * 0.4, -size * 0.6, -size * 0.6, 0, -size);
  ctx.fill();
  // vein
  ctx.strokeStyle = color;
  ctx.globalAlpha = opacity * 0.4;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.6);
  ctx.lineTo(0, size * 0.6);
  ctx.stroke();
  ctx.restore();
}

function drawFlower(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number,
  color: string,
  opacity: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = opacity;
  const petalCount = 5;
  for (let i = 0; i < petalCount; i++) {
    const angle = (Math.PI * 2 * i) / petalCount;
    ctx.save();
    ctx.rotate(angle);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(0, -size * 0.5, size * 0.3, size * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  // center
  ctx.fillStyle = color;
  ctx.globalAlpha = opacity * 0.9;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawHeart(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number,
  color: string,
  opacity: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(size / 12, size / 12);
  ctx.globalAlpha = opacity * 0.6;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 3);
  ctx.bezierCurveTo(-1, 1, -6, -2, -6, -5);
  ctx.bezierCurveTo(-6, -8, -3, -10, 0, -7);
  ctx.bezierCurveTo(3, -10, 6, -8, 6, -5);
  ctx.bezierCurveTo(6, -2, 1, 1, 0, 3);
  ctx.fill();
  ctx.restore();
}

const drawFns = [drawPetal, drawFlower, drawHeart];

function createParticle(width: number, height: number, startFromTop = false): Particle {
  return {
    x: Math.random() * width,
    y: startFromTop ? -20 : Math.random() * height,
    vx: 0,
    vy: 0,
    baseSpeed: 0.3 + Math.random() * 0.7,
    size: 8 + Math.random() * 10,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
    color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
    shape: Math.floor(Math.random() * 3),
    drift: 0.3 + Math.random() * 0.5,
    driftPhase: Math.random() * Math.PI * 2,
    opacity: 0.4 + Math.random() * 0.35,
  };
}

export default function FallingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Initialize particles
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(canvas.width, canvas.height, false)
    );

    const animate = () => {
      timeRef.current += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particlesRef.current) {
        // Gravity + drift
        p.vy += p.baseSpeed * 0.05;
        p.vy = Math.min(p.vy, p.baseSpeed * 1.5);
        p.vx += Math.sin(timeRef.current * 0.5 + p.driftPhase) * p.drift * 0.01;

        // Cursor repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_RADIUS && dist > 0) {
          const force = (1 - dist / CURSOR_RADIUS) * CURSOR_FORCE;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
          p.rotationSpeed += (Math.random() - 0.5) * 0.04;
        }

        // Friction
        p.vx *= 0.97;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Wrap around
        if (p.y > canvas.height + 30) {
          Object.assign(p, createParticle(canvas.width, canvas.height, true));
        }
        if (p.x < -40) p.x = canvas.width + 20;
        if (p.x > canvas.width + 40) p.x = -20;

        drawFns[p.shape](ctx, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleTouchMove, handleMouseLeave]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
