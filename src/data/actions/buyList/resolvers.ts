import { removeItem } from '../../resourses/buyList/removeItem';
import { addItem } from '../../resourses/buyList/addItem';
import { checkItemAction, removeItemAction, updateItemsAction } from '.';

import type { State } from '../../types';
import type { Dispatch } from 'redux';
import type { BuyListItem } from '../../reducers/buyList';
import { fetchItems } from '../../resourses/buyList/fetchItems';
import { checkItem } from '../../resourses/buyList/checkItem';

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

    return false;
  };
};

export const checkItemResolver = (id: number, status: boolean) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const { core } = getState();

    if (!core.token) {
      return false;
    }

    const hasBeenChecked = await checkItem(core.token, id, status)
      .catch(console.error);

    if (hasBeenChecked) {
      dispatch(checkItemAction(id, status));
      return true;
    }

    return false
  };
};

export const addItemResolver = (item: Omit<BuyListItem, 'id' | 'isChecked'>) => {
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
