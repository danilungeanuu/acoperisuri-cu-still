import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

/**
 * Phone obfuscation: the number is split into parts and joined at runtime.
 * This way it doesn't appear as plain text in the HTML source that bots scrape,
 * but clicking the link still opens the dialer for real visitors.
 */
const phoneParts = ["+407", "53", "864", "559"];
const phone = phoneParts.join("");
const emailParts = ["dani.lungeanuu", "@", "gmail.com"];
const email = emailParts.join("");

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="tracking-[0.2em] uppercase text-sm text-primary-foreground/60 mb-3">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Hai Să Construim Împreună
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Contactează-ne pentru o ofertă personalizată. Îți oferim consultanță gratuită
              și te ajutăm să alegi soluția potrivită pentru casa ta.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-4 hover:text-accent transition-colors group"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-body text-lg">{phone}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 hover:text-accent transition-colors group"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-body text-lg">{email}</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-body text-lg">România</span>
              </div>
            </div>
          </div>

          {/*
            FORM: To make this actually send emails to your inbox, create a free
            account at formspree.io, create a new form, and replace the action URL
            below with your own: action="https://formspree.io/f/YOUR_FORM_ID"
            Every submission will arrive directly in your Gmail.
          */}
          <form
            className="space-y-5"
            action="https://formspree.io/f/xnjwzwwj"
            method="POST"
          >
            <div>
              <label className="font-body text-sm text-primary-foreground/60 mb-1 block">Nume</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 font-body focus:outline-none focus:border-accent transition-colors"
                placeholder="Numele tău"
              />
            </div>
            <div>
              <label className="font-body text-sm text-primary-foreground/60 mb-1 block">Telefon</label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 font-body focus:outline-none focus:border-accent transition-colors"
                placeholder="Numărul tău de telefon"
              />
            </div>
            <div>
              <label className="font-body text-sm text-primary-foreground/60 mb-1 block">Mesaj</label>
              <textarea
                rows={4}
                name="message"
                required
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 font-body focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Descrie proiectul tău..."
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6"
            >
              Trimite Mesajul
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
