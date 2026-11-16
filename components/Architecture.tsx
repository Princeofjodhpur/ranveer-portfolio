"use client";

import { useInView } from "react-intersection-observer";
import { GitBranch, Server, Cpu, ShieldCheck, Bot, Zap, Check } from "lucide-react";

const PIPELINE_STAGES = [
  {
    step: "01",
    name: "Shift-Left Trigger",
    icon: GitBranch,
    tools: "GitHub / GitLab CI",
    description: "PR branch webhooks trigger isolated containerized test environments instantly.",
    highlight: "Zero Dev-to-QA Lag",
  },
  {
    step: "02",
    name: "Distributed Engine",
    icon: Cpu,
    tools: "Playwright & PyTest",
    description: "Multi-threaded parallel browser matrix (Chromium, WebKit, Firefox) with POM design.",
    highlight: "60% Faster Runs",
  },
  {
    step: "03",
    name: "API & SLA Gates",
    icon: Server,
    tools: "Postman & JMeter",
    description: "Contract testing, schema validation & 1,500+ virtual user load stress benchmarks.",
    highlight: "99.99% Reliability",
  },
  {
    step: "04",
    name: "AI Triaging & n8n",
    icon: Bot,
    tools: "n8n + AI Agents",
    description: "Autonomous error stack trace analysis, auto-bug filing in Jira, and flaky test auto-healing.",
    highlight: "8s Triage Time",
  },
  {
    step: "05",
    name: "Zero-Defect Release",
    icon: ShieldCheck,
    tools: "Allure + Slack Ops",
    description: "Automated executive quality gates. Only verified code reaches production pipelines.",
    highlight: "0 Critical Escapes",
  },
];

const CORE_PRINCIPLES = [
  {
    title: "Shift-Left Quality Culture",
    desc: "Integrating static analysis, unit test coverage, and API contracts directly into early sprint cycles rather than waiting for staging.",
  },
  {
    title: "Flaky-Test Elimination",
    desc: "Smart auto-wait locators, dynamic polling, and isolated test state management to guarantee 99%+ test suite determinism.",
  },
  {
    title: "Continuous Performance Baselines",
    desc: "Every major release undergoes automated JMeter regression to catch memory leaks, database lockouts, and latency regressions.",
  },
  {
    title: "AI-Augmented QA Ops",
    desc: "Leveraging n8n low-code workflows and AI agents to convert production logs into automated test cases and instant defect reports.",
  },
];

export default function Architecture() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="architecture" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-500/30 text-primary-400 text-xs font-mono uppercase tracking-widest">
            <Zap size={13} className="text-primary-400 animate-pulse" />
            <span>Enterprise Blueprint</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Enterprise QA &amp; <span className="gradient-text">Automation Architecture</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base">
            How I architect scalable, resilient test systems that catch defects early and enable high-velocity, zero-downtime releases.
          </p>
        </div>

        {/* Pipeline Flow Visualization */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {PIPELINE_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="glass rounded-2xl p-5 border border-white/10 card-glow hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-primary-400 font-bold bg-primary-500/10 px-2 py-0.5 rounded">
                        {stage.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-primary-500/10 border border-white/10 group-hover:border-primary-500/30 flex items-center justify-center transition-colors">
                        <Icon size={18} className="text-primary-400" />
                      </div>
                    </div>

                    <h3 className="text-white font-bold text-base mb-1 group-hover:text-primary-300 transition-colors">
                      {stage.name}
                    </h3>
                    <p className="text-xs text-primary-400 font-mono mb-2">{stage.tools}</p>
                    <p className="text-xs text-white/50 leading-relaxed mb-4">{stage.description}</p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-green-400">
                    <Check size={12} />
                    <span>{stage.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Architectural Principles */}
        <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10 relative">
          <div className="max-w-3xl mb-8">
            <span className="text-primary-400 font-mono text-xs uppercase tracking-widest">
              QA Leadership Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Quality Built-In by Design, Not as an Afterthought
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {CORE_PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{principle.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{principle.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
