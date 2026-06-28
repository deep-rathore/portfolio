"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] pt-16 pb-8">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">
              {portfolioData.personal.shortName}.
            </h2>
            <p className="text-white/60 max-w-xs">
              {portfolioData.personal.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-12">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <span className="font-semibold text-white/80 mb-2">Links</span>
              <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-white/60 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-white/60 hover:text-white transition-colors">Experience</a>
            </div>
            
            <div className="flex flex-col items-center md:items-start space-y-2">
              <span className="font-semibold text-white/80 mb-2">Socials</span>
              <a href={portfolioData.personal.social.github} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Gagandeep Singh Rathore. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span>Built with Next.js + Three.js</span>
            <button 
              onClick={handleScrollTop}
              className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
