import axios from 'axios';
import { API_URL } from '../apiUrl';
import headers from '../headers';

const getLocations = (inputValue: string) => {
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

export default getLocations;
