export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  heroGradient: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  features: string[];
  businessImpact: string;
  roi: string;
  github?: string;
  liveDemo?: string;
  caseStudy?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  results: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "ai" | "devops";
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface ClientResult {
  id: string;
  label: string;
  value: string;
  subValue?: string;
  type: "generated" | "saved" | "reduced" | "improved";
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
  responsibilities: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AIShowcase {
  id: string;
  title: string;
  description: string;
  icon: string;
  workflow: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget: string;
  projectType: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}
