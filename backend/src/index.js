/*
import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js"
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));


// est Route for Root URL
app.get("/", (req, res) => {
    console.log("Root route hit!");
    res.send("API is running...");
});

//Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoute)

//Start Server
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
    connectDB();
});
*/

import express from "express";
import http from 'http'; // Import the http module
import { Server as SocketIOServer } from 'socket.io'; // Import Socket.IO
import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Create an HTTP server from the Express app
const server = http.createServer(app);

// Create a Socket.IO server instance
const io = new SocketIOServer(server, {
    cors: {
        origin: ["http://localhost:5173", "http://localhost:5174"],
        methods: ["GET", "POST"]
    }
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));

// Socket.IO event handling
/*
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    // Example: Listen for a custom event from the client
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        io.emit('chat message', msg); // Broadcast the message to all connected clients
    });
});
*/
// Backend Socket.IO logic (example)
const onlineUsers = new Set(); // Use a Set for efficient tracking

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId; // Get userId from client query

  if (userId) {
    onlineUsers.add(userId);
    console.log('User connected:', userId, 'Online users:', Array.from(onlineUsers));
    io.emit('getOnlineUsers', Array.from(onlineUsers)); // Send updated list to all clients
  }

  socket.on('disconnect', () => {
    if (userId) {
      onlineUsers.delete(userId);
      console.log('User disconnected:', userId, 'Online users:', Array.from(onlineUsers));
      io.emit('getOnlineUsers', Array.from(onlineUsers)); // Send updated list to all clients
    }
  });
});

// Est Route for Root URL
app.get("/", (req, res) => {
    console.log("Root route hit!");
    res.send("API is running...");
});

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);

// Start Server (using the HTTP server)
server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
    connectDB();
});