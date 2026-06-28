"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the timeline line
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );
    }

    // Animate each timeline item
    itemsRef.current.forEach((item, i) => {
      if (item) {
        gsap.fromTo(
          item,
          { x: i % 2 === 0 ? 50 : -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      }
    });
  }, []);

  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    itemsRef.current[index] = el;
  };

  return (
    <section id="experience" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            My <span className="text-purple-500">Journey.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 origin-top" ref={lineRef}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
          </div>

          <div className="space-y-12 md:space-y-0">
            {portfolioData.experience.map((exp, idx) => (
              <div 
                key={idx} 
                ref={(el) => setItemRef(el, idx)}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[13px] md:left-1/2 w-[16px] h-[16px] bg-[#050505] border-4 border-blue-500 rounded-full z-10 transform -translate-x-1/2 mt-6 md:mt-0" />
                
                {/* Content */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="glassmorphism p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <h4 className="text-lg text-white/80 mb-3">{exp.company}</h4>
                    <p className="text-white/60">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
