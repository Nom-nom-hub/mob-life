export default function StatsSection() {
  return (
    <section className="relative py-32 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 glow-secondary">
            Mob-Life by Numbers
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Growing stronger every day
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary glow mb-4">1.2K</div>
            <div className="text-muted">Active Characters</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-secondary glow-secondary mb-4">300+</div>
            <div className="text-muted">Gangs Formed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-4">50K+</div>
            <div className="text-muted">Crimes Committed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary glow mb-4">24/7</div>
            <div className="text-muted">World Online</div>
          </div>
        </div>
      </div>
    </section>
  );
}