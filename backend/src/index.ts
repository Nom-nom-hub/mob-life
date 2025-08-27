import express from 'express';

import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Player connected:', socket.id);

    socket.on('joinGame', ({ gameId, userId }) => {
        socket.join(`game-${gameId}`);
        io.to(`game-${gameId}`).emit('playerJoined', { userId });
    });

    socket.on('chatMessage', ({ gameId, message, userId }) => {
        io.to(`game-${gameId}`).emit('chatMessage', { userId, message });
    });
});

server.listen(3001, () => console.log('Backend server running on port 3001'));