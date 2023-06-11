import { batch } from 'react-redux';
import { auth } from '../../resourses/user/auth';
import { createUser } from '../../resourses/user/createUser';
import { initStore as initAppStore } from '../../store/initStore';

import { setTokenAction, deleteTokenAction, setAppLoadedAction, setAuthErrorAction, setRegisterErrorAction, setUserAction } from '.';
import { updateItemsAction as updateAptechkaItemsAction } from '../aptechka';
import { updateItemsAction as updateBuyListItemsAction } from '../buyList';

import type { Dispatch } from 'redux';
import type { User, UserAuth } from './types';
import type { ThunkActionDispatch } from 'redux-thunk';
import { storeValue } from '../../localStore/storeValue';
import { getValue } from '../../localStore/getValue';
import { removeValue } from '../../localStore/removeValue';
import { checkAuth } from '../../resourses/user/checkAuth';
import { State } from '../../types';

export const createUserResolver = (user: User) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    createUser(user)
      .then(() => auth(user))
      .then(({ user, token }) => {
        dispatch(initStore(token));
      })
      .catch((error) => {
        dispatch(setRegisterErrorAction(error));
      });
  };
};

export const authUserResolver = (user: UserAuth) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    auth(user)
      .then(({ user, token }) => {
        dispatch(initStore(token));
      })
      .catch((error) => {
        dispatch(setAuthErrorAction(error));
      });
  };
};

export const updateToken = (token: string) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    dispatch(setTokenAction(token));
    await storeValue('@token', token);
  };
};

export const initStore = (token: string) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    const { aptechka, buyList, core } = await initAppStore(token);

    batch(() => {
      dispatch(setUserAction(core.user as User));
      dispatch(updateAptechkaItemsAction(aptechka.items));
      dispatch(updateBuyListItemsAction(buyList.items));
      dispatch(updateToken(token));
      dispatch(setAppLoadedAction());
    });
  };
};

export const initApp = () => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    const data = await getValue('@token')
      .then((token) => token ? checkAuth(token) : null)
      .catch(() => null);

    if (data) {
      dispatch(initStore(data?.token));
    } else {
      dispatch(setAppLoadedAction());
    }
  };
};

export const logoutResolver = () => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const { core: { token } } = getState();

    if (!token) {
      return;
    }

    removeValue('@token')
      .then(() => dispatch(deleteTokenAction()))
      .catch(console.error);
  };
};
