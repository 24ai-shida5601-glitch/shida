"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Craftsmanship() {
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

      tl.from(".craft-title span", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
      })
      .from(".craft-item", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.8");

      gsap.to(".craft-bg", {
        yPercent: 20,
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

  const items = [
    {
      num: "01",
      title: "PRECIOUS MATERIALS",
      desc: "Gold, steel and gemstones selected for enduring beauty."
    },
    {
      num: "02",
      title: "MECHANICAL MASTERY",
      desc: "Movement architecture engineered for dependable performance."
    },
    {
      num: "03",
      title: "TIMELESS DESIGN",
      desc: "Proportions that transcend seasons, trends and generations."
    }
  ];

  return (
    <section 
      id="craftsmanship"
      ref={containerRef}
      className="py-32 md:py-64 px-6 md:px-12 bg-luxury-deep relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen craft-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border-[1px] border-luxury-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] border-[1px] border-luxury-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border-[1px] border-luxury-gold rounded-full" />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10 flex flex-col lg:flex-row justify-between gap-24 lg:gap-12">
        <div className="lg:w-1/2">
          <h2 className="craft-title font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-luxury-ivory max-w-xl">
            <span className="block overflow-hidden pb-2">PRECISION IS</span>
            <span className="block overflow-hidden pb-2 italic text-luxury-gold">A LANGUAGE.</span>
          </h2>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-16 md:gap-24 pt-12 lg:pt-0">
          {items.map((item, idx) => (
            <div key={idx} className="craft-item border-t border-white/10 pt-8 flex flex-col md:flex-row gap-6 md:gap-12">
              <span className="font-serif text-3xl md:text-5xl text-luxury-gold/30">
                {item.num}
              </span>
              <div>
                <h3 className="text-sm tracking-[0.2em] text-luxury-ivory uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-luxury-muted font-light leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
