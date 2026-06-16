"use client";

import { EXPERIENCE } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-transparent" />
      <div className="container-custom px-6 relative">
        <SectionHeading
          badge="Experience"
          title="Professional Journey"
          subtitle="Building impactful products and growing with innovative teams."
        />

        <div className="max-w-3xl mx-auto">
          {EXPERIENCE.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 relative">
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-violet-600 to-cyan-600 rounded-full" />

                <div className="pl-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Briefcase className="text-violet-400" size={20} />
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                    <span className="text-violet-300 font-medium">{exp.company}</span>
                    <span className="text-zinc-500">{exp.period}</span>
                    {exp.location && (
                      <span className="text-zinc-500 flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-zinc-400">
                          <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-1.5" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
