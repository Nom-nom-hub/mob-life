'use client';

import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';

interface GameLobbyProps {
  className?: string;
}

export default function GameLobby({ className = '' }: GameLobbyProps) {
  const { state, actions } = useGame();
  const [username, setUsername] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      actions.clearError();
      await actions.connect();
    } catch (error) {
      console.error('Connection failed:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleCreateGame = async () => {
    if (!username.trim()) {
      actions.setError('Please enter a username');
      return;
    }

    try {
      actions.clearError();
      await actions.createGame(username.trim());
    } catch (error) {
      actions.setError(error instanceof Error ? error.message : 'Failed to create game');
    }
  };

  const handleJoinGame = async () => {
    if (!username.trim()) {
      actions.setError('Please enter a username');
      return;
    }

    if (!roomCode.trim()) {
      actions.setError('Please enter a room code');
      return;
    }

    try {
      actions.clearError();
      await actions.joinGame(roomCode.trim().toUpperCase(), username.trim());
    } catch (error) {
      actions.setError(error instanceof Error ? error.message : 'Failed to join game');
    }
  };

  // Show connection screen if not connected
  if (!state.isConnected) {
    return (
      <div className={`max-w-md mx-auto p-6 border border-border rounded-lg bg-card ${className}`}>
        <h2 className="text-2xl font-bold text-center mb-6">
          Connect to Game Server
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Your Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleConnect();
              }}
            />
          </div>

          <button
            onClick={handleConnect}
            disabled={!username.trim() || isConnecting}
            className="w-full px-4 py-3 bg-primary text-background rounded-md font-semibold hover:bg-primary-dark disabled:bg-muted disabled:cursor-not-allowed transition-colors"
          >
            {isConnecting ? 'Connecting...' : 'Connect to Server'}
          </button>
        </div>

        {state.error && (
          <div className="mt-4 p-3 bg-destructive/10 border border-destructive rounded-md">
            <p className="text-sm text-destructive">{state.error}</p>
          </div>
        )}
      </div>
    );
  }

  // Show game creation options
  if (!state.currentRoom) {
    return (
      <div className={`max-w-2xl mx-auto p-6 border border-border rounded-lg bg-card ${className}`}>
        <h2 className="text-2xl font-bold text-center mb-6">
          Mob-Life Mafia Game
        </h2>
        <p className="text-muted text-center mb-8">
          Join the criminal underworld and build your empire
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Create Game */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Create New Game</h3>
            <div className="flex flex-col space-y-2">
              <label htmlFor="create-username" className="text-sm font-medium">
                Your Username
              </label>
              <input
                id="create-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCreateGame();
                }}
              />
            </div>
            <button
              onClick={handleCreateGame}
              disabled={!username.trim() || state.loading}
              className="w-full px-4 py-3 bg-primary text-background rounded-md font-semibold hover:bg-primary-dark disabled:bg-muted disabled:cursor-not-allowed transition-colors"
            >
              {state.loading ? 'Creating Game...' : 'Create Game'}
            </button>
          </div>

          {/* Join Game */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Join Existing Game</h3>
            <div className="space-y-2">
              <input
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                placeholder="Enter room code (ABC123)"
                className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={6}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleJoinGame();
                }}
              />
              <button
                onClick={handleJoinGame}
                disabled={!roomCode.trim() || !username.trim() || state.loading}
                className="w-full px-4 py-3 bg-secondary text-background rounded-md font-semibold hover:bg-secondary-dark disabled:bg-muted disabled:cursor-not-allowed transition-colors"
              >
                {state.loading ? 'Joining...' : 'Join Game'}
              </button>
            </div>
          </div>
        </div>

        {state.error && (
          <div className="mt-6 p-3 bg-destructive/10 border border-destructive rounded-md">
            <p className="text-sm text-destructive">{state.error}</p>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-muted">Connected to server ✓</p>
        </div>
      </div>
    );
  }

  // Show game room lobby
  return (
    <div className={`max-w-4xl mx-auto p-6 border border-border rounded-lg bg-card ${className}`}>
      {/* Room Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">
          Game Room: {state.roomCode}
        </h2>
        <p className="text-muted">
          {state.players.length}/{state.currentRoom?.maxPlayers || 6} players
        </p>
        <p className="text-sm text-muted font-mono bg-muted/50 px-2 py-1 rounded inline-block">
          {state.currentRoom?.hostName === state.currentUser?.username ? 'Host' : 'Player'}
        </p>
      </div>

      {/* Players Grid */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Players</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {state.players.map((player) => (
            <div
              key={player.id}
              className="p-3 border border-border rounded-md bg-muted/20"
            >
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  player.status === 'active' ? 'bg-green-500' :
                  player.status === 'dead' ? 'bg-red-500' :
                  player.status === 'hospitalized' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`} />
                <span className="font-medium">{player.username}</span>
              </div>
              <div className="text-xs text-muted mt-1">
                Level {player.level}
                {player.status !== 'active' && ` • ${player.status}`}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Game Status */}
      {!state.gameStarted && state.players.length > 1 && (
        <div className="text-center mb-6">
          <button
            onClick={actions.startGame}
            className="px-6 py-3 bg-primary text-background rounded-md font-semibold hover:bg-primary-dark transition-colors"
            disabled={state.currentRoom?.hostName !== state.currentUser?.username}
          >
            {state.currentRoom?.hostName === state.currentUser?.username ? 'Start Game' : 'Waiting for host to start'}
          </button>
        </div>
      )}

      {/* Game Phase Display */}
      {state.gameStarted && (
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary rounded-full">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-primary font-semibold">
              Day {state.dayNumber} - Game In Progress
            </span>
          </div>
        </div>
      )}

      {/* Room Code Display */}
      <div className="text-center">
        <p className="text-sm text-muted">
          Room Code: <span className="font-mono bg-muted px-2 py-1 rounded">{state.roomCode}</span>
        </p>
      </div>

      {state.error && (
        <div className="mt-4 p-3 bg-destructive/10 border border-destructive rounded-md">
          <p className="text-sm text-destructive">{state.error}</p>
        </div>
      )}
    </div>
  );
}