import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.info('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(`Error while connecting to the database ${err}`);
  });

const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
