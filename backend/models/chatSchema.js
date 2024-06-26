import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  sender: { type: String, enum: ['user', 'llm'], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  model: { type: String },
  tokens: { type: Number }
});

const conversationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  messages: [messageSchema],
  metadata: {
    totalTokens: { type: Number, default: 0 },
    language: String,
    tags: [String]
  }
}, { timestamps: true });

export const Conversation = mongoose.model('Conversation', conversationSchema);