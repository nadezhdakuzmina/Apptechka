import axios from 'axios';
import { RESOURCE_URL } from './constants';

import type { User } from '../../actions/core/types';

const METHOD_URL = `${RESOURCE_URL}/create`;

export const createUser = async (user: User) => {
  return axios(METHOD_URL, {
    method: 'POST',
    data: {
      ...user,
    },
  })
    .then((res) => {
      if (res.data.error) {
        throw new Error('failed to create user');
      }

      return res;
    })
    .catch(() => {
      throw 'Create user: error';
    });
};
