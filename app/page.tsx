import NavHeader from "./components/NavHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-kmp-purple/30 selection:text-white">
      {/* Global Glowing Mesh Orbs (Fixed behind pages) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Glow Orb 1 - Deep Purple Right Mid */}
        <div className="absolute top-[35%] right-0 w-[450px] h-[450px] rounded-full bg-kmp-purple/8 blur-[150px] opacity-70 pointer-events-none" />
        
        {/* Glow Orb 2 - Deep Pink Left Bottom */}
        <div className="absolute bottom-[20%] left-[-100px] w-[500px] h-[500px] rounded-full bg-kmp-pink/5 blur-[160px] opacity-60 pointer-events-none" />
      </div>

      {/* Main Single Page Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Navigation */}
        <NavHeader />

        {/* Scrollable Page Sections */}
        <main className="flex-grow flex flex-col">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
