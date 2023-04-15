import { Statuses } from '@/types/common';

// screens enum
export enum AppScreens {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  EDIT_DRUGSTORE = 'EDIT_DRUGSTORE',
  EDIT_MULTI_DRUGSTORE = 'EDIT_MULTI_DRUGSTORE',
  CUSTOM_STATUSES = 'CUSTOM_STATUSES',
}

// action types enum
export enum AppActionTypes {
  SET_SCREEN = 'SET_SCREEN',
  SAVE_USER_DATA = 'SAVE_USER_DATA',
  SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE',
  DELETE_ALERT_MESSAGE = 'DELETE_ALERT_MESSAGE',
}

export type TUserData = {
  token?: string;
  expiresIn?: number;
};

export type TAlertMessage = {
  message: string;
  type?: 'success' | 'info' | 'error';
};

// типизация стейта
export type TAppState = {
  screen: AppScreens;
  alertMessage: TAlertMessage;
  userData: TUserData;
};

// типизация экшенов
export type TSetScreenAction = {
  type: AppActionTypes.SET_SCREEN;
  payload: AppScreens;
};

export type TSaveUserDataAction = {
  type: AppActionTypes.SAVE_USER_DATA;
  payload: TUserData;
};

export type TSetAlertMessageAction = {
  type: AppActionTypes.SET_ALERT_MESSAGE;
  payload: TAlertMessage;
};

export type TDeleteAlertMessageAction = {
  type: AppActionTypes.DELETE_ALERT_MESSAGE;
};

export type TSetAlertMessageThunkAction = {
  type: AppActionTypes.DELETE_ALERT_MESSAGE;
};

// экспорт всех типов экшенов
export type TAppActions =
  | TSetScreenAction
  | TSaveUserDataAction
  | TSetAlertMessageAction
  | TDeleteAlertMessageAction
  | TSetAlertMessageThunkAction;
