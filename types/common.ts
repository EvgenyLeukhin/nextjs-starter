export type TId = string;

export type TNavLink = {
  title: string;
  href: string;
};

export type TSocial = {
  title: string;
  link: string;
};

export enum Statuses {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export enum DeviceList {
  DESKTOP = 'DESKTOP',
  LAPTOP = 'LAPTOP',
  TABLET = 'TABLET',
  MOBILE = 'MOBILE',
}

export enum InputList {
  text = 'text',
  number = 'number',
  password = 'password',
  tel = 'tel',
  url = 'url',
  email = 'email',
  search = 'search',
  textarea = 'textarea',
}

export type TOption = {
  value: string;
  label: string;
};
