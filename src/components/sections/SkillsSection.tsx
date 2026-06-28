"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  const skillCategories = [
    { title: "Frontend", skills: portfolioData.skills.frontend, color: "from-blue-400 to-blue-600" },
    { title: "Backend", skills: portfolioData.skills.backend, color: "from-green-400 to-emerald-600" },
    { title: "Database", skills: portfolioData.skills.database, color: "from-purple-400 to-purple-600" },
    { title: "Tools & Cloud", skills: [...portfolioData.skills.cloud, ...portfolioData.skills.tools], color: "from-orange-400 to-red-600" },
    { title: "AI", skills: portfolioData.skills.ai, color: "from-indigo-400 to-cyan-600" }
  ];

  return (
    <section id="skills" className="py-24 relative bg-white/[0.02]" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            Technical <span className="text-purple-500">Arsenal.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              ref={(el) => setCardRef(el, idx)}
              className="glassmorphism p-6 rounded-2xl neon-border transition-all duration-300 hover:-translate-y-2 group"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-white/80 group-hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
