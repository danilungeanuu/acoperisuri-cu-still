import houseLog from "@/assets/house-log.png";
import craftsmanship from "@/assets/craftsmanship.jpg";
import churchRoof from "@/assets/church-roof.png";

const projects = [
  {
    image: houseLog,
    title: "Casă din Bârne",
    description: "Acoperiș din șindrilă de brad pe structură tradițională",
  },
  {
    image: craftsmanship,
    title: "Meșteșug Autentic",
    description: "Fiecare piesă este verificată cu atenție",
  },
  {
    image: churchRoof,
    title: "Biserică de Lemn",
    description: "Acoperiș tradițional maramureșean din șindrilă",
  },
];

const GallerySection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.2em] uppercase text-sm font-body mb-3">Portofoliu</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Lucrările Noastre
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground">{project.title}</h3>
                  <p className="font-body text-primary-foreground/70 text-sm mt-1">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
