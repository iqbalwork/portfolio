"use client";

import { Award, ShieldAlert, Users, Code, Smartphone, Database, Wrench } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  glowColor: string;
}

function StatCard({ icon, value, label, glowColor }: StatCardProps) {
  return (
    <div className="relative group p-6 rounded-2xl glass-panel text-left flex items-start gap-4 hover:-translate-y-1">
      {/* Glow Hover Backing */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 blur-xl -z-10 bg-gradient-to-br ${glowColor}`} />
      
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-zinc-300 group-hover:text-white group-hover:border-white/10 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-extrabold tracking-tight text-white font-plus">
          {value}
        </h3>
        <p className="text-zinc-400 text-sm font-medium mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  gradient: string;
}

function SkillCategory({ title, icon, skills, gradient }: SkillCategoryProps) {
  return (
    <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-5">
        <div className={`p-2.5 rounded-lg text-white bg-gradient-to-br ${gradient}`}>
          {icon}
        </div>
        <h4 className="text-lg font-bold text-white tracking-wide font-plus">
          {title}
        </h4>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-300 bg-white/[0.03] border border-white/[0.04] group-hover:border-white/[0.08] group-hover:text-white hover:bg-white/[0.08] transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-kmp-purple" />,
      value: "7+ Years",
      label: "Professional Android Engineering",
      glowColor: "from-kmp-purple/10 to-transparent",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-kmp-pink" />,
      value: "99%+",
      label: "Application Crash-Free Reliability Rate",
      glowColor: "from-kmp-pink/10 to-transparent",
    },
    {
      icon: <Users className="w-6 h-6 text-kmp-orange" />,
      value: "Millions",
      label: "Active Users Served Globally",
      glowColor: "from-kmp-orange/10 to-transparent",
    },
  ];

  const skillGroups = [
    {
      title: "Mobile Stacks & KMP",
      icon: <Smartphone className="w-5 h-5" />,
      skills: [
        "Kotlin",
        "Java",
        "Swift",
        "Kotlin Multiplatform",
        "Compose Multiplatform",
        "Jetpack Compose",
        "Coroutines & Flow",
        "Hilt / Koin / Dagger2",
        "Room / SQLDelight",
        "MVI / MVVM / MVP",
      ],
      gradient: "from-kmp-purple to-kmp-pink",
    },
    {
      title: "Backend & Cloud",
      icon: <Database className="w-5 h-5" />,
      skills: [
        "RESTful APIs",
        "GraphQL Integration",
        "KTOR client",
        "Firebase Services",
        "MQTT IoT Protocol",
        "Push Notifications",
        "Strapi / FastAPI",
      ],
      gradient: "from-kmp-pink to-kmp-orange",
    },
    {
      title: "Testing & Optimization",
      icon: <Code className="w-5 h-5" />,
      skills: [
        "JUnit / Mockito",
        "Maestro UI Auto",
        "Espresso / TDD",
        "A/B Testing",
        "Performance Opt",
        "App Stability (99.9%)",
        "Mobile Security",
      ],
      gradient: "from-kmp-purple to-kmp-orange",
    },
    {
      title: "Tools & Leadership",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        "Git / GitHub / GitLab",
        "CI/CD Integration",
        "Gradle Build System",
        "Jira & Scrum",
        "Technical Leadership",
        "Developer Mentorship",
      ],
      gradient: "from-zinc-700 to-zinc-800",
    },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-white/[0.04] bg-background">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-kmp-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 text-left">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-6 rounded bg-kmp-gradient" />
            <span className="text-xs font-extrabold tracking-widest text-zinc-500 uppercase font-plus">
              01 / ABOUT ME
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-plus">
            Engineering High-Quality <span className="text-gradient">Mobile Experiences</span>
          </h2>
        </div>

        {/* Biography Block & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6 text-zinc-400 leading-relaxed font-sans text-base">
            <p>
              I am an <strong className="text-white font-medium">Android Engineer and Kotlin Multiplatform (KMP) Enthusiast</strong> with over seven years of professional experience building, deploying, and optimizing complex applications. My coding journey revolves around delivering high-performance, maintainable mobile architectures that scale seamlessly.
            </p>
            <p>
              Currently, my primary focus is pioneering the adoption of <span className="text-white font-medium">Kotlin Multiplatform</span> to unify business logic across Android, iOS, and the web, enabling teams to ship features faster while retaining maximum native capabilities and performance.
            </p>
            <p>
              Over the years, I have collaborated with dynamic, remote cross-functional squads to successfully modernize applications, migrating legacy codebases to Jetpack Compose, optimizing Bluetooth/IoT integrations, and setting up automated CI/CD deployment flows that drive robust 99%+ crash-free stability.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            {stats.map((stat, idx) => (
              <StatCard
                key={idx}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                glowColor={stat.glowColor}
              />
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-col gap-8 mt-4">
          <h3 className="text-xl font-bold text-white tracking-wide font-plus flex items-center gap-2">
            <span>Core Technical Stack</span>
            <span className="text-zinc-600 font-mono text-sm font-normal">(What I build with)</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, idx) => (
              <SkillCategory
                key={idx}
                title={group.title}
                icon={group.icon}
                skills={group.skills}
                gradient={group.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
