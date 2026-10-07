import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TIME, ELEVATED. | Luxury Watch Concept",
  description: "A cinematic presentation of exceptional timepieces — where precious materials, mechanical mastery and enduring design meet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-luxury-black text-luxury-ivory font-sans selection:bg-luxury-gold selection:text-luxury-black">
        {children}
      </body>
    </html>
  );
}
