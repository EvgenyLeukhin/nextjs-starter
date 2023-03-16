export type TFormNativeValues = {
  name: string;
  password: string;
  passwordRepeat: string;
  contry: string;
  skills: string[];
  email: string;
  phone: string;
  website: string;
  comment: string;
  date: string;
  file: string;
  counter: number;
  gender: '' | 'male' | 'female' | 'other';
  agree: boolean;
};

// empty initial values
export const formNativeEmptyValues: TFormNativeValues = {
  name: '',
  password: '',
  passwordRepeat: '',
  contry: '',
  skills: [],
  email: '',
  phone: '',
  website: '',
  date: '',
  comment: '',
  file: '',
  counter: 0,
  gender: '',
  agree: false,
};

// initial values from server
export const formNativeServerValues: TFormNativeValues = {
  name: 'John Smith',
  password: '123123123',
  passwordRepeat: '123123123',
  contry: 'ru',
  skills: ['run', 'jump'],
  email: 'some-mail@mail.com',
  phone: '+7(888)888-88-88',
  website: 'http://some-site.com',
  date: '2023-03-16',
  comment: 'Bla-bla-bla',
  file: '',
  counter: 5,
  gender: 'female',
  agree: true,
};
