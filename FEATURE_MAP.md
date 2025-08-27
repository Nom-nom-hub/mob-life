# **Mob-Life: Gang & Crime Mafia Game — Feature Map**

[![Team Size](https://img.shields.io/badge/Team_Size-6_Developers-blue)](https://github.com/Nom-nom-hub/mob-life)
[![Branches](https://img.shields.io/badge/Feature_Branches-10-orange)](https://github.com/Nom-nom-hub/mob-life/branches)
[![Workflow](https://img.shields.io/badge/Workflow-GitFlow-green)](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
[![Collaboration](https://img.shields.io/badge/Collaboration-Real--time-purple)](https://socket.io/)
[![Priority](https://img.shields.io/badge/Priority-Order-red)](FEATURE_MAP.md#priority-order-recommended)
[![Frontend](https://img.shields.io/badge/Frontend-Next.js-black)](https://nextjs.org/)
[![Backend](https://img.shields.io/badge/Backend-Node.js-green)](https://nodejs.org/)

## **Project Overview**

* **Backend:** Node.js, Express, Socket.IO, TypeScript
* **Frontend:** Next.js, React, TypeScript
* **Shared:** TypeScript types/interfaces for actions, players, gangs, turf, and money

---

## **Core Game Features**

### 1. Game Lobby & Gang System

* Create/join game rooms
* Assign players to gangs or let them create gangs
* Room capacity limits (6–12 players)
* Player ready states
* **Branch:** `feature/game-lobby`

### 2. Player Roles & Status

* Role types: Gang Leader, Enforcer, Dealer, Civilian
* Track alive/dead or jailed/incarcerated states
* Role-specific abilities (kill, protect turf, steal money)
* **Branch:** `feature/player-roles`

### 3. Turf & Territory Control

* Map system for neighborhoods or districts
* Gangs can attack/defend turf
* Turf ownership affects resources/money generation
* **Branch:** `feature/turf-system`

### 4. Day/Night Cycle & Missions

* Automatic phase transitions (day = planning, night = operations)
* Night phase: gang actions (hits, protection, theft)
* Timer control for each phase
* **Branch:** `feature/day-night-cycle`

### 5. Action & Crime System

* Night phase actions: attack rival gangs, protect turf, steal drugs/money
* Action submission & validation
* Resolution logic and outcomes
* Feedback to affected players
* **Branch:** `feature/action-system`

### 6. Voting / Turf Conflicts

* Vote to kick players, gang leadership elections, resolve turf disputes
* Majority calculation, tie-breakers
* Execution & announcement
* **Branch:** `feature/voting-system`

### 7. Chat & Communication

* In-game chat for all players
* Private gang chat channels
* Dead/jail players chat
* Real-time message delivery
* **Branch:** `feature/chat-system`

### 8. Game State & Economy

* Money, drugs, items tracking per player/gang
* Win conditions (complete turf domination, largest gang, highest money)
* End-game detection and leaderboard
* **Branch:** `feature/game-logic`

### 9. Frontend UI Components

* Map/turf display
* Player cards & gang stats
* Action buttons and forms
* Day/Night indicators and animations
* **Branch:** `feature/ui-components`

### 10. User Interface & UX

* Responsive design for desktop/mobile
* Theme support (dark/light, gritty urban style)
* Loading states & error handling
* Accessibility
* **Branch:** `feature/user-interface`

---

## **Team Assignment (6 Developers)**

| Team       | Member | Feature Branch                                                     |
| ---------- | ------ | ------------------------------------------------------------------ |
| Frontend   | Dev 1  | `feature/ui-components` + `feature/user-interface`                 |
| Frontend   | Dev 2  | `feature/game-lobby` (frontend) + `feature/chat-system` (frontend) |
| Backend    | Dev 3  | `feature/backend-logic` + `feature/player-roles`                   |
| Backend    | Dev 4  | `feature/game-logic` + `feature/day-night-cycle`                   |
| Full-Stack | Dev 5  | `feature/voting-system` + `feature/action-system`                  |
| Full-Stack | Dev 6  | `feature/chat-system` (backend) + `feature/turf-system`            |

---

## **Branching Workflow**

**Start Feature Work**

```bash
git checkout develop
git pull
git checkout -b feature/<feature-name>
```

**During Development**

```bash
git add .
git commit -m "Implement <specific-feature-or-fix>"
git push -u origin feature/<feature-name>
```

**Pull Request Process**

1. PR from `feature/<feature-name>` → `develop`
2. Code review by at least one team member
3. Merge to `develop` after approval
4. Test on `develop`

**Release**

* Merge `develop` → `main` when stable
* Tag releases for production deployment

---

## **Local Development Commands**

**Backend**

```bash
cd backend
npx ts-node-dev src/index.ts
```

**Frontend**

```bash
cd frontend
npm run dev
```

**Connect Frontend to Backend**

```text
WebSocket URL: http://localhost:3001
```

---

## **Priority Order (Recommended)**

1. `feature/game-lobby` – foundation for multiplayer rooms & gangs
2. `feature/player-roles` – core player mechanics
3. `feature/turf-system` – define territories and gangs
4. `feature/day-night-cycle` – game phase flow
5. `feature/chat-system` – communication is key
6. `feature/action-system` – night operations, crimes
7. `feature/voting-system` – day conflicts, gang leadership
8. `feature/game-logic` – economy, win conditions, leaderboards
9. `feature/ui-components` – visual components for map, stats
10. `feature/user-interface` – polish and UX improvements

---

## **Visual Team Roadmap & Branch Diagram**

```
                          ┌─────────────────────┐
                          │        main         │
                          │  Stable / Release   │
                          └─────────────────────┘
                                     ▲
                                     │
                              Merge from develop
                                     ▲
                          ┌─────────────────────┐
                          │      develop        │
                          │ Daily integration   │
                          └─────────────────────┘
                                     ▲
        ┌─────────────┬───────────────┬───────────────┬───────────────┐
        │             │               │               │               │
┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ feature/game-  │ │ feature/player-│ │ feature/turf- │ │ feature/day-   │
│ lobby          │ │ roles          │ │ system        │ │ night-cycle    │
│ Frontend: UI   │ │ Backend: logic │ │ Backend: turf │ │ Backend: cycle │
│ Dev2           │ │ Dev3           │ │ Dev6          │ │ Dev4           │
└────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘
        │                  │                 │                 │
        ▼                  ▼                 ▼                 ▼
┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ feature/chat-  │ │ feature/voting │ │ feature/action│ │ feature/game-  │
│ system         │ │ -system        │ │ -system       │ │ logic          │
│ Frontend: Dev2 │ │ Backend: Dev5  │ │ Backend: Dev5 │ │ Backend: Dev4 │
│ Backend: Dev6  │ └────────────────┘ └────────────────┘ └────────────────┘
        │
        ▼
┌────────────────┐
│ feature/ui-    │
│ components     │
│ Frontend: Dev1 │
└────────────────┘
        │
        ▼
┌────────────────┐
│ feature/user-  │
│ interface      │
│ Frontend: Dev1 │
└────────────────┘
```

## **Folder / Feature Split**

| Folder     | Branch / Feature                                                                     | Dev Assignment | Notes                                               |
| ---------- | ------------------------------------------------------------------------------------ | -------------- | --------------------------------------------------- |
| `frontend` | game-lobby, chat-system, ui-components, user-interface                               | Dev1 & Dev2    | UI, player interactions, chat                       |
| `backend`  | player-roles, day-night-cycle, turf-system, game-logic, action-system, voting-system | Dev3–Dev6      | Game mechanics, Socket.IO events, state persistence |
| `shared`   | TypeScript types/interfaces (`PlayerAction`, `GameState`, `Gang`, `Turf`)            | All devs       | Ensure consistency between frontend & backend       |

## **How to Use This Diagram**

1. Each dev picks a **feature branch** assigned to them.
2. Work inside the folder corresponding to the branch:

   * Frontend → `frontend/`
   * Backend → `backend/`
   * Shared → `shared/` (types/interfaces)
3. Merge feature branches to `develop` frequently.
4. After core features are stable, merge `develop` → `main`.
5. Follow the **priority order** from foundational features to UI polish.
