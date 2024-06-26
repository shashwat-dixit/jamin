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

export default userRouter;