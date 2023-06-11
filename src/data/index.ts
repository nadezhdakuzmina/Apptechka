import { combineReducers } from 'redux';

import { aptechka } from './reducers/aptechka';
import { buyList } from './reducers/buyList';
import { core } from './reducers/core';

export const reducer = combineReducers({
  aptechka,
  core,
  buyList,
});
