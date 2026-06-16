import type { ClientResult, AIShowcase, ProcessStep, Experience } from "@/types";

export const CLIENT_RESULTS: ClientResult[] = [
  {
    id: "1",
    label: "Business Value Generated",
    value: "$25,000+",
    subValue: "₹21 Lakhs+",
    type: "generated",
  },
  {
    id: "2",
    label: "Annual Costs Saved",
    value: "$10,000+",
    subValue: "₹8.5 Lakhs+",
    type: "saved",
  },
  {
    id: "3",
    label: "Manual Work Reduced",
    value: "80%",
    type: "reduced",
  },
  {
    id: "4",
    label: "Productivity Improved",
    value: "40%",
    type: "improved",
  },
];

export const AI_SHOWCASES: AIShowcase[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Autonomous agents that execute multi-step workflows with tool calling and memory.",
    icon: "Bot",
    workflow: ["User Input", "Agent Planning", "Tool Execution", "Response Generation"],
  },
  {
    id: "multi-agent",
    title: "Multi-Agent Systems",
    description: "Coordinated agent teams for complex business processes and decision-making.",
    icon: "Network",
    workflow: ["Orchestrator", "Research Agent", "Writer Agent", "Reviewer Agent", "Output"],
  },
  {
    id: "rag",
    title: "RAG Pipelines",
    description: "Retrieval-Augmented Generation for accurate, context-aware AI responses.",
    icon: "Database",
    workflow: ["Document Ingestion", "Embedding", "Vector Store", "Retrieval", "LLM Generation"],
  },
  {
    id: "chatbots",
    title: "AI Chatbots",
    description: "Intelligent conversational interfaces for customer support and engagement.",
    icon: "MessageSquare",
    workflow: ["User Message", "Intent Detection", "Knowledge Lookup", "AI Response", "Feedback Loop"],
  },
  {
    id: "automation",
    title: "Automation Workflows",
    description: "End-to-end process automation connecting APIs, databases, and AI models.",
    icon: "Workflow",
    workflow: ["Trigger Event", "Data Processing", "AI Analysis", "Action Execution", "Notification"],
  },
  {
    id: "resume-ai",
    title: "Resume Analysis Systems",
    description: "ATS-optimized resume analysis with AI-powered suggestions and scoring.",
    icon: "FileSearch",
    workflow: ["PDF Upload", "Text Extraction", "ATS Scoring", "AI Suggestions", "Optimized Output"],
  },
  {
    id: "llm-apps",
    title: "LLM Applications",
    description: "Custom GPT-powered applications tailored for specific business use cases.",
    icon: "Sparkles",
    workflow: ["Prompt Engineering", "Fine-tuning", "API Integration", "UI Layer", "Deployment"],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: "discovery", title: "Discovery", description: "Understanding your business goals, challenges, and technical requirements.", icon: "Search" },
  { id: "planning", title: "Planning", description: "Architecture design, tech stack selection, and project roadmap creation.", icon: "Map" },
  { id: "design", title: "Design", description: "UI/UX wireframes, prototypes, and user experience optimization.", icon: "Layout" },
  { id: "development", title: "Development", description: "Agile development with regular updates and transparent communication.", icon: "Code2" },
  { id: "testing", title: "Testing", description: "Comprehensive QA, performance testing, and security audits.", icon: "TestTube2" },
  { id: "deployment", title: "Deployment", description: "Production deployment with CI/CD pipelines and monitoring setup.", icon: "Rocket" },
  { id: "optimization", title: "Optimization", description: "Performance tuning, SEO optimization, and conversion rate improvements.", icon: "TrendingUp" },
  { id: "support", title: "Support", description: "Ongoing maintenance, feature updates, and long-term partnership.", icon: "Headphones" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "code-tikki",
    title: "Frontend Developer",
    company: "Code Tikki",
    period: "Feb 2025 – Present",
    location: "Remote",
    achievements: [
      "Led frontend architecture for client-facing SaaS products",
      "Improved application performance by 40% through optimization",
      "Implemented AI-powered features using React and OpenAI APIs",
      "Mentored junior developers on modern React patterns",
    ],
    responsibilities: [
      "Building responsive, high-performance React/Next.js applications",
      "Collaborating with design and backend teams on feature delivery",
      "Implementing state management, API integrations, and animations",
      "Code reviews, testing, and maintaining coding standards",
    ],
  },
];

export const WHY_HIRE_ME = [
  { title: "Scalable Architecture", description: "Systems designed to grow from MVP to enterprise scale without rewrites.", icon: "Building2" },
  { title: "AI Expertise", description: "Deep experience with LLMs, RAG, agents, and production AI deployments.", icon: "Brain" },
  { title: "Clean Code", description: "Maintainable, well-documented code following industry best practices.", icon: "Code2" },
  { title: "Fast Delivery", description: "MVPs delivered in weeks, not months, without compromising quality.", icon: "Zap" },
  { title: "Business-Oriented", description: "Every technical decision aligned with revenue, cost, and growth goals.", icon: "Target" },
  { title: "Performance", description: "Lighthouse 95+ scores, optimized bundles, and blazing-fast experiences.", icon: "Gauge" },
  { title: "Long-Term Support", description: "Ongoing partnership with maintenance, updates, and scaling support.", icon: "Handshake" },
];
