import heroImage from "@/assets/hero-roof.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Acoperiș tradițional din șindrilă de lemn"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-body text-primary-foreground/80 tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Tradiție · Calitate · Naturalețe
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Acoperișuri din
          <br />
          <span className="text-accent italic">Șindrilă de Lemn</span>
        </h1>

        {/* Product lines — clearly visible below the title */}
        <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {["Șindrilă", "Șiță", "Draniță"].map((produs) => (
            <span
              key={produs}
              className="font-body text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-accent/60 text-accent bg-foreground/20 backdrop-blur-sm"
            >
              {produs}
            </span>
          ))}
        </div>

        <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Meșteșug autentic românesc, transmis din generație în generație.
          Acoperișuri durabile care îmbină frumusețea naturii cu rezistența lemnului.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6"
          >
            Solicită o Ofertă
          </Button>
          {/* Outline button: transparent background with visible border, text and subtle fill on hover */}
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground text-base px-8 py-6 transition-colors duration-200"
          >
            Descoperă Produsele
          </Button>
        </div>
      </div>

      <a
        href="#beneficii"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
