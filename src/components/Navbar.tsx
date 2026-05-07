import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrolled
    ? "bg-background/95 backdrop-blur-md shadow-sm text-foreground"
    : "bg-transparent text-primary-foreground";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold tracking-tight">
          Șindrila
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
          <a href="#beneficii" className="hover:text-accent transition-colors">Beneficii</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meniu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md px-6 pb-6 space-y-4 font-body text-foreground">
          <a href="#beneficii" className="block hover:text-accent" onClick={() => setMenuOpen(false)}>Beneficii</a>
          <a href="#contact" className="block hover:text-accent" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
