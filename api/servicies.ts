import axios from 'axios';
import { API_URL } from './apiUrl';

export const getLocations = (inputValue: string) => {
  // get request
  return (
    axios
      .get(`${API_URL}/locations`, {
        // filter params
        params: {
          filter: {
            where: {
              name: { like: `%${inputValue}%` },
            },

            // limit items
            limit: 20,
          },
        },
      })

      // give data field
      .then(res => res.data)
  );
};
