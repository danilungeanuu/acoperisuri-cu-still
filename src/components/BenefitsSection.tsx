import { Shield, Leaf, Clock, Hammer } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Durabilitate Excepțională",
    description: "Șindrila de lemn rezistă peste 50 de ani cu întreținere minimă, protejând casa ta de intemperii.",
  },
  {
    icon: Leaf,
    title: "100% Natural & Ecologic",
    description: "Material regenerabil, fără substanțe chimice. Un acoperiș care respectă natura și sănătatea familiei tale.",
  },
  {
    icon: Clock,
    title: "Tradiție Seculară",
    description: "Tehnici de prelucrare moștenite din generație în generație, adaptate standardelor moderne.",
  },
  {
    icon: Hammer,
    title: "Montaj Profesional",
    description: "Echipă de meșteri experimentați care garantează un montaj impecabil și de lungă durată.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficii" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.2em] uppercase text-sm font-body mb-3">De ce șindrilă?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Avantajele Unui Acoperiș Natural
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
            >
              <benefit.icon className="w-10 h-10 text-accent group-hover:text-primary-foreground/80 mb-5 transition-colors" />
              <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="font-body text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
