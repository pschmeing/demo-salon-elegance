import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const teamMembers = [
  {
    name: "Sarah Müller",
    role: "Salonleiterin & Master Stylistin",
    image: team1,
    experience: "15 Jahre Erfahrung",
  },
  {
    name: "Marco Weber",
    role: "Senior Stylist & Barbier",
    image: team2,
    experience: "10 Jahre Erfahrung",
  },
  {
    name: "Lisa Chen",
    role: "Coloristin & Styling-Expertin",
    image: team3,
    experience: "8 Jahre Erfahrung",
  },
];

const Team = () => {
  return (
    <section id="team" className="salon-section bg-secondary">
      <div className="salon-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Unser Team
          </p>
          <h2 className="salon-heading text-foreground mb-6">
            Leidenschaft für <span className="italic">Perfektion</span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="salon-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm uppercase tracking-wider mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
