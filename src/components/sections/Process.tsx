"use client";

import {
  Search, Map, Layout, Code2, TestTube2, Rocket,
  TrendingUp, Headphones, type LucideIcon,
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Search, Map, Layout, Code2, TestTube2, Rocket, TrendingUp, Headphones,
};

export function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      <div className="container-custom px-6 relative">
        <SectionHeading
          badge="Development Process"
          title="How I Deliver Excellence"
          subtitle="A proven 8-step process that ensures quality, transparency, and on-time delivery."
        />

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/50 via-cyan-600/50 to-transparent md:-translate-x-px" />

          <div className="space-y-8">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon] || Code2;
              const isEven = i % 2 === 0;

              return (
                <ScrollReveal key={step.id} delay={i * 0.08}>
                  <div className={`relative flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      {isEven && (
                        <div className="glass rounded-2xl p-6 inline-block text-left max-w-md ml-auto">
                          <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                          <p className="text-zinc-400 text-sm">{step.description}</p>
                        </div>
                      )}
                    </div>

                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center glow-violet">
                        <Icon className="text-white" size={24} />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#030014] border border-violet-500/30 flex items-center justify-center text-xs text-violet-300 font-bold">
                        {i + 1}
                      </span>
                    </div>

                    <div className={`flex-1 pl-24 md:pl-0 ${!isEven ? "md:text-right" : ""}`}>
                      <div className={`glass rounded-2xl p-6 max-w-md ${isEven ? "md:hidden" : "md:ml-auto md:text-left"}`}>
                        <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                        <p className="text-zinc-400 text-sm">{step.description}</p>
                      </div>
                      {!isEven && (
                        <div className="glass rounded-2xl p-6 max-w-md hidden md:block">
                          <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                          <p className="text-zinc-400 text-sm">{step.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
