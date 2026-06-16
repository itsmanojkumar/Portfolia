"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, FileText, X, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SectionHeading, Badge } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <Badge>{project.category}</Badge>
            <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
            <p className="text-violet-300">{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-2" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className={`h-48 rounded-xl bg-gradient-to-br ${project.heroGradient} mb-6`} />

        <div className="space-y-6">
          <div>
            <h4 className="text-white font-medium mb-2">Problem</h4>
            <p className="text-zinc-400 text-sm">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Solution</h4>
            <p className="text-zinc-400 text-sm">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Architecture</h4>
            <div className="flex flex-wrap gap-2">
              {project.architecture.map((item) => (
                <span key={item} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300">{item}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20">{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <span key={feature} className="text-sm text-zinc-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <h4 className="text-emerald-400 text-sm font-medium mb-1">Business Impact</h4>
              <p className="text-white text-sm">{project.businessImpact}</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h4 className="text-cyan-400 text-sm font-medium mb-1">ROI</h4>
              <p className="text-white text-sm">{project.roi}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            {project.github && (
              <Button variant="secondary" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer"><Code2 size={16} /> GitHub</a>
              </Button>
            )}
            {project.liveDemo && (
              <Button size="sm" asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live Demo</a>
              </Button>
            )}
            {project.caseStudy && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.caseStudy}><FileText size={16} /> Case Study</a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: () => void }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className="group glass rounded-2xl overflow-hidden cursor-pointer hover:border-violet-500/30 transition-all duration-500"
        onClick={onSelect}
      >
        <div className={`h-48 bg-gradient-to-br ${project.heroGradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute top-4 left-4">
            <Badge>{project.category}</Badge>
          </div>
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <ArrowUpRight size={18} className="text-white" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-violet-300/80 text-sm mb-3">{project.subtitle}</p>
          <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.problem}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-md bg-white/5 text-zinc-400">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom px-6">
        <SectionHeading
          badge="Featured Projects"
          title="Work That Delivers Results"
          subtitle="Real projects with measurable business impact, built with cutting-edge technology."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
