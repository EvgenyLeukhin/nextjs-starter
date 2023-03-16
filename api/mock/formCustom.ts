import { TFile } from '@/types/common';

export type TFormCustomValues = {
  name2: string;
  password2: string;
  passwordRepeat2: string;
  contry2: string;
  skills2: string[];
  email2: string;
  phone2: string;
  website2: string;
  date2: string;
  comment2: string;
  file2?: TFile;
  counter2: number;
  gender2: '' | 'male' | 'female' | 'other';
  agree2: boolean;
};

// empty initial values
export const formCustomEmptyValues: TFormCustomValues = {
  name2: '',
  password2: '',
  passwordRepeat2: '',
  contry2: '',
  skills2: [],
  email2: '',
  phone2: '',
  website2: '',
  date2: '',
  comment2: '',
  file2: undefined,
  counter2: 0,
  gender2: '',
  agree2: false,
};

// initial values from server
export const formCustomServerValues: TFormCustomValues = {
  name2: 'John Smith',
  password2: '123123123',
  passwordRepeat2: '123123123',
  contry2: 'ru',
  skills2: ['walk', 'run', 'jump'],
  email2: 'some-mail@mail.com',
  phone2: '+7(888)888-88-88',
  website2: 'http://some-site.com',
  date2: '2023-03-16',
  comment2: 'Bla-bla-bla',
  file2: undefined,
  counter2: 8,
  gender2: 'male',
  agree2: true,
};

export const MAX_FILE_SIZE = 5000 * 1024; // 5 MB

export const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/svg',
  'image/svg+xml',
  'application/pdf',
];
