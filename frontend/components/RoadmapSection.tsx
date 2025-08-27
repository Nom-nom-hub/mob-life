export default function RoadmapSection() {
  return (
    <section className="relative py-32 px-6 z-10 bg-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 glow">
            Development Roadmap
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            What's coming next to your criminal empire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">🏗️</div>
            <h3 className="font-bold mb-2 text-primary">Phase 1: Foundation & Core Multiplayer</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Build the multiplayer infrastructure and basic onboarding.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ✅ Next.js + TypeScript setup</li>
              <li>• ✅ Landing page & components</li>
              <li>• 🔄 Game room creation/joining (6–10 players)</li>
              <li>• 🔄 Socket.IO real-time connection</li>
              <li>• ⏳ Player registration & profiles</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-primary h-2 rounded-full w-3/4"></div>
            </div>
            <span className="text-xs text-primary">Priority: 10/10 • 0–2 weeks</span>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">📊</div>
            <h3 className="font-bold mb-2 text-secondary">Phase 2: Player Progression & Stats</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Implement character development and stats.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ⏳ Player attributes & leveling</li>
              <li>• ⏳ Skill system & special actions</li>
              <li>• ⏳ Persistent inventory</li>
              <li>• ⏳ Gang hierarchy & permissions</li>
              <li>• ⏳ Experience & reputation</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-secondary h-2 rounded-full w-1/4"></div>
            </div>
            <span className="text-xs text-secondary">Priority: 9/10 • 2–4 weeks</span>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">💰</div>
            <h3 className="font-bold mb-2 text-accent">Phase 3: Economy & Resources</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Build a functional in-game economy.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ⏳ Currency & gang funds</li>
              <li>• ⏳ Item trading system</li>
              <li>• ⏳ Businesses & passive income</li>
              <li>• ⏳ Marketplace & banking</li>
              <li>• ⏳ Black market mechanics</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-accent h-2 rounded-full w-0"></div>
            </div>
            <span className="text-xs text-accent">Priority: 8/10 • 3–5 weeks</span>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">💥</div>
            <h3 className="font-bold mb-2 text-primary">Phase 4: Crime & PvP Mechanics</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Implement strategic criminal actions and player conflicts.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ⏳ Night-time crime actions</li>
              <li>• ⏳ Territory control system</li>
              <li>• ⏳ Gang wars & PvP conflicts</li>
              <li>• ⏳ Risk/reward mechanics</li>
              <li>• ⏳ Planning & cooldowns</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-primary h-2 rounded-full w-0"></div>
            </div>
            <span className="text-xs text-primary">Priority: 10/10 • 4–7 weeks</span>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">💬</div>
            <h3 className="font-bold mb-2 text-secondary">Phase 5: Social & Communication</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Enable player interaction and social gameplay.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ⏳ Global & gang chat</li>
              <li>• ⏳ Private messaging</li>
              <li>• ⏳ Gang creation & management</li>
              <li>• ⏳ Voting & leadership</li>
              <li>• ⏳ Reputation system</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-secondary h-2 rounded-full w-0"></div>
            </div>
            <span className="text-xs text-secondary">Priority: 9/10 • 5–8 weeks</span>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">📜</div>
            <h3 className="font-bold mb-2 text-accent">Phase 6: Missions & Events</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Add depth with dynamic content and PvE.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ⏳ Story-driven missions</li>
              <li>• ⏳ Dynamic city events</li>
              <li>• ⏳ NPC gangs with AI</li>
              <li>• ⏳ Seasonal/timed events</li>
              <li>• ⏳ Progression rewards</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-accent h-2 rounded-full w-0"></div>
            </div>
            <span className="text-xs text-accent">Priority: 7/10 • 6–10 weeks</span>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-primary">Phase 7: UI/UX & Accessibility</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Polish the player interface and experience.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ⏳ Responsive design</li>
              <li>• ⏳ Player dashboards</li>
              <li>• ⏳ Status notifications</li>
              <li>• ⏳ Light/dark mode</li>
              <li>• ⏳ Menu-driven navigation</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-primary h-2 rounded-full w-0"></div>
            </div>
            <span className="text-xs text-primary">Priority: 8/10 • 8–12 weeks</span>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">🏆</div>
            <h3 className="font-bold mb-2 text-secondary">Phase 8: Leaderboards & Admin</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Provide competitive metrics and manage the game world.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ⏳ Player/gang leaderboards</li>
              <li>• ⏳ Statistics tracking</li>
              <li>• ⏳ Admin panel & moderation</li>
              <li>• ⏳ Balance adjustment tools</li>
              <li>• ⏳ Player behavior analytics</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-secondary h-2 rounded-full w-0"></div>
            </div>
            <span className="text-xs text-secondary">Priority: 7/10 • 10–14 weeks</span>
          </div>

          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">🚀</div>
            <h3 className="font-bold mb-2 text-accent">Phase 9: Advanced Mechanics</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Add complexity for hardcore players.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ⏳ Strategic alliances</li>
              <li>• ⏳ Branching storylines</li>
              <li>• ⏳ Achievements & cosmetics</li>
              <li>• ⏳ ASCII animations</li>
              <li>• ⏳ Social integrations</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-accent h-2 rounded-full w-0"></div>
            </div>
            <span className="text-xs text-accent">Priority: 6/10 • 12+ weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
}