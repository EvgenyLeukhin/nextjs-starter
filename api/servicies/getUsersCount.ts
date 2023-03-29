import axios from 'axios';
import { TAxiosErrorData, TAxiosErrorResponse } from '@/types/api';
import { API_URL } from '../apiUrl';
import headers from '../headers';

// getUsersCount
const getUsersCount = (
  inputValue?: string,
  errorCallback?: (error: TAxiosErrorData) => void,
) => {
  return (
    axios
      .get(`${API_URL}/users/count`, {
        params: {
          // doesn't work :(((
          filter: {
            where: {
              or: [
                { name: inputValue && { like: `%${inputValue}%` } },
                { surname: inputValue && { like: `%${inputValue}%` } },
                { email: inputValue && { like: `%${inputValue}%` } },
              ],
            },
          },
          count: true,
        },

        headers,
      })

      // pass data field from response
      .then(res => {
        return res.data.count;
      })

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
