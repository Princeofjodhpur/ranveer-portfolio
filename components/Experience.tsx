"use client";

import { useInView } from "react-intersection-observer";
import { resumeData } from "@/data/resume";
import { Briefcase, Calendar, MapPin, ChevronRight, Award, GraduationCap, CheckCircle2 } from "lucide-react";

const { experience, education, certifications } = resumeData;

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-accent-500/5 to-transparent pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-400 font-mono text-xs uppercase tracking-widest">
            Leadership &amp; Career Track
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
            6+ years spearheading QA initiatives, building test automation architecture, and mentoring high-performance testing squads.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Guide Line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-primary-500 via-primary-500/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row gap-6 md:gap-8 transition-all duration-500"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Timeline Icon Node */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/25 flex-shrink-0 z-10 border border-white/20">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>

                {/* Main Card */}
                <div className="flex-1 glass rounded-2xl p-6 sm:p-8 border border-white/10 card-glow glass-hover group">
                  {/* Top Bar: Role, Company, Dates & Domain */}
                  <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-xl sm:text-2xl group-hover:text-primary-300 transition-colors">
                          {job.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary-500/15 border border-primary-500/30 text-primary-300 text-xs font-mono font-medium">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-primary-400 font-semibold text-lg">
                        {job.company}
                      </p>
                      <p className="text-white/40 text-xs font-mono mt-0.5">
                        Domain: <span className="text-white/70">{job.domain}</span>
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1.5 text-xs">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-300 font-mono">
                        <Calendar size={13} />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/40">
                        <MapPin size={13} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact Highlight Pill */}
                  <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-semibold">
                    <CheckCircle2 size={14} className="flex-shrink-0" />
                    <span>Key Impact: {job.impact}</span>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 mb-6">
                    {job.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 group/item">
                        <ChevronRight
                          size={16}
                          className="text-primary-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform"
                        />
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed group-hover/item:text-white transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-white/40 text-xs font-mono mr-1">Stack:</span>
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Credentials Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
          {/* Academic Background */}
          <div className="glass rounded-2xl p-7 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <GraduationCap size={22} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Academic Qualifications</h3>
                <p className="text-white/40 text-xs">Computer Science &amp; Engineering</p>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="pb-5 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-white font-semibold text-sm sm:text-base">{edu.degree}</h4>
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-mono">
                      {edu.badge}
                    </span>
                  </div>
                  <p className="text-primary-300 text-xs">{edu.institution}</p>
                  <p className="text-white/40 text-xs mt-0.5">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prestigious Credentials */}
          <div className="glass rounded-2xl p-7 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                <Award size={22} className="text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Certifications &amp; Achievements</h3>
                <p className="text-white/40 text-xs">Peer-Reviewed &amp; Global Standards</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex items-start gap-3"
                >
                  <span className="text-2xl mt-0.5">{cert.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-white font-semibold text-xs sm:text-sm">{cert.name}</p>
                      <span className="text-primary-400 text-[11px] font-mono font-medium">{cert.year}</span>
                    </div>
                    <p className="text-white/50 text-xs mt-0.5">{cert.issuer}</p>
                    <p className="text-green-400 text-[11px] font-mono mt-1 font-medium">{cert.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
