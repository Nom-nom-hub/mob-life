'use client';

import { useGame } from '../../contexts/GameContext';
import GameLobby from '../../components/GameLobby';
import { useState, useEffect } from 'react';

export default function PlayPage() {
  const { state } = useGame();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatches
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Show connection status overlay
  const connectionStatus = (
    <div className="fixed top-4 right-4 z-50">
      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
        state.isConnected
          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
          : 'bg-red-500/10 text-red-400 border border-red-500/20'
      }`}>
        <span className={`w-2 h-2 rounded-full mr-2 inline-block ${
          state.isConnected ? 'bg-green-400' : 'bg-red-400'
        }`}></span>
        {state.isConnected ? 'Connected' : 'Disconnected'}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {connectionStatus}

      {/* Header with back navigation */}
      <div className="relative z-10 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.history.back()}
                className="text-muted hover:text-foreground transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
              </button>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-background font-bold text-lg">M</span>
                </div>
                <span className="text-2xl font-bold glow bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Mob-Life Game
                </span>
              </div>
            </div>

            {state.currentUser && (
              <div className="text-right">
                <p className="text-sm text-muted">Playing as</p>
                <p className="font-semibold text-primary">{state.currentUser.username}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main game area */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        <GameLobby />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-card/50 backdrop-blur-sm py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted">
            Phase 1 - Core Multiplayer Infrastructure
            {process.env.NODE_ENV === 'development' && ' · Development Mode'}
          </p>
        </div>
      </footer>
    </div>
  );
}