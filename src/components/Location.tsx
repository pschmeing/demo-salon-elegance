import { MapPin, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section id="standort" className="salon-section bg-background">
      <div className="salon-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Anfahrt
          </p>
          <h2 className="salon-heading text-foreground mb-6">
            Unser <span className="italic">Standort</span>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Embed */}
          <div className="salon-card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4097618789877!2d13.388860076812896!3d52.51703493622846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1705000000000!5m2!1sde!2sde"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Standort"
              className="w-full"
            />
          </div>

          {/* Address Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  Adresse
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Salon Élégance<br />
                  Musterstraße 123<br />
                  10115 Berlin<br />
                  Deutschland
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  Anfahrt
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Mit der U-Bahn:</strong> U6 bis Friedrichstraße, 
                  dann 5 Minuten zu Fuß.<br /><br />
                  <strong>Mit dem Auto:</strong> Parkplätze direkt vor dem 
                  Salon sowie im Parkhaus nebenan verfügbar.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="salon-button-outline inline-flex"
            >
              Route planen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
