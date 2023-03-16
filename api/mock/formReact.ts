import { contryOptions, skillsOptions } from '@/consts/selectOptions';
import { TLocationOption, TOption, TRangeDualValue } from '@/types/common';
import { todayDate } from './date';

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

export type TFormReactValues = {
  rangeSingle: number;
  rangeDual: TRangeDualValue;
  contry3: TOption | null;
  skills3: TOption[];
  date3: Date | null;
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
  date3: null,
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
  date3: todayDate,
  location: OMSK_LOCATION,
  locations: [OMSK_LOCATION],
  comments: '<p>Type something</p>',
};
