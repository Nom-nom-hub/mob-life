# Mob Life Game Database Schema
(2025-08-28)

A comprehensive database design for a real-time multiplayer mob/mafia game featuring gang formation, turf wars, crime operations, and political intrigue.

## Overview

This schema supports a multiplayer game where players can:
- Form and join gangs to control territories
- Engage in strategic turf wars for neighborhood control
- Perform night-time crime operations (hits, protection, theft)
- Manage economy with money, drugs, and resources
- Participate in political voting, alliances, and betrayals

## Core Tables

### User Management

#### `users`
Manages player accounts and authentication.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| username | VARCHAR(50) | Unique username |
| email | VARCHAR(255) | Unique email address |
| password_hash | VARCHAR(255) | Hashed password |
| created_at | TIMESTAMP | Account creation time |
| last_active | TIMESTAMP | Last activity timestamp |
| is_active | BOOLEAN | Account status |
| profile_picture_url | VARCHAR(500) | Profile image URL |

#### `game_sessions`
Represents individual game rooms/lobbies.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| name | VARCHAR(100) | Game room name |
| description | TEXT | Game description |
| max_players | INTEGER | Maximum player limit (default: 12) |
| current_players | INTEGER | Current player count |
| status | VARCHAR(20) | Game status (waiting, active, finished) |
| created_by | UUID | Creator user ID |
| created_at | TIMESTAMP | Creation time |
| started_at | TIMESTAMP | Game start time |
| ended_at | TIMESTAMP | Game end time |
| settings | JSONB | Game configuration settings |

#### `players`
Tracks player participation in specific games.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | Reference to users table |
| game_session_id | UUID | Reference to game_sessions table |
| player_name | VARCHAR(50) | In-game display name |
| role | VARCHAR(50) | Player role (civilian, mafia, detective, etc.) |
| is_alive | BOOLEAN | Player survival status |
| money | DECIMAL(15,2) | Player's current money |
| reputation | INTEGER | Player reputation score |
| joined_at | TIMESTAMP | Join time |
| eliminated_at | TIMESTAMP | Elimination time |

### Gang System

#### `gangs`
Represents player organizations/factions.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| game_session_id | UUID | Reference to game session |
| name | VARCHAR(100) | Gang name |
| description | TEXT | Gang description |
| leader_id | UUID | Gang leader player ID |
| founded_at | TIMESTAMP | Gang creation time |
| territory_count | INTEGER | Number of controlled territories |
| total_money | DECIMAL(15,2) | Gang treasury |
| reputation | INTEGER | Gang reputation |
| is_active | BOOLEAN | Gang active status |

#### `gang_members`
Tracks gang membership and roles.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| gang_id | UUID | Reference to gangs table |
| player_id | UUID | Reference to players table |
| role | VARCHAR(50) | Member role (leader, lieutenant, enforcer, member) |
| joined_at | TIMESTAMP | Membership start time |
| left_at | TIMESTAMP | Membership end time |
| is_active | BOOLEAN | Active membership status |

### Territory System

#### `territories`
Represents controllable map areas.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| game_session_id | UUID | Reference to game session |
| name | VARCHAR(100) | Territory name |
| description | TEXT | Territory description |
| x_coordinate | INTEGER | Map X position |
| y_coordinate | INTEGER | Map Y position |
| controlled_by_gang | UUID | Controlling gang ID |
| income_rate | DECIMAL(10,2) | Money generated per cycle |
| defense_rating | INTEGER | Territory defense strength |
| population | INTEGER | Territory population |
| created_at | TIMESTAMP | Creation time |

#### `turf_wars`
Manages battles for territory control.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| game_session_id | UUID | Reference to game session |
| territory_id | UUID | Contested territory |
| attacking_gang | UUID | Attacking gang ID |
| defending_gang | UUID | Defending gang ID |
| status | VARCHAR(20) | War status (planned, active, completed, cancelled) |
| scheduled_time | TIMESTAMP | Planned battle time |
| started_at | TIMESTAMP | Battle start time |
| ended_at | TIMESTAMP | Battle end time |
| winner_gang | UUID | Victorious gang ID |
| created_at | TIMESTAMP | War creation time |

