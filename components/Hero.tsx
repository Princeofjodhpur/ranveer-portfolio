"use client";

import { useEffect, useRef } from "react";
import { Download, Mail, Linkedin, Github, ChevronDown, ArrowRight } from "lucide-react";
import { resumeData } from "@/data/resume";

const { personal, stats } = resumeData;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.02;
          p.vy += (dy / dist) * force * 0.02;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const ddx = p.x - p2.x;
          const ddy = p.y - p2.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - d / 100) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-animated bg-grid"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/20 text-primary-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </div>

            {/* Name + Title */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="text-white block">
                  {personal.name.split(" ")[0]}
                </span>
                <span className="text-white block">
                  {personal.name.split(" ")[1]}
                </span>
                <span className="gradient-text-animated block">
                  {personal.name.split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-primary-500 to-transparent" />
                <p className="text-primary-400 font-mono text-sm tracking-widest uppercase">
                  QA Lead | AI Automation Engineer
                </p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              {personal.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download="Ranveer_Singh_Sankhala_QA_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download Resume
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <button
                onClick={handleContact}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-primary-500/40 text-white/80 hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-sm">Connect:</span>
              {[
                {
                  Icon: Linkedin,
                  href: personal.linkedin,
                  label: "LinkedIn",
                  color: "hover:text-blue-400",
                },
                {
                  Icon: Github,
                  href: personal.github,
                  label: "GitHub",
                  color: "hover:text-purple-400",
                },
                {
                  Icon: Mail,
                  href: `mailto:${personal.email}`,
                  label: "Email",
                  color: "hover:text-green-400",
                },
              ].map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-lg glass border border-white/5 text-white/40 ${color} transition-all duration-200 hover:border-white/20 hover:scale-110`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Stats + Visual */}
          <div className="space-y-6 lg:pl-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Code-style card */}
            <div className="glass rounded-2xl p-6 border border-white/8 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-white/20 text-xs ml-2">ranveer.ts</span>
              </div>
              <div className="space-y-1 text-white/60">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">engineer</span>{" "}
                  <span className="text-white/40">=</span>{" "}
                  <span className="text-yellow-400">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">name</span>
                  <span className="text-white/40">: </span>
                  <span className="text-orange-300">&quot;Ranveer Singh&quot;</span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">role</span>
                  <span className="text-white/40">: </span>
                  <span className="text-orange-300">&quot;QA Lead &amp; AI Workflow Engineer&quot;</span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">expertise</span>
                  <span className="text-white/40">: [</span>
                  <span className="text-orange-300">&quot;Playwright&quot;</span>
                  <span className="text-white/40">, </span>
                  <span className="text-orange-300">&quot;Selenium&quot;</span>
                  <span className="text-white/40">, </span>
                  <span className="text-orange-300">&quot;n8n AI&quot;</span>
                  <span className="text-white/40">],</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">experience</span>
                  <span className="text-white/40">: </span>
                  <span className="text-cyan-400">6</span>
                  <span className="text-white/40">, </span>
                  <span className="text-white/30">{"// years"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">certified</span>
                  <span className="text-white/40">: </span>
                  <span className="text-orange-300">&quot;ISTQB Foundation Level ✅&quot;</span>
                </div>
                <div>
                  <span className="text-yellow-400">{"}"}</span>
                  <span className="text-white/40">;</span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass rounded-xl p-5 border border-white/5 text-center group hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-1">{stat.icon}</div>
                  <div className="text-3xl font-black gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 animate-bounce">
          <span className="text-xs font-mono tracking-wider">scroll</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}
