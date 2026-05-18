"use client";

import { Calendar, Briefcase, ChevronRight } from "lucide-react";

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  isLatest: boolean;
}

function TimelineItem({ role, company, period, description, skills, isLatest }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-12 group">
      {/* Connector Line Marker */}
      <div className="absolute left-0 top-1.5 flex items-center justify-center z-10">
        <div className={`w-5 h-5 rounded-full border-4 border-background flex items-center justify-center transition-all duration-300 ${
          isLatest 
            ? "bg-gradient-to-br from-kmp-purple to-kmp-pink scale-110 shadow-[0_0_12px_rgba(127,82,255,0.6)]" 
            : "bg-zinc-800 border-zinc-700 group-hover:bg-kmp-purple group-hover:border-background"
        }`}>
          {isLatest && <div className="w-1 h-1 rounded-full bg-white animate-ping" />}
        </div>
      </div>

      {/* Experience Details Card */}
      <div className="p-6 rounded-2xl glass-panel relative border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight font-plus">
              {role}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <Briefcase className="w-4 h-4 text-kmp-purple" />
              <span className="text-sm font-semibold text-zinc-300 font-plus">
                {company}
              </span>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] text-xs font-semibold text-zinc-300 self-start md:self-auto font-plus">
            <Calendar className="w-3.5 h-3.5 text-kmp-pink" />
            <span>{period}</span>
          </div>
        </div>

        {/* bullet points of achievements */}
        <ul className="flex flex-col gap-3 text-sm text-zinc-400 leading-relaxed font-sans mb-6">
          {description.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <ChevronRight className="w-4 h-4 text-kmp-orange mt-0.5 shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags used in the role */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded text-[11px] font-bold text-zinc-400 bg-zinc-900 border border-zinc-800/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      role: "Android Engineer",
      company: "PT Bobobox Mitra Indonesia",
      period: "Mar 2020 - Present",
      description: [
        "Led re-architecture of Bobobox App from MVP to MVVM and single to multi-module layout, improving performance metrics (8.5/10.0 NPS score and 60K MAUs).",
        "Implemented comprehensive crash monitoring with Firebase Crashlytics to proactively resolve production bugs, raising app stability to 99.9%.",
        "Engineered secure IoT features (MQTT protocol) enabling smart pods door, locks, and lighting controls directly from the app.",
        "Initiated early Kotlin Multiplatform (KMP) cross-platform shared-logic adoption and reduced Map feature costs by 50%.",
        "Mentored junior engineers, established team charters, and trained the QA team in Maestro Automation Testing."
      ],
      skills: ["Kotlin", "Jetpack Compose", "MVVM Core", "MQTT IoT Protocol", "Kotlin Multiplatform (KMP)", "Firebase Crashlytics", "Maestro Auto Testing", "GraphQL"],
      isLatest: true,
    },
    {
      role: "Senior Android Engineer Consultant (Part-Time)",
      company: "PT Al Qosbah Inovasi Digital",
      period: "Oct 2021 - Nov 2023",
      description: [
        "Strategized key architectural developments resulting in a 99% bug reduction within 3 months, scaling app to 200K MAUs inside a year.",
        "Consulted and built complex Quran Verse canvas highlight widgets involving spatial coordinate calculations (X & Y mapping based on device resolution) for a responsive layout.",
        "Designed robust background service strategies for accurate prayer times using Work Manager and Alarm Manager for resource efficiency."
      ],
      skills: ["Android SDK", "Custom Canvas Calculations", "Work Manager", "Alarm Manager", "Background Processing", "SQLite", "Performance Opt"],
      isLatest: false,
    },
    {
      role: "Android Engineer",
      company: "PT Jasamedika Saranatama",
      period: "Feb 2019 - Mar 2020",
      description: [
        "Engineered healthcare and emergency response applications (Buku Dokter, PSC 119) from scratch utilizing multi-module architecture and Koin dependency injection.",
        "Integrated Mapbox routing APIs for real-time emergency dispatch ambulance navigation inside PSC 119.",
        "Migrated legacy Java codebases to Kotlin, accelerating development cycles, and enhanced corporate HRIS performance."
      ],
      skills: ["Android SDK", "Kotlin", "Java", "Mapbox SDK", "Koin DI", "Retrofit", "REST APIs", "Room DB"],
      isLatest: false,
    },
    {
      role: "Junior Android Engineer",
      company: "PT Kinest Kreatif Ideata",
      period: "Oct 2018 - Dec 2018",
      description: [
        "Developed custom internal HRIS Android tool implementing modular design principles and core Android architectures.",
        "Applied dependency injection and integrated REST APIs via Retrofit for reliable background client-server data synchronization."
      ],
      skills: ["Android SDK", "Java", "Dependency Injection", "Retrofit", "REST APIs", "Git Version Control"],
      isLatest: false,
    },
  ];

  return (
    <section id="experience" className="relative py-24 border-t border-white/[0.04] bg-background">
      {/* Ambient background glow */}
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-kmp-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 text-left">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-6 rounded bg-kmp-gradient" />
            <span className="text-xs font-extrabold tracking-widest text-zinc-500 uppercase font-plus">
              02 / CAREER EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-plus">
            My Professional <span className="text-gradient">Timeline</span>
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/[0.06] flex flex-col gap-12 ml-2 md:ml-4">
          {experiences.map((exp, idx) => (
            <TimelineItem
              key={idx}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              skills={exp.skills}
              isLatest={exp.isLatest}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