#### `war_participants`
Tracks individual player participation in turf wars.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| turf_war_id | UUID | Reference to turf_wars table |
| player_id | UUID | Participating player |
| gang_id | UUID | Player's gang |
| role | VARCHAR(20) | Battle role (leader, fighter, support) |
| casualties | INTEGER | Casualties inflicted |
| joined_at | TIMESTAMP | Participation time |

### Game Mechanics

#### `game_cycles`
Manages day/night cycle progression.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| game_session_id | UUID | Reference to game session |
| cycle_number | INTEGER | Sequential cycle number |
| phase | VARCHAR(20) | Current phase (day, night, voting, results) |
| started_at | TIMESTAMP | Phase start time |
| ends_at | TIMESTAMP | Phase end time |
| is_current | BOOLEAN | Active cycle indicator |

#### `crime_operations`
Tracks night-time criminal activities.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| game_session_id | UUID | Reference to game session |
| cycle_id | UUID | Reference to game cycle |
| operation_type | VARCHAR(50) | Crime type (hit, theft, protection, smuggling) |
| executor_id | UUID | Player performing operation |
| target_id | UUID | Target player (nullable) |
| territory_id | UUID | Operation location |
| status | VARCHAR(20) | Operation status (planned, executed, failed, cancelled) |
| success | BOOLEAN | Operation success indicator |
| money_involved | DECIMAL(15,2) | Money gained/lost |
| description | TEXT | Operation details |
| executed_at | TIMESTAMP | Execution time |
| created_at | TIMESTAMP | Planning time |

### Economy System

#### `resources`
Defines available game resources.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| name | VARCHAR(100) | Resource name |
| description | TEXT | Resource description |
| base_value | DECIMAL(10,2) | Base market value |
| resource_type | VARCHAR(50) | Category (drugs, weapons, information) |
| rarity | VARCHAR(20) | Rarity level (common, rare, legendary) |

#### `inventories`
Tracks resource ownership by players and gangs.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| owner_type | VARCHAR(10) | Owner type (player, gang) |
| owner_id | UUID | Owner ID (player or gang) |
| resource_id | UUID | Reference to resources table |
| quantity | INTEGER | Resource quantity owned |
| acquired_at | TIMESTAMP | Acquisition time |

### Political System

#### `votes`
Manages voting mechanisms for game decisions.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| game_session_id | UUID | Reference to game session |
| cycle_id | UUID | Reference to game cycle |
| vote_type | VARCHAR(50) | Vote category (elimination, alliance, gang_action) |
| description | TEXT | Vote description |
| created_by | UUID | Vote initiator |
| target_id | UUID | Vote target (player, gang, etc.) |
| status | VARCHAR(20) | Vote status (active, completed, cancelled) |
| created_at | TIMESTAMP | Vote creation time |
| ends_at | TIMESTAMP | Vote deadline |

#### `vote_choices`
Records individual player votes.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| vote_id | UUID | Reference to votes table |
| voter_id | UUID | Voting player |
| choice | VARCHAR(100) | Vote choice (yes, no, specific option) |
| voted_at | TIMESTAMP | Vote timestamp |

#### `alliances`
Manages relationships between gangs.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| game_session_id | UUID | Reference to game session |
| gang1_id | UUID | First gang in alliance |
| gang2_id | UUID | Second gang in alliance |
| alliance_type | VARCHAR(50) | Alliance type (mutual_defense, trade, temporary) |
| status | VARCHAR(20) | Alliance status (proposed, active, broken) |
| proposed_by | UUID | Alliance proposer |
| created_at | TIMESTAMP | Alliance creation time |
| expires_at | TIMESTAMP | Alliance expiration |
| broken_at | TIMESTAMP | Alliance termination time |

