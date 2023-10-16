import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  // Create JWT token
  const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d', // TODO: Check expiration later
  });

  // Set JWT as HTTP-Only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days // TODO: Check expiration later
  });
};

export default generateToken;
