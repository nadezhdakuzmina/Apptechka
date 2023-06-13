import { UPDATE_ITEMS, REMOVE_ITEM } from '../../actions/aptechka/actions';

import type { ActionTypes } from '../../actions/aptechka/types';
import type { AptechkaState } from './types';

export const initialState: AptechkaState = {
  items: [],
};

export const aptechka = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case UPDATE_ITEMS:
      return {
        ...state,
        items: [...action.items],
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

    default:
      return state;
  }
};
