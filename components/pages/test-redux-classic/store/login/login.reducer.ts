import { TLoginState, TLoginActions, LoginActionTypes } from './login.types';

const loginInitialState: TLoginState = {
  isLoginLoading: false,
  isLoginSuccess: false,
  isLoginError: false,
};

export const loginReducer = (
  state: TLoginState = loginInitialState,
  action: TLoginActions,
): TLoginState => {
  switch (action.type) {
    // LOGIN_LOADING
    case LoginActionTypes.LOGIN_LOADING:
      return { ...state, isLoginLoading: action.payload };

    // LOGIN_SUCCESS
    case LoginActionTypes.LOGIN_SUCCESS:
      return { ...state, isLoginSuccess: true };

    // LOGIN_ERROR
    case LoginActionTypes.LOGIN_ERROR:
      return { ...state, isLoginError: true };

    // LOGIN_RESET
    case LoginActionTypes.LOGIN_RESET:
      return loginInitialState;

    // DEFAULT
    default:
      return state;
  }
};
