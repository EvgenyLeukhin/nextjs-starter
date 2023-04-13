import { AxiosResponse } from 'axios';
import httpClient from '../httpClient';

export type TLoginValues = {
  username: string;
  password: string;
};

export const loginService = {
  // logIn
  logIn(loginValues: TLoginValues): Promise<AxiosResponse> {
    const { username, password } = loginValues;

    return (
      httpClient
        .post(`auth/login`, { username, password })

        // logIn error
        .catch(e => {
          throw new Error(e);
        })
    );
  },
};
