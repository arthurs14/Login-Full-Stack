import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req, res) => {
  // get email and password from frontend
  const { email, password } = req.body;

  try {
    // find an existing user
    const existingUser = await User.findOne({ email });

    // if user does not exist -> message
    if (!existingUser) 
      return res.status(404).json({ message: 'User doesn\'t exist.' });

    // if password is incorrect
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) 
      return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      { expiresIn: '1h' },
    );

    // send user data and token for persistency
    res.status(200).json({ result: existingUser, token });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const signup = async (req, res) => {
  // get form data to create user
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    // check to see if user exists in database
    const existingUser = await User.findOne({ email });

    if (existingUser) 
      return res.status(400).json({ message: 'User already exists.' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Password don\'t match.' });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create user
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    // create token
    const token = jwt.sign(
      { email: result.email, id: result._id },
      'test',
      { expiresIn: '1h' },
    );

    // send user
    res.status(200).json({ result: result, token });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};