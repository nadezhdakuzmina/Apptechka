
import axios from 'axios';
import { RESOURCE_URL } from './constants';

import type { DirtyUserAuthData } from './types';
import type { UserAuth } from '../../actions/core/types';

const METHOD_URL = `${RESOURCE_URL}/auth`;

export const auth = async (user: UserAuth) => {
  return axios(METHOD_URL, {
    method: 'POST',
    data: {
      ...user
    },
  })
    .then((res) => res.data as DirtyUserAuthData)
    .catch((res) => {
      console.log('resData:', res.data);
      throw 'Auth: error';
    });
};
