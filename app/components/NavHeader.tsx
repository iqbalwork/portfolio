"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavLink({ href, label, active, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
        active
          ? "text-white"
          : "text-zinc-400 hover:text-zinc-100"
      }`}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-kmp-gradient rounded-full" />
      )}
    </a>
  );
}

export default function NavHeader() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Set up scroll listener for background styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section finder
      const sections = navItems.map((item) => document.getElementById(item.id));
      let currentSection = "home";

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 border-b border-white/[0.05] backdrop-blur-md py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="group relative flex items-center gap-1.5 text-xl font-bold tracking-tight text-white font-plus"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-kmp-gradient animate-pulse" />
          <span>Uziro</span>
          <span className="text-xs font-semibold text-kmp-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            .kmp
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 font-plus ${
                activeSection === item.id
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-kmp-gradient rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Social Icons & Contact CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/iqbalwork"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/[0.05] bg-white/[0.02] text-zinc-400 hover:text-white hover:border-kmp-purple/30 hover:bg-kmp-purple/10 transition-all duration-300"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/iqbalfauzi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/[0.05] bg-white/[0.02] text-zinc-400 hover:text-white hover:border-kmp-pink/30 hover:bg-kmp-pink/10 transition-all duration-300"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/6287822882668"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-kmp-purple/30 bg-kmp-purple/5 text-zinc-300 hover:text-white hover:bg-kmp-purple/20 transition-all duration-300 text-xs font-semibold"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Chat</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 md:hidden text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-x-0 top-[73px] bg-background/95 border-b border-white/[0.05] backdrop-blur-lg transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 h-[340px]"
            : "opacity-0 -translate-y-4 h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 py-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-lg font-medium transition-colors font-plus ${
                activeSection === item.id ? "text-gradient font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="h-[1px] bg-white/[0.05] my-2" />
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/iqbalwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/iqbalfauzi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/6287822882668"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-kmp-purple"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
