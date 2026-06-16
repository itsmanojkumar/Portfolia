"use client";

import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeading, GlassCard } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Star, Quote, Clock, MessageSquare, ArrowRight } from "lucide-react";

function PendingState() {
  return (
    <ScrollReveal>
      <GlassCard hover={false} className="max-w-2xl mx-auto text-center py-12 px-8">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 flex items-center justify-center mb-6">
          <Clock className="text-violet-400" size={28} />
        </div>
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-amber-300/90 border border-amber-500/20">
          Pending
        </span>
        <h3 className="text-xl font-semibold text-white mb-3">Client testimonials coming soon</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          Real feedback from founders and teams will be added here as projects wrap up.
          No placeholder reviews — only verified client stories.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="#contact">
              <MessageSquare size={16} /> Work with me
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#projects">
              View projects <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}

export function Testimonials() {
  const hasTestimonials = TESTIMONIALS.length > 0;

  return (
    <section className="section-padding relative">
      <div className="container-custom px-6">
        <SectionHeading
          badge="Testimonials"
          title="What Clients Say"
          subtitle={
            hasTestimonials
              ? "Hear from the founders and leaders I've worked with."
              : "Verified client stories will appear here — no filler content."
          }
        />

        {hasTestimonials ? (
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <ScrollReveal key={testimonial.id} delay={i * 0.1}>
                <GlassCard className="h-full relative">
                  <Quote className="absolute top-6 right-6 text-violet-500/20" size={40} />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-sm font-bold text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-zinc-500 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-emerald-400 font-medium">
                      Results: {testimonial.results}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <PendingState />
        )}
      </div>
    </section>
  );
}
