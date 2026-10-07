"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface Spec {
  label?: string;
  value: string;
}

interface WatchSectionProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  specs: Spec[];
  theme: "emerald" | "turquoise";
  reversed?: boolean;
}

export default function WatchSection({
  id,
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  description,
  specs,
  theme,
  reversed = false,
}: WatchSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  
  const glowColor = theme === "emerald" ? "rgba(12, 74, 53, 0.15)" : "rgba(75, 157, 158, 0.15)";
  const accentColorClass = theme === "emerald" ? "text-luxury-emerald" : "text-luxury-turquoise";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      tl.from(".watch-img", {
        scale: 0.88,
        opacity: 0,
        y: 80,
        rotation: reversed ? -5 : 5,
        duration: 1.5,
        ease: "power3.out"
      })
      .from(".watch-text-reveal", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=1")
      .from(".watch-spec-reveal", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out"
      }, "-=0.5");

      // Parallax Scroll
      gsap.to(".watch-img-container", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".watch-bg-glow", {
        scale: 1.2,
        opacity: 0.5,
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
  }, [reversed]);

  return (
    <section 
      id={id}
      ref={containerRef}
      className={`relative py-32 md:py-48 px-6 md:px-12 w-full overflow-hidden ${
        theme === "emerald" ? "bg-luxury-black" : "bg-luxury-secondary"
      } transition-colors duration-1000`}
    >
      <div className={`max-w-[1920px] mx-auto flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-16 lg:gap-32`}>
        
        {/* Image Side */}
        <div className="w-full md:w-[55%] lg:w-[60%] relative flex justify-center items-center">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] pt-[80%] rounded-full blur-[100px] watch-bg-glow"
            style={{ backgroundColor: glowColor }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] pt-[60%] rounded-full border border-white/5 opacity-30" />
          
          <div className="relative w-full aspect-[3/4] md:aspect-square watch-img-container">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain watch-img drop-shadow-2xl z-10"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center">
          <div className="mb-12">
            <p className="watch-text-reveal text-[10px] tracking-[0.3em] text-luxury-muted uppercase mb-6">
              {eyebrow}
            </p>
            <h2 className="watch-text-reveal font-serif text-4xl md:text-5xl lg:text-7xl leading-none mb-4 text-luxury-ivory">
              {title}
            </h2>
            <p className={`watch-text-reveal text-sm tracking-[0.2em] mb-10 ${accentColorClass} uppercase`}>
              {subtitle}
            </p>
            <p className="watch-text-reveal text-sm md:text-base leading-relaxed text-luxury-muted font-light">
              {description}
            </p>
          </div>

          <div className="pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {specs.map((spec, index) => (
                <div key={index} className="watch-spec-reveal">
                  {spec.label && (
                    <p className="text-[9px] tracking-[0.2em] text-luxury-muted uppercase mb-1">
                      {spec.label}
                    </p>
                  )}
                  <p className="text-[11px] tracking-[0.1em] text-luxury-ivory uppercase">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
