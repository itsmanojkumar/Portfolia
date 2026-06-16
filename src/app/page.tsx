"use client";

import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MouseGlow } from "@/components/effects/MouseGlow";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { AIShowcase } from "@/components/sections/AIShowcase";
import { Skills } from "@/components/sections/Skills";
import { ClientResults } from "@/components/sections/ClientResults";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { WhyHireMe } from "@/components/sections/WhyHireMe";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Projects />
        <AIShowcase />
        <Skills />
        <ClientResults />
        <Testimonials />
        <Process />
        <WhyHireMe />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
