export default function HowToPlaySection() {
  return (
    <section className="relative py-32 px-6 z-10 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 glow">
            Your Journey to Power
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            From street hustler to underworld legend in a persistent text-based world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-lg">1</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary">Create Your Character</h3>
                <p className="text-muted">Choose your background, name, and starting specialization. Your journey begins in the criminal underworld.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-background font-bold text-lg">2</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-secondary">Level Up Your Skills</h3>
                <p className="text-muted">Complete jobs, crimes, and missions to gain experience, money, and reputation in the underworld.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-background font-bold text-lg">3</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-accent">Build Your Crew</h3>
                <p className="text-muted">Recruit gang members, establish territories, and create your criminal network through strategic alliances.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-lg">4</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary">Rule the Underworld</h3>
                <p className="text-muted">Expand your empire, challenge rivals, and become the most feared name in the criminal world.</p>
              </div>
            </div>
          </div>

          <div className="bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center glow-secondary">Gameplay Systems</h3>
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-bold text-primary mb-2">Stat Progression</h4>
                <p className="text-sm text-muted">Level up strength, intelligence, charisma, and criminal skills through gameplay.</p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <h4 className="font-bold text-secondary mb-2">Energy System</h4>
                <p className="text-sm text-muted">Actions consume energy/stamina. Plan carefully and manage your resources.</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <h4 className="font-bold text-accent mb-2">Market Dynamics</h4>
                <p className="text-sm text-muted">Buy/sell weapons, drugs, properties. Prices fluctuate based on player activity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}