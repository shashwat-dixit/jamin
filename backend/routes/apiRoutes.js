import express from 'express';
import { isAuthenticated } from './authMiddleware.js';

const router = express.Router();

// Public route
router.get('/public', (req, res) => {
  res.json({ message: "This is a public route" });
});

// Protected route example
router.get('/protected', isAuthenticated, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;