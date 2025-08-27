# Mob-Life: Gang & Crime Mafia Game

A multiplayer mafia-style game where players form gangs, control turf, and engage in strategic crime operations in a gritty urban setting.

## 🎮 Game Overview

Mob-Life is a real-time multiplayer game featuring:
- **Gang Formation**: Players create or join gangs to control territories
- **Turf Wars**: Strategic battles for neighborhood control
- **Crime Operations**: Night-time actions including hits, protection, and theft
- **Economy System**: Money, drugs, and resource management
- **Political Intrigue**: Voting, alliances, and betrayals

## 🏗️ Project Structure

```
mob-life/
├── backend/           # Node.js/Express backend with Socket.IO
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── frontend/          # Next.js React frontend
│   ├── app/
│   ├── components/
│   ├── services/
│   └── package.json
├── shared/            # Shared TypeScript types and interfaces
│   └── gameTypes.ts
├── .gitignore
└── FEATURE_MAP.md     # Team development guide
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nom-nom-hub/mob-life.git
   cd mob-life
   ```

2. **Set up backend**
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Set up frontend**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Start development servers**

   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npx ts-node-dev src/index.ts
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend WebSocket: http://localhost:3001

## 🎯 Game Features

### Core Mechanics
- **Multiplayer Lobby**: Create/join game rooms (6-12 players)
- **Gang System**: Form alliances and rivalries
- **Turf Control**: Strategic map-based territory management
- **Day/Night Cycle**: Different mechanics for planning vs action phases
- **Action System**: Night-time crime operations (attacks, protection, theft)
- **Voting Mechanics**: Day-time political decisions and conflict resolution
- **Chat System**: In-game communication with private gang channels
- **Economy**: Resource management and progression systems

### Player Roles
- **Gang Leader**: Commands gang operations and strategy
- **Enforcer**: Executes hits and protection duties
- **Dealer**: Manages drug trade and resource distribution
- **Civilian**: Independent operators with flexible allegiances

## 👥 Team Development

This project is designed for collaborative development with 6 team members. See [FEATURE_MAP.md](FEATURE_MAP.md) for:
- Detailed feature breakdown
- Branch naming conventions
- Team assignments
- Development workflow
- Priority order for implementation

### Branch Structure
```
main (stable releases)
└── develop (integration branch)
    ├── feature/game-lobby
    ├── feature/player-roles
    ├── feature/turf-system
    ├── feature/day-night-cycle
    ├── feature/action-system
    ├── feature/voting-system
    ├── feature/chat-system
    ├── feature/game-logic
    ├── feature/ui-components
    └── feature/user-interface
```

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Real-time**: Socket.IO
- **Language**: TypeScript
- **Development**: ts-node-dev (hot reload)

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (planned)
- **State Management**: React hooks + Context (planned)

### Shared
- **Types**: TypeScript interfaces
- **Validation**: Runtime type checking (planned)

## 📁 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful commit messages
- Write descriptive component/function names

### Git Workflow
1. Create feature branch from `develop`
2. Work on assigned feature
3. Commit regularly with clear messages
4. Push branch and create pull request
5. Merge to `develop` after review
6. Repeat for next feature

### File Organization
- **Backend**: Place server logic in `backend/src/`
- **Frontend**: Place components in `frontend/components/`
- **Shared**: Place types in `shared/` directory
- **Assets**: Place images/sounds in appropriate folders

## 🎮 Gameplay Flow

1. **Lobby Phase**: Players join/create rooms and form gangs
2. **Setup Phase**: Roles assigned, initial turf distribution
3. **Day Phase**: Planning, voting, political maneuvering
4. **Night Phase**: Crime operations and actions
5. **Resolution Phase**: Action outcomes revealed
6. **Repeat**: Cycles continue until win conditions met

### Win Conditions
- **Turf Domination**: Control majority of map territories
- **Gang Supremacy**: Largest gang by membership and resources
- **Economic Victory**: Highest accumulated wealth

## 🤝 Contributing

1. Check [FEATURE_MAP.md](FEATURE_MAP.md) for your assigned features
2. Follow the established branching workflow
3. Ensure code passes linting
4. Test your changes thoroughly
5. Create pull request with clear description

## 📝 Documentation

- [Feature Map & Team Guide](FEATURE_MAP.md) - Complete development roadmap
- [Backend API](backend/README.md) - Server-side documentation
- [Frontend Guide](frontend/README.md) - Client-side information

## 🚀 Deployment

### Development
- Backend runs on `http://localhost:3001`
- Frontend runs on `http://localhost:3000`
- Hot reload enabled for both

### Production (Future)
- Backend: Deploy to services like Railway, Render, or AWS
- Frontend: Deploy to Vercel, Netlify, or AWS Amplify
- Database: PostgreSQL with Prisma ORM (planned)

## 📄 License

This project is for educational and development purposes.

---

**Ready to build the ultimate mafia empire? Check the [FEATURE_MAP.md](FEATURE_MAP.md) and start coding!**