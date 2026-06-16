import type { NavLink } from "@/types";

export const SITE_CONFIG = {
  name: "Manoj Kumar",
  title: "AI Engineer | Full Stack Developer | Frontend Developer",
  email: "itsmanojkumar04@gmail.com",
  phone: "+91 7619438280",
  whatsapp: "https://wa.me/917619438280",
  linkedin: "https://www.linkedin.com/in/manoj-kumar-software-developer",
  github: "https://github.com/itsmanojkumar",
  calendly: "https://calendly.com/manojkumar",
  resumeUrl: "/resume/manoj-kumar-resume.pdf",
  location: "Bangalore, India",
  tagline: "I build AI-powered products that drive revenue, reduce costs, and scale businesses.",
  description:
    "Premium AI Engineer & Full Stack Developer specializing in Generative AI, AI Agents, SaaS platforms, and high-converting digital products for startups and enterprises.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "AI Showcase", href: "#ai-showcase" },
  { label: "Skills", href: "#skills" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO_ROLES = [
  "AI Engineer",
  "Full Stack Developer",
  "Frontend Architect",
  "AI Consultant",
  "Generative AI Developer",
];

export const CLIENT_LOGOS = [
  "TechStart",
  "HealthAI",
  "PropLux",
  "CodeTikki",
  "SaaSify",
  "AutoFlow",
];

export const BUDGET_OPTIONS = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const PROJECT_TYPE_OPTIONS = [
  { value: "ai-development", label: "AI Development" },
  { value: "ai-agents", label: "AI Agent Development" },
  { value: "full-stack", label: "Full Stack Development" },
  { value: "saas", label: "SaaS Development" },
  { value: "frontend", label: "Frontend Development" },
  { value: "automation", label: "Workflow Automation" },
  { value: "consulting", label: "AI Consulting" },
  { value: "other", label: "Other" },
];
