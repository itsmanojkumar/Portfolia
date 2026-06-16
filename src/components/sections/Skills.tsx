"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS, SKILL_CATEGORIES } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { cn } from "@/lib/utils";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-zinc-300">{name}</span>
        <span className="text-sm text-violet-400 font-medium">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.25, 0.4, 0.25, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-600"
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom px-6">
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Technologies"
          subtitle="A deep toolkit spanning frontend, backend, AI, and DevOps — built through real production experience."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === "all"
                ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
                : "glass text-zinc-400 hover:text-white"
            )}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
                  : "glass text-zinc-400 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8">
              {filteredSkills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => {
                const catSkills = SKILLS.filter((s) => s.category === cat.id);
                const avgLevel = Math.round(
                  catSkills.reduce((sum, s) => sum + s.level, 0) / catSkills.length
                );
                return (
                  <div key={cat.id} className="glass rounded-2xl p-6 text-center group hover:border-violet-500/20 transition-all">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${cat.color} opacity-20 group-hover:opacity-30 transition-opacity mb-4 flex items-center justify-center`}>
                      <span className="text-2xl font-bold gradient-text">{avgLevel}%</span>
                    </div>
                    <h4 className="text-white font-medium">{cat.label}</h4>
                    <p className="text-zinc-500 text-xs mt-1">{catSkills.length} technologies</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
