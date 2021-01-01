import type { CoreState } from '../reducers/core';
import type { FoodListState } from '../reducers/foodList';
import type { FrigeState } from '../reducers/frige';

export interface State {
  frige: FrigeState;
  core: CoreState;
  foodList: FoodListState;
}
