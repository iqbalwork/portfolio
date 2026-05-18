"use client";

import { ArrowRight, MessageSquare, Download, Sparkles, ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Ambient Background Meshes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow Orb 1 - Purple */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-kmp-purple/15 blur-[120px] animate-pulse-slow" />
        {/* Glow Orb 2 - Pink */}
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[380px] h-[380px] rounded-full bg-kmp-pink/10 blur-[130px] animate-float" />
        {/* Glow Orb 3 - Orange */}
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-kmp-orange/8 blur-[100px] animate-float-delayed" />
        
        {/* Mesh Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-8">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-kmp-purple/20 bg-kmp-purple/5 text-xs font-semibold tracking-wider text-kmp-purple/90 uppercase animate-float">
          <Sparkles className="w-3.5 h-3.5 text-kmp-orange animate-pulse" />
          <span>Android &amp; Kotlin Multiplatform Engineer</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-zinc-400 font-semibold tracking-wide text-lg font-plus">
            👋 HELLO, WELCOME!
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] font-plus">
            I'm <span className="text-gradient">Iqbal Fauzi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 font-plus mt-2">
            Android Engineer &bull; Kotlin Multiplatform Enthusiast
          </h2>
        </div>

        {/* Summary Description */}
        <p className="max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed font-sans">
          I'm a senior software engineer based in{" "}
          <span className="text-white font-medium">Bandung, Indonesia</span>. With over{" "}
          <span className="text-white font-medium">7+ years of experience</span> designing, scaling, and modernizing native Android and cross-platform shared-logic apps. I love crafting clean architectural modules, enhancing crash-free app reliability to 99%, and diving deep into Kotlin Multiplatform.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          {/* WhatsApp Me */}
          <a
            href="https://wa.me/6287822882668?text=Hi%20Iqbal,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-kmp-gradient text-white font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(127,82,255,0.4)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Download CV */}
          <a
            href="cv-iqbal-fauzi.pdf"
            download
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-zinc-300 font-semibold transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-sm"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator (Moved outside of relative flex div to prevent overlapping CTA buttons) */}
      <a
        href="#about"
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors duration-300 group hidden md:flex z-20"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest font-plus">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-zinc-500 group-hover:text-zinc-300" />
      </a>
    </section>
  );
}
