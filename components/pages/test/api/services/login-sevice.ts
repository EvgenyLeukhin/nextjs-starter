import httpClient from '../httpClient';

export type TLoginValues = {
  username: string;
  password: string;
};

export const loginService = {
  // logIn
  logIn(loginValues: TLoginValues) {
    const { username, password } = loginValues;

    return (
      httpClient
        .post(`auth/login`, {
          data: {
            username,
            password,
          },
        })

        // logIn error
        .catch(e => {
          throw new Error(e);
        })
    );
  },
};
