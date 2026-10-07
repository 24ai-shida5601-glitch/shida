"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function IntroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        }
      });

      tl.from(".intro-label", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(".intro-title span", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.6")
      .from(".intro-desc", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-32 md:py-64 px-6 md:px-12 bg-luxury-black relative z-10"
    >
      <div className="max-w-[1920px] mx-auto flex flex-col items-center text-center">
        <p className="intro-label text-[10px] tracking-[0.3em] text-luxury-gold mb-12 uppercase">
          The Art of the Watch
        </p>
        
        <h2 className="intro-title font-serif text-4xl md:text-6xl lg:text-8xl leading-tight mb-16 max-w-4xl">
          <span className="block overflow-hidden pb-2 text-luxury-ivory">DESIGNED TO BE</span>
          <span className="block overflow-hidden pb-2 text-luxury-gold italic">REMEMBERED.</span>
        </h2>
        
        <div className="max-w-xl mx-auto">
          <p className="intro-desc text-luxury-muted font-light leading-relaxed text-sm md:text-base">
            Every detail is presented with the quiet confidence of fine watchmaking. Scroll slowly. Let the materials, proportions and light reveal themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
