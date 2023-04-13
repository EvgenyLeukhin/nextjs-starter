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
  SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE',
  DELETE_ALERT_MESSAGE = 'DELETE_ALERT_MESSAGE',
}

// типизация стейта
export type TAppState = {
  screen: AppScreens;
  alertMessage: string;
};

// типизация экшенов
export type TSetScreenAction = {
  type: AppActionTypes.SET_SCREEN;
  payload: AppScreens;
};

export type TSetAlertMessageAction = {
  type: AppActionTypes.SET_ALERT_MESSAGE;
  payload: string;
};

export type TDeleteAlertMessageAction = {
  type: AppActionTypes.DELETE_ALERT_MESSAGE;
};

// экспорт всех типов экшенов
export type TAppActions =
  | TSetScreenAction
  | TSetAlertMessageAction
  | TDeleteAlertMessageAction;
