import axios from 'axios';
import { TAxiosErrorData, TAxiosErrorResponse } from '@/types/api';
import { API_URL } from '../apiUrl';
import headers from '../headers';

// getUsers with filtering by name, surname or email
const getUsers = (
  filterValue?: string,
  errorCallback?: (error: TAxiosErrorData) => void,
  limit?: number,
) => {
  return (
    axios
      .get(`${API_URL}/users`, {
        params: {
          filter: {
            where: {
              or: [
                { id: filterValue && { like: `%${filterValue}%` } },
                { fullname: filterValue && { like: `%${filterValue}%` } },
                { email: filterValue && { like: `%${filterValue}%` } },
                // { name: filterValue && { like: `%${filterValue}%` } },
                // { surname: filterValue && { like: `%${filterValue}%` } },
              ],
            },
            limit: limit || null,
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

export default getUsers;
