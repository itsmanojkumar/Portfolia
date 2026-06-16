"use client";

import {
  Building2, Brain, Code2, Zap, Target, Gauge, Handshake,
  type LucideIcon,
} from "lucide-react";
import { WHY_HIRE_ME } from "@/data/content";
import { SectionHeading, GlassCard } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2, Brain, Code2, Zap, Target, Gauge, Handshake,
};

export function WhyHireMe() {
  return (
    <section className="section-padding relative">
      <div className="container-custom px-6">
        <SectionHeading
          badge="Why Hire Me"
          title="The Developer Who Thinks Like a Founder"
          subtitle="I don't just write code — I build products that generate revenue, reduce costs, and scale businesses."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {WHY_HIRE_ME.map((item, i) => {
            const Icon = iconMap[item.icon] || Brain;
            return (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <GlassCard className="text-center group h-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-violet-400" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-cyan-600/10" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to build something <span className="gradient-text">extraordinary</span>?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Let&apos;s discuss your project and create a solution that drives real business results.
                Free 30-minute consultation — no strings attached.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">
                    Get Free Consultation <ArrowRight size={18} />
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="#projects">View Case Studies</a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
