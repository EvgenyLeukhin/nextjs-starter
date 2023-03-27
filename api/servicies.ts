import axios from 'axios';
import LOGIN_USER_TOKEN from './loginUserToken';
import { API_URL } from './apiUrl';
// import { TUser } from '@/types/user';
// import { TLocation } from '@/types/location';

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
export const getUsers = (inputValue?: string, errorCallback?: () => void) => {
  return (
    axios
      .get(`${API_URL}/users2`, {
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

      // give data field from response
      .then(res => {
        return res.data;
      })

      // error handling
      .catch(error => {
        console.error(`getUsers ERROR: ${error}`);
        errorCallback && errorCallback();
      })
  );
};
