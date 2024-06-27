import express from 'express';
import { isAuthenticated } from './authMiddleware.js';

const userRouter = express.Router();

// Apply the isAuthenticated middleware to all routes in this router
userRouter.use(isAuthenticated);

userRouter.get('/', (req, res) => {
  res.send('User API is running...');
});

userRouter.get('/profile', (req, res) => {
  res.json({ message: "User profile", user: req.user });
});


userRouter.post('/ai-generate', async (req, res) => {
  try {
    const { prompt, model } = req.body;
    if (!prompt || !model) {
      return res.status(400).json({ message: "Prompt and model are required" });
    }
    const response = await aiService.generateResponse(prompt, model);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ message: "Error generating AI response", error: error.message });
  }
});

export default userRouter;