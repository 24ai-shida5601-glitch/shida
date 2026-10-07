"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function EditorialDetailSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        scale: 1.1,
        opacity: 1,
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
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-luxury-black flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-luxury-black pointer-events-none z-10" style={{
        boxShadow: "inset 0 0 150px rgba(2,2,2,0.9)",
      }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,2,0.9)_100%)] pointer-events-none z-10" />
      
      {/* Background geometric texture (subtle) */}
      <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none">
        <div className="w-[80vh] h-[80vh] border border-luxury-gold rounded-full" />
      </div>

      <div className="relative z-20 text-center px-6">
        <h2 
          ref={textRef} 
          className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight text-luxury-gold/80 italic opacity-50"
        >
          "THE BEAUTY OF TIME<br />
          IS IN THE DETAILS."
        </h2>
      </div>
    </section>
  );
}
