"use client";

import { TRUST_STATS, ACHIEVEMENTS } from "@/data/stats";
import { CLIENT_LOGOS } from "@/lib/constants";
import { useCountUp } from "@/hooks/useCountUp";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Award, CheckCircle2 } from "lucide-react";

function StatCard({ label, value, suffix, prefix }: { label: string; value: number; suffix?: string; prefix?: string }) {
  const { ref, count } = useCountUp({ end: value });

  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center hover:border-violet-500/20 transition-all duration-300">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-zinc-400">{label}</div>
    </div>
  );
}

export function Trust() {
  return (
    <section className="section-padding relative">
      <div className="container-custom px-6">
        <SectionHeading
          badge="Trust & Credibility"
          title="Proven Track Record"
          subtitle="Numbers that speak louder than words. Real results from real projects."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {TRUST_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <StatCard {...stat} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass rounded-2xl p-8 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-violet-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Professional Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((achievement) => (
                <div key={achievement} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                  <span className="text-zinc-400 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {CLIENT_LOGOS.map((logo) => (
                <span key={logo} className="text-xl font-semibold text-zinc-600 hover:text-zinc-400 transition-colors">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
