import type { Skill } from "@/types";

export const SKILLS: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 92, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "FastAPI", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 87, category: "backend" },
  { name: "LangChain", level: 90, category: "ai" },
  { name: "OpenAI", level: 92, category: "ai" },
  { name: "AI Agents", level: 88, category: "ai" },
  { name: "RAG", level: 90, category: "ai" },
  { name: "Generative AI", level: 93, category: "ai" },
  { name: "Docker", level: 82, category: "devops" },
  { name: "AWS", level: 80, category: "devops" },
];

export const SKILL_CATEGORIES = [
  { id: "frontend", label: "Frontend", color: "from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", color: "from-emerald-500 to-teal-500" },
  { id: "ai", label: "AI & ML", color: "from-violet-500 to-purple-500" },
  { id: "devops", label: "DevOps", color: "from-orange-500 to-amber-500" },
] as const;
