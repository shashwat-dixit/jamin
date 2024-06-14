const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  chatId: { type: String, required: true },
  messages: [
    {
      prompt: { type: String, required: true },
      response: { type: String, required: true },
      llm: { type: String, required: true },
      responseTime: { type: Number, required: true }, // time taken in milliseconds
      timestamp: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
