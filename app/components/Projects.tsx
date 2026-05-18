import { Smartphone, PiggyBank, BookOpen, HeartPulse, UserCheck, ArrowUpRight } from "lucide-react";

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

interface ProjectItemProps {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  link: string;
  linkLabel: string;
  isExternal: boolean;
}

function ProjectCard({ title, category, description, icon, tags, link, linkLabel, isExternal }: ProjectItemProps) {
  return (
    <div className="relative group flex flex-col justify-between p-6 rounded-2xl glass-panel border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300 min-h-[380px]">
      {/* Accent Glowing Top Border on Hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl bg-kmp-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Category & Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase font-plus">
            {category}
          </span>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-zinc-400 group-hover:text-white group-hover:border-kmp-purple/30 group-hover:bg-kmp-purple/5 transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-kmp-gradient transition-all duration-300 font-plus inline-block">
          {title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
          {description}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-bold text-zinc-400 bg-zinc-900 border border-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white group-hover:text-kmp-purple transition-colors duration-300 font-plus"
        >
          <span>{linkLabel}</span>
          {isExternal ? (
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <GithubIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          )}
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Bobobox Mobile App",
      category: "IoT & Hospitality Tech",
      description: "Leading Android development for a tech-enabled accommodation platform. Focuses on designing and scaling mobile products serving thousands of daily active users, including complex IoT smartpod controls (doors, lighting, locks) directly via BLE & MQTT APIs.",
      icon: <Smartphone className="w-5 h-5" />,
      tags: ["Kotlin", "Jetpack Compose", "GraphQL", "MQTT", "BLE Core", "KMP Integration"],
      link: "https://play.google.com/store/apps/details?id=com.bobobox.bobobox",
      linkLabel: "View on Play Store",
      isExternal: true,
    },
    {
      title: "Talangraga Umroh App",
      category: "Islamic Finance / Savings",
      description: "A digital savings and ledger management application developed for Padepokan Talangraga to streamline collective Umroh travel savings program. Replaced manual spreadsheets with a secure, real-time transparent system for members and administrators.",
      icon: <PiggyBank className="w-5 h-5" />,
      tags: ["Android SDK", "Kotlin", "Firebase Auth", "Firestore DB", "Clean Arch"],
      link: "https://github.com/iqbalwork/talangraga-umroh-app",
      linkLabel: "View Code on GitHub",
      isExternal: false,
    },
    {
      title: "Quran Belajar Indonesia",
      category: "Educational Tech & Religion",
      description: "Modernized and stabilized the Quran Belajar application to improve usability. Engineered custom canvas-based ayah highlighter widgets alongside Prayer, Qibla compass, and floating Azan services, resulting in higher user ratings.",
      icon: <BookOpen className="w-5 h-5" />,
      tags: ["Android SDK", "Java", "Custom Canvas", "Location APIs", "SQLite DB"],
      link: "https://github.com/iqbalwork/quran-belajar-indonesia",
      linkLabel: "View Code on GitHub",
      isExternal: false,
    },
    {
      title: "PSC 119 Emergency & Buku Akademik",
      category: "Healthcare & Dispatch Services",
      description: "Built regional emergency response dispatch tools and healthcare applications (Buku Dokter) from scratch at PT Jasamedika Saranatama. Features real-time GPS emergency routing and rapid notification sync.",
      icon: <HeartPulse className="w-5 h-5" />,
      tags: ["Android SDK", "Java", "Google Maps SDK", "Location Services", "Room DB"],
      link: "https://github.com/iqbalwork/psc119-jasamedika",
      linkLabel: "View Code on GitHub",
      isExternal: false,
    },
    {
      title: "Simple HRIS Internal Tool",
      category: "Enterprise / HR Automation",
      description: "Gained foundational experience building custom internal Human Resources Information System (HRIS) tool for Kakatu. Features employee profile modules, attendance checkers, and modular data reporting.",
      icon: <UserCheck className="w-5 h-5" />,
      tags: ["Android SDK", "Java", "XML Layouts", "Git Flow", "Retrofit"],
      link: "https://github.com/iqbalwork/simple-hris-kakatu",
      linkLabel: "View Code on GitHub",
      isExternal: false,
    },
  ];

  return (
    <section id="projects" className="relative py-24 border-t border-white/[0.04] bg-background">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-kmp-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 text-left">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-6 rounded bg-kmp-gradient" />
            <span className="text-xs font-extrabold tracking-widest text-zinc-500 uppercase font-plus">
              03 / MY PORTFOLIO
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-plus">
            Recent Showcase <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              category={proj.category}
              description={proj.description}
              icon={proj.icon}
              tags={proj.tags}
              link={proj.link}
              linkLabel={proj.linkLabel}
              isExternal={proj.isExternal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
