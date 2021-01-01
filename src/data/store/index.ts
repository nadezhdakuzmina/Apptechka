import { configureStore } from '@reduxjs/toolkit';

import { reducer } from '../index';
import thunk from 'redux-thunk';

import type { Store } from 'redux';

export const createStore = (): Store => configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
