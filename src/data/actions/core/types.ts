import type { BaseAction } from '../../types/actions';

export interface SetTokenAction extends BaseAction<'SET_TOKEN'> {
  token: string;
}

export type DeleteTokenAction = BaseAction<'DELETE_TOKEN'>;

export type SetAppLoadedAction = BaseAction<'SET_APP_LOADED'>;

export interface SetAuthErrorAction extends BaseAction<'SET_AUTH_ERROR'> {
  error: string;
}

export interface SetRegisterErrorAction extends BaseAction<'SET_REGISTER_ERROR'> {
  error: string;
}

export interface SetUserAction extends BaseAction<'SET_USER'> {
  user: User;
}

export type ActionTypes =
  | SetTokenAction
  | DeleteTokenAction
  | SetAppLoadedAction
  | SetAuthErrorAction
  | SetRegisterErrorAction
  | SetUserAction;

export type User = {
  username: string;
  email: string;
  password: string;
};

export type UserAuth = Omit<User, 'username'> | Omit<User, 'email'> | User;
