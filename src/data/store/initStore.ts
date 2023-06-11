import { fetchItems as fetchFrigeItems} from '../resourses/aptechka/fetchItems';
import { fetchItems as fetchFoodListItems} from '../resourses/buyList/fetchItems';


import type { State } from '../types';
import { initUser } from './initUser';

export const initStore = async (initToken: string): Promise<State> => {
  const data = await initUser(initToken);

  const [
    aptechkaItems,
    buyListItems,
  ] = data?.token ? await Promise.all([
    fetchFrigeItems(data?.token).catch(() => null),
    fetchFoodListItems(data?.token).catch(() => null),
  ]) : [];

  return {
    core: {
      token: data?.token || null,
      isLoaded: false,
      user: data?.user,
    },
    aptechka: {
      items: aptechkaItems || [],
    },
    buyList: {
      items: buyListItems || [],
    }
  };
};
