import { checkAuth } from '../resourses/user/checkAuth';

export const initUser = async (token: string) => {
  return await checkAuth(token).catch(() => null);
};
