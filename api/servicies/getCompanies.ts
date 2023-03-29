import axios from 'axios';
import { TAxiosErrorData, TAxiosErrorResponse } from '@/types/api';
import { API_URL } from '../apiUrl';
import headers from '../headers';

// getCompanies
const getCompanies = (
  inputValue?: string,
  errorCallback?: (error: TAxiosErrorData) => void,
  rowsToShow?: number,
) => {
  return (
    axios
      .get(`${API_URL}/companies`, {
        params: {
          filter: {
            where: {
              or: [
                { id: inputValue && { like: `%${inputValue}%` } },
                { name: inputValue && { like: `%${inputValue}%` } },
                { domain: inputValue && { like: `%${inputValue}%` } },
                { slug: inputValue && { like: `%${inputValue}%` } },
              ],
            },
            limit: rowsToShow ? rowsToShow : null,
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
        console.error(`getCompanies ERROR: ${error}`);

        // pass error data to callback
        errorCallback && errorCallback(errorData);
      })
  );
};

export default getCompanies;
