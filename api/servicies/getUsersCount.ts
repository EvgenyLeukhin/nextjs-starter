import axios from 'axios';
import { TAxiosErrorData, TAxiosErrorResponse } from '@/types/api';
import { API_URL } from '../apiUrl';
import headers from '../headers';

// getUsersCount
const getUsersCount = (
  filterValue?: string,
  errorCallback?: (error: TAxiosErrorData) => void,
) => {
  return (
    axios
      .get(`${API_URL}/users/count`, {
        params: {
          where: {
            or: [
              { id: filterValue && { like: `%${filterValue}%` } },
              { name: filterValue && { like: `%${filterValue}%` } },
              { surname: filterValue && { like: `%${filterValue}%` } },
              { email: filterValue && { like: `%${filterValue}%` } },
              // { fullname: filterValue && { like: `%${filterValue}%` } },
            ],
          },
          count: true, // not nessasary
        },

        headers,
      })

      // pass data field from response
      .then(res => res.data.count)

      // error handling
      .catch((error: TAxiosErrorResponse) => {
        const errorData: TAxiosErrorData = error.response.data.error;

        // show error in console
        console.error(`getUsersCount ERROR: ${error}`);

        // pass error data to callback
        errorCallback && errorCallback(errorData);
      })
  );
};

export default getUsersCount;
