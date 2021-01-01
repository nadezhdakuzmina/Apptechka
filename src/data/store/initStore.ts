import { fetchItems as fetchFrigeItems} from '../resourses/frige/fetchItems';
import { fetchItems as fetchFoodListItems} from '../resourses/foodList/fetchItems';


import type { State } from '../types';
import { initUser } from './initUser';

export const initStore = async (initToken?: string): Promise<State> => {
  const token = initToken || await initUser();

  const [
    frigeItems,
    foodListItems,
  ] = token ? await Promise.all([
    fetchFrigeItems(token).catch(() => null),
    fetchFoodListItems(token).catch(() => null),
  ]) : [];

  return {
    core: {
      token,
      isLoaded: false,
    },
    frige: {
      items: frigeItems || [],
    },
    foodList: {
      items: foodListItems || [],
    }
  };
};
