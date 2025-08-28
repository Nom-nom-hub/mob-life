import 'reflect-metadata';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { AppDataSource } from './config/database';
import { aiService } from './services/AIService';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Mob-Life backend is running' });
});

// AI endpoints for dynamic content
app.post('/api/ai/generate-crime', async (req, res) => {
    const { playerName, action } = req.body;
    if (!playerName || !action) {
        return res.status(400).json({ error: 'Missing required fields: playerName and action are required.' });
    }
    try {
        const response = await aiService.generateCrimeStory(action, playerName);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'AI service error' });
    }
});

app.post('/api/ai/generate-dialogue', async (req, res) => {
    const { name, faction, situation } = req.body;
    if (!name || !faction || !situation) {
        return res.status(400).json({ error: 'Missing required fields: name, faction, and situation are required.' });
    }
    try {
        const response = await aiService.generateNpcResponse(name, faction, situation);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'AI service error' });
    }
});

// Utility function to generate unique game codes
function generateGameCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i = 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Initialize database and start server
AppDataSource.initialize()
    .then(() => {
        console.log('Database connection established');

        // Socket.IO event handlers
        io.on('connection', (socket) => {
            console.log('Player connected:', socket.id);

            socket.on('joinGame', ({ gameId, userId }) => {
                socket.join(`game-${gameId}`);
                io.to(`game-${gameId}`).emit('playerJoined', { userId });
            });

            socket.on('chatMessage', ({ gameId, message, userId }) => {
                io.to(`game-${gameId}`).emit('chatMessage', { userId, message });
            });

            // Game room management with database integration
            socket.on('createGame', async ({ userId, username }) => {
                try {
                    const gameCode = generateGameCode();
                    // TODO: Create GameRoom entity in database when DB is connected

                    socket.emit('gameCreated', {
                        gameCode,
                        message: 'Game room created successfully!'
                    });
                    console.log(`Game room ${gameCode} created by user ${username}`);
                } catch (error) {
                    socket.emit('gameCreationError', {
                        message: 'Failed to create game room',
                        error: error instanceof Error ? error.message : 'Unknown error'
                    });
                }
            });

            socket.on('joinGameRoom', async ({ gameCode, userId, username }) => {
                try {
                    socket.join(`game-${gameCode}`);

                    // TODO: Create/update GameSession entity in database when DB is connected

                    io.to(`game-${gameCode}`).emit('playerJoined', {
                        userId,
                        username,
                        gameCode
                    });

                    socket.emit('roomJoined', {
                        gameCode,
                        message: 'Successfully joined game room!'
                    });

                    console.log(`User ${username} joined room ${gameCode}`);
                } catch (error) {
                    socket.emit('joinError', {
                        message: 'Failed to join game room',
                        error: error instanceof Error ? error.message : 'Unknown error'
                    });
                }
            });

            socket.on('disconnect', () => {
                console.log('Player disconnected:', socket.id);
                // TODO: Update GameSession status to 'disconnected' in database

                // Notify other players in rooms this socket was in
                socket.rooms.forEach((room) => {
                    if (room !== socket.id) {
                        socket.to(room).emit('playerLeft', { socketId: socket.id });
                    }
                });
            });

            // Chat message handler with proper event name
            socket.on('chatMessage', ({ gameCode, message, userId, username }) => {
                if (gameCode) {
                    io.to(`game-${gameCode}`).emit('chatMessage', {
                        userId,
                        username,
                        message,
                        timestamp: new Date(),
                        type: 'global'
                    });
                }
            });
        });

        server.listen(3001, () => {
            console.log('Mob-Life backend server running on port 3001');
            console.log('Available AI providers:', aiService.getAvailableProviders().join(', '));
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
        process.exit(1);
    });