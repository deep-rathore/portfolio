"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            Selected <span className="text-blue-500">Works.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        <div className="space-y-12 md:space-y-24">
          {portfolioData.projects.filter(p => p.featured).map((project, idx) => (
            <div 
              key={project.id} 
              className={`project-card flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <div className="w-full md:w-3/5 h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* Fallback gradient if images aren't available */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <span className="text-white/20 font-bold text-4xl">{project.title.substring(0,2)}</span>
                </div>
                {/* 
                  NOTE: Image component is here but commented out as we don't have the assets yet.
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                */}
              </div>

              {/* Project Info */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <div className="glassmorphism p-6 rounded-xl mb-6 text-white/70 relative z-20 md:-ml-12 shadow-2xl">
                  <p>{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-sm font-medium text-blue-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.githubLink} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <GithubIcon size={20} /> <span className="font-medium">Code</span>
                  </a>
                  <a href={project.demoLink} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <ExternalLink size={20} /> <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.filter(p => !p.featured).map(project => (
              <div key={project.id} className="project-card glassmorphism p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <ExternalLink size={24} />
                  </div>
                  <a href={project.githubLink} className="text-white/50 hover:text-white transition-colors">
                    <GithubIcon size={24} />
                  </a>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-white/60 mb-6 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-white/40">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
