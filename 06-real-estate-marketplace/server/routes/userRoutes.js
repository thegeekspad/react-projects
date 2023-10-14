import express from 'express';
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

// GET /users
router.get('/', async (req, res) => {
  try {
    const users = await getUser();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting users');
  }
});

// GET /users/:id
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUser(userId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error getting user with ID ${userId}`);
  }
});

// POST /users
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await createUser(name, email);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

// PUT /users/:id
router.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email } = req.body;
    const updatedUser = await updateUser(userId, name, email);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error updating user with ID ${userId}`);
  }
});

// DELETE /users/:id
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await deleteUser(userId);
    res.send(`User with ID ${userId} deleted`);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error deleting user with ID ${userId}`);
  }
});

export default router;
