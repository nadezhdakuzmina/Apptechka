import axios from 'axios';
import { RESOURCE_URL } from './constants';

import type { BuyListItem } from '../../reducers/buyList';

const METHOD_URL = `${RESOURCE_URL}/add`;

export const addItem = async (token: string, item: Omit<BuyListItem, 'id' | 'isChecked'>) => {
  return axios(METHOD_URL, {
    method: 'POST',
    data: {
      ...item,
      token
    },
  })
    .then((res) => Boolean(res.data));
};
