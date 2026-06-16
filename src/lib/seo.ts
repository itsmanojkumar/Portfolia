import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

const keywords = [
  "AI Engineer",
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Software Developer",
  "AI Consultant",
  "Freelance Developer",
  "Frontend Developer",
  "Generative AI Developer",
  "Manoj Kumar",
  "AI Agent Developer",
  "SaaS Developer",
  "LangChain Developer",
  "OpenAI Developer",
];

export const siteMetadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manojkumar.dev",
    title: `${SITE_CONFIG.name} | AI Engineer & Full Stack Developer`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | AI Engineer & Full Stack Developer`,
    description: SITE_CONFIG.description,
    creator: "@itsmanojkumar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  jobTitle: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  url: "https://manojkumar.dev",
  sameAs: [
    SITE_CONFIG.linkedin,
    SITE_CONFIG.github,
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Full Stack Development",
    "React",
    "Next.js",
    "Generative AI",
    "AI Agents",
  ],
};
