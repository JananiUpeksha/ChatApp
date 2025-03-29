import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  
app.use(cookieParser());

// est Route for Root URL
app.get("/", (req, res) => {
    console.log("Root route hit!");
    res.send("API is running...");
});

//Auth Routes
app.use("/api/auth", authRoutes);

//Start Server
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
    connectDB();
});
