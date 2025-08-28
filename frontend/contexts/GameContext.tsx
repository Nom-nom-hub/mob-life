'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import socketService, { GameMessage, GameRoom, Player } from '../services/socketService';

// Game State Types
export interface GameState {
  // Connection
  isConnected: boolean;
  currentUser: Player | null;

  // Game Room
  currentRoom: GameRoom | null;
  roomCode: string | null;

  // Session
  gameSessionId: string | null;
  joinedAt: Date | null;

  // Messages
  messages: GameMessage[];

  // Game State
  gameStarted: boolean;
  gamePhase: 'lobby' | 'playing' | 'ended';
  dayNumber: number;

  // Players
  players: Player[];

  // UI State
  loading: boolean;
  error: string | null;
}

// Game Actions
type GameAction =
  | { type: 'SOCKET_CONNECTED'; payload: { socketId: string } }
  | { type: 'SOCKET_DISCONNECTED' }
  | { type: 'USER_LOGIN'; payload: Player }
  | { type: 'GAME_ROOM_JOINED'; payload: { room: GameRoom; sessionId: string } }
  | { type: 'GAME_ROOM_LEFT' }
  | { type: 'ROOM_UPDATED'; payload: GameRoom }
  | { type: 'PLAYER_JOINED'; payload: Player }
  | { type: 'PLAYER_LEFT'; payload: string }
  | { type: 'MESSAGE_RECEIVED'; payload: GameMessage }
  | { type: 'GAME_STARTED'; payload: { dayNumber: number } }
  | { type: 'GAME_ENDED' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CLEAR_MESSAGES' };

// Initial State
const initialState: GameState = {
  isConnected: false,
  currentUser: null,
  currentRoom: null,
  roomCode: null,
  gameSessionId: null,
  joinedAt: null,
  messages: [],
  gameStarted: false,
  gamePhase: 'lobby',
  dayNumber: 1,
  players: [],
  loading: false,
  error: null,
};

// Reducer
function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SOCKET_CONNECTED':
      return {
        ...state,
        isConnected: true,
      };

    case 'SOCKET_DISCONNECTED':
      return {
        ...state,
        isConnected: false,
        gamePhase: 'lobby',
        currentRoom: null,
        roomCode: null,
      };

    case 'USER_LOGIN':
      return {
        ...state,
        currentUser: action.payload,
      };

    case 'GAME_ROOM_JOINED':
      return {
        ...state,
        currentRoom: action.payload.room,
        roomCode: action.payload.room.code,
        gameSessionId: action.payload.sessionId,
        joinedAt: new Date(),
        gamePhase: 'lobby',
        players: [], // Reset players for new room
        messages: [], // Reset messages for new room
      };

    case 'GAME_ROOM_LEFT':
      return {
        ...state,
        currentRoom: null,
        roomCode: null,
        gameSessionId: null,
        joinedAt: null,
        gamePhase: 'lobby',
        players: [],
        messages: [],
      };

    case 'ROOM_UPDATED':
      return {
        ...state,
        currentRoom: action.payload,
      };

    case 'PLAYER_JOINED':
      return {
        ...state,
        players: [...state.players, action.payload],
      };

    case 'PLAYER_LEFT':
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.payload),
      };

    case 'MESSAGE_RECEIVED':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case 'GAME_STARTED':
      return {
        ...state,
        gameStarted: true,
        gamePhase: 'playing',
        dayNumber: action.payload.dayNumber,
      };

    case 'GAME_ENDED':
      return {
        ...state,
        gameStarted: false,
        gamePhase: 'ended',
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: [],
      };

    default:
      return state;
  }
}

// Context
interface GameContextType {
  state: GameState;
  actions: {
    connect: () => Promise<void>;
    disconnect: () => void;
    login: (username: string) => void;
    createGame: (username: string) => Promise<string>;
    joinGame: (roomCode: string, username: string) => Promise<void>;
    leaveGame: () => void;
    sendMessage: (message: string) => void;
    startGame: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    clearError: () => void;
  };
}

// Create Context
const GameContext = createContext<GameContextType | undefined>(undefined);

// Provider Component
interface GameProviderProps {
  children: ReactNode;
}

export function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Socket event handlers
  useEffect(() => {
    if (!state.isConnected) return;

    const unsubscribeMessage = socketService.onMessage((message) => {
      dispatch({ type: 'MESSAGE_RECEIVED', payload: message });
    });

    const unsubscribePlayerJoin = socketService.onPlayerJoin((data) => {
      const player: Player = {
        id: data.userId,
        username: data.username,
        level: data.level || 1,
        status: 'active',
        gangRole: data.gangRole,
      };
      dispatch({ type: 'PLAYER_JOINED', payload: player });
    });

    // Note: onPlayerLeave not yet implemented in socket service
    const unsubscribePlayerLeave = () => {};

    return () => {
      unsubscribeMessage();
      unsubscribePlayerJoin?.();
      unsubscribePlayerLeave?.();
    };
  }, [state.isConnected]);

  // Actions
  const actions = {
    connect: async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        await socketService.connect();
        dispatch({ type: 'SOCKET_CONNECTED', payload: { socketId: socketService.socketId! } });
        dispatch({ type: 'SET_LOADING', payload: false });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Connection failed' });
      }
    },

    disconnect: () => {
      socketService.disconnect();
      dispatch({ type: 'SOCKET_DISCONNECTED' });
    },

    login: (username: string) => {
      const user: Player = {
        id: socketService.socketId || '',
        username,
        level: 1,
        status: 'active',
      };
      dispatch({ type: 'USER_LOGIN', payload: user });
    },

    createGame: async (username: string): Promise<string> => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const userId = socketService.socketId!;
        const gameCode = await socketService.createGame(userId, username);
        actions.login(username);
        dispatch({ type: 'SET_LOADING', payload: false });
        return gameCode;
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to create game' });
        throw error;
      }
    },

    joinGame: async (roomCode: string, username: string): Promise<void> => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const userId = socketService.socketId!;
        await socketService.joinGame(roomCode, userId, username);
        actions.login(username);
        dispatch({ type: 'SET_LOADING', payload: false });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to join game' });
        throw error;
      }
    },

    leaveGame: () => {
      dispatch({ type: 'GAME_ROOM_LEFT' });
    },

    sendMessage: (message: string) => {
      if (state.currentUser) {
        socketService.sendMessage(
          state.currentRoom?.id || '',
          message,
          state.currentUser.id,
          state.currentUser.username
        );
      }
    },

    startGame: () => {
      dispatch({ type: 'GAME_STARTED', payload: { dayNumber: 1 } });
    },

    setLoading: (loading: boolean) => {
      dispatch({ type: 'SET_LOADING', payload: loading });
    },

    setError: (error: string | null) => {
      dispatch({ type: 'SET_ERROR', payload: error });
    },

    clearError: () => {
      dispatch({ type: 'SET_ERROR', payload: null });
    },
  };

  const contextValue: GameContextType = {
    state,
    actions,
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
}

// Custom Hook
export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}

export default GameContext;