import express from "express";

const conversation = express.Router();

conversation.get("/conversation/:id", async (req, res) => {
  try {
    const { conversationId } = req.body;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "";
  }
});
conversation.patch("/conversation/:id", (req, res) => {});
conversation.delete("/conversation/:id", (req, res) => {});

export default conversation;
