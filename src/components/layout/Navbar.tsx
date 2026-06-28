"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { portfolioData } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add blur background if scrolled past 50px
      setIsScrolled(currentScrollY > 50);

      // Hide/Show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        gsap.to("#navbar", { y: -100, duration: 0.3, ease: "power2.inOut" });
      } else {
        gsap.to("#navbar", { y: 0, duration: 0.3, ease: "power2.inOut" });
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="#home" onClick={(e) => handleSmoothScroll(e, "#home")} className="text-2xl font-bold tracking-tighter">
          {portfolioData.personal.shortName}.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-sm font-medium text-white/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="hover:text-white transition-colors hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="/resume/GagandeepRathore_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all neon-border"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glassmorphism border-t border-white/10 py-6 px-6 flex flex-col space-y-4 md:hidden origin-top animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-lg font-medium text-white/80 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume/GagandeepRathore_CV.pdf" 
            target="_blank"
            className="inline-block mt-4 px-6 py-3 text-center font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