### Communication System

#### `chat_channels`
Defines communication channels.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| game_session_id | UUID | Reference to game session |
| name | VARCHAR(100) | Channel name |
| channel_type | VARCHAR(50) | Channel type (global, gang, private, system) |
| gang_id | UUID | Gang-specific channel reference |
| created_at | TIMESTAMP | Channel creation time |

#### `chat_messages`
Stores chat messages.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| channel_id | UUID | Reference to chat_channels table |
| sender_id | UUID | Message sender |
| message_text | TEXT | Message content |
| message_type | VARCHAR(20) | Message type (text, system, action) |
| sent_at | TIMESTAMP | Message timestamp |
| is_deleted | BOOLEAN | Deletion status |

### Analytics & Logging

#### `game_events`
Comprehensive event logging system.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| game_session_id | UUID | Reference to game session |
| cycle_id | UUID | Reference to game cycle |
| event_type | VARCHAR(50) | Event category (player_join, gang_formed, territory_captured) |
| description | TEXT | Event description |
| actor_id | UUID | Event initiator |
| target_id | UUID | Event target |
| metadata | JSONB | Additional event data |
| created_at | TIMESTAMP | Event timestamp |
| is_public | BOOLEAN | Public visibility |

#### `player_stats`
Aggregated player performance metrics.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| player_id | UUID | Reference to players table |
| games_played | INTEGER | Total games participated |
| games_won | INTEGER | Games won count |
| total_money_earned | DECIMAL(15,2) | Cumulative earnings |
| successful_operations | INTEGER | Successful crime operations |
| territories_captured | INTEGER | Territories conquered |
| gangs_created | INTEGER | Gangs founded |
| updated_at | TIMESTAMP | Last update time |

### Real-time Features

#### `active_connections`
Tracks WebSocket connections for real-time functionality.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | Connected user |
| game_session_id | UUID | Game session |
| socket_id | VARCHAR(255) | WebSocket connection ID |
| connected_at | TIMESTAMP | Connection start time |
| last_ping | TIMESTAMP | Last heartbeat |

## Database Relationships

### Key Relationships
- **Users → Players**: One-to-many (users can play multiple games)
- **Game Sessions → Players**: One-to-many (sessions contain multiple players)
- **Gangs → Gang Members**: One-to-many (gangs have multiple members)
- **Territories → Gangs**: Many-to-one (gangs can control multiple territories)
- **Turf Wars → Gangs**: Many-to-many (wars involve multiple gangs)
- **Game Cycles → Crime Operations**: One-to-many (cycles contain multiple operations)
- **Votes → Vote Choices**: One-to-many (votes have multiple choices)

## Performance Optimizations

### Recommended Indexes
- **players**: Index on game_session_id for quick player lookups within games
- **gang_members**: Index on gang_id for efficient gang roster queries
- **territories**: Index on controlled_by_gang for territory ownership queries
- **crime_operations**: Index on cycle_id for operations within game cycles
- **chat_messages**: Index on channel_id for message retrieval by channel
- **game_events**: Index on created_at for chronological event queries
- **active_connections**: Index on game_session_id for real-time connection management
- **game_cycles**: Partial index on is_current for active cycle lookups

## Automated Functions

### Player Count Management
Automatically updates game session player counts when players join or leave.

### Default Channel Creation
Creates global and system chat channels when new game sessions are created.

### Alliance Constraints
Ensures gangs cannot ally with themselves and maintains unique active alliances.

## Scalability Considerations

- **Partitioning**: Consider partitioning `game_events` and `chat_messages` by game_session_id for large-scale deployments
- **Archiving**: Implement archiving strategies for completed games to maintain performance
- **Caching**: Use Redis for frequently accessed data like active player lists and current game states
- **Real-time**: Socket.IO integration with the `active_connections` table for connection management

This schema provides a solid foundation for a complex multiplayer game with real-time features, economic systems, and social mechanics.
