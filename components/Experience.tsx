"use client";

import { useInView } from "react-intersection-observer";
import { resumeData } from "@/data/resume";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const { experience } = resumeData;

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
        <div className="text-center mb-14 space-y-4">
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Building quality software through hands-on experience in diverse testing environments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className={`relative flex gap-8 transition-all duration-500`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 flex-shrink-0 z-10">
                    <Briefcase size={22} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass rounded-2xl p-8 border border-white/8 card-glow glass-hover group">
                  {/* Header */}
                  <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1 group-hover:text-primary-300 transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-primary-400 font-semibold text-lg">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm">
                        <Calendar size={12} />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/40 text-sm">
                        <MapPin size={12} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {job.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 group/item">
                        <ChevronRight
                          size={16}
                          className="text-primary-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-0.5 transition-transform"
                        />
                        <p className="text-white/60 text-sm leading-relaxed group-hover/item:text-white/80 transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education + Certifications row */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {/* Education */}
          <div className="glass rounded-2xl p-6 border border-white/8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="text-white font-bold text-lg">Education</h3>
            </div>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="text-white font-semibold">{edu.degree}</h4>
                <p className="text-primary-400 text-sm">{edu.field}</p>
                <p className="text-white/50 text-sm">{edu.institution}</p>
                <div className="flex gap-3 mt-2">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-white/40 text-xs">
                    {edu.year}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-xs">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="glass rounded-2xl p-6 border border-white/8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="text-white font-bold text-lg">Certifications</h3>
            </div>
            <div className="space-y-4">
              {resumeData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0"
                >
                  <span className="text-xl">{cert.icon}</span>
                  <div>
                    <p className="text-white/80 text-sm font-medium">
                      {cert.name}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">
                      {cert.issuer} · {cert.year}
                    </p>
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

