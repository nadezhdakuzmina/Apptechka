import type {
  SetTokenAction,
  DeleteTokenAction,
  SetAppLoadedAction,
  SetAuthErrorAction,
  SetRegisterErrorAction,
  User,
  SetUserAction,
} from './types';

import { DELETE_TOKEN, SET_APP_LOADED, SET_AUTH_ERROR, SET_REGISTER_ERROR, SET_TOKEN, SET_USER } from './actions';

export const setTokenAction = (token: string): SetTokenAction => ({
  type: SET_TOKEN,
  token,
});

export const deleteTokenAction = (): DeleteTokenAction => ({
  type: DELETE_TOKEN
});

export const setAppLoadedAction = (): SetAppLoadedAction => ({
  type: SET_APP_LOADED,
});

export const setAuthErrorAction = (error: string): SetAuthErrorAction => ({
  type: SET_AUTH_ERROR,
  error,
});

export const setRegisterErrorAction = (error: string): SetRegisterErrorAction => ({
  type: SET_REGISTER_ERROR,
  error,
});

export const setUserAction = (user: User): SetUserAction => ({
  type: SET_USER,
  user,
});
