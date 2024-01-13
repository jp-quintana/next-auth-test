import User from '../dao/user';
import CustomError from '../models/error.model';

export const fetchProfile = async (userId: string) => {
  const user = await User.fetchById(userId);

  if (!user) {
    throw new CustomError('User not found.', 404);
  }

  return user;
};
