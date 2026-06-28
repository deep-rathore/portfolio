"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    countersRef.current.forEach((counter) => {
      if (counter) {
        const target = parseInt(counter.getAttribute("data-target") || "0", 10);
        
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          }
        });
      }
    });
  }, []);

  const setCounterRef = (el: HTMLHeadingElement | null, index: number) => {
    countersRef.current[index] = el;
  };

  const stats = [
    { label: "Projects Built", value: portfolioData.stats.projects, suffix: "+" },
    { label: "Real Clients", value: portfolioData.stats.clients, suffix: "" },
    { label: "Years Exp", value: portfolioData.stats.years, suffix: "+" },
    { label: "Technologies", value: portfolioData.stats.technologies, suffix: "+" },
  ];

  return (
    <section className="py-16 relative border-y border-white/10 bg-white/[0.01]" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="flex items-baseline gap-1 mb-2">
                <h3 
                  ref={(el) => setCounterRef(el, idx)} 
                  data-target={stat.value}
                  className="text-4xl md:text-5xl font-bold text-gradient"
                >
                  0
                </h3>
                <span className="text-3xl font-bold text-blue-500">{stat.suffix}</span>
              </div>
              <p className="text-white/60 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
