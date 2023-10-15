import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Get number of users in the collection for testing purposes
    const collectionName = 'users';
    const db = conn.connection.db;
    const productCount = await db.collection(collectionName).countDocuments();
    console.log(`Number of users in the collection: ${productCount}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
