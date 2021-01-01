import { checkAuth } from '../resourses/user/checkAuth';

export const initUser = async (): Promise<string | null> => {
  const token = await checkAuth().catch(() => null);
  return token;
};
