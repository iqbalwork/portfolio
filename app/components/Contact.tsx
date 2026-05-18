"use client";

import { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    // Simulate form submission to backend/email
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status back to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-white/[0.04] bg-background">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-kmp-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-kmp-orange/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 text-left mb-16">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-6 rounded bg-kmp-gradient" />
            <span className="text-xs font-extrabold tracking-widest text-zinc-500 uppercase font-plus">
              04 / GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-plus">
            Let's Build Something <span className="text-gradient">Great</span>
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed mt-2 text-sm md:text-base">
            I am currently open to new opportunities, technical consultations, and collaborations. Whether you have a project idea, a KMP question, or just want to say hi, my inbox is always open!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quick Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Quick Card */}
            <a
              href="mailto:work.iqbalfauzi@gmail.com"
              className="group p-6 rounded-2xl glass-panel border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] flex items-start gap-4 transition-all duration-300"
            >
              <div className="p-3.5 rounded-xl bg-kmp-purple/5 border border-kmp-purple/20 text-kmp-purple group-hover:bg-kmp-purple/10 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold tracking-wide text-zinc-400 uppercase font-plus">
                  Email Me Direct
                </h4>
                <p className="text-white font-bold text-lg mt-1 font-plus group-hover:text-kmp-purple transition-colors duration-300">
                  work.iqbalfauzi@gmail.com
                </p>
                <p className="text-xs text-zinc-500 mt-1.5">
                  I typically respond within 24 hours.
                </p>
              </div>
            </a>

            {/* WhatsApp Quick Card */}
            <a
              href="https://wa.me/6287822882668?text=Hi%20Iqbal,%20I'd%20like%20to%20discuss%20a%20project%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl glass-panel border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] flex items-start gap-4 transition-all duration-300"
            >
              <div className="p-3.5 rounded-xl bg-kmp-pink/5 border border-kmp-pink/20 text-kmp-pink group-hover:bg-kmp-pink/10 transition-colors duration-300">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold tracking-wide text-zinc-400 uppercase font-plus">
                  Chat on WhatsApp
                </h4>
                <p className="text-white font-bold text-lg mt-1 font-plus group-hover:text-kmp-pink transition-colors duration-300">
                  +62 878-2288-2668
                </p>
                <p className="text-xs text-zinc-500 mt-1.5">
                  For rapid communication and quick catch-ups.
                </p>
              </div>
            </a>

            {/* Other Profiles Card */}
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col gap-4">
              <h4 className="text-xs font-extrabold tracking-wide text-zinc-500 uppercase font-plus">
                Connect Elsewhere
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/iqbalwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors duration-300 text-sm font-semibold w-full justify-center"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/iqbalfauzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors duration-300 text-sm font-semibold w-full justify-center"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass-panel relative border border-white/[0.04] bg-white/[0.01]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-400 tracking-wider uppercase font-plus">
                    Your Name <span className="text-kmp-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={status === "sending" || status === "success"}
                    className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-kmp-purple focus:ring-1 focus:ring-kmp-purple/35 transition-all text-sm disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-400 tracking-wider uppercase font-plus">
                    Your Email <span className="text-kmp-orange">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={status === "sending" || status === "success"}
                    className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-kmp-purple focus:ring-1 focus:ring-kmp-purple/35 transition-all text-sm disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold text-zinc-400 tracking-wider uppercase font-plus">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Collaborating on a project..."
                  disabled={status === "sending" || status === "success"}
                  className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-kmp-purple focus:ring-1 focus:ring-kmp-purple/35 transition-all text-sm disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-400 tracking-wider uppercase font-plus">
                  Message <span className="text-kmp-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, goals, or schedule..."
                  disabled={status === "sending" || status === "success"}
                  className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-kmp-purple focus:ring-1 focus:ring-kmp-purple/35 transition-all text-sm resize-none disabled:opacity-50"
                />
              </div>

              {/* Action Button & States */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`group flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold transition-all duration-300 text-sm ${
                  status === "success"
                    ? "bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-default"
                    : status === "sending"
                    ? "bg-zinc-800 cursor-wait"
                    : "bg-kmp-gradient hover:shadow-[0_0_20px_rgba(127,82,255,0.35)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                }`}
              >
                {status === "idle" && (
                  <>
                    <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
                {status === "sending" && (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-zinc-500 border-t-white animate-spin" />
                    <span>Sending Message...</span>
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span>Message Sent Successfully!</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
