import CustomError from '../models/error.model';

import { fetchUser } from '../services/user.services';

export const getUser = async (req, res, next) => {
  try {
    const user = await fetchUser(req.user.id);

    res.json(user);
  } catch (err) {
    next(err);
  }
};
