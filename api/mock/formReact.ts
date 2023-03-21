import { contryOptions, skillsOptions } from '@/consts/selectOptions';
import { TLocationOption, TOption, TRangeDualValue } from '@/types/common';

export const MOSCOW_LOCATION: TLocationOption = {
  alias_region: 'Russia',
  country: 'RU',
  geonameId: 524901,
  id: 35704,
  lat: 55.75222,
  lon: 37.61556,
  lonlat: {
    lat: 55.75222,
    lng: 37.61556,
  },
  name: 'Moscow',
  population: 10381222,
  region: '48',
  slug: 'moscow-48-ru',
  timezone: 'Europe/Moscow',
  top: null,
  weight: 1,
};

export const IRKUTSK_LOCATION: TLocationOption = {
  alias_region: 'Russia',
  country: 'RU',
  geonameId: 2023469,
  id: 37229,
  lat: 52.29778,
  lon: 104.29639,
  lonlat: {
    lat: 52.29778,
    lng: 104.29639,
  },
  name: 'Irkutsk',
  population: 586695,
  region: '20',
  slug: 'irkutsk-20-ru',
  timezone: 'Asia/Irkutsk',
  top: null,
  weight: null,
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
    lng: 73.36859,
  },
  name: 'Omsk',
  population: 1129281,
  region: '54',
  slug: 'omsk-54-ru',
  timezone: 'Asia/Omsk',
  top: null,
  weight: 32,
};

export type TFormReactValues = {
  rangeSingle: number;
  rangeDual: TRangeDualValue;
  contry3: TOption | null;
  skills3: TOption[];
  date3: string;
  date_range: (string | null)[];
  location: TLocationOption | null;
  locations?: TLocationOption[];
  comments: string;
};

// empty initial values
export const formReactEmptyValues: TFormReactValues = {
  rangeSingle: 0,
  rangeDual: {
    min: 0,
    max: 1000,
  },
  contry3: null,
  skills3: [],
  date3: '',
  date_range: [null, null],
  location: null,
  locations: [],
  comments: '',
};

// initial values from server
export const formReactServerValues: TFormReactValues = {
  rangeSingle: 100,
  rangeDual: {
    min: 100,
    max: 500,
  },
  contry3: contryOptions[0],
  skills3: [skillsOptions[0], skillsOptions[1]],
  date3: '2023-03-25T00:00:00.000Z',
  date_range: ['2023-03-26T00:00:00.000Z', '2023-04-15T00:00:00.000Z'],
  location: OMSK_LOCATION,
  locations: [OMSK_LOCATION],
  comments: '<p>Type something</p>',
};
