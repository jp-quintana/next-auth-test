import { register, login } from '../services/auth.services';
import CustomError from '../models/error.model';
import { RequestHandler } from 'express';

export const registerUser: RequestHandler = async (req, res, next) => {
  try {
    const { password, confirmPassword } = req.body;
    if (!confirmPassword) {
      throw new CustomError('Confirm password is needed.', 422);
    }
    if (password !== confirmPassword) {
      throw new CustomError('Passwords do no match.', 422);
    }
    const token = await register(req.body);
    res.cookie('cookie', token, { httpOnly: true, maxAge: 10000 });
    res.status(200).send({ message: 'success' });
  } catch (err) {
    next(err);
  }
};

export const loginUser: RequestHandler = async (req, res, next) => {
  try {
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   throw new CustomError('Login failed.', 422, errors.array());
    // }

    const user = await login(req.body);

    console.log({ user });

    res.json({ user });
  } catch (err) {
    next(err);
  }
};
