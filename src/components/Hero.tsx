import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxuriöser Friseursalon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">
          Willkommen bei
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-fade-up">
          Salon <span className="italic">Élégance</span>
        </h1>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }} />
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Wo Schönheit auf Handwerkskunst trifft. Erleben Sie exklusive Haarpflege 
          in einer Atmosphäre zeitloser Eleganz.
        </p>
        <button
          onClick={scrollToContact}
          className="salon-button-primary animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Termin Buchen
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
