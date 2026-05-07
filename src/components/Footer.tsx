const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body">
        <p>&copy; {new Date().getFullYear()} Șindrila. Toate drepturile rezervate.</p>
        <p>Meșteșug românesc autentic</p>
      </div>
    </footer>
  );
};

export default Footer;
