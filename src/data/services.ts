import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "ai-development",
    title: "AI Development",
    description: "Custom AI solutions powered by LLMs, machine learning, and intelligent automation.",
    icon: "Brain",
    features: ["LLM Integration", "Custom Models", "AI Pipelines", "Smart Analytics"],
  },
  {
    id: "ai-agents",
    title: "AI Agent Development",
    description: "Autonomous AI agents that execute complex workflows and make intelligent decisions.",
    icon: "Bot",
    features: ["Multi-Agent Systems", "Tool Calling", "Memory Systems", "Agent Orchestration"],
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    description: "End-to-end web applications with modern architecture and scalable infrastructure.",
    icon: "Layers",
    features: ["React & Next.js", "API Design", "Database Architecture", "Cloud Deployment"],
  },
  {
    id: "saas",
    title: "SaaS Development",
    description: "Revenue-generating SaaS platforms with subscription models and analytics dashboards.",
    icon: "Cloud",
    features: ["Multi-Tenant", "Billing Integration", "Admin Panels", "Analytics"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Pixel-perfect, high-performance interfaces that convert visitors into customers.",
    icon: "Palette",
    features: ["React & Next.js", "Animations", "Responsive Design", "Performance"],
  },
  {
    id: "dashboard",
    title: "Dashboard Development",
    description: "Data-rich dashboards with real-time analytics and intuitive visualizations.",
    icon: "BarChart3",
    features: ["Real-time Data", "Charts & Graphs", "Role-Based Access", "Export Tools"],
  },
  {
    id: "api",
    title: "API Development",
    description: "Robust, documented APIs built with FastAPI and Node.js for seamless integrations.",
    icon: "Webhook",
    features: ["REST & GraphQL", "Authentication", "Rate Limiting", "Documentation"],
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description: "Intelligent automation that eliminates manual tasks and accelerates operations.",
    icon: "Zap",
    features: ["Process Automation", "Integrations", "Scheduled Jobs", "Monitoring"],
  },
  {
    id: "generative-ai",
    title: "Generative AI Solutions",
    description: "Content generation, chatbots, and creative AI tools tailored to your business.",
    icon: "Sparkles",
    features: ["Chatbots", "Content Gen", "Image AI", "Custom GPTs"],
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description: "End-to-end business process automation that drives efficiency and reduces costs.",
    icon: "Cog",
    features: ["CRM Integration", "Email Automation", "Data Pipelines", "Reporting"],
  },
];
