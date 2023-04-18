import { Dispatch } from 'redux';
import { USER_TOKEN_STORAGE_FIELD } from '../../consts';
import {
  AppActionTypes,
  AppScreens,
  TAlertMessage,
  TDeleteAlertMessageAction,
  TRemoveUserDataAction,
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

// removeUserdata
export const removeUserdata = (): TRemoveUserDataAction => {
  // clear localStorage
  localStorage.removeItem(USER_TOKEN_STORAGE_FIELD);

  // TODO - clear cookies

  return {
    type: AppActionTypes.REMOVE_USER_DATA,
  };
};

// setAlertMessage
export const setAlertMessage = (
  payload: TAlertMessage,
): TSetAlertMessageAction => ({
  type: AppActionTypes.SET_ALERT_MESSAGE,
  payload,
});

// deleteAlertMessage
export const deleteAlertMessage = (): TDeleteAlertMessageAction => ({
  type: AppActionTypes.DELETE_ALERT_MESSAGE,
});

// setAlertMessageThunk
export const setAlertMessageThunk = (alertMessage: TAlertMessage) => {
  return (
    dispatch: Dispatch<TSetAlertMessageAction | TDeleteAlertMessageAction>,
  ) => {
    dispatch(setAlertMessage(alertMessage));

    setTimeout(() => {
      dispatch(deleteAlertMessage());
    }, 4000);
  };
};
