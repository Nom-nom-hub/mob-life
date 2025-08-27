# Mob-Life Frontend

[![Frontend Status](https://img.shields.io/badge/Frontend-Active-success)](https://github.com/Nom-nom-hub/mob-life)
[![Next.js](https://img.shields.io/badge/Next.js-latest-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![Port](https://img.shields.io/badge/Port-3000-blue)](http://localhost:3000)

Frontend client for the Mob-Life multiplayer mafia game built with the latest Next.js.

## 🎮 About

This is the React frontend for Mob-Life, a real-time multiplayer game where players form gangs, control turf, and engage in strategic crime operations. The frontend handles:

- Game lobby and room management
- Real-time game state display
- Player interactions and chat
- Responsive UI for desktop and mobile
- WebSocket connection to backend game server

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Backend server running (see root README.md)

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Backend Connection

The frontend connects to the backend WebSocket server at `http://localhost:3001`. Make sure the backend is running before starting the frontend.

## 🏗️ Project Structure

```
frontend/
├── app/                 # Next.js app router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
├── services/           # API services and WebSocket handlers
├── public/             # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.ts  # Tailwind CSS configuration
├── postcss.config.mjs
└── eslint.config.mjs
```

## 🎯 Key Features

### Current Implementation
- Next.js 14 with App Router
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling (planned)
- WebSocket integration with backend

### Planned Features
- Game lobby interface
- Real-time game board
- Player chat system
- Turf control map
- Action selection UI
- Voting mechanics
- Responsive mobile design

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow the established ESLint rules
- Use meaningful component and function names
- Keep components modular and reusable

### Component Structure
- Place reusable components in `components/` directory
- Use TypeScript interfaces for props
- Follow Next.js 14 App Router conventions
- Implement proper error boundaries

### State Management
- Use React hooks for local state
- Context API for global game state (planned)
- WebSocket events for real-time updates

## 🎮 Game Integration

### WebSocket Events
The frontend connects to backend Socket.IO events:
- `joinGame` - Join/create game rooms
- `chatMessage` - Real-time chat
- `gameState` - Game state updates (planned)
- `playerAction` - Action submissions (planned)

### Shared Types
Import game types from the `shared/` directory:
```typescript
import { PlayerAction, GameState } from '../../shared/gameTypes';
```

## 🚀 Deployment

### Development
- Runs on `http://localhost:3000`
- Hot reload enabled
- Connects to backend at `http://localhost:3001`

### Production (Future)
- Deploy to Vercel or Netlify
- Environment variables for backend URL
- CDN optimization for assets

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Mob-Life Feature Map](../FEATURE_MAP.md)
- [Root Project README](../README.md)

## 🤝 Contributing

See the main [FEATURE_MAP.md](../FEATURE_MAP.md) for frontend-specific assignments and development workflow.
