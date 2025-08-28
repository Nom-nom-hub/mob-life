-- 🏗️ Mob-Life Database Setup Script
-- Run this in pgAdmin Query Editor

-- Step 1: Create the development database
CREATE DATABASE mob_life_dev
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Step 2: Create our tables manually (TypeORM will also create these)
\connect mob_life_dev;

-- Users table (authentication)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    "passwordHash" VARCHAR(255) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    "lastLoginAt" TIMESTAMP,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Players table (game characters)
CREATE TABLE IF NOT EXISTS players (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    level INTEGER DEFAULT 1,
    experience INTEGER DEFAULT 0,
    strength INTEGER DEFAULT 10,
    intelligence INTEGER DEFAULT 10,
    stealth INTEGER DEFAULT 10,
    reputation INTEGER DEFAULT 10,
    money INTEGER DEFAULT 1000,
    energy INTEGER DEFAULT 100,
    "maxEnergy" INTEGER DEFAULT 100,
    status VARCHAR(20) DEFAULT 'active',
    "roleInGang" VARCHAR(20),
    "joinedGangAt" TIMESTAMP,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Gangs table (criminal organizations)
CREATE TABLE IF NOT EXISTS gangs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    color VARCHAR(7) DEFAULT '#666666',
    wealth INTEGER DEFAULT 0,
    reputation INTEGER DEFAULT 0,
    "powerLevel" VARCHAR(20) DEFAULT 'outcast',
    "membersCount" INTEGER DEFAULT 0,
    "bossId" UUID,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add gang reference to players
ALTER TABLE players ADD COLUMN IF NOT EXISTS "gangId" UUID REFERENCES gangs(id);

-- Game rooms table (multiplayer sessions)
CREATE TABLE IF NOT EXISTS game_rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(6) UNIQUE NOT NULL,
    "hostId" UUID NOT NULL,
    "hostName" VARCHAR(50) DEFAULT 'Anonymous Host',
    status VARCHAR(20) DEFAULT 'waiting',
    mode VARCHAR(20) DEFAULT 'classic',
    "maxPlayers" INTEGER DEFAULT 6,
    "currentPlayerCount" INTEGER DEFAULT 1,
    "dayNumber" INTEGER,
    "startedAt" TIMESTAMP,
    "finishedAt" TIMESTAMP,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Game sessions table (player-room associations)
CREATE TABLE IF NOT EXISTS game_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    username VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    "socketId" VARCHAR(50),
    "joinedAt" TIMESTAMP,
    "disconnectedAt" TIMESTAMP,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "gameRoomId" UUID REFERENCES game_rooms(id) ON DELETE CASCADE
);

-- Insert some test data
INSERT INTO gangs (name, description, color) VALUES
('Phantom Syndicate', 'Elite stealth operatives with mysterious origins', '#FF0000'),
('Blood Money Clan', 'Ruthless drug lords controlling the streets', '#8B0000'),
('Silent Hand', 'Network of corrupt politicians and businessmen', '#333333');

-- Confirm setup
SELECT 'Tables created successfully!' as status;
SELECT COUNT(*) as user_count FROM users;
SELECT COUNT(*) as player_count FROM players;
SELECT COUNT(*) as gang_count FROM gangs;