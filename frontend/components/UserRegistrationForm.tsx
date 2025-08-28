'use client';

import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';

interface UserRegistrationFormProps {
  onSuccess?: (playerId: string, username: string) => void;
  onCancel?: () => void;
  className?: string;
}

export default function UserRegistrationForm({
  onSuccess,
  onCancel,
  className = ''
}: UserRegistrationFormProps) {
  const { state, actions } = useGame();
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim()) {
      setErrors('Username is required');
      return;
    }

    if (username.length < 3) {
      setErrors('Username must be at least 3 characters');
      return;
    }

    if (username.length > 20) {
      setErrors('Username must be less than 20 characters');
      return;
    }

    try {
      actions.setLoading(true);
      setErrors('');

      // TODO: Connect to backend registration API when DB is ready
      // For now, simulate successful registration
      console.log('User registration:', username);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const playerId = 'player_' + Date.now(); // Temporary ID generation
      const playerData = { id: playerId, username: username.trim(), level: 1, status: 'active' as const };

      actions.login(username.trim());
      onSuccess?.(playerId, username.trim());

    } catch (error) {
      setErrors(error instanceof Error ? error.message : 'Registration failed');
    } finally {
      actions.setLoading(false);
    }
  };

  return (
    <div className={`max-w-md mx-auto p-6 border border-border rounded-lg bg-card/95 backdrop-blur-md ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Enter the Criminal Underworld</h2>
        <p className="text-muted text-sm">Choose a unique username to begin your mafia career</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              Your Underworld Alias
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (errors) setErrors('');
              }}
              placeholder="Enter your username"
              className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors ? 'border-destructive' : 'border-border'
              }`}
              maxLength={20}
              autoComplete="off"
              required
            />
            {errors && (
              <p className="text-destructive text-sm mt-2">{errors}</p>
            )}
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center">
              <span className="mr-2">⚠️</span> Important
            </h4>
            <ul className="text-xs text-muted space-y-1">
              <li>• Username must be 3-20 characters long</li>
              <li>• Your username cannot be changed once registered</li>
              <li>• Use a creative alias that reflects your underworld persona</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 text-muted hover:text-foreground transition-colors"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={!username.trim() || state.loading}
            className="px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:bg-muted disabled:cursor-not-allowed"
          >
            {state.loading ? 'Registering...' : 'Enter Underworld'}
          </button>
        </div>
      </form>
    </div>
  );
}