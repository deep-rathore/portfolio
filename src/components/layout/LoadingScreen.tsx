"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { portfolioData } from "@/data/portfolio";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      }
    });

    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "power3.inOut"
    })
    .to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.3
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
    >
      <div className="relative flex flex-col items-center">
        <h1 
          ref={logoRef}
          className="text-5xl md:text-7xl font-bold text-white opacity-0 translate-y-4 tracking-tighter"
        >
          {portfolioData.personal.shortName}.
        </h1>
        
        <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-blue-500 origin-left scale-x-0 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
