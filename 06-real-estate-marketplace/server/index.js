import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

const app = express();

app.use(express.json()); // for parsing application/json

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!1');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
