import express from 'express';
import { auth } from '@auth/express';
import { authConfig } from './authConfig.js';
import userRouter from './routes/userRoutes.js';
import apiRouter from './routes/apiRoutes.js';

const app = express();

// Auth.js setup
app.use('/auth/*', auth(authConfig));

// Use the userRouter for user-specific routes
app.use('/api/users', userRouter);

// Use the apiRouter for other API routes
app.use('/api', apiRouter);