"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Mail, MessageCircle, Link, Code2, Calendar,
  Send, CheckCircle2, Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SITE_CONFIG, BUDGET_OPTIONS, PROJECT_TYPE_OPTIONS } from "@/lib/constants";
import { submitContactForm } from "@/lib/api";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const socialLinks = [
  { icon: Mail, label: "Email", href: `mailto:${SITE_CONFIG.email}`, color: "hover:text-violet-400" },
  { icon: MessageCircle, label: "WhatsApp", href: SITE_CONFIG.whatsapp, color: "hover:text-emerald-400" },
  { icon: Link, label: "LinkedIn", href: SITE_CONFIG.linkedin, color: "hover:text-blue-400" },
  { icon: Code2, label: "GitHub", href: SITE_CONFIG.github, color: "hover:text-white" },
  { icon: Calendar, label: "Calendly", href: SITE_CONFIG.calendly, color: "hover:text-cyan-400" },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => reset(),
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-[#020010]" />
      <div className="container-custom px-6 relative">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Great"
          subtitle="Have a project in mind? Let's discuss how I can help you achieve your goals."
        />

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Whether you need an AI solution, a full-stack platform, or a frontend overhaul —
                  I&apos;m here to help. Reach out through any channel below.
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 glass rounded-xl p-4 text-zinc-400 ${link.color} transition-all hover:border-violet-500/20`}
                  >
                    <link.icon size={20} />
                    <div>
                      <p className="text-sm font-medium text-white">{link.label}</p>
                      <p className="text-xs text-zinc-500">
                        {link.label === "Email" ? SITE_CONFIG.email : `Connect on ${link.label}`}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass rounded-xl p-6 border border-violet-500/20">
                <p className="text-violet-300 text-sm font-medium mb-2">Free Consultation</p>
                <p className="text-zinc-400 text-sm">
                  Book a free 30-minute call to discuss your project requirements and get a tailored proposal.
                </p>
                <Button className="mt-4 w-full" asChild>
                  <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer">
                    <Calendar size={16} /> Schedule Now
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your name" className="mt-2" {...register("name")} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="you@company.com" className="mt-2" {...register("email")} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your company name" className="mt-2" {...register("company")} />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label>Budget *</Label>
                  <Select onValueChange={(v) => setValue("budget", v)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUDGET_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget.message}</p>}
                </div>
                <div>
                  <Label>Project Type *</Label>
                  <Select onValueChange={(v) => setValue("projectType", v)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROJECT_TYPE_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" placeholder="Tell me about your project..." className="mt-2" {...register("message")} />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={mutation.isPending}>
                {mutation.isPending ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : mutation.isSuccess ? (
                  <><CheckCircle2 size={18} /> Message Sent!</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </Button>

              {mutation.isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-sm text-center"
                >
                  Thank you! I&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
