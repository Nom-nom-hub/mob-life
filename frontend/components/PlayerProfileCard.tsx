'use client';

import React from 'react';

interface PlayerProps {
  id: string;
  username: string;
  level: number;
  status: 'active' | 'dead' | 'jailed' | 'hospitalized';
  gangRole?: 'don' | 'underboss' | 'soldier' | 'civilian';
  experience?: number;
  money?: number;
  energy?: number;
  reputation?: number;
  gangName?: string;
  isCurrentPlayer?: boolean;
  className?: string;
}

export default function PlayerProfileCard({
  id,
  username,
  level,
  status,
  gangRole,
  experience = 0,
  money = 0,
  energy = 100,
  reputation = 0,
  gangName,
  isCurrentPlayer = false,
  className = ''
}: PlayerProps) {
  // Status indicators
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'hospitalized': return 'text-yellow-400 bg-yellow-500/20';
      case 'jailed': return 'text-orange-400 bg-orange-500/20';
      case 'dead': return 'text-red-400 bg-red-500/20';
      default: return 'text-muted bg-muted/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return '🔹';
      case 'hospitalized': return '🏥';
      case 'jailed': return '🔒';
      case 'dead': return '💀';
      default: return '❓';
    }
  };

  const getRoleIcon = (role?: string) => {
    switch (role) {
      case 'don': return '👑';
      case 'underboss': return '🎩';
      case 'soldier': return '🔫';
      case 'civilian': return '👤';
      default: return '🔹';
    }
  };

  const getRoleColor = (role?: string) => {
    switch (role) {
      case 'don': return 'text-purple-400 bg-purple-500/20';
      case 'underboss': return 'text-blue-400 bg-blue-500/20';
      case 'soldier': return 'text-red-400 bg-red-500/20';
      case 'civilian': return 'text-muted bg-muted/20';
      default: return 'text-muted bg-muted/20';
    }
  };

  return (
    <div className={`bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 ${className}`}>
      {/* Header with name and status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
            gangRole ? getRoleColor(gangRole) : 'bg-muted text-muted-foreground'
          }`}>
            {getRoleIcon(gangRole)}
          </div>
          <div>
            <h3 className="font-bold text-lg flex items-center space-x-2">
              <span>{username}</span>
              {isCurrentPlayer && <span className="text-primary text-sm">(You)</span>}
            </h3>
            {gangName && (
              <p className="text-sm text-muted">
                Member of <span className="text-secondary font-semibold">{gangName}</span>
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            <span className="mr-1">{getStatusIcon(status)}</span>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
      </div>

      {/* Role Badge */}
      {gangRole && (
        <div className="mb-4">
          <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium ${getRoleColor(gangRole)}`}>
            <span>{getRoleIcon(gangRole)}</span>
            <span>{gangRole.charAt(0).toUpperCase() + gangRole.slice(1)}</span>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-muted/30 p-3 rounded-lg">
          <div className="text-sm text-muted mb-1">Level</div>
          <div className="text-2xl font-bold text-primary">{level}</div>
        </div>

        <div className="bg-muted/30 p-3 rounded-lg">
          <div className="text-sm text-muted mb-1">Experience</div>
          <div className="text-xl font-semibold text-secondary">
            {experience.toLocaleString()}
          </div>
        </div>

        <div className="bg-muted/30 p-3 rounded-lg">
          <div className="text-sm text-muted mb-1">Money</div>
          <div className="text-lg font-semibold text-secondary flex items-center">
            <span className="mr-1">💵</span>
            ${money.toLocaleString()}
          </div>
        </div>

        <div className="bg-muted/30 p-3 rounded-lg">
          <div className="text-sm text-muted mb-1">Energy</div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-muted rounded-full h-2">
              <div
                className="bg-secondary h-2 rounded-full transition-all"
                style={{ width: `${Math.max(0, Math.min(100, energy))}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium">{energy}/100</span>
          </div>
        </div>
      </div>

      {/* Reputation Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted">Reputation</span>
          <span className="text-sm font-medium text-secondary">
            {reputation >= 0 ? '+' : ''}{reputation}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              reputation >= 0 ? 'bg-green-400' : 'bg-red-400'
            }`}
            style={{ width: `${Math.max(10, Math.min(100, Math.abs(reputation)))}%` }}
          ></div>
        </div>
      </div>

      {/* Action buttons for current player */}
      {isCurrentPlayer && (
        <div className="flex space-x-2">
          <button className="flex-1 px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-md text-sm font-medium transition-colors">
            Edit Profile
          </button>
          <button className="flex-1 px-3 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-md text-sm font-medium transition-colors">
            View Stats
          </button>
        </div>
      )}

      {/* Quick actions for other players */}
      {!isCurrentPlayer && (
        <div className="flex space-x-2">
          <button className="flex-1 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-md text-sm font-medium transition-colors">
            Send Message
          </button>
          <button className="flex-1 px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-md text-sm font-medium transition-colors">
            View Profile
          </button>
        </div>
      )}
    </div>
  );
}

// Compact version for player lists
interface CompactPlayerCardProps {
  player: PlayerProps;
  showRole?: boolean;
  showStatus?: boolean;
}

export function CompactPlayerCard({
  player,
  showRole = true,
  showStatus = true
}: CompactPlayerCardProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border/50">
      <div className="flex items-center space-x-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
          player.gangRole ? player.gangRole === 'don' ? 'bg-purple-500/20 text-purple-400' :
          player.gangRole === 'underboss' ? 'bg-blue-500/20 text-blue-400' :
          player.gangRole === 'soldier' ? 'bg-red-500/20 text-red-400' :
          'bg-muted text-muted-foreground' : 'bg-muted text-muted-foreground'
        }`}>
          {player.gangRole === 'don' ? '👑' :
           player.gangRole === 'underboss' ? '🎩' :
           player.gangRole === 'soldier' ? '🔫' : '👤'}
        </div>
        <div>
          <div className="font-semibold text-sm flex items-center space-x-1">
            <span>{player.username}</span>
            {player.isCurrentPlayer && <span className="text-primary text-xs">(You)</span>}
          </div>
          {showRole && player.gangRole && (
            <div className="text-xs text-muted capitalize">{player.gangRole}</div>
          )}
        </div>
      </div>

      {showStatus && (
        <div className={`px-2 py-1 rounded-full text-xs ${
          player.status === 'active' ? 'bg-green-500/20 text-green-400' :
          player.status === 'hospitalized' ? 'bg-yellow-500/20 text-yellow-400' :
          player.status === 'jailed' ? 'bg-orange-500/20 text-orange-400' :
          'bg-red-500/20 text-red-400'
        }`}>
          {player.status === 'active' ? 'Online' :
           player.status === 'hospitalized' ? 'Hospital' :
           player.status === 'jailed' ? 'Jailed' : 'Dead'}
        </div>
      )}
    </div>
  );
}

// Empty line at end of file