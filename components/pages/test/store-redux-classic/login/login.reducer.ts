import { TLoginState, TLoginActions, LoginActionTypes } from './login.types';

const loginInitialState: TLoginState = {
  isLoginLoading: false,
  isLoginSuccess: false,
  isLoginError: false,
  loginErrorMessage: '',
};

export const loginReducer = (
  state: TLoginState = loginInitialState,
  action: TLoginActions,
): TLoginState => {
  switch (action.type) {
    // LOGIN_LOADING
    case LoginActionTypes.LOGIN_LOADING:
      return { ...state, isLoginLoading: true };

    // LOGIN_SUCCESS
    case LoginActionTypes.LOGIN_SUCCESS:
      return { ...state, isLoginLoading: false, isLoginSuccess: true };

    // LOGIN_ERROR
    case LoginActionTypes.LOGIN_ERROR:
      return {
        ...state,
        isLoginLoading: false,
        isLoginError: true,
        loginErrorMessage: action.payload,
      };

    // DEFAULT
    default:
      return state;
  }
};
