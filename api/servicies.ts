import axios from 'axios';
import { API_URL } from './apiUrl';
import { TLocationOption } from '@/types/common';

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

export const OMSK_LOCATION: TLocationOption = {
  alias_region: 'Russia',
  country: 'RU',
  geonameId: 1496153,
  id: 36819,
  lat: 54.99244,
  lon: 73.36859,
  lonlat: {
    lat: 54.99244,
    lon: 73.36859,
  },
  name: 'Omsk',
  population: 1129281,
  region: '54',
  slug: 'omsk-54-ru',
  timezone: 'Asia/Omsk',
  top: null,
  weight: 32,
};
