"use client";

import { useEffect, useRef } from "react";
import { Download, Mail, Linkedin, Github, ChevronDown, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { resumeData } from "@/data/resume";
import InteractiveTerminal from "@/components/InteractiveTerminal";

const { personal } = resumeData;

const TECH_BADGES = [
  "Playwright",
  "Selenium",
  "PyTest",
  "Jenkins CI/CD",
  "n8n AI Agents",
  "Postman API",
  "JMeter Load",
  "Python",
];

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

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
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
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const force = (160 - dist) / 160;
          p.vx += (dx / dist) * force * 0.025;
          p.vy += (dy / dist) * force * 0.025;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        particles.slice(i + 1).forEach((p2) => {
          const ddx = p.x - p2.x;
          const ddy = p.y - p2.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - d / 110) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

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

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-animated bg-grid pt-24 pb-16"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Atmospheric Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7 animate-fade-in">
            {/* Executive Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-primary-500/30 text-primary-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-semibold text-white/90">QA LEAD</span>
              <span className="text-white/30">•</span>
              <span className="text-primary-300">AUTOMATION &amp; AI WORKFLOW ARCHITECT</span>
              <span className="text-white/30">•</span>
              <span className="text-green-400 font-bold">6+ YRS EXP</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                <span className="text-white block">Ranveer Singh</span>
                <span className="gradient-text-animated block">Sankhala</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-400 font-medium tracking-tight flex items-center gap-2">
                <ShieldCheck size={20} className="text-primary-400" />
                <span>ISTQB Certified • Fintech &amp; Insurance QA Specialist</span>
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-sans">
              Senior QA Lead engineering robust <strong className="text-white">Playwright &amp; Selenium</strong> automation frameworks, CI/CD pipeline quality gates, and autonomous <strong className="text-white">n8n AI Agents</strong> for self-healing defect triaging. Dedicated to 0 critical defects in high-concurrency production environments.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {TECH_BADGES.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white/80 hover:border-primary-500/40 hover:text-primary-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/resume.pdf"
                download="Ranveer_Singh_Sankhala_QA_Resume.pdf"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                <Download size={17} />
                <span>Download Executive Resume</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass border border-green-500/40 text-green-400 hover:bg-green-500/10 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Direct</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass border border-white/10 hover:border-primary-500/40 text-white/80 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={17} />
                <span>Email</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center gap-4 pt-1 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span>Jodhpur, Rajasthan (Open to Remote Worldwide)</span>
              </span>
              <span className="text-white/20">|</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <InteractiveTerminal />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 text-white/30 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-1 text-xs font-mono hover:text-white transition-colors">
            <span>EXPLORE PROFILE</span>
            <ChevronDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
