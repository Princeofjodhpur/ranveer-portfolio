"use client";

import { useInView } from "react-intersection-observer";
import { resumeData } from "@/data/resume";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  MapPin,
  ArrowRight,
} from "lucide-react";

const { personal } = resumeData;

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    description: "Send me an email anytime",
    color: "from-blue-600 to-blue-400",
    glow: "hover:shadow-blue-500/20",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: personal.phone,
    href: personal.whatsapp,
    description: "Chat on WhatsApp",
    color: "from-green-600 to-green-400",
    glow: "hover:shadow-green-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect professionally",
    href: personal.linkedin,
    description: "Let's connect on LinkedIn",
    color: "from-blue-700 to-blue-500",
    glow: "hover:shadow-blue-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: personal.github,
    description: "Check out my repositories",
    color: "from-gray-700 to-gray-500",
    glow: "hover:shadow-gray-500/20",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-accent-500/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            I&apos;m actively looking for new opportunities. Whether you have a
            question, a project, or just want to say hi — my inbox is always
            open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Contact methods */}
          <div className="space-y-4">
            {contactMethods.map(
              ({ icon: Icon, label, value, href, description, color, glow }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 glass rounded-xl border border-white/8 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${glow} hover:border-white/15`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-white font-semibold text-sm mt-0.5 truncate">
                      {value}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">{description}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all flex-shrink-0"
                  />
                </a>
              )
            )}
          </div>

          {/* Right: CTA + Map info */}
          <div className="space-y-6">
            {/* Open to work card */}
            <div className="animated-border glass rounded-2xl p-8 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center mx-auto text-4xl shadow-2xl shadow-primary-500/30">
                🚀
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Open to Opportunities
                </div>
                <h3 className="text-white font-bold text-2xl">
                  Let&apos;s Build Quality Together
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Looking for QA Engineer, Automation Tester, or SDET roles.
                  Open to full-time positions, contract work, and remote
                  opportunities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  Send Email
                </a>
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-green-500/30 text-green-400 hover:bg-green-500/10 font-semibold transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Location info */}
            <div className="glass rounded-xl p-5 border border-white/8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary-400" />
              </div>
              <div>
                <p className="text-white/40 text-xs">Location</p>
                <p className="text-white/80 font-medium">{personal.location}</p>
                <p className="text-white/40 text-xs mt-0.5">
                  IST (UTC+5:30) · Open to Remote Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
