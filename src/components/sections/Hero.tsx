"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_ROLES, SITE_CONFIG } from "@/lib/constants";
import { useEffect, useState } from "react";

const ThreeBackground = dynamic(
  () => import("@/components/effects/ThreeBackground").then((m) => m.ThreeBackground),
  { ssr: false }
);

function TypewriterRoles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = HERO_ROLES[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % HERO_ROLES.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="gradient-text">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-[#030014]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <ThreeBackground />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container-custom relative z-10 px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-violet-300 mb-6 border border-violet-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{SITE_CONFIG.name}</span>
            </h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-300 mb-6 h-12">
              <TypewriterRoles />
            </div>

            <p className="text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed">
              {SITE_CONFIG.tagline} I help startups, SaaS companies, and enterprises build
              AI-powered products that generate revenue and scale effortlessly.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" asChild>
                <a href="#contact">
                  Hire Me <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer">
                  <Calendar size={18} /> Book a Call
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">
                  <FolderOpen size={18} /> View Projects
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={SITE_CONFIG.resumeUrl} download>
                  <Download size={18} /> Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["RS", "PP", "AM"].map((initials) => (
                    <div key={initials} className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-xs font-bold text-white border-2 border-[#030014]">
                      {initials}
                    </div>
                  ))}
                </div>
                <span>Trusted by 15+ clients</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">⭐ 5.0 Rating</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-cyan-600/30 rounded-3xl blur-2xl animate-pulse-glow" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl glass-strong gradient-border overflow-hidden animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-5xl font-bold text-white mb-4 glow-violet">
                      MK
                    </div>
                    <p className="text-white font-semibold text-lg">{SITE_CONFIG.name}</p>
                    <p className="text-violet-300 text-sm">AI Engineer & Developer</p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 text-sm"
              >
                <span className="text-emerald-400 font-medium">AI Expert</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 text-sm"
              >
                <span className="text-cyan-400 font-medium">Full Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
