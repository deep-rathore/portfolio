"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === portfolioData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? portfolioData.testimonials.length - 1 : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5 -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            Client <span className="text-blue-500">Love.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 text-blue-500/20 -translate-x-1/2 -translate-y-1/2">
            <Quote size={120} />
          </div>
          
          <div className="overflow-hidden rounded-2xl glassmorphism">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {portfolioData.testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 p-8 md:p-12">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-blue-400">{testimonial.name}</h4>
                    <span className="text-white/60">{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
