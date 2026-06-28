"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import MagneticButton from "@/animations/MagneticButton";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Failed to send message:", result.error);
        alert(`Failed to send message: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={containerRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            Let's <span className="text-blue-500">Connect.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Have a project in mind?</h3>
            <p className="text-lg text-white/70 mb-10 max-w-md">
              Whether you want to build a new website, revamp an existing one, or just say hi, my inbox is always open.
            </p>

            <div className="space-y-6 mb-12">
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-4 text-white/80 hover:text-white hover:text-blue-400 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">{portfolioData.personal.email}</span>
              </a>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">{portfolioData.personal.location}</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/50 mb-4 uppercase tracking-widest">Connect on Socials</p>
              <div className="flex gap-4">
                <a href={portfolioData.personal.social.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <GithubIcon size={20} />
                </a>
                <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>

            <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
              {portfolioData.personal.availability}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism p-8 md:p-10 rounded-3xl neon-border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Your Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    placeholder="Gagandeep Singh"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Your Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    placeholder="gagan@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                  placeholder="Freelance Project Inquiry"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <MagneticButton
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="text-green-300">Message Sent Successfully!</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send size={18} />
                  </span>
                )}
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
