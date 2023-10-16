import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { getUserByEmail } from './userController.js';
import { errorHandler } from '../middleware/errorHandler.js';
import generateToken from '../utils/generateToken.js';

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validate user input
    if (!name || !email || !password) {
      return res.status(400).send('All fields required');
    }

    // Check if user name already exists
    const existingUserName = await User.findOne({ name });
    if (existingUserName) {
      return res.status(400).send(`${name} username already exists`);
    }

    // Check if user email already exists
    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      return res.status(400).send(`${email} user email already exists`);
    }

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password,
    });

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if user with email exists
    const user = await getUserByEmail(email);
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }

    // Compare password
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return next(errorHandler(401, 'Invalid password'));
    }

    // Generate JWT token
    const token = generateToken(res, user._id);
    return res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};

const signout = async (req, res, next) => {
  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({
      message: 'User logged out successfully',
    });
  } catch (error) {
    next(error);
  }
};

export { signup, signin, signout };
