"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { Code2, Palette, ShoppingCart, Bot, Wrench } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "zap": return <Code2 size={32} className="text-blue-400" />;
    case "palette": return <Palette size={32} className="text-purple-400" />;
    case "shopping-cart": return <ShoppingCart size={32} className="text-emerald-400" />;
    case "bot": return <Bot size={32} className="text-indigo-400" />;
    case "wrench": return <Wrench size={32} className="text-orange-400" />;
    default: return <Code2 size={32} className="text-blue-400" />;
  }
};

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray<HTMLElement>(".service-card");
    
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="services" className="py-24 relative bg-white/[0.02]" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            My <span className="text-blue-500">Services.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.services.map((service, idx) => (
            <div 
              key={service.title} 
              className={`service-card glassmorphism p-8 rounded-2xl neon-border group relative overflow-hidden ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-500 pointer-events-none">
                {getIcon(service.icon)}
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-colors">
                {getIcon(service.icon)}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
