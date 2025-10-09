"use client";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="flex min-h-screen relative">
      <AnimatedBackground />
      <ProgressBar />
      <Sidebar />
      <MobileNav />
      <main className="flex-1 ml-0 lg:ml-64 relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

