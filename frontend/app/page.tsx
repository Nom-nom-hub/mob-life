'use client';

import { useState, useEffect } from 'react';
import {
  HeroSection,
  FeaturesSection,
  HowToPlaySection,
  TestimonialsSection,
  RoadmapSection,
  StatsSection
} from '../components';

export default function Home() {
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

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Floating Mafia SVGs Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gun */}
        <div className="absolute top-20 left-10 w-12 h-12 opacity-20 animate-float-slow">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary w-full h-full">
            <path d="M6 4v2h2V4H6zm4 0v2h2V4h-2zm4 0v2h2V4h-2zm4 0v2h2V4h-2zM6 8v2h2V8H6zm4 0v2h2V8h-2zm4 0v2h2V8h-2zm4 0v2h2V8h-2zM6 12v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM4 16h16v4H4v-4z"/>
          </svg>
        </div>

        {/* Drugs/Pill */}
        <div className="absolute top-40 right-20 w-10 h-10 opacity-15 animate-float-reverse" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-secondary w-full h-full">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
          </svg>
        </div>

        {/* Gangster Hat */}
        <div className="absolute bottom-40 left-16 w-14 h-14 opacity-25 animate-float-slow" style={{ animationDelay: '4s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-accent w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>

        {/* Money/Dollar */}
        <div className="absolute top-60 left-1/4 w-11 h-11 opacity-20 animate-float-reverse" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-secondary w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        </div>

        {/* Crown */}
        <div className="absolute bottom-60 right-1/4 w-13 h-13 opacity-18 animate-float-slow" style={{ animationDelay: '3s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary w-full h-full">
            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zM19 19H5v2h14v-2z"/>
          </svg>
        </div>

        {/* Car */}
        <div className="absolute bottom-20 right-10 w-16 h-16 opacity-15 animate-float-reverse" style={{ animationDelay: '5s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-accent w-full h-full">
            <path d="M5 11l2-6h10l2 6v5H5v-5zM3 17h18v2H3v-2zM5 13h14v4H5v-4z"/>
          </svg>
        </div>

        {/* Bottle */}
        <div className="absolute top-80 left-2/3 w-8 h-8 opacity-20 animate-float-slow" style={{ animationDelay: '6s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-muted w-full h-full">
            <path d="M12 2L8 6v12c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V6l-4-4z"/>
          </svg>
        </div>

        {/* Gangster Silhouette */}
        <div className="absolute top-32 left-2/3 w-15 h-15 opacity-12 animate-float-reverse" style={{ animationDelay: '7s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary w-full h-full">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.7 13.7 12 12 12S9 10.7 9 9V7H3V9C3 12.3 5.7 15 9 15V16H8V18H16V16H15V15C18.3 15 21 12.3 21 9Z"/>
          </svg>
        </div>

        {/* Suitcase */}
        <div className="absolute bottom-80 left-1/2 w-12 h-12 opacity-18 animate-float-slow" style={{ animationDelay: '8s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-secondary w-full h-full">
            <path d="M9 7h6v2H9V7zm0 4h6v2H9v-2zm2-8h2v6h-2V3zm-2 0H3v18h18V3H9zm16 0v18H5V3h14z"/>
          </svg>
        </div>

        {/* Diamond */}
        <div className="absolute top-20 right-1/3 w-9 h-9 opacity-25 animate-float-reverse" style={{ animationDelay: '9s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-secondary w-full h-full">
            <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="relative border-b border-border bg-card/80 backdrop-blur-md z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 animate-slide-in">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
              <span className="text-background font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold glow bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mob-Life
            </span>
          </div>
          <nav className="flex space-x-6">
            <button className="px-4 py-2 text-muted hover:text-foreground transition-colors hover:scale-105">
              Features
            </button>
            <button className="px-4 py-2 text-muted hover:text-foreground transition-colors hover:scale-105">
              About
            </button>
            <button className="px-6 py-3 btn-primary text-background rounded-lg font-semibold hover:scale-105">
              Play Now
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 z-10">
        <HeroSection />
        <FeaturesSection />
        <HowToPlaySection />
        <TestimonialsSection />
        <RoadmapSection />
        <StatsSection />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border bg-card/80 backdrop-blur-md py-12 px-6 z-10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
              <span className="text-background font-bold text-sm">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mob-Life
            </span>
          </div>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            "Once you taste power, there's no going back. Welcome to the family."
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="text-muted hover:text-primary transition-colors hover:scale-105">Privacy Policy</a>
            <a href="#" className="text-muted hover:text-primary transition-colors hover:scale-105">Terms of Service</a>
            <a href="#" className="text-muted hover:text-primary transition-colors hover:scale-105">Support</a>
            <a href="#" className="text-muted hover:text-secondary transition-colors hover:scale-105">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
