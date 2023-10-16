import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGO_URI;
const dbName = process.env.DB;

const createUser = async (name, email) => {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('users');

    const result = await collection.insertOne({ name, email });

    return result.ops[0];
  } catch (error) {
    console.error(error);
    throw new Error('Error creating user');
  } finally {
    await client.close();
  }
};

const getUser = async (id) => {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('users');

    if (id) {
      const user = await collection.findOne({ _id: new ObjectId(id) });
      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }
      return user;
    } else {
      const users = await collection.find().toArray();
      return users;
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Error getting user${id ? ` with ID ${id}` : 's'}`);
  } finally {
    await client.close();
  }
};

const updateUser = async (id, name, email) => {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('users');

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, email } }
    );

    if (result.modifiedCount === 0) {
      throw new Error(`User with ID ${id} not found`);
    }

    const updatedUser = await collection.findOne({ _id: new ObjectId(id) });
    return updatedUser;
  } catch (error) {
    console.error(error);
    throw new Error(`Error updating user with ID ${id}`);
  } finally {
    await client.close();
  }
};

const deleteUser = async (id) => {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('users');

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      throw new Error(`User with ID ${id} not found`);
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Error deleting user with ID ${id}`);
  } finally {
    await client.close();
  }
};

const getUserByEmail = async (email) => {
  const client = new MongoClient(url);
  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('users');

    const user = await collection.findOne({ email });

    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting user by email');
  } finally {
    await client.close();
  }
};

export { createUser, getUser, updateUser, deleteUser, getUserByEmail };
