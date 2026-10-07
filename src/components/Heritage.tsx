"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Heritage() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      tl.from(".heritage-label", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(".heritage-title span", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.6")
      .from(".heritage-desc", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .from(".heritage-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");

      gsap.to(".heritage-glow", {
        scale: 1.5,
        opacity: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="heritage"
      ref={containerRef}
      className="py-32 md:py-64 px-6 md:px-12 bg-luxury-black relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]"
    >
      {/* Subtle gold horizon light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[20vh] bg-luxury-gold/5 blur-[120px] heritage-glow pointer-events-none" />
      
      <div className="max-w-[1920px] mx-auto relative z-10 flex flex-col items-center text-center">
        <p className="heritage-label text-[10px] tracking-[0.3em] text-luxury-muted mb-12 uppercase">
          A Legacy of Excellence
        </p>
        
        <h2 className="heritage-title font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] text-luxury-ivory mb-16">
          <span className="block overflow-hidden pb-2">NOT MERELY</span>
          <span className="block overflow-hidden pb-2 italic text-luxury-gold">A WATCH.</span>
        </h2>
        
        <div className="max-w-xl mx-auto mb-20">
          <p className="heritage-desc text-luxury-muted font-light leading-relaxed text-sm md:text-base">
            "It is an object of personal history — worn, remembered and eventually passed forward."
          </p>
        </div>

        <div className="heritage-cta">
          <a 
            href="#"
            data-cursor-expand="true"
            className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden border border-luxury-gold text-xs tracking-[0.2em] text-luxury-gold transition-colors duration-500 hover:text-luxury-black"
          >
            <span className="absolute inset-0 bg-luxury-gold transform origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
            <span className="relative z-10 font-medium">EXPLORE THE COLLECTION</span>
          </a>
        </div>
      </div>
    </section>
  );
}
