import User from '../models/userModel.js';

export const signup = async (req, res, next) => {
  try {
    console.log(req.body);
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

export const signin = (req, res) => {
  try {
    console.log('Signin');
    res.send('Signin');
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res) => {
  try {
    console.log('Signout');
    res.send('Signout');
  } catch (error) {
    next(error);
  }
};
