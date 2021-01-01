import { DELETE_TOKEN, SET_TOKEN } from '../../actions/core/actions';

import type { ActionTypes } from '../../actions/core/types';
import type { CoreState } from './types';

export const initialState: CoreState = {
  token: null,
  isLoaded: false,
};

export const core = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};
