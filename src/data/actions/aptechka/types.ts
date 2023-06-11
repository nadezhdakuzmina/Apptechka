import type { BaseAction } from '../../types/actions';
import type { AptechkaItem } from '../../reducers/aptechka/types';

export interface UpdateItemsAction extends BaseAction<'aptechka@UPDATE_ITEMS'> {
  items: AptechkaItem[];
}

export interface RemoveItemAction extends BaseAction<'aptechka@REMOVE_ITEM'> {
  id: number;
}

export type ActionTypes =
  | UpdateItemsAction
  | RemoveItemAction;
