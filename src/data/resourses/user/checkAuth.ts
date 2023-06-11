import axios from 'axios';
import { RESOURCE_URL } from './constants';

import type { DirtyUserCheckAuthData } from './types';

const METHOD_URL = `${RESOURCE_URL}/checkAuth`;

export const checkAuth = async (token: string) => {
  return axios(METHOD_URL, {
    method: 'POST',
    data: { token },
  })
    .then((res) => res.data)
    .then((data: DirtyUserCheckAuthData) => {
      if (data.message === 'success') {
        return {
          token,
          user: data.user,
        };
      }

      return null;
    })
    .catch(() => {
      throw 'Check auth: error';
    });;
};
