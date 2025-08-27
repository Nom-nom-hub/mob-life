# Mob-Life Backend

Backend server for the Mob-Life multiplayer mafia game built with Node.js, Express, and Socket.IO.

## 🎮 About

This is the server-side component of Mob-Life, handling:
- Real-time multiplayer game sessions
- WebSocket communication for live game events
- Game state management and persistence
- Player authentication and session handling
- Room/lobby management for game matchmaking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- TypeScript (installed globally or via npx)

### Installation

```bash
cd backend
npm install
```

### Development

```bash
npx ts-node-dev src/index.ts
```

The server will start on `http://localhost:3001` with hot reload enabled.

### Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── index.ts          # Main server entry point
│   ├── controllers/      # Route handlers (planned)
│   ├── models/          # Data models (planned)
│   ├── services/        # Business logic (planned)
│   └── sockets/         # WebSocket event handlers (planned)
├── package.json
├── tsconfig.json
└── README.md
```

## 🔌 WebSocket Events

### Current Implementation
- `connection` - Player connects to server
- `joinGame` - Join/create game room
- `chatMessage` - Send chat messages

### Planned Events
- `gameStart` - Initialize game session
- `playerAction` - Submit night actions
- `vote` - Submit day votes
- `gameState` - Broadcast game state updates
- `phaseChange` - Day/night phase transitions
- `disconnect` - Handle player disconnections

### Event Format
```typescript
// Example event structure
socket.emit('joinGame', {
  gameId: string,
  userId: string
});

socket.on('playerJoined', {
  userId: string,
  gameId: string
});
```

## 🎯 Game Logic

### Current Features
- Basic Socket.IO server setup
- Room-based multiplayer support
- Real-time chat system
- Player connection management

### Planned Features
- Game state management
- Role assignment system
- Action validation and resolution
- Turn-based mechanics
- Win condition checking
- Persistent game sessions

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Real-time**: Socket.IO
- **Language**: TypeScript
- **Development**: ts-node-dev (hot reload)
- **Linting**: ESLint (planned)

## 📝 Development Guidelines

### Code Organization
- Place Socket.IO event handlers in `src/sockets/`
- Use controllers for HTTP routes (when added)
- Keep business logic in services layer
- Use shared types from `shared/` directory

### Event Handling
- Validate all incoming data
- Handle errors gracefully
- Broadcast events to appropriate rooms
- Maintain game state consistency

### TypeScript
- Use strict type checking
- Import shared types from `../shared/gameTypes`
- Define clear interfaces for all data structures

## 🔧 Configuration

### Environment Variables (Planned)
```bash
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### TypeScript Configuration
- Target: ES2020
- Module: CommonJS
- Strict type checking enabled
- Decorators enabled for future features

## 🧪 Testing

Testing framework setup planned:
- Jest for unit tests
- Supertest for API testing
- Socket.IO testing utilities

## 🚀 Deployment

### Development
- Runs on `http://localhost:3001`
- Hot reload with ts-node-dev
- CORS configured for frontend

### Production (Future)
- Deploy to services like Railway, Render, or AWS
- Environment-based configuration
- Process management with PM2
- Database integration for persistence

## 📚 API Reference

### WebSocket Events

#### Connection Events
- `connection` - New client connection
- `disconnect` - Client disconnection

#### Game Events
- `joinGame` - Join or create game room
- `chatMessage` - Send chat message
- `leaveGame` - Leave current game (planned)

### Shared Types
```typescript
import { PlayerAction } from '../../shared/gameTypes';

// Use shared interfaces for type safety
interface GameRoom {
  id: string;
  players: Player[];
  gameState: GameState;
}
```

## 🤝 Contributing

See the main [FEATURE_MAP.md](../FEATURE_MAP.md) for backend-specific assignments and development workflow.

### Backend Team Focus
- Dev3: Core game logic and state management
- Dev4: Day/night cycle and turn mechanics
- Dev5: Action system and validation
- Dev6: Chat system and real-time features

## 📄 Related Documentation

- [Root README](../README.md) - Project overview
- [Feature Map](../FEATURE_MAP.md) - Development roadmap
- [Frontend README](../frontend/README.md) - Client documentation
- [Shared Types](../shared/gameTypes.ts) - Type definitions

## 🔍 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Find process using port 3001
lsof -i :3001
# Kill the process
kill -9 <PID>
```

**WebSocket connection fails**
- Ensure frontend is running on correct port
- Check CORS configuration
- Verify Socket.IO client version compatibility

**Type errors**
- Run `npm run build` to check TypeScript compilation
- Ensure shared types are properly imported
- Check tsconfig.json for correct paths

---

**Ready to build the backend engine for Mob-Life? Check the [FEATURE_MAP.md](../FEATURE_MAP.md) for your assignments!**