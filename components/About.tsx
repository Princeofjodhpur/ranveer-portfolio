"use client";

import { useInView } from "react-intersection-observer";
import { resumeData } from "@/data/resume";
import { Mail, Phone, ShieldCheck, Bot, Layers, CheckCircle2 } from "lucide-react";

const { personal } = resumeData;

const EXPERT_PILLARS = [
  {
    icon: Bot,
    title: "AI-Augmented QA & Autonomous Agents",
    desc: "Spearheading low-code AI workflows with n8n to automate defect classification, triage stack traces, and trigger self-healing regression suites.",
    color: "text-accent-400",
    bg: "bg-accent-500/10 border-accent-500/20",
  },
  {
    icon: Layers,
    title: "Enterprise Framework Engineering",
    desc: "Designing scalable Playwright & Selenium WebDriver frameworks with PyTest, Page Object Model (POM), and distributed multi-browser parallelization.",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Fintech & Insurance Domain Authority",
    desc: "Extensive hands-on validation of mission-critical financial transactions, 3D secure payment gateways, policy underwriting, and JMeter stress limits.",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-600/5 to-transparent pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-primary-400 font-mono text-xs uppercase tracking-widest">
                Executive Profile
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Engineering <span className="gradient-text">Uncompromising Quality</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                {personal.summary}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                As a QA Lead with 6+ years across insurance, fintech, and enterprise e-commerce platforms, I bridge the gap between engineering velocity and rock-solid reliability. My test frameworks are built for scale: reducing regression overhead by up to 60%, enforcing automated CI/CD quality gates, and empowering cross-functional squads to ship with 100% confidence.
              </p>
            </div>

            {/* Quick Contact & Verification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl glass border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-primary-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-white/40 text-[10px] uppercase font-mono">Email Direct</p>
                  <a href={`mailto:${personal.email}`} className="text-xs text-white/80 hover:text-primary-400 font-medium truncate block">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl glass border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-white/40 text-[10px] uppercase font-mono">WhatsApp &amp; Phone</p>
                  <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xs text-white/80 hover:text-green-400 font-medium block">
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Expert Pillars (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {EXPERT_PILLARS.map(({ icon: Icon, title, desc, color, bg }, idx) => (
              <div
                key={title}
                className={`glass rounded-2xl p-6 border flex items-start gap-4 card-glow glass-hover ${bg} transition-all duration-300`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}>
                  <Icon size={22} className={color} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1.5">{title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            {/* Quick Accreditation Box */}
            <div className="glass rounded-2xl p-5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                <CheckCircle2 size={16} className="text-primary-400" />
                <span>ISTQB Certified • Springer Published (2024) • ISRO Research Alumni</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
