import {
  AppActionTypes,
  AppScreens,
  TDeleteAlertMessageAction,
  TSaveUserDataAction,
  TSetAlertMessageAction,
  TSetScreenAction,
  TUserData,
} from './app.types';

// setScreen
export const setScreen = (payload: AppScreens): TSetScreenAction => ({
  type: AppActionTypes.SET_SCREEN,
  payload,
});

// saveUserData
export const saveUserData = (payload: TUserData): TSaveUserDataAction => ({
  type: AppActionTypes.SAVE_USER_DATA,
  payload,
});

// setAlertMessage
export const setAlertMessage = (payload: string): TSetAlertMessageAction => ({
  type: AppActionTypes.SET_ALERT_MESSAGE,
  payload,
});

// deleteAlertMessage
export const deleteAlertMessage = (): TDeleteAlertMessageAction => ({
  type: AppActionTypes.DELETE_ALERT_MESSAGE,
});
