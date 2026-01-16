import { Scissors, Sparkles, Palette, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    category: "Schnitte",
    items: [
      { name: "Damenhaarschnitt", price: "ab 45€" },
      { name: "Herrenhaarschnitt", price: "ab 28€" },
      { name: "Kinderhaarschnitt", price: "ab 18€" },
      { name: "Pony nachschneiden", price: "ab 10€" },
    ],
  },
  {
    icon: Palette,
    category: "Färben",
    items: [
      { name: "Komplettfärbung", price: "ab 65€" },
      { name: "Strähnchen / Highlights", price: "ab 75€" },
      { name: "Balayage", price: "ab 120€" },
      { name: "Ansatz färben", price: "ab 35€" },
    ],
  },
  {
    icon: Sparkles,
    category: "Pflege",
    items: [
      { name: "Intensivpflege", price: "ab 25€" },
      { name: "Keratin-Behandlung", price: "ab 150€" },
      { name: "Kopfhautmassage", price: "ab 15€" },
      { name: "Olaplex-Behandlung", price: "ab 40€" },
    ],
  },
  {
    icon: Crown,
    category: "Styling",
    items: [
      { name: "Föhnen & Styling", price: "ab 30€" },
      { name: "Hochsteckfrisur", price: "ab 55€" },
      { name: "Brautstyling", price: "ab 150€" },
      { name: "Event-Styling", price: "ab 65€" },
    ],
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="salon-section bg-background">
      <div className="salon-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Unsere Leistungen
          </p>
          <h2 className="salon-heading text-foreground mb-6">
            Exklusive <span className="italic">Treatments</span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.category}
              className="salon-card p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Category */}
              <h3 className="font-serif text-2xl text-foreground text-center mb-6">
                {service.category}
              </h3>

              {/* Items */}
              <div className="space-y-4">
                {service.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center border-b border-border pb-3"
                  >
                    <span className="text-muted-foreground text-sm">
                      {item.name}
                    </span>
                    <span className="text-primary font-medium text-sm">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          Alle Preise verstehen sich als Richtwerte. Individuelle Beratung vor Ort.
        </p>
      </div>
    </section>
  );
};

export default Services;
