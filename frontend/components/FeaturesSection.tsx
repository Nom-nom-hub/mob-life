export default function FeaturesSection() {
  return (
    <section className="relative py-32 px-6 z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 glow-secondary">
            Why Text-Based MMORPGs Hook You Forever
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Every decision shapes your destiny in this persistent criminal underworld.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 card-hover">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Persistent World</h3>
            <p className="text-muted leading-relaxed">Your character lives forever in a 24/7 online world. Progress, relationships, and reputation carry over every session.</p>
          </div>

          <div className="group bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 card-hover">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📊</div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Deep Stat System</h3>
            <p className="text-muted leading-relaxed">Level up skills in combat, stealth, business, and social manipulation. Every choice affects your character growth.</p>
          </div>

          <div className="group bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-500 card-hover">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⏰</div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Strategic Timing</h3>
            <p className="text-muted leading-relaxed">Actions consume time and energy. Plan your moves wisely—rushing leads to mistakes, patience brings rewards.</p>
          </div>

          <div className="group bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 card-hover">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Dynamic Economy</h3>
            <p className="text-muted leading-relaxed">Trade weapons, drugs, properties, and information. Market fluctuations and player-driven economy create endless opportunities.</p>
          </div>

          <div className="group bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-500 card-hover">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">👥</div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Gang Communities</h3>
            <p className="text-muted leading-relaxed">Join or create gangs, form alliances, and build lasting relationships. Social dynamics drive the underworld.</p>
          </div>

          <div className="group bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-secondary/50 transition-all duration-500 card-hover">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚔️</div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Player vs Player</h3>
            <p className="text-muted leading-relaxed">Challenge other players to fights, heists, or turf wars. Every confrontation is a test of skill and preparation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}