import jwt from 'jsonwebtoken';

import CustomError from '../models/error.model';
import { RequestHandler } from 'express';

export const checkAuth: RequestHandler = (req, _, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return next(new CustomError('Unauthorized!', 401));

  const token = authHeader.split(' ')[1];

  if (!token)
    return next(new CustomError('No token, authorization denied.', 401));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return next(new CustomError('Token is not valid.', 401));
  }
};
