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
    try {
        const { name, faction, situation } = req.body;
        const response = await aiService.generateNpcResponse(name, faction, situation);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'AI service error' });
    }
});

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

            // New event handlers for Phase 1 completion
            socket.on('createGame', async ({ userId, gameCode }) => {
                // TODO: Implement game room creation with database
                socket.emit('gameCreated', { gameCode });
            });

            socket.on('joinGameRoom', async ({ gameCode, userId, username }) => {
                // TODO: Implement game room joining with database
                socket.join(`game-${gameCode}`);
                io.to(`game-${gameCode}`).emit('playerJoined', { userId, username });
            });

            socket.on('disconnect', () => {
                console.log('Player disconnected:', socket.id);
                // TODO: Update session status in database
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