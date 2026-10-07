"use client";

export default function Footer() {
  return (
    <footer className="bg-luxury-deep border-t border-white/5 py-16 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <span className="font-serif text-2xl tracking-widest text-luxury-muted">
            ROLEX
          </span>
        </div>

        {/* Links */}
        <nav className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {["COLLECTION", "CRAFTSMANSHIP", "HERITAGE"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[9px] tracking-[0.2em] text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Disclaimer */}
        <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <p className="text-[10px] text-luxury-muted/50 tracking-wide uppercase">
            Independent luxury watch presentation.
          </p>
          <p className="text-[10px] text-luxury-muted/30 tracking-wide">
            Concept experience. Not affiliated with Rolex S.A.
          </p>
        </div>

      </div>
    </footer>
  );
}
