import axios from 'axios';
import { TAxiosErrorData, TAxiosErrorResponse, TPagination } from '@/types/api';
import { API_URL } from '../apiUrl';
import headers from '../headers';

// getCompanies
const getCompanies = (
  filterValue?: string,
  errorCallback?: (error: TAxiosErrorData) => void,
  pagiantion?: TPagination,
) => {
  // https://producthired.com/api/api/companies?filter={"where":{"name":{"like":"%Apple%"},"domain":{"like":"%.com%"},"slug":{"like":"%apple%"}},"limit":20,"skip":0,"order":"id+DESC"} - work

  // https://stage1.producthired.com/api/api/companies?filter[where][or][0][id][like]=%Apple%&filter[where][or][1][name][like]=%Apple%&filter[where][or][2][domain][like]=%Apple%&filter[where][or][3][slug][like]=%Apple%&filter[limit]=50

  return (
    axios
      .get(`${API_URL}/companies`, {
        params: {
          filter: {
            where: {
              or: [
                { id: filterValue && { like: `%${filterValue}%` } },
                { name: filterValue && { like: `%${filterValue}%` } },
                { domain: filterValue && { like: `%${filterValue}%` } },
                { slug: filterValue && { like: `%${filterValue}%` } },
              ],
            },
            limit: pagiantion?.rowsToShow ? pagiantion?.rowsToShow : null,
            skip: pagiantion?.rowsToShow
              ? (pagiantion?.paginationActivePage - 1) * pagiantion?.rowsToShow
              : null,
          },
        },

        headers,
      })

      // pass data field from response
      .then(res => res.data)

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
