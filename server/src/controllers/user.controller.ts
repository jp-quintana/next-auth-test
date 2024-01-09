import { fetchProfile } from '../services/user.services';

import { RequestHandler } from 'express';

export const getProfile: RequestHandler = async (req, res, next) => {
  try {
    const user = await fetchProfile(req.user.id);

    res.json(user);
  } catch (err) {
    next();
  }
};
