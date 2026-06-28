"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (containerRef.current && textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            About <span className="text-blue-500">Me.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={textRef}>
          <div className="space-y-6 text-lg text-white/70">
            <p>
              I am a final-year BCA student at Punjabi University, Patiala, with a profound passion for building scalable web applications and visually stunning interfaces.
            </p>
            <p>
              My journey started with college projects, evolved into real-world client work, and has now grown into global freelancing. I specialize in the MERN and Django stacks.
            </p>
            <p>
              Beyond coding, I'm a Himalayan trekker, an investor, and an AI explorer constantly looking to leverage new technologies. My long-term goal is a remote senior developer role, possibly tracing a migration path to Canada or Germany.
            </p>
          </div>
          
          <div className="glassmorphism p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold mb-6 text-white/90">Quick Facts</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▹</span>
                <div>
                  <strong className="block text-white">Education</strong>
                  <span className="text-white/60">{portfolioData.about.education}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▹</span>
                <div>
                  <strong className="block text-white">Real Clients</strong>
                  <span className="text-white/60">{portfolioData.about.clients.join(", ")}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▹</span>
                <div>
                  <strong className="block text-white">Interests</strong>
                  <span className="text-white/60">{portfolioData.about.interests}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
