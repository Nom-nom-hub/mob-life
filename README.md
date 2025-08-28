# Mob-Life: Gang & Crime Mafia Game

[![Project Status: Active](https://img.shields.io/badge/status-active-success.svg)](https://github.com/Nom-nom-hub/mob-life)
[![GitHub Issues](https://img.shields.io/github/issues/Nom-nom-hub/mob-life)](https://github.com/Nom-nom-hub/mob-life/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Nom-nom-hub/mob-life)](https://github.com/Nom-nom-hub/mob-life/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io&logoColor=white)](https://socket.io/)
[![Next.js](https://img.shields.io/badge/Next.js-latest-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![Players](https://img.shields.io/badge/Players-6--12-orange)](FEATURE_MAP.md)
[![Real-time](https://img.shields.io/badge/Real--time-Multiplayer-blue)](https://socket.io/)
[![Platform](https://img.shields.io/badge/Platform-Web-green)](https://developer.mozilla.org/en-US/docs/Web)

A browser-based text MMORPG in the mafia/crime genre. Create a character, rise through the criminal underworld, build your crew, and dominate the persistent online world through strategic gameplay and social alliances.

## 🎮 Game Overview

Mob-Life is a browser-based text MMORPG featuring:
- **Persistent World**: 24/7 online world with character progression saved to database
- **Stat-Driven Gameplay**: Level up skills in combat, business, social manipulation, and crime
- **Turn-Based Mechanics**: Actions consume energy/stamina requiring strategic timing
- **Dynamic Economy**: Player-driven market for weapons, drugs, properties, and information
- **Social Systems**: Gang formation, alliances, rivalries, and community interactions
- **PvP & PvE**: Battle NPCs on missions or challenge other players in various conflicts

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
- **Character Creation**: Choose background, skills, and starting path
- **Stat Progression**: Level up combat, stealth, business, and social skills
- **Energy System**: Actions consume stamina requiring strategic timing
- **Gang System**: Form crews, establish hierarchies, and build alliances
- **Crime System**: Commit heists, trafficking, protection, and other illegal activities
- **Market Dynamics**: Buy/sell weapons, drugs, properties, and information
- **Social Features**: Chat, alliances, rivalries, and reputation system
- **Persistent World**: Character progress saved in database, accessible 24/7

### Character Specializations
- **Combat Specialist**: Expert in fights, heists, and protection services
- **Business Mogul**: Master of economics, trading, and legitimate business fronts
- **Social Manipulator**: Expert in alliances, information gathering, and influence
- **Stealth Operator**: Specialist in covert operations, smuggling, and espionage
- **Custom Builds**: Mix and match skills to create unique character archetypes

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
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: Socket.IO for live chat and notifications
- **Language**: TypeScript
- **Development**: ts-node-dev (hot reload)

### Frontend
- **Framework**: Next.js (latest)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom mafia-themed design
- **State Management**: React hooks + Context API
- **Interface**: Text-based with menu-driven navigation

### Shared
- **Types**: TypeScript interfaces for game entities
- **Validation**: Runtime type checking
- **Communication**: REST API + WebSocket events

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

1. **Character Creation**: Choose background, skills, and starting specialization
2. **Tutorial Missions**: Learn basic mechanics through guided text-based scenarios
3. **Skill Progression**: Complete jobs and crimes to level up stats and reputation
4. **Gang Formation**: Recruit members and establish your crew's hierarchy
5. **Empire Building**: Expand influence through business ventures and criminal operations
6. **Rivalry & Conflict**: Challenge other players and gangs for territory and resources
7. **Legend Status**: Become the most feared and respected figure in the underworld

### Progression Goals
- **Wealth Accumulation**: Build the largest fortune through legitimate and illegitimate means
- **Territory Control**: Establish dominance over key areas of the criminal underworld
- **Gang Leadership**: Build and maintain the most powerful criminal organization
- **Personal Legend**: Achieve legendary status through reputation and accomplishments

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