import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import WatchSection from "@/components/WatchSection";
import Craftsmanship from "@/components/Craftsmanship";
import EditorialDetailSection from "@/components/EditorialDetailSection";
import Heritage from "@/components/Heritage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <Navigation />
      
      <main className="bg-luxury-black min-h-screen">
        <Hero />
        
        <IntroSection />
        
        <WatchSection 
          id="collection"
          imageSrc="/w3.jpg"
          imageAlt="Rolex Cosmograph Daytona 116508GRSO in 18 ct yellow gold with green dial"
          eyebrow="THE OYSTER COLLECTION"
          title="Cosmograph Daytona"
          subtitle="116508GRSO"
          description="The Rolex 116508GRSO is an exceptional chronograph crafted in 18 ct yellow gold, pairing a vivid green dial with the iconic Oyster bracelet. Its 40 mm case houses the calibre 4130, a self-winding mechanical chronograph movement engineered for dependable precision and a 72-hour power reserve."
          specs={[
            { label: "Material", value: "18 CT YELLOW GOLD" },
            { label: "Case", value: "40 MM CASE" },
            { label: "Movement", value: "CALIBRE 4130" },
            { label: "Power Reserve", value: "72-HOUR POWER RESERVE" },
            { label: "Frequency", value: "4 HZ FREQUENCY" },
            { label: "Jewels", value: "44 JEWELS" },
            { label: "Water Resistance", value: "100 M WATER RESISTANCE" },
            { label: "Dial", value: "GREEN DIAL" },
            { label: "Bracelet", value: "OYSTER BRACELET" },
            { label: "Crystal", value: "SCRATCH-RESISTANT SAPPHIRE" },
            { label: "Chronograph", value: "60 SECONDS" },
            { label: "", value: "30 MINUTES" },
            { label: "", value: "12 HOURS" },
          ]}
          theme="emerald"
        />

        <WatchSection 
          id="vintage"
          imageSrc="/w4.webp"
          imageAlt="Vintage 1971 Rolex ladies' dress watch with turquoise-toned dial, diamond-set bezel and white-gold bracelet"
          eyebrow="VINTAGE COLLECTION"
          title="A Study in Elegance"
          subtitle="1971 LADIES' DRESS WATCH"
          description="A graceful vintage Rolex dress watch that brings together a refined rectangular silhouette, a luminous turquoise-toned dial, a diamond-set bezel and an intricately articulated white-metal bracelet. Its jewelry-like proportions and restrained dial architecture create an unmistakably elegant vintage character."
          specs={[
            { label: "Style", value: "1971 VINTAGE STYLING" },
            { label: "Material", value: "18K WHITE GOLD" },
            { label: "Bezel", value: "DIAMOND-SET BEZEL" },
            { label: "Dial", value: "TURQUOISE-TONED DIAL" },
            { label: "Bracelet", value: "FINE ARTICULATED BRACELET" },
            { label: "Silhouette", value: "RECTANGULAR DRESS-WATCH" },
            { label: "Character", value: "VINTAGE ELEGANCE" }
          ]}
          theme="turquoise"
          reversed={true}
        />

        <Craftsmanship />
        
        <EditorialDetailSection />
        
        <Heritage />
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
