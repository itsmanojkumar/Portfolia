"use client";

import {
  Bot, Network, Database, MessageSquare, Workflow,
  FileSearch, Sparkles, ArrowRight, type LucideIcon,
} from "lucide-react";
import { AI_SHOWCASES } from "@/data/content";
import { SectionHeading, GlassCard } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Bot, Network, Database, MessageSquare, Workflow, FileSearch, Sparkles,
};

function WorkflowDiagram({ steps, title }: { steps: string[]; title: string }) {
  return (
    <div className="mt-4">
      <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Workflow</p>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="text-xs px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20 whitespace-nowrap">
              {step}
            </span>
            {i < steps.length - 1 && (
              <ArrowRight size={12} className="text-zinc-600 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AIShowcase() {
  return (
    <section id="ai-showcase" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      <div className="container-custom px-6 relative">
        <SectionHeading
          badge="AI Showcase"
          title="Intelligent Systems I Build"
          subtitle="From autonomous agents to RAG pipelines — production-grade AI architectures that solve real problems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_SHOWCASES.map((item, i) => {
            const Icon = iconMap[item.icon] || Bot;
            return (
              <ScrollReveal key={item.id} delay={i * 0.08}>
                <GlassCard className="h-full group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-600/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-violet-300" size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  <WorkflowDiagram steps={item.workflow} title={item.title} />
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mt-12 glass rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">End-to-End AI Architecture</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-2xl mx-auto">
              From data ingestion to intelligent output — I design and implement complete AI pipelines
              that integrate seamlessly with your existing systems.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
              {["Data Layer", "Embedding", "Vector DB", "LLM", "API Gateway", "Frontend", "Analytics"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600/20 to-cyan-600/20 text-violet-300 border border-violet-500/20">
                    {step}
                  </span>
                  {i < 6 && <ArrowRight size={14} className="text-zinc-600 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
