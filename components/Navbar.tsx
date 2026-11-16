"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Metrics", href: "#metrics" },
  { label: "Architecture", href: "#architecture" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-dark-900/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-bold text-base sm:text-lg tracking-tight group flex items-center gap-1.5"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
          >
  
            <span className="gradient-text font-black">
              Ranveer Singh Sankhala
            </span>
            <span className="text-primary-400/80 font-mono text-xs ml-1 px-1.5 py-0.5 rounded bg-primary-500/10 border border-primary-500/20">
              .QA
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {activeSection === item.href.slice(1) && (
                  <span className="absolute inset-0 bg-white/5 rounded-lg" />
                )}
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Ranveer_Singh_Sankhala_QA_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-dark-900/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 glass border-l border-white/5 flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.href.slice(1)
                    ? "bg-primary-600/20 text-primary-400"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <a
              href="/resume.pdf"
              download="Ranveer_Singh_Sankhala_QA_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium transition-all"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

