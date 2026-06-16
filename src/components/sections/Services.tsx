"use client";

import {
  Brain, Bot, Layers, Cloud, Palette, BarChart3,
  Webhook, Zap, Sparkles, Cog,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { SectionHeading, GlassCard } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { useTilt } from "@/hooks/useTilt";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain, Bot, Layers, Cloud, Palette, BarChart3,
  Webhook, Zap, Sparkles, Cog,
};

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const tiltRef = useTilt(8);
  const Icon = iconMap[service.icon] || Brain;

  return (
    <ScrollReveal delay={index * 0.05}>
      <div ref={tiltRef} className="h-full transition-transform duration-300" style={{ transformStyle: "preserve-3d" }}>
        <GlassCard className="h-full group cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:from-violet-600/30 group-hover:to-cyan-600/30 transition-all">
            <Icon className="text-violet-400" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
            {service.title}
          </h3>
          <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{service.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {service.features.map((feature) => (
              <span key={feature} className="text-xs px-2 py-1 rounded-md bg-white/5 text-zinc-400">
                {feature}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 text-violet-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more <ArrowRight size={14} />
          </div>
        </GlassCard>
      </div>
    </ScrollReveal>
  );
}

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-transparent" />
      <div className="container-custom px-6 relative">
        <SectionHeading
          badge="Services"
          title="What I Build For You"
          subtitle="End-to-end solutions from AI agents to full-stack platforms — engineered for business impact."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
