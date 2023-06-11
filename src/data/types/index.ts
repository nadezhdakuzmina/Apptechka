import type { CoreState } from '../reducers/core';
import type { BuyListState } from '../reducers/buyList';
import type { AptechkaState } from '../reducers/aptechka';

export interface State {
  aptechka: AptechkaState;
  core: CoreState;
  buyList: BuyListState;
}
