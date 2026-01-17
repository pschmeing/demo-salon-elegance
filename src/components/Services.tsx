import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Scissors, Sparkles, Palette, Crown } from "lucide-react";
import { useRef, MouseEvent } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

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

interface TiltCardProps {
  service: typeof services[0];
  index: number;
}

const TiltCard = ({ service, index }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse-based tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });
  
  // Scroll-based tilt
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  
  const scrollRotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [6, 2, 0, -2, -6]),
    { stiffness: 100, damping: 30 }
  );
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1] 
      }}
    >
      <motion.div
        className="salon-card p-8 h-full transform-gpu will-change-transform cursor-default"
        style={{
          rotateX: scrollRotateX,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <motion.div
          className="h-full"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Icon */}
          <motion.div
            className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto"
            style={{ translateZ: 30 }}
          >
            <service.icon className="w-6 h-6 text-primary" />
          </motion.div>

          {/* Category */}
          <h3 
            className="font-serif text-2xl text-foreground text-center mb-6"
            style={{ transform: "translateZ(20px)" }}
          >
            {service.category}
          </h3>

          {/* Items */}
          <div className="space-y-4" style={{ transform: "translateZ(10px)" }}>
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="leistungen" className="salon-section bg-background overflow-hidden">
      <div className="salon-container">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Unsere Leistungen
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="salon-heading text-foreground mb-6">
              Exklusive <span className="italic">Treatments</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="gold-divider" />
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <TiltCard key={service.category} service={service} index={index} />
          ))}
        </div>

        {/* Note */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Alle Preise verstehen sich als Richtwerte. Individuelle Beratung vor Ort.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;