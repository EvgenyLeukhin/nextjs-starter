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
  label: string;
  value: string;
};

export type TFile = {
  lastModified: number;
  lastModifiedDate: number;
  name: string;
  size: number;
  type: string;
};

export type TAccordionOption = {
  title: string;
  content: string;
};

export type TTabsContent = {
  tab: string;
  content: string;
};

export type TSourceMedia = {
  link: string;
  type: string;
};

export type TMedia = {
  posterTitle?: string;
  poster?: string;
  src: TSourceMedia[];
};

export type TRangeDualValue = {
  min: number;
  max: number;
};

export type TAsyncOption = Record<string, never>;
