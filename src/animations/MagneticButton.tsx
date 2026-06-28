"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function MagneticButton({ 
  children, 
  className = "",
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const xTo = gsap.quickTo(buttonRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(buttonRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.3);
      yTo(y * 0.3);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      xTo(0);
      yTo(0);
    };

    if (isHovered && buttonRef.current) {
      window.addEventListener("mousemove", handleMouseMove);
      buttonRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isHovered]);

  return (
    <button
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
