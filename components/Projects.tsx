"use client";

import { useInView } from "react-intersection-observer";
import { resumeData } from "@/data/resume";
import { ExternalLink, ChevronRight } from "lucide-react";

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
        <div className="text-center mb-14 space-y-4">
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real-world automation projects demonstrating quality engineering expertise
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl overflow-hidden border border-white/8 card-glow group transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Card header */}
              <div className="p-6 bg-gradient-to-br from-primary-600/10 to-accent-500/5 border-b border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{project.icon}</span>
                  <ExternalLink
                    size={16}
                    className="text-white/20 group-hover:text-primary-400 transition-colors"
                  />
                </div>
                <h3 className="text-white font-bold text-xl leading-tight group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-5">
                <p className="text-white/55 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key highlights */}
                <div className="space-y-2">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-sm">
                      <ChevronRight
                        size={14}
                        className="text-green-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-white/60">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-primary-500/10 border border-primary-500/20 text-primary-300"
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
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm mb-4">
            More projects available on GitHub
          </p>
          <a
            href={resumeData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-primary-500/40 text-white/70 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            View GitHub Profile
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

