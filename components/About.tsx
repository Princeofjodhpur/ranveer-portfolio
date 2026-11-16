"use client";

import { useInView } from "react-intersection-observer";
import { resumeData } from "@/data/resume";
import { MapPin, Mail, Phone, Shield, Zap, Target } from "lucide-react";

const { personal } = resumeData;

const highlights = [
  {
    icon: Zap,
    title: "Automation First",
    desc: "Building robust, maintainable test automation frameworks from day one.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
  {
    icon: Shield,
    title: "Quality Guardian",
    desc: "Catching critical bugs before they reach production through comprehensive test coverage.",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
  },
  {
    icon: Target,
    title: "Precision Testing",
    desc: "Identifying edge cases and corner scenarios that others miss.",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
                About Me
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                Passionate About{" "}
                <span className="gradient-text">Software Quality</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                {personal.summary}
              </p>
              <p className="text-white/50 leading-relaxed">
                I believe that quality is not just about finding bugs — it&apos;s
                about understanding the product deeply, collaborating with teams
                effectively, and building confidence in every release. My
                approach combines rigorous manual testing with intelligent
                automation to ensure comprehensive coverage.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                {
                  Icon: Mail,
                  label: personal.email,
                  href: `mailto:${personal.email}`,
                },
                {
                  Icon: Phone,
                  label: personal.phone,
                  href: `tel:${personal.phone}`,
                },
                { Icon: MapPin, label: personal.location, href: undefined },
              ].map(({ Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-primary-400" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-white/60 hover:text-primary-400 transition-colors text-sm"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-white/60 text-sm">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, title, desc, color, bg }, idx) => (
              <div
                key={title}
                className={`glass rounded-xl p-6 border flex items-start gap-4 card-glow glass-hover ${bg} transition-all duration-300`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}
                >
                  <Icon size={22} className={color} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            {/* Quick facts */}
            <div className="glass rounded-xl p-6 border border-white/8">
              <h4 className="text-white/40 text-xs font-mono tracking-widest uppercase mb-4">
                Quick Facts
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ["🎓", "M.Tech Graduate"],
                  ["🏠", "Jodhpur, Rajasthan"],
                  ["💼", "6+ Years Exp"],
                  ["🌐", "Open to Remote"],
                ].map(([icon, fact]) => (
                  <div
                    key={fact}
                    className="flex items-center gap-2 text-white/60"
                  >
                    <span>{icon}</span>
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
