import User from '../dao/user';

export const fetchUser = async (userId) => {
  const user = await User.fetchById(userId);
  return user;
};
