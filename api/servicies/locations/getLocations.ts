import axios from 'axios';
import { API_URL } from '@/api/apiUrl';
import headers from '@/api/headers';

const getLocations = (filterValue: string) => {
  return (
    axios
      .get(`${API_URL}/locations`, {
        params: {
          filter: {
            where: {
              // filter by name
              name: { like: `%${filterValue}%` },
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

export default getLocations;
