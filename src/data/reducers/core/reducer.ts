import { DELETE_TOKEN, SET_APP_LOADED, SET_AUTH_ERROR, SET_REGISTER_ERROR, SET_TOKEN, SET_USER } from '../../actions/core/actions';

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

    case SET_APP_LOADED:
      return {
        ...state,
        isLoaded: true,
        authError: undefined,
        registerError: undefined,
      };

    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.error,
      };

    case SET_REGISTER_ERROR:
      return {
        ...state,
        registerError: action.error,
      };

    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
