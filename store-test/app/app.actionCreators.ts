import {
  AppActionTypes,
  AppScreens,
  TDeleteAlertMessageAction,
  TSetAlertMessageAction,
  TSetScreenAction,
} from './app.types';

// setScreen
export const setScreen = (payload: AppScreens): TSetScreenAction => ({
  type: AppActionTypes.SET_SCREEN,
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
