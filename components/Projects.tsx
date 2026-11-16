"use client";

import { useInView } from "react-intersection-observer";
import { resumeData } from "@/data/resume";
import { ExternalLink, ChevronRight, Github, Sparkles } from "lucide-react";

const { projects } = resumeData;

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 bg-dark-900 relative">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary-500/30 text-primary-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles size={13} className="text-primary-400" />
            <span>Architectural Engineering</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Featured <span className="gradient-text">QA Projects &amp; Frameworks</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
            Mission-critical automation frameworks, autonomous AI triage workflows, and high-concurrency API performance suites.
          </p>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass rounded-3xl overflow-hidden border border-white/10 card-glow group transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col justify-between"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Card Header */}
              <div className="p-7 bg-gradient-to-br from-primary-600/15 via-white/[0.02] to-transparent border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{project.icon}</span>
                  <span className="px-3 py-1 rounded-full bg-primary-500/15 border border-primary-500/30 text-primary-300 text-xs font-mono font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-6 flex-1 flex flex-col justify-between">
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Architectural Highlights */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-primary-400 font-semibold">
                    Engineering Deliverables:
                  </h4>
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <ChevronRight
                        size={15}
                        className="text-green-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-white/80">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-primary-300 group-hover:border-primary-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 flex flex-col items-center gap-3">
          <p className="text-white/40 text-xs font-mono">
            Explore more automated repositories &amp; open-source contributions
          </p>
          <a
            href={resumeData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-primary-500/40 text-white/80 hover:text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/20"
          >
            <Github size={16} />
            <span>GitHub Repositories</span>
            <ExternalLink size={14} className="text-white/40" />
          </a>
        </div>
      </div>
    </section>
  );
}
