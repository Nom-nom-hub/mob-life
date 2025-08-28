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
          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 relative">
            <div className="absolute top-3 right-3 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-medium">
              🔥 LATEST UPDATE
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">🎯</div>
            <h3 className="font-bold mb-2 text-green-400">Phase 1: Foundation & Core Multiplayer</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Complete multiplayer infrastructure with AI integration and persistent gameplay.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ✅ Next.js + TypeScript setup (frontend)</li>
              <li>• ✅ Landing page & components</li>
              <li>• ✅ <strong>TypeORM database schema</strong> (10 entities)</li>
              <li>• ✅ <strong>Multi-provider AI service</strong> (Ollama/Gemini/OpenAI)</li>
              <li>• ✅ <strong>Socket.IO integration</strong> (frontend + backend)</li>
              <li>• ✅ Game room creation/joining (6–10 players)</li>
              <li>• ✅ Real-time multiplayer UI foundation</li>
              <li>• 🔄 Player registration & profiles (database ready)</li>
              <li>• 🔄 Basic roles & gang assignment (schema complete)</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-green-400 h-2 rounded-full w-[95%]"></div>
            </div>
            <span className="text-xs text-green-400 font-semibold">Priority: 10/10 • <span className="text-green-500">95% Complete</span> • Major Update: AI + TypeORM Integrated</span>
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

          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-purple-500/30 relative">
            <div className="absolute top-3 right-3 bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full font-medium">
              🤖 AI-ENHANCED
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">🧠</div>
            <h3 className="font-bold mb-2 text-purple-400">Phase 6: Missions & Events + AI</h3>
            <p className="text-sm text-muted mb-3"><strong>Goal:</strong> Add depth with AI-generated dynamic content and immersive PvE.</p>
            <ul className="text-xs text-muted space-y-1 mb-4">
              <li>• ⏳ <strong>AI-generated crime stories</strong> (unique per player)</li>
              <li>• ⏳ <strong>Personality-driven NPCs</strong> with contextual dialogue</li>
              <li>• ⏳ Story-driven missions with branching narratives</li>
              <li>• ⏳ Dynamic city events (ML-predicted based on player actions)</li>
              <li>• ⏳ NPC gangs with adaptive AI behaviors</li>
              <li>• ⏳ Seasonal/timed events with procedural content</li>
            </ul>
            <div className="w-full bg-border rounded-full h-2 mb-2">
              <div className="bg-purple-400 h-2 rounded-full w-[30%]"></div>
            </div>
            <span className="text-xs text-purple-400">Priority: 9/10 • Unique AI-Driven Content • Multi-Provider Support (Ollama/Gemini/OpenAI)</span>
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