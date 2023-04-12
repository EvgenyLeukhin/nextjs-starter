import {
  TAppState,
  TAppActions,
  AppActionTypes,
  AppScreens,
} from './app.types';

const appInitialState: TAppState = {
  screen: AppScreens.LOGIN,
  alertMessage: '',
};

export const appReducer = (
  state: TAppState = appInitialState,
  action: TAppActions,
): TAppState => {
  switch (action.type) {
    // SET_SCREEN
    case AppActionTypes.SET_SCREEN:
      return { ...state, screen: action.payload };

    // SET_ALERT_MESSAGE
    case AppActionTypes.SET_ALERT_MESSAGE:
      return { ...state, alertMessage: action.payload };

    // DELETE_ALERT_MESSAGE
    case AppActionTypes.DELETE_ALERT_MESSAGE:
      return { ...state, alertMessage: '' };

    // DEFAULT
    default:
      return state;
  }
};