import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="salon-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="font-serif text-2xl mb-4">
              Salon <span className="text-primary">Élégance</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Wo Schönheit auf Handwerkskunst trifft. 
              Ihr exklusiver Friseursalon im Herzen der Stadt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Home", "Team", "Leistungen", "Kontakt", "Standort"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Folgen Sie uns
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>© {currentYear} Salon Élégance. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
