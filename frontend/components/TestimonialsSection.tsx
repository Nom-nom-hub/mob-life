export default function TestimonialsSection() {
  return (
    <section className="relative py-32 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 glow-secondary">
            What Players Are Saying
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Join thousands who have discovered the thrill of organized crime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold mr-4">V</div>
              <div>
                <div className="font-bold">Vinny "The Snake"</div>
                <div className="text-muted text-sm">Brooklyn Boss</div>
              </div>
            </div>
            <p className="text-muted italic">"This game captures the real essence of street-level strategy. Every move feels like you're building a real empire."</p>
            <div className="flex text-secondary mt-4">★★★★★</div>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-background font-bold mr-4">L</div>
              <div>
                <div className="font-bold">Luna "Ice Queen"</div>
                <div className="text-muted text-sm">Chicago Lieutenant</div>
              </div>
            </div>
            <p className="text-muted italic">"The social dynamics are incredible. Forming alliances and watching them crumble is pure addictive drama."</p>
            <div className="flex text-secondary mt-4">★★★★★</div>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-background font-bold mr-4">M</div>
              <div>
                <div className="font-bold">Marco "The Don"</div>
                <div className="text-muted text-sm">Las Vegas Kingpin</div>
              </div>
            </div>
            <p className="text-muted italic">"Finally, a strategy game that understands the psychology of power. Brilliant design, endless replayability."</p>
            <div className="flex text-secondary mt-4">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
}