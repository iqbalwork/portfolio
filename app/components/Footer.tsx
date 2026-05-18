"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.04] bg-background/50 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Subtitle */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-1.5 text-lg font-bold text-white font-plus">
            <span className="h-2 w-2 rounded-full bg-kmp-gradient" />
            <span>Uziro</span>
          </div>
          <p className="text-xs text-zinc-500 font-sans mt-0.5">
            Android Engineer &bull; Kotlin Multiplatform Enthusiast
          </p>
        </div>

        {/* Middle: Copyright */}
        <div className="text-zinc-500 text-xs text-center md:text-right font-sans">
          <p>&copy; {new Date().getFullYear()} Iqbal Fauzi. All rights reserved.</p>
          <p className="mt-1 text-[10px] text-zinc-600">
            Handcrafted with Next.js, React, Tailwind CSS v4, and &hearts;.
          </p>
        </div>

        {/* Right: Scroll to Top & Quick Socials */}
        <div className="flex items-center gap-4">
          {/* Scroll to Top */}
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] text-zinc-400 hover:text-white hover:border-kmp-purple/30 hover:bg-kmp-purple/5 transition-all duration-300 group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
}
