import { AxiosResponse } from 'axios';
import httpClient from '../httpClient';

export type TLoginValues = {
  username: string;
  password: string;
};

// THEN-CATCH variant
export const loginService = {
  // logIn
  logIn(loginValues: TLoginValues): Promise<AxiosResponse> {
    const { username, password } = loginValues;

    return (
      httpClient
        .post(`auth/login`, { username, password })

        // logIn error
        .catch(error => error)
    );
  },
};

// TRY-CATCH variant
// export const loginService2 = {
//   // logIn
//   async logIn(loginValues: TLoginValues): Promise<AxiosResponse> {
//     const { username, password } = loginValues;

//     try {
//       const { data } = await httpClient.post(`auth/login`, {
//         username,
//         password,
//       });

//       // этот return будет ждать пока не выполниться data
//       return data;
//     } catch (error) {
//       throw new Error(`${error}`);
//     }
//   },
// };
