"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.to(".intro-line", {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut",
      }, 0.3)
      .to(".logo-anim", {
        opacity: 1,
        duration: 1,
      }, 0.6)
      .to(".nav-anim", {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
      }, 0.8)
      .to(".hero-eyebrow", {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }, 1.0)
      .to(".hero-title-1", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        rotation: 0,
      }, 1.2)
      .to(".hero-title-2", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        rotation: 0,
      }, 1.4)
      .to(".hero-desc", {
        opacity: 1,
        y: 0,
        duration: 1.2,
      }, 1.7)
      .to(".hero-cta", {
        opacity: 1,
        duration: 1.2,
      }, 2.0)
      .to(".hero-bg-glow", {
        opacity: 0.4,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      }, 2.3);

      // Parallax effect on scroll
      gsap.to(".hero-bg-circle", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-luxury-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-0 bg-luxury-gold intro-line opacity-30 origin-top" />
        
        {/* Subtle Geometry */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[80vh] h-[80vh] rounded-full border border-white/5 hero-bg-circle opacity-50" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full border border-luxury-gold/5 hero-bg-circle opacity-50" />
        
        {/* Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-luxury-gold/5 blur-[120px] hero-bg-glow opacity-0" />
        
        {/* Vignette & Grain */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,2,0.8)_100%)] pointer-events-none mix-blend-multiply" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-7 lg:col-span-6 flex flex-col justify-center">
          
          <div className="overflow-hidden mb-6">
            <div className="hero-eyebrow translate-y-full opacity-0 text-[10px] tracking-[0.3em] text-luxury-muted">
              HOROLOGY / 1905 — PRESENT
            </div>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
            <div className="overflow-hidden pb-2">
              <div className="hero-title-1 translate-y-[120%] rotate-2 opacity-0 text-luxury-ivory">
                TIME,
              </div>
            </div>
            <div className="overflow-hidden pb-4">
              <div className="hero-title-2 translate-y-[120%] rotate-2 opacity-0 text-luxury-gold italic pr-4">
                ELEVATED.
              </div>
            </div>
          </h1>

          <div className="overflow-hidden mb-12 max-w-md">
            <p className="hero-desc translate-y-8 opacity-0 text-sm md:text-base leading-relaxed text-luxury-muted font-light">
              A cinematic presentation of exceptional timepieces — where precious materials, mechanical mastery and enduring design meet.
            </p>
          </div>

          <div className="hero-cta opacity-0 flex items-center gap-4">
            <a 
              href="#collection"
              className="group flex items-center gap-4 text-xs tracking-[0.2em] text-luxury-ivory hover:text-luxury-gold transition-colors duration-500"
            >
              DISCOVER THE COLLECTION
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxury-gold/50 transition-colors duration-500">
                <ArrowDown size={12} strokeWidth={1} className="group-hover:translate-y-0.5 transition-transform duration-500" />
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
