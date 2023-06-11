import type { BaseAction } from '../../types/actions';
import type { BuyListItem } from '../../reducers/buyList/types';

export interface UpdateItemsAction extends BaseAction<'buyList@UPDATE_ITEMS'> {
  items: BuyListItem[];
}

export interface RemoveItemAction extends BaseAction<'buyList@REMOVE_ITEM'> {
  id: number;
}

export interface CheckItemAction extends BaseAction<'buyList@CHECK_ITEM'> {
  id: number;
  status: boolean;
}

export type ActionTypes =
  | UpdateItemsAction
  | RemoveItemAction
  | CheckItemAction;
