import { USER_TOKEN_STORAGE_FIELD } from '../../consts';
import {
  TAppState,
  TAppActions,
  AppActionTypes,
  AppScreens,
} from './app.types';

const appInitialState: TAppState = {
  screen: AppScreens.LOGIN,
  alertMessage: {
    message: '',
    type: undefined,
  },
  userData: {
    token: undefined,
    expiresIn: undefined,
  },
};

// user token from storage
const SAVED_USER_TOKEN = localStorage.getItem(USER_TOKEN_STORAGE_FIELD);

export const appReducer = (
  state: TAppState = appInitialState,
  action: TAppActions,
): TAppState => {
  switch (action.type) {
    // SET_SCREEN
    case AppActionTypes.SET_SCREEN:
      return { ...state, screen: action.payload };

    // SAVE_USER_DATA
    case AppActionTypes.SAVE_USER_DATA:
      return { ...state, userData: action.payload };

    // REMOVE_USER_DATA
    case AppActionTypes.REMOVE_USER_DATA:
      return {
        ...state,
        userData: {
          token: SAVED_USER_TOKEN || undefined,
          expiresIn: undefined,
        },
      };

    // SET_ALERT_MESSAGE
    case AppActionTypes.SET_ALERT_MESSAGE:
      return { ...state, alertMessage: action.payload };

    // DELETE_ALERT_MESSAGE
    case AppActionTypes.DELETE_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: { message: '', type: undefined },
      };

    // DEFAULT
    default:
      return state;
  }
};
