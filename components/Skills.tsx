"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { resumeData } from "@/data/resume";

const { skills } = resumeData;

const categories = [
  {
    id: "automation",
    label: "Automation",
    emoji: "🤖",
    data: skills.automation,
    type: "bar",
  },
  {
    id: "api",
    label: "API Testing",
    emoji: "🔗",
    data: skills.api,
    type: "bar",
  },
  {
    id: "programming",
    label: "Programming",
    emoji: "💻",
    data: skills.programming,
    type: "bar",
  },
  {
    id: "tools",
    label: "DevOps & Tools",
    emoji: "🛠️",
    data: skills.tools,
    type: "bar",
  },
  {
    id: "testing",
    label: "Testing Skills",
    emoji: "✅",
    data: skills.testing,
    type: "tags",
  },
];

type SkillItem = { name: string; level: number };

function SkillBar({
  skill,
  delay,
  visible,
}: {
  skill: SkillItem;
  delay: number;
  visible: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white/80 text-sm font-medium">{skill.name}</span>
        <span className="text-primary-400 text-sm font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full skill-bar transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("automation");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="py-24 bg-dark-900 relative">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
            Technical Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A comprehensive toolkit built over years of professional QA engineering
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                  : "glass border border-white/5 text-white/50 hover:text-white hover:border-white/15"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div className="glass rounded-2xl p-8 border border-white/8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">{active.emoji}</span>
            <div>
              <h3 className="text-white font-bold text-xl">{active.label}</h3>
              <p className="text-white/40 text-sm">
                {active.type === "bar"
                  ? `${(active.data as SkillItem[]).length} skills tracked`
                  : `${(active.data as string[]).length} competencies`}
              </p>
            </div>
          </div>

          {active.type === "bar" ? (
            <div className="space-y-5">
              {(active.data as SkillItem[]).map((skill, idx) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={idx * 100}
                  visible={inView}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {(active.data as string[]).map((skill, idx) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl glass border border-white/8 text-white/70 text-sm font-medium hover:border-primary-500/40 hover:text-primary-300 hover:bg-primary-500/5 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${idx * 30}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Skill level legend */}
        <div className="flex justify-center gap-6 mt-8 text-xs text-white/30 font-mono">
          {[
            { label: "Expert", range: "90-100%" },
            { label: "Advanced", range: "75-89%" },
            { label: "Intermediate", range: "60-74%" },
          ].map(({ label, range }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span>
                {label} ({range})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

