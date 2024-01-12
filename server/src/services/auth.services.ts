import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../dao/user';
import CustomError from '../models/error.model';

export const register = async (userDetails) => {
  // const existingUser = await User.fetchByEmail(userDetails.email);
  // if (existingUser) {
  //   throw new CustomError('Email address is already in use.', 409);
  // }
  // const { name, lastName, email, password } = userDetails;
  // const salt = await bcrypt.genSalt(10);
  // const encryptedPassword = await bcrypt.hash(password, salt);
  // const newUser = await User.create({
  //   name,
  //   lastName,
  //   email,
  //   password: encryptedPassword,
  // });
  // const payload = { user: { id: newUser.id } };
  // return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '365d' });
};

export const login = async (userCredentials) => {
  const { email, password } = userCredentials;

  const existingUser = await User.fetchByEmail(email);

  if (!existingUser) {
    throw new CustomError('A user with that email does not exist.', 400);
  }

  const isMatch = await bcrypt.compare(password, existingUser.password);

  if (!isMatch) {
    throw new CustomError(
      'Sorry, your email or password is incorrect. Please try again.',
      401
    );
  }

  const payload = { user: { id: existingUser.id } };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '365d' });
};
