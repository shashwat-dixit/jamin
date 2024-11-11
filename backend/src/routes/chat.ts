// routes/chat.ts
import express from "express";
import { chatService } from "../services/langchain/chat";

const chat = express.Router();

chat.post("/chat", async (req, res) => {
  try {
    const { message, modelName, threadId, userId } = req.body;
    const response = await chatService.chat({
      modelName,
      message,
      threadId,
      userId,
    });
    res.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    res.status(500).json({ error: errorMessage });
  }
});

export default chat;
