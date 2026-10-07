"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu } from "lucide-react";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 border-b border-white/10 ${
        scrolled ? "bg-luxury-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 opacity-0 logo-anim">
          <span className="font-serif text-2xl tracking-widest text-luxury-ivory cursor-pointer">
            ROLEX
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex flex-1 justify-center gap-12 opacity-0 nav-anim">
          {["COLLECTION", "CRAFTSMANSHIP", "HERITAGE"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] tracking-[0.2em] text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex-1 flex justify-end opacity-0 nav-anim">
          <a
            href="#explore"
            className="hidden md:inline-block text-[10px] tracking-[0.2em] text-luxury-ivory hover:text-luxury-gold transition-colors duration-300"
          >
            EXPLORE
          </a>
          <button className="md:hidden text-luxury-ivory">
            <Menu size={20} strokeWidth={1} />
          </button>
        </div>
      </div>
    </header>
  );
}
