import type {
  UpdateItemsAction, RemoveItemAction, CheckItemAction,
} from './types';

import { UPDATE_ITEMS, REMOVE_ITEM, CHECK_ITEM } from './actions';

import type { BuyListItem } from '../../reducers/buyList';

export const updateItemsAction = (items: BuyListItem[]): UpdateItemsAction => ({
  type: UPDATE_ITEMS,
  items,
});

export const removeItemAction = (id: number): RemoveItemAction => ({
  type: REMOVE_ITEM,
  id,
});

export const checkItemAction = (id: number, status: boolean): CheckItemAction => ({
  type: CHECK_ITEM,
  id,
  status,
});

