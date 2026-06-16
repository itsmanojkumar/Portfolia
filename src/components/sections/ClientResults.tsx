"use client";

import { CLIENT_RESULTS } from "@/data/content";
import { SectionHeading, GlassCard } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { TrendingUp, DollarSign, Clock, Zap } from "lucide-react";

const typeIcons = {
  generated: DollarSign,
  saved: TrendingUp,
  reduced: Clock,
  improved: Zap,
};

const typeColors = {
  generated: "from-emerald-500 to-teal-500",
  saved: "from-blue-500 to-cyan-500",
  reduced: "from-violet-500 to-purple-500",
  improved: "from-orange-500 to-amber-500",
};

export function ClientResults() {
  return (
    <section id="results" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-transparent" />
      <div className="container-custom px-6 relative">
        <SectionHeading
          badge="Client Results"
          title="Measurable Business Impact"
          subtitle="Real numbers from real projects. Every line of code is written to drive business outcomes."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CLIENT_RESULTS.map((result, i) => {
            const Icon = typeIcons[result.type];
            const color = typeColors[result.type];
            return (
              <ScrollReveal key={result.id} delay={i * 0.1}>
                <GlassCard className="text-center group">
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 flex items-center justify-center mb-4 transition-opacity`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {result.value}
                  </div>
                  {result.subValue && (
                    <div className="text-sm text-cyan-400 mb-2">{result.subValue}</div>
                  )}
                  <div className="text-sm text-zinc-400">{result.label}</div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Impact Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Revenue Generated", pct: 85, color: "bg-emerald-500" },
                { label: "Cost Reduction", pct: 70, color: "bg-cyan-500" },
                { label: "Efficiency Gain", pct: 80, color: "bg-violet-500" },
                { label: "Client Retention", pct: 95, color: "bg-amber-500" },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                      <circle
                        cx="50" cy="50" r="40" fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${metric.pct * 2.51} 251`}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                      {metric.pct}%
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
