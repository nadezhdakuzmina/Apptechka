import { UPDATE_ITEMS, REMOVE_ITEM, CHECK_ITEM } from '../../actions/buyList/actions';

import type { ActionTypes } from '../../actions/buyList/types';
import type { BuyListState } from './types';

export const initialState: BuyListState = {
  items: [],
};

export const buyList = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case UPDATE_ITEMS:
      return {
        ...state,
        items: action.items,
      };

    case REMOVE_ITEM:
      const newItems = [...state.items];
      const index = newItems.findIndex((item) => item.id === action.id);
      if (index !== -1) {
        newItems.splice(index, 1);
      }

      return {
        ...state,
        items: newItems,
      };

    case CHECK_ITEM:
      const newCheckItems = [...state.items];
      const checkindex = newCheckItems.findIndex((item) => item.id === action.id);
      if (checkindex !== -1) {
        newCheckItems[checkindex] = {
          ...newCheckItems[checkindex],
          isChecked: action.status,
        };
      }

      return {
        ...state,
        items: newCheckItems,
      }

    default:
      return state;
  }
};
