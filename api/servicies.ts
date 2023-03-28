import axios from 'axios';
import LOGIN_USER_TOKEN from './loginUserToken';
import { API_URL } from './apiUrl';
// import { TUser } from '@/types/user';
// import { TLocation } from '@/types/location';

export type TAxiosErrorData = {
  message: string;
  name: string;
  statusCode: number;
};

export type TAxiosErrorResponse = {
  code: string;
  message: string;
  name: string;
  response: {
    status: number;
    statusText: string;
    data: {
      error: TAxiosErrorData;
    };
  };
};

// insert user token to requests
const headers = {
  Authorization: LOGIN_USER_TOKEN,
};

// getLocations
export const getLocations = (inputValue: string) => {
  return (
    axios
      .get(`${API_URL}/locations`, {
        params: {
          filter: {
            where: {
              // filter by name
              name: { like: `%${inputValue}%` },
            },

            limit: 20,
          },
        },

        headers,
      })

      // give data field from response
      .then(res => res.data)

      // error handling
      .catch(error => console.error(`getLocations ERROR: ${error}`))
  );
};

// getUsers with filtering by name, surname or email
export const getUsers = (
  inputValue?: string,
  errorCallback?: (error: TAxiosErrorData) => void,
) => {
  return (
    axios
      .get(`${API_URL}/users`, {
        params: {
          filter: {
            where: {
              or: [
                { name: inputValue && { like: `%${inputValue}%` } },
                { surname: inputValue && { like: `%${inputValue}%` } },
                { email: inputValue && { like: `%${inputValue}%` } },
              ],
            },
            // limit: 20,
          },
        },

        headers,
      })

      // pass data field from response
      .then(res => {
        return res.data;
      })

      // error handling
      .catch((error: TAxiosErrorResponse) => {
        const errorData: TAxiosErrorData = error.response.data.error;

        // show error in console
        console.error(`getUsers ERROR: ${error}`);

        // pass error data to callback
        errorCallback && errorCallback(errorData);
      })
  );
};
