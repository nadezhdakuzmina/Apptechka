import { removeItem } from '../../resourses/aptechka/removeItem';
import { addItem } from '../../resourses/aptechka/addItem';
import { removeItemAction, updateItemsAction } from '.';

import type { State } from '../../types';
import type { Dispatch } from 'redux';
import type { AptechkaItem } from '../../reducers/aptechka';
import { fetchItems } from '../../resourses/aptechka/fetchItems';

export const removeItemResolver = (id: number) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const { core } = getState();

    if (!core.token) {
      return false;
    }

    const hasBeenRemoved = await removeItem(core.token, id)
      .catch(console.error);

    if (hasBeenRemoved) {
      dispatch(removeItemAction(id));
      return true;
    }

    return false
  };
};

export const addItemResolver = (item: Omit<AptechkaItem, 'id'>) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const { core } = getState();

    if (!core.token) {
      return false;
    }

    const hasBeenAdded = await addItem(core.token, item)
      .catch(console.error);

    const items = await fetchItems(core.token)
      .catch(console.error);

    if (hasBeenAdded && items) {
      dispatch(updateItemsAction(items));
      return true;
    }

    return false;
  };
};
