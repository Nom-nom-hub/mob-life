'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative flex-1 flex items-center justify-center px-6 py-20 z-10">
      <div className="text-center max-w-5xl animate-slide-in">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 border border-primary/30">
            🚀 Now in Development
          </span>
        </div>

        <h1
          className="text-7xl md:text-9xl font-black mb-8 glow leading-tight"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        >
          MOB<span className="gradient-text">-LIFE</span>
        </h1>

        <p className="text-xl md:text-3xl text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
          Rise through the ranks in this <span className="text-primary font-bold">persistent text-based MMORPG</span>.
          Build your criminal empire through strategic decisions, resource management, and underworld alliances.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="/play">
            <button
              className="group px-10 py-5 btn-primary text-background rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="flex items-center space-x-3">
                <span>{isHovered ? '♠️' : '🎮'}</span>
                <span>{isHovered ? 'ENTER THE GAME' : 'ENTER THE GAME'}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </Link>
          <button className="px-10 py-5 border-2 border-border hover:bg-card/50 text-foreground rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            View World Stats
          </button>
        </div>

        {/* Enhanced Game Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
            <div className="text-4xl mb-3">🌍</div>
            <div className="text-3xl font-bold text-secondary glow-secondary mb-2">24/7</div>
            <div className="text-muted font-medium">Persistent World</div>
          </div>
          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
            <div className="text-4xl mb-3">📊</div>
            <div className="text-3xl font-bold text-primary glow mb-2">Stats</div>
            <div className="text-muted font-medium">Progression System</div>
          </div>
          <div className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 card-hover">
            <div className="text-4xl mb-3">👥</div>
            <div className="text-3xl font-bold text-accent mb-2">Community</div>
            <div className="text-muted font-medium">Gang Alliances</div>
          </div>
        </div>
      </div>
    </main>
  );
}