"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { portfolioData } from "@/data/portfolio";
import HeroScene from "@/three/HeroScene";
import MagneticButton from "@/animations/MagneticButton";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 }); // Wait for loading screen

    tl.fromTo(textRefs.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  const addToRefs = (el: HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={containerRef}>
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      
      {/* 3D Scene */}
      <HeroScene />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div ref={addToRefs} className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-sm font-medium text-white/80">
              Hey, I&apos;m Deep <span className="animate-pulse">👋</span>
            </span>
          </div>
          
          <h1 ref={addToRefs} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight">
            I build <span className="text-gradient">digital</span><br />
            experiences.
          </h1>
          
          <p ref={addToRefs} className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
            {portfolioData.personal.description}
          </p>
          
          <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4">
            <MagneticButton className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 group">
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <MagneticButton className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 neon-border">
              Hire Me
            </MagneticButton>
          </div>
          
          {/* Availability Badge */}
          <div ref={addToRefs} className="mt-12 flex items-center gap-3 text-sm text-white/40">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            {portfolioData.personal.availability}
          </div>
        </div>
      </div>
    </section>
  );
}
