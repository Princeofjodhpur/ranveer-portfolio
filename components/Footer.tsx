"use client";

import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail, MessageCircle, Heart } from "lucide-react";

const { personal } = resumeData;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-black">
              <span className="gradient-text">RSS</span>
              <span className="text-white/20 text-sm font-mono ml-1">.QA</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              QA Automation Engineer passionate about delivering bug-free software through precision testing.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white/60 text-xs font-mono uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/40 hover:text-primary-400 text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs font-mono uppercase tracking-widest mb-4">
              Reach Out
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-white/40 hover:text-primary-400 text-sm transition-colors"
              >
                <Mail size={14} />
                {personal.email}
              </a>
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-green-400 text-sm transition-colors"
              >
                <MessageCircle size={14} />
                {personal.phone}
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              {[
                { Icon: Github, href: personal.github, label: "GitHub", hover: "hover:text-purple-400" },
                { Icon: Linkedin, href: personal.linkedin, label: "LinkedIn", hover: "hover:text-blue-400" },
                { Icon: Mail, href: `mailto:${personal.email}`, label: "Email", hover: "hover:text-green-400" },
              ].map(({ Icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg glass border border-white/5 flex items-center justify-center text-white/30 ${hover} transition-all hover:scale-110 hover:border-white/15`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-sm">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-white/25 text-sm flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-400" fill="currentColor" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

