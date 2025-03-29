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
app.use("api/message",messageRoute)

//Start Server
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
    connectDB();
});
