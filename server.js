import express from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";
import OpenAI from "openai";
import cors from "cors";

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("message", async (msg) => {
        console.log("User:", msg);

        const response = await openai.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [{ role: "user", content: msg }],
        });

        const botReply = response.choices[0]?.message?.content || "Sorry, I didn't understand.";
        io.emit("message", { sender: "bot", text: botReply });
    });

    socket.on("disconnect", () => console.log("User disconnected"));
});

server.listen(5000, () => console.log("Server running on port 5000"));
