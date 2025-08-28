import { io, Socket } from 'socket.io-client';

export interface GameMessage {
  id: string;
  senderId: string;
  senderName: string;
  type: 'global' | 'gang' | 'private' | 'system';
  content: string;
  timestamp: Date;
}

export interface GameRoom {
  id: string;
  code: string;
  hostName: string;
  maxPlayers: number;
  currentPlayerCount: number;
  status: 'waiting' | 'in_progress' | 'finished' | 'cancelled';
  createdAt: Date;
}

export interface Player {
  id: string;
  username: string;
  level: number;
  status: 'active' | 'dead' | 'jailed' | 'hospitalized';
  gangRole?: string;
}

export interface GameSession {
  userId: string;
  username: string;
  socketId: string;
  joinedAt: Date;
}

class SocketService {
  private socket: Socket | null = null;
  private connectionPromise: Promise<void> | null = null;
  private messageCallbacks: Set<(message: GameMessage) => void> = new Set();
  private playerJoinCallbacks: Set<(data: any) => void> = new Set();
  private gameStateCallbacks: Set<(state: any) => void> = new Set();

  async connect(): Promise<void> {
    if (this.socket?.connected) {
      return Promise.resolve();
    }

    if (this.connectionPromise) {
      return this.connectionPromise;
    }

    this.connectionPromise = new Promise<void>((resolve, reject) => {
      try {
        this.socket = io('http://localhost:3001', {
          autoConnect: true,
          reconnection: true,
          reconnectionAttempts: 5,
          reconnectionDelay: 1000,
        });

        this.socket.on('connect', () => {
          console.log('Connected to game server:', this.socket!.id);
          resolve();
        });

        this.socket.on('connect_error', (error) => {
          console.error('Connection error:', error);
          reject(error);
        });

        this.socket.on('disconnect', (reason) => {
          console.log('Disconnected from game server:', reason);
        });

        // Game event handlers
        this.socket.on('message', (data: GameMessage) => {
          this.messageCallbacks.forEach(callback => callback(data));
        });

        this.socket.on('playerJoined', (data) => {
          console.log('Player joined:', data);
          this.playerJoinCallbacks.forEach(callback => callback(data));
        });

        this.socket.on('playerLeft', (data) => {
          console.log('Player left:', data);
        });

        this.socket.on('gameStarted', (data) => {
          this.gameStateCallbacks.forEach(callback => callback(data));
        });

        this.socket.on('gameEnded', (data) => {
          this.gameStateCallbacks.forEach(callback => callback(data));
        });

      } catch (error) {
        this.connectionPromise = null;
        reject(error);
      }
    });

    return this.connectionPromise;
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.connectionPromise = null;
    }
  }

  // Message subscription methods
  onMessage(callback: (message: GameMessage) => void): () => void {
    this.messageCallbacks.add(callback);
    return () => this.messageCallbacks.delete(callback);
  }

  onPlayerJoin(callback: (data: any) => void): () => void {
    this.playerJoinCallbacks.add(callback);
    return () => this.playerJoinCallbacks.delete(callback);
  }

  onGameStateChange(callback: (state: any) => void): () => void {
    this.gameStateCallbacks.add(callback);
    return () => this.gameStateCallbacks.delete(callback);
  }

  // Game room actions
  async createGame(userId: string, username: string): Promise<string> {
    await this.ensureConnected();
    return new Promise((resolve, reject) => {
      const gameCode = this.generateGameCode();

      this.socket!.emit('createGame', { userId, username, gameCode });

      this.socket!.once('gameCreated', (data: { gameCode: string }) => {
        resolve(data.gameCode);
      });

      this.socket!.once('gameCreationFailed', (error: { message: string }) => {
        reject(new Error(error.message));
      });

      // Timeout after 10 seconds
      setTimeout(() => {
        reject(new Error('Game creation timeout'));
      }, 10000);
    });
  }

  async joinGame(gameCode: string, userId: string, username: string): Promise<void> {
    await this.ensureConnected();

    return new Promise((resolve, reject) => {
      this.socket!.emit('joinGameRoom', { gameCode, userId, username });

      this.socket!.once('roomJoined', () => {
        resolve();
      });

      this.socket!.once('joinFailed', (error: { message: string }) => {
        reject(new Error(error.message));
      });

      // Timeout after 10 seconds
      setTimeout(() => {
        reject(new Error('Join game timeout'));
      }, 10000);
    });
  }

  // Chat actions
  sendMessage(gameRoomId: string, message: string, userId: string, username: string): void {
    if (this.socket?.connected) {
      this.socket.emit('sendMessage', {
        gameRoomId,
        message,
        userId,
        username,
        timestamp: new Date()
      });
    } else {
      console.warn('Socket not connected, cannot send message');
    }
  }

  // Game actions - these will be implemented once we have the backend endpoints
  performAction(actionType: string, targetId: string, details: any): void {
    if (this.socket?.connected) {
      this.socket.emit('action', {
        type: actionType,
        targetId,
        details
      });
    }
  }

  // Utility methods
  private generateGameCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  private async ensureConnected(): Promise<void> {
    if (!this.socket?.connected) {
      await this.connect();
    }
  }

  // Connection status
  get isConnected(): boolean {
    return this.socket?.connected || false;
  }

  get socketId(): string | undefined {
    return this.socket?.id;
  }
}

// Export singleton instance
export const socketService = new SocketService();
export default socketService;