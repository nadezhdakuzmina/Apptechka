import type {
  UpdateItemsAction, RemoveItemAction,
} from './types';

import { UPDATE_ITEMS, REMOVE_ITEM } from './actions';

import type { AptechkaItem } from '../../reducers/aptechka';

export const updateItemsAction = (items: AptechkaItem[]): UpdateItemsAction => ({
  type: UPDATE_ITEMS,
  items,
});

export const removeItemAction = (id: number): RemoveItemAction => ({
  type: REMOVE_ITEM,
  id,
});
