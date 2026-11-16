"use client";

import { useInView } from "react-intersection-observer";
import { TrendingUp, ShieldAlert, Award, Clock, Cpu, CheckCircle } from "lucide-react";

const ROI_METRICS = [
  {
    value: "60%",
    label: "Regression Cycle Reduction",
    sub: "Reduced from 4 days to 4.5 hours via Playwright parallelization & PyTest distributed runners.",
    icon: Clock,
    color: "from-blue-500 to-cyan-400",
  },
  {
    value: "99.96%",
    label: "Release Stability Rate",
    sub: "Fintech & insurance core transactions validated with automated pre-flight sanity gates.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-400",
  },
  {
    value: "1,800+",
    label: "Automated Test Scenarios",
    sub: "Covering UI flows, REST API contracts, 3D secure checkout, and policy quote engines.",
    icon: Cpu,
    color: "from-purple-500 to-violet-400",
  },
  {
    value: "0.00%",
    label: "Critical Escaped Defects",
    sub: "Zero P0/P1 production incidents on modules backed by automated regression pipelines.",
    icon: ShieldAlert,
    color: "from-amber-500 to-yellow-400",
  },
];

const COMPLIANCE_BADGES = [
  "ISTQB Certified Foundation Level",
  "PCI-DSS & Financial Concurrency Ready",
  "Insurance Actuarial QA Validation",
  "Springer Published Researcher (2024)",
  "Ex-ISRO Image Processing Intern",
  "Agile / Scrum Certified Delivery",
];

export default function Metrics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="metrics" className="py-20 bg-dark-800/60 relative border-y border-white/5">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14 space-y-3">
          <span className="text-primary-400 font-mono text-xs uppercase tracking-widest">
            Executive Impact &amp; ROI
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Measurable Engineering <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            Real enterprise numbers driven across 6+ years of QA leadership in Fintech, Insurance &amp; E-commerce.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ROI_METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass rounded-2xl p-6 border border-white/10 card-glow hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-primary-400">
                    <Icon size={20} />
                  </div>
                  <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2 font-mono`}>
                    {item.value}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.label}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance & Standards Bar */}
        <div className="glass rounded-2xl p-6 border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <Award className="text-primary-400" size={18} />
            <span>Standards &amp; Accreditation:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {COMPLIANCE_BADGES.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:border-primary-500/30 hover:text-white transition-colors"
              >
                <CheckCircle size={11} className="text-green-400" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

